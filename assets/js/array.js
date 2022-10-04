const carros = document.querySelector("#carros");
// document.getElementById - sempre existiu.
const carrosArray = [
  "Chevrolet",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Kia",
  "Mazda",
  "Mercedes-Benz",
  "Nissan",
  "Peugeot",
  "Renault",
  "Toyota",
  "Volkswagen",
];

carrosArray.forEach((value, key) => {
  carros.innerHTML += `<option value="${key}">${value}</option>`;
});

carrosArray.forEach((value) => console.log(value));

const importados = [
  ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
  ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
  ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
];

importados.forEach((marcas) => {
  const select = document.createElement("select");
  select.setAttribute("id", marcas[0]);
  marcas.forEach((carros, key) => {
    select.innerHTML += `<option value="${carros}">${carros}</option>`;
  });
  document.querySelector("body").appendChild(select);
});

const aereas = [
  "Latam",
  "Gol",
  "Azul",
  "Delta",
  "American Airlines",
  "Emirates",
  "Qatar",
];

const comboAereas = document.createElement("select");
comboAereas.setAttribute("id", "aereas");

aereas.forEach((aerea, key) => {
  comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
});
//adicione este combo como um filho no body, no final de todas as tags.
document.querySelector("body").appendChild(comboAereas);
const menu = [
  "Todos",
  "Venda na Amazon",
  "Ofertas do Dia",
  "Prime",
  "Eletrônicos",
  "Ideias para Presente",
  "Brinquedos e Jogos",
  "Computadores",
  "eBooks Kindle",
  "Games",
  "Ferramentas e Construção",
  "Livros",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("class", "menu-site");

menu.forEach((value, index) => {
  ulMenu.innerHTML += `<li>${value}</li>`;
});

document.querySelector("nav").appendChild(ulMenu);
///////////////////////////////////////////

const newCarros = ["Corsa", "Uno", "Gol", "Palio", "Kombi", "208"];

//adicionar um elemento no final do array. Push
newCarros.push("Celta", "Monza");

//adicionar um elemento no início do array. Unshift
newCarros.unshift("Fusca");

//remover um elemento no final do array. Pop
const ultimo = newCarros.pop();

//remover um elemento do início do array. Shift
const primeiro = newCarros.shift();

//split
//join
const nomeCompleto = "Pilar Leminski Veiga";
const nomeArray = nomeCompleto.split(' ');
const americanName = [nomeArray.at(-1), nomeArray[0]].join(', ');

//splice
const removeIntervalo = newCarros.splice(0, 3);

// console.log(removeIntervalo, "Remove intervalo, splice");
// console.log(americanName, "Formato Americano");
// console.log(newCarros, "NewCarros");


// Programação funcional
//slice - gera um novo array
const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];
const primeiras = frutas.slice(1,3); //copia o array não inclui o último
console.log(frutas, "slice - o array original não muda");
console.log(primeiras, "slice");
//--------------------------------------------------------------------
const filtro = (item) => {
    return item === "Pera" || item === "Maçã";
};
//map
const frutasMap = frutas.map(filtro); //map - retorna um novo array com os itens filtrados. Do início ao fim do array.
console.log(frutasMap);

//filter
const frutasFilter = frutas.filter(filtro); // filter - retona um novo array filtrando do início ao fim
console.log(frutasFilter);

//find
const frutasFind = frutas.find(filtro); //find - retorna a primeira ocorrência
console.log(frutasFind);

/*
Const ages = []
3 funções
map - classifique
filter - retorne somente os adultos
find - encontre o primeiro idoso
*/

const ages = [1,5,8,10,33,35,40,45,52,60,87,95];
console.log(ages);
const classifica = (item) => {
    if (item <= 2){
        return "bebê";
    } else if (item <= 12){
        return "criança";
    } else if (item <= 18){
        return "adolescente";
    } else if (item <= 60){
        return "adulto";
    } else {
        return "idoso";
    }
}

const mapAge = ages.map(classifica);
console.log(mapAge);

const ageFilter = ages.filter((age) => age >= 18 && age <= 60);
console.log(ageFilter, "adulto");

const ageFind = ages.find((age) => age > 60);
console.log(ageFind, "primeiro idoso");


