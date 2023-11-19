type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
};
function getHouse(): House {//Переписанная функция
    const house: House = {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };
    return house;
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);
}

handleHouse();
//Когда строка house.apartmentCount = 76; закомментирована, будет возникать ошибка "Cannot assign to 'apartmentCount' because it is a read-only property"
//Проблема возникает, потому что в типе House поле apartmentCount объявлено как только для чтения(readonly)
house.buildInfo = {
    year: 1996,
    material: 'rocks',
};
//Когда строка house.buildInfo = { year: 1996, material: 'rocks', }; закомментирована,
//будет возникать ошибка "Property 'buildInfo' is missing in type '{}' but required in type 'House'"
//Проблема возникает, потому что поле buildInfo в типе House обязательно, но в объекте house оно не определено

//Чтобы избежать этих ошибок, можно использовать объектного литерала вместо приведения типа, и инициализировать все поля объекта