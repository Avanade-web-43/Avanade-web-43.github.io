const aereasNacional = ["LATAM", "AZUL", "GOL"];
const airCompanies = [...aereasNacional, "DELTA", "UNITED AIRLINES", "EMIRATES"];

//desestruturação
const [latam, azul, gol, ...internacionais] = airCompanies;
console.log(azul);

console.log(airCompanies);

const user = {
    name: "Anna Karenina",
    email: "teste@teste.com",
    password: "Groselha"
}

// destructuring assignment
const {password, ...data} = user;
console.log("Oh meu Deus!", data);