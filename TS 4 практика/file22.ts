abstract class Product {
    private _name: string;
    private _price: number;
    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get price(): number {
        return this._price;
    }
    set price(price: number) {
        this._price = price;
    }
    log(): void {
        console.log(`Name: ${this._name}; Price: ${this._price}`);
    }
}
abstract class OrderItem {
    private _product: Product;
    private _quantity: number;
    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
    }
    get product(): Product {
        return this._product;
    }
    set product(product: Product) {
        this._product = product;
    }
    get quantity(): number {
        return this._quantity;
    }
    set quantity(quantity: number) {
        this._quantity = quantity;
    }
    log(): void {
        this._product.log();
        console.log(`Quantity: ${this._quantity}`);
    }
    abstract getCost(): number;
    compare(other: OrderItem): number {
        if (this.getCost() < other.getCost()) {
            return 1;
        } else if (this.getCost() > other.getCost()) {
            return -1;
        } else {
            return 0;
        }
    }
}
class DiscountedOrderItem extends OrderItem {
    private _discount: number;
    constructor(product: Product, quantity: number, discount: number) {
        super(product, quantity);
        this._discount = discount;
    }
    getCost(): number {
        const price = this.product.price;
        const discountedPrice = price - this._discount;
        return discountedPrice * this.quantity;
    }
}
class QuantityDiscountOrderItem extends OrderItem {
    private _discount: number;
    private _requiredQuantity: number;
    constructor(
        product: Product,
        quantity: number,
        discount: number,
        requiredQuantity: number
    ) {
        super(product, quantity);
        this._discount = discount;
        this._requiredQuantity = requiredQuantity;
    }
    getCost(): number {
        let cost = 0;
        if (this.quantity >= this._requiredQuantity) {
            const price = this.product.price;
            const discountedPrice = price * (1 - this._discount / 100);
            cost = discountedPrice * this.quantity;
        } else {
            cost = this.product.price * this.quantity;
        }
        return cost;
    }
}
class TransportationCostOrderItem extends OrderItem {
    private _transportationCost: number;
    constructor(product: Product, quantity: number, transportationCost: number) {
        super(product, quantity);
        this._transportationCost = transportationCost;
    }
    getCost(): number {
        const price = this.product.price;
        const cost = price * this.quantity;
        const transportationCost = this._transportationCost * this.quantity;
        return cost + transportationCost;
    }
}
const products: Product[] = [
    new Product('Product 1', 100),
    new Product('Product 2', 200),
    new Product('Product 3', 300),
];
const orders: OrderItem[] = [
    new DiscountedOrderItem(products[0], 2, 50),
    new DiscountedOrderItem(products[1], 3, 70),
    new QuantityDiscountOrderItem(products[2], 5, 10, 3),
    new QuantityDiscountOrderItem(products[0], 7, 20, 5),
    new TransportationCostOrderItem(products[1], 4, 10),
    new TransportationCostOrderItem(products[2], 6, 20),
];
console.log('Orders before sorting:');
orders.forEach(order => {
    order.log();
    console.log('---------------');
});
orders.sort((a, b) => a.compare(b));
console.log('\nOrders after sorting:');
orders.forEach(order => {
    order.log();
    console.log('---------------');
});