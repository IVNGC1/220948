document.addEventListener('click', (e) => {
    const coords = [e.clientX, e.clientY];
    console.log(`Point is ${coords[0]}, ${coords[1]}`);
});
//Ошибка возникает в коде из-за использования некорректных свойств posX и posY у объекта события e
//нужно заменить e.posX на e.clientX и e.posY на e.clientY