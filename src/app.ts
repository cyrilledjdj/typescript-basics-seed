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

// function orderError(error: string): never {
//     throw new Error(error);
// }

// orderError('Something went wrong!');

// let coupon: string | null | undefined = 'pizza25';

// function removeCoupon(): void {
//     coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon)

// let pizzaSize: number = 1;

// function selectSize(size: 1 | 2 | 3): void {
//     pizzaSize = size;
// }

// selectSize(2);

// console.log(`Pizza size: ${pizzaSize}`)

// function sumOrder(price: number, quantity: number): number {
//     return price * quantity;
// }

// let sumOrder2: Function = (price: number, quantity: number) => {
//     return price * quantity;
// }

// const sumOrder3 = (price: number, quantity: number): number => price * quantity;

// let sumOrder4: (price: number, quantity: number) => number =
//     (price, quantity) => price * quantity;

// console.log(sumOrder(25, 2))
// console.log(sumOrder2(25, 2))
// console.log(sumOrder3(25, 2))
// console.log(sumOrder4(25, 2))

// const sumOrder = (price: number, quantity?: number): number => price * (quantity || 1);

// console.log('Total sum:', sumOrder(25))
// console.log('Total sum:', sumOrder(25, 4))


// let sumOrder: (price: number, quantity?: number) => number =
//     (price, quantity = 1) => price * quantity;

// console.log('Total sum:', sumOrder(25))
// console.log('Total sum:', sumOrder(25, 4))

// let pizza: { name: string; price: number; getName(): string } = {
//     name: 'Plain old pepperoni',
//     price: 20,
//     getName() {
//         return this.name;
//     }
// };

// console.log(pizza.getName());

// let sizes: number[];

// sizes = [1, 2, 3];


// console.log(sizes)

// let toppings: Array<string>;

// toppings = ['pepperoni', 'tomato', 'bacon'];

// console.log(toppings)

// let pizza: [string, number, boolean];

// pizza = ['Pepperoni', 20, false];

// console.log(pizza)
// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//     pizzaSize = x;
// }

// console.log(pizzaSize)

// selectSize('large');

// console.log(pizzaSize)
// selectSize('medium');

// console.log(pizzaSize)

// type Pizza = { name: string; toppings: number }

// const pizza: Pizza = { name: 'Blazing Inferno', toppings: 6 };
// console.log(pizza);
// const serialized = JSON.stringify(pizza);
// console.log(serialized);

// function getNameFromJSON(obj: string): string {
//     // return (JSON.parse(obj) as Pizza).name;
//     return (<Pizza>JSON.parse(obj)).name
// }

// console.log(getNameFromJSON(serialized))

// interface Sizes {
//     sizes: string[],
// }
// interface Pizza extends Sizes {
//     name: string,
//     toppings?: number;
//     getAvailableSizes: () => string[],
//     [key: number]: string,
//     [key: string]: any,
// }


// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//     return {
//         name, sizes, getAvailableSizes() {
//             return this.sizes;
//         }
//     }
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

// pizza.toppings = 1;
// pizza['hello'] = 3;
// pizza[3] = 'fine';

// console.log(pizza.getAvailableSizes());
// console.log(pizza);

abstract class Sizes {
    constructor(protected sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes(): string[] {
        return this.sizes;
    }

    static get hello() {
        return 'Hello';
    }
}
// new Sizes(['small'])
class Pizza extends Sizes {
    toppings: string[] = [];
    constructor(public readonly name: string, sizes: string[]) {
        super(sizes);
    }
    addTopping(topping: string): void {
        this.toppings.push(topping)
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');
// console.log(pizza.sizes)
console.log(pizza.availableSizes)
pizza.updateSizes(['large'])
console.log(pizza.availableSizes)