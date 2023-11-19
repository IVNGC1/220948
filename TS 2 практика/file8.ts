function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter(item => !b.includes(item));
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 3, 4], [5, 6]));
console.log(arrayDiff([2, 2, 2, 2, 3], [2]));