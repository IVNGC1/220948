function reverseWords(str: string): string {
    const reversedStr = str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    console.log(reversedStr);
    return reversedStr;
}