const cep = document.querySelector("#cep");

const showData = (result) => {
    for(const campo in result) {
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}

cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace("-","");
    if(search < 8 || isNaN(search)) {
        alert("CEP inválido");
        cep.value = "";
        return;
    }
    const options = {
        method: 'GET',
        mode: 'cors', // Cross Origin Resource Sharing
        cache: 'default'
    }
        
    // https://viacep.com.br/ws/01001000/json/
    //fetch vai gerar uma promise
    //se der certo, ele vai retornar o resultado. Se der errado ele vai retornar um erro
    //se der certo, nós resolvemos a promise. Se der errado, nós rejeitamos a promise
    //uma promise é uma intenção. Pode dar certo ou errado.
    const resultado = await fetch(`https://viacep.com.br/ws/${search}/json`, options);
    const json = await resultado.json();
    showData(json);
});

// async/await -> onde o await está o async tem que estar

// https://dummyjson.com/products
