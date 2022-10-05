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
    
    const produtos = await fetch(`https://dummyjson.com/products?limit=10`, options);
    const json = await produtos.json();
    
        console.log(json);

    
}

showProducts();
