const arr1 = [1, 2, 3, null];//(number | null)[];
const arr2 = ['safety', '=', true]//(string | boolean)[];
const arr3 = [
    [1, 2, 3, 4, 5],
    ['1', '2', '3', '4', '5'],
]//(number[] | string[])[];
const arr4 = [
    1, 2, true, 'str', undefined
]//(number | boolean | string | undefined)[];

const arr5 = [
    {
        id: 1,
        name: 'Студент',
    },
    {
        id: 2,
        name: 'Наставник',
    }
]//{ id: number; name: string }[];