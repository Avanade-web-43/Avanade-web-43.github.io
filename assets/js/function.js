const resultado = document.querySelector("#resultado");

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

myFunc.showArguments("BMW", "AUDI", "MERCEDES", "BENTLEY", "FERRARI", "LAMBORGHINI");

//arrow function não acessa 'arguments'
// let myFunc2 = {
//     showArguments2: () => {
//         resultado.innerHTML = arguments;
//         console.log(arguments);
//     },
// };
// myFunc2.showArguments2("BMW", "AUDI", "MERCEDES", "BENTLEY", "FERRARI", "LAMBORGHINI");
// Uncaught ReferenceError: arguments is not defined at Object.showArguments2

let user = {
    name: 'Pilar',
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function`); //this não existe na arrow function
    },
    usandoNominal() {
        console.log(`Meu nome é ${this.name}, com Nominal Function`);
    },
};

user.usandoArrow();
user.usandoNominal();

let soma = (a, b) => {
    console.log(a + b);
};

let soma2 = function(a, b){
    console.log(a + b);
};

// new soma(50, 20); //não aceita new
new soma2(50, 20);