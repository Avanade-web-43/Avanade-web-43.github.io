const menu = ['Produtos', 'Ofertas', 'Carrinho', 'Login'];



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