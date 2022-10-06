// acessar https://dummyjson.com/products via fetch
// listar produtos
// colocar no console.log 10 produtos
// na tela: título e descrição

const showProducts = async(e) => {
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    const produtos = await fetch(`https://dummyjson.com/products`, options);
    const json = await produtos.json();
    
    for(i = 0; i < 10; i++) {

        console.log(json.products[i]);
        

    }

    
}

showProducts();
