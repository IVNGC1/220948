// Первая часть кода:

function someFunc(data) {
    return data.reduce((acc, current) => {
        acc + Number(current.age > 18 && current.isMale), 0);
};
}
//Функция someFunc принимает массив данных data и выполняет операцию reduce, которая сводит массив к одному значению
//В данном случае, функция считает количество объектов в массиве, у которых возраст(age) больше 18 и пол(isMale) равен true

// Вторая часть кода: 

type Human = {
    name: string,
    age: number,
    gender: 'male' | 'female',
}
function someFunc(data: Human[]): number {
    return data.reduce((acc: number, current: Human) => {
        acc + Number(current.age > 18 && current.gender === 'male'), 0);
};
}
//Тип Human определен, содержащий свойства name, age и gender. Затем, функция someFunc принимает массив данных типа Human и также выполняет операцию reduce 
//Считает количество объектов в массиве, у которых возраст(age) больше 18 и пол(gender) равен 'male'.Функция возвращает количество в числовом формате
