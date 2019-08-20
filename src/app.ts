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

const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return pizza.name;
    }
},
    toppings = ['pepperoni'],
    order = { pizza, toppings };

console.log(order);

console.log(pizza.getName());


function createOrder(pizza: any, toppings: any) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));