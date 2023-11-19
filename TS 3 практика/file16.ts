type Cat = {
    name: string,
    meow: () => string,
}
type Dog = {
    name: string,
    bark: () => string,
}
const cat: Cat = {
    name: 'Pushok',
    meow: () => 'meow!'
};
const dog: Dog = {
    name: 'Bobik',
    bark: () => 'bark!',
}
/*
Expected:
    whatDoesThePetSay(cat) -> 'meow'
    whatDoesThePetSay(dog) -> 'bark'
*/
//////////
function whatDoesThePetSay(pet: Dog | Cat): string {
    if ('meow' in pet) {
        return pet.meow();
    } else if ('bark' in pet) {
        return pet.bark();
    } else {
        return 'Nothing :(';
    }
}//Обычный тайпгард
////////////
function isCat(pet: Dog | Cat): pet is Cat {
    return 'meow' in pet;
}
function whatDoesThePetSay(pet: Dog | Cat): string {
    if (isCat(pet)) {
        return pet.meow();
    } else {
        return pet.bark();
    }
}
export { Cat, Dog, cat, dog, whatDoesThePetSay };
    //пользовательский тайпгард
///////////////
function whatDoesThePetSay(pet: Dog | Cat): string {
    if ('meow' in pet) {
        return pet.meow();
    } else {
        return pet.bark();
    }
}
export { Cat, Dog, cat, dog, whatDoesThePetSay };
    //С использованием тайпгардов через оператор in
///
    //Различные типы тайпгардов в TypeScript имеют свои преимущества и подходят для различных сценариев использования
    //Обычные - просты в использовании, читаемы и понятны. Широкая поддержка
    //
    //Пользовательские - могут быть настроены для проверки любых пользовательских условий, могут быть использованы для проверки сложных иерархий типов
    //
    //С использованием оператора in  - использование оператора in позволяет компактно проверять наличие свойства в объекте, лаконичны