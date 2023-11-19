function capitalizeWords(sentence: string): string {
    const words = sentence.split(' ');
    const firstWord = words[0];
    const numberOfLetters = firstWord.length;
    if (numberOfLetters < words.length) {
        words.splice(numberOfLetters, 1);
    }
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}
console.log(capitalizeWords("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."));