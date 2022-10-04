const cep = document.querySelector("#cep");

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-","");

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
        
    // https://viacep.com.br/ws/01001000/json/
    //fetch vai gerar uma promise
    //se der certo, ele vai retornar o resultado. Se der errado ele vai retornar um erro
    //se der certo, nós resolvemos a promise. Se der errado, nós rejeitamos a promise
    fetch(`https://viacep.com.br/ws/${search}/json`, options)
        .then( response => {
            response.json()
            .then( result => console.log(result));
        })
        .catch((e) => console.log(e.message));
});