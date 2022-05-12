import {Node} from "./Node"

export class BinarySearchTree<T> {
    public root: Node<T> | null = null;
    public size: number = 0;
    public preOrderNodes: Node<T>[] = [];

    constructor() {

    }

    insertRoot(value: T): void | string {
        if (!this.root) {
            this.root = new Node<T>(value);
            this.size++;
        } else {
            return "root already exist"
        }
    }

    insert(value: T, node?: Node<T>): Node<T> | string {
        if (this.isContain(value)) {
            console.log(`Cannot insert duplicate ${value} node`);
            return "Cannot insert duplicate node";
        }

        if (!this.root) {
            this.insertRoot(value)
            // this.root = new Node<T>(value);
            this.size++;
            return this.root;
        }
        if (node === undefined) {
            // return this.insert(value, this.root);
            node = this.root;
        }
        if (value < node.value) {
            if (!node.left) {
                node.left = new Node<T>(value);
                this.size++;
                return node.left;
            } else {
                return this.insert(value, node.left);
            }
        } else if (value > node.value) {
            if (!node.right) {
                node.right = new Node<T>(value);
                this.size++;
                return node.right;
            } else {
                return this.insert(value, node.right);
            }
        }
    }

    isContain(value: T): boolean {
        return !!this.find(value);
    }

    find(value: T, node?: Node<T>): Node<T> | null {
        if (!this.root) {
            return null;
        }
        if (node === undefined) {
            node = this.root;
        }
        if (value === node.value) {
            return node;
        }
        if (value < node.value) {
            if (!node.left) {
                return null;
            } else {
                return this.find(value, node.left)
            }
        } else if (value > node.value) {
            if (!node.right) {
                return null;
            } else {
                return this.find(value, node.right)
            }
        }
    }

    preOrder(node?: Node<T>): Node<T>[] {
        if (node === undefined) {
            node = this.root
        }

        this.preOrderNodes.push(node);
        if (node.left) {
            this.preOrder(node.left);
        }
        if (node.right) {
            this.preOrder(node.right);
        }
        return this.preOrderNodes;
    }

    inOrder(node?: Node<T>): Node<T>[] | void {
        if (node === undefined) {
            node = this.root
        }
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    postOrder(node?: Node<T>): Node<T>[] | void {
        if (node === undefined) {
            node = this.root
        }
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    findLeftOfRight(value: T, node?: Node<T>): Node<T> | null {
        if (!this.isContain(value)) {
            return null;
        }
        if (node === undefined) {
            if (this.find(value).right) {
                node = this.find(value).right;
            } else {
                return null;
            }
        }
        if (node.left === null) {
            return node
        } else {
            return this.findLeftOfRight(value, node.left);
        }
    }

    findRightOfLeft(value: T, node?: Node<T>): Node<T> | null {
        if (!this.isContain(value)) {
            return null;
        }
        if (node === undefined) {
            if (this.find(value).left) {
                node = this.find(value).left;
            } else {
                return null;
            }
        }
        if (node.right === null) {
            return node
        } else {
            return this.findRightOfLeft(value, node.right);
        }
    }

    findParent(value: T, node?: Node<T>): Node<T> | null {
        if (!this.isContain(value) || value === this.root.value) {
            return null;
        }
        if (node === undefined) {
            node = this.root;
        }
        if (node.right) {
            if ((node.right.value === value)) {
                return node;
            }
        }
        if (node.left) {
            if ((node.left.value === value)) {
                return node;
            }
        }
        if (node.value < value) {
            return this.findParent(value, node.right);
        } else if (node.value > value) {
            return this.findParent(value, node.left);
        }
    }

    removeNode(value: T): boolean {
        if (!this.isContain(value)) {
            return false
        }
        let newNode = this.findLeftOfRight(value) || this.findRightOfLeft(value); // bằng null nếu curent là leaf
        let currentNode = this.find(value);
        let parentNode = this.findParent(value);

        if (!this.root.left && !this.root.right) {
            this.root = null;
            this.size--;
            return true;
        }

        if (newNode === null) { // nếu node là node lá
            if (parentNode.value < value) {
                parentNode.right = null
            } else {
                parentNode.left = null
            }


        } else {
            let parentOfNewNode = this.findParent(newNode.value);
            let temp = newNode.value; // dùng biến tạm lấy giá trị của newNode.value
            if (parentOfNewNode.value < newNode.value) {
                parentOfNewNode.right = null
            } else {
                parentOfNewNode.left = null
            }
            currentNode.value = temp;
            this.size--;
            return true;
        }
    }
}