// const pizzas = [
//     { name: 'Pepperoni', toppings: ['pepperoni'] }
// ];

// const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

// console.log(mappedPizzas);

// const pizza = {
//     name: 'Balzing inferno',
//     getName: function () {
//         console.log(this.name);
//     },
//     getName2: () => pizza.name
// }

// pizza.getName()
// console.log(pizza.getName2())

// function multiply(a: number, b = 25) {
//     return a * b;
// }


// console.log(multiply(5));
// console.log(multiply(5, 35));

// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     getName() {
//         return pizza.name;
//     }
// },
//     toppings = ['pepperoni'],
//     order = { pizza, toppings };

// console.log(order);

// console.log(pizza.getName());


// function createOrder(pizza: any, toppings: any) {
//     return { pizza, toppings };
// }

// console.log(createOrder(pizza, toppings));

// function sumAll(arr: number[]) {
//     return arr.reduce((prev, next) => prev + next);
// }
// console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumAll(message: string, ...arr: number[]) {
    console.log(arguments);
    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}
console.log(sumAll('Yo!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
