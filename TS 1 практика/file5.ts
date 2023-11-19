function squareAndConcatenateDigits(num: number): number {
    if (num < 0) {
        return num;
    }
    const digits = num.toString().split('');
    const squaredDigits = digits.map(digit => Math.pow(parseInt(digit), 2));
    const result = parseInt(squaredDigits.join(''));
    console.log(result);
    return result;
}
console.log(squareAndConcatenateDigits(9119));