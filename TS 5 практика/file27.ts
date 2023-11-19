class MyArray<T> {
    private data: T[];
    constructor(...elements: T[]) {
        this.data = elements;
    }
    areElementsEqual(index1: number, index2: number): boolean {
        const element1 = this.data[index1];
        const element2 = this.data[index2];
        if (typeof element1 === 'object' && typeof element2 === 'object') {
            return JSON.stringify(element1) === JSON.stringify(element2);
        }
        return element1 === element2;
    }
    flatten(): T[] {
        function flattenHelper(arr: any[]): any[] {
            return arr.reduce((acc, val) =>
                Array.isArray(val)
                    ? acc.concat(flattenHelper(val))
                    : acc.concat(val),
                []
            );
        }
        const flattenedData = flattenHelper(this.data);
        return flattenedData as T[];
    }
}