type Person = {//Человек - имя, рожд
    name: string,
    age: number,
}
type Bridge = {//Мост - город, построили
    city: string,
    age: number,
}
type Wine = {//Вино - производитель, урожай, оценка
    manufacturer: string,
    age: number,
    grade: string,
}
function getOldestItem<T>(items: T[]): T {//getOldestItem может обрабатывать массивы любого типа
    return items.sort((a, b) => b.age - a.age)[0];
}
const persons: Person[] = [
    { name: "Геральт", age: 100 },
    { name: "Цири", age: 30 },
    { name: "Лютик", age: 40 }
];
const oldestPerson = getOldestItem(persons);
console.log("Самый пенсионер это...:", oldestPerson);
const bridges: Bridge[] = [
    { city: "Самара", age: 500 },
    { city: "Екат", age: 383 },
    { city: "Магадан", age: 9 }
];
const oldestBridge = getOldestItem(bridges);
console.log("Скоро рухнет мост - :", oldestBridge);
const wines: Wine[] = [
    { manufacturer: "Вино 1", age: 10, grade: "A" },
    { manufacturer: "Винишко 2", age: 5, grade: "B" },
    { manufacturer: "Винцо 3", age: 20, grade: "C" }
];
const oldestWine = getOldestItem(wines);
console.log("Самое старое вино:", oldestWine);