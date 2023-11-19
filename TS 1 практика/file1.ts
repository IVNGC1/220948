const actor = {
    name: 'Michael',
    firstName: 'Ivanov',
    country: 'Russia',
    city: 'Machachkala',
    hasOskar: false,
    filmsCount: 10,
    age: 14, // изменено на числовой тип
    languages: ['RU-ru', 'EN-us', 'TR-tr'],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
    return actor.age + 20;
}
console.log(howOldWillBeActorAfterTwentyYears(actor)); // 34
//TypeScript помогает избежать ошибок, предоставляя статическую типизацию
//тип переменной age нужно поменть на числовой, чтобы выполнилась математическая операция сложения, а не слияния