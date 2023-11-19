type User = {
    name: string;
    age: number;
    occupation: string;
};
type Admin = {
    name: string;
    age: number;
    role: string;
};
export type Person = User | Admin;
export const persons: Person[] = [
    {
        name: 'Roman Abramov',
        age: 25,
        occupation: 'Millionaire'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Andrey Fox',
        age: 23,
        occupation: 'Developer'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
export function logPerson(person: Person) {
    console.log(` - ${person.name}, ${person.age}`);

    if ('role' in person) {
        console.log(`   Role: ${person.role}`);
    }
}
persons.forEach(logPerson);