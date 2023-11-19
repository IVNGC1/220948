type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
type X = {
    x: {
        a: 1;
        b: 'hi';
        z: string;
    };
    y: string;
};
type Expected = {
    readonly x: {
        readonly a: 1;
        readonly b: 'hi';
    };
    readonly y: 'hey';
};
type Todo = DeepReadonly<X>;
const test: Todo = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too',
    },
    y: 'try change me',
};
export default test;