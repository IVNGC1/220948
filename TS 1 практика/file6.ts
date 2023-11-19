function digitalRoot(num: number): number {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
console.log(digitalRoot(942));
console.log(digitalRoot(493193));