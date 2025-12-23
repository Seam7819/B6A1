

function formatValue(value: number | string | boolean): number | string | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}




function getLength(value: string | any[]): number {
    if (Array.isArray(value)) {
        return value.length;
    } else if (typeof value === 'string') {
        return value.length;
    }
    {
        return 0;
    }
}



class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);





interface RatedItem {
    title: string;
    rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter(item => item.rating >= 4);
}

const books: RatedItem[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter((user) => user.isActive === true);
}

const users: User[] = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);



function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const result: T[] = [];

    function existsInResult(value: T): boolean {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!existsInResult(arr1[i])) {
            result[result.length] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!existsInResult(arr2[i])) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];



interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((accumulator, product) => {
        const baseTotal = product.price * product.quantity;
        const discountAmount = product.discount ? (baseTotal * product.discount) / 100 : 0;
        return accumulator + (baseTotal - discountAmount);
    }, 0);
}
const products: Product[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

