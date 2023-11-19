type MyReadonly<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P];
} & Omit<T, K>;
type Todo = {
    title: string;
    description: string;
    completed: boolean;
};
const todo: MyReadonly<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
};
export default todo;