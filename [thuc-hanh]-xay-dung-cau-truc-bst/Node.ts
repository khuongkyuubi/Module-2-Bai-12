export class Node<T> {
    public value: T;
    public left: Node<T> | null = null;
    public right: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}