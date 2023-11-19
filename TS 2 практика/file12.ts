function areEqual<T>(objectA: T, objectB: T): boolean {
    const keysA = Object.keys(objectA);
    const keysB = Object.keys(objectB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (objectA[key] !== objectB[key]) {
            return false;
        }
    }

    return true;
}