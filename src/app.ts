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

// function sumAll(message: string, ...arr: number[]) {
//     console.log(arguments);
//     console.log(message);
//     return arr.reduce((prev, next) => prev + next);
// }
// console.log(sumAll('Yo!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// const toppings = ['bacon', 'chili'];

// const newToppings = ['pepperoni'];

// const allToppings = ['pineapple', ...toppings, ...newToppings, 'mushroom'];

// console.log(toppings);
// console.log(newToppings);
// console.log(allToppings);

// const pizza = {
//     name: 'Pepperoni'
// };

// const toppings = ['pepperoni'];

// const order = {
//     ...pizza,
//     toppings
// }

// console.log(order)

// console.log({ ...order })

// console.log(Object.assign({}, pizza, { toppings }));

// const spreadOrder = { ...pizza, toppings };

// console.log(spreadOrder);

// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni']
// }

// function order({ name: pizzaName, toppings: pizzaToppings }: any) {
//     console.log(pizzaName, pizzaToppings);
//     return { pizzaName, pizzaToppings }
// }

// const { pizzaName, pizzaToppings } = order(pizza);

// console.log(pizzaName, pizzaToppings);

// const toppings = ['pepperoni', 'bacon', 'chili'];

// const [first, second, third] = toppings;

// console.log(first, second, third);

// function logToppings([first, second, third]: any) {
//     console.log(first, second, third);
// }

// console.log(toppings);


// const pizzaCost: number = 10,
//     pizzaToppings: number = 2;

// function calculatePrice(cost: number, toppings: number): number {
//     return cost + 1.5 * toppings;
// }

// console.log(`Pizza cost: ${calculatePrice(pizzaCost, pizzaToppings)}`);

// const coupon = 'pizza25';

// function normalizeCoupon(code: string): string {
//     return code.toUpperCase();
// }
// console.log(normalizeCoupon('hello'));


// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);

// let coupon: any;

// coupon = 25;

// coupon = 'string';

// coupon = false;

// const pizzas: number = 5;

// function offerDiscount(orders: number): boolean {
//     return orders >= 3;
// }

// if (offerDiscount(pizzas)) {
//     console.log(`You're entitled to a discount!`)
// } else {
//     console.log(`Order more pizzas for discount.`);
// }

// let implicitCoupon = 'pizza25',
//     explicitCoupon: string = 'pizza25';

// console.log(implicitCoupon, explicitCoupon)

// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string): void {
//     selectedTopping = topping;
// }

// console.log(selectedTopping);

// selectTopping('bacon');

// console.log(selectedTopping);

function orderError(error: string): never {
    throw new Error(error);
}

orderError('Something went wrong!');