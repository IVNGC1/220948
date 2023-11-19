function capitalizeWords(sentence: string): string {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}
console.log(capitalizeWords("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили."));