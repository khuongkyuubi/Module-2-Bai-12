"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
var Node_1 = require("./Node");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
        this.size = 0;
        this.preOrderNodes = [];
    }
    BinarySearchTree.prototype.insertRoot = function (value) {
        if (!this.root) {
            this.root = new Node_1.Node(value);
            this.size++;
        }
        else {
            return "root already exist";
        }
    };
    BinarySearchTree.prototype.insert = function (value, node) {
        if (this.isContain(value)) {
            console.log("Cannot insert duplicate ".concat(value, " node"));
            return "Cannot insert duplicate node";
        }
        if (!this.root) {
            this.insertRoot(value);
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
                node.left = new Node_1.Node(value);
                this.size++;
                return node.left;
            }
            else {
                return this.insert(value, node.left);
            }
        }
        else if (value > node.value) {
            if (!node.right) {
                node.right = new Node_1.Node(value);
                this.size++;
                return node.right;
            }
            else {
                return this.insert(value, node.right);
            }
        }
    };
    BinarySearchTree.prototype.isContain = function (value) {
        return !!this.find(value);
    };
    BinarySearchTree.prototype.find = function (value, node) {
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
            }
            else {
                return this.find(value, node.left);
            }
        }
        else if (value > node.value) {
            if (!node.right) {
                return null;
            }
            else {
                return this.find(value, node.right);
            }
        }
    };
    BinarySearchTree.prototype.preOrder = function (node) {
        if (node === undefined) {
            node = this.root;
        }
        this.preOrderNodes.push(node);
        if (node.left) {
            this.preOrder(node.left);
        }
        if (node.right) {
            this.preOrder(node.right);
        }
        return this.preOrderNodes;
    };
    BinarySearchTree.prototype.inOrder = function (node) {
        if (node === undefined) {
            node = this.root;
        }
        if (node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    };
    BinarySearchTree.prototype.postOrder = function (node) {
        if (node === undefined) {
            node = this.root;
        }
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    };
    BinarySearchTree.prototype.findLeftOfRight = function (value, node) {
        if (!this.isContain(value)) {
            return null;
        }
        if (node === undefined) {
            if (this.find(value).right) {
                node = this.find(value).right;
            }
            else {
                return null;
            }
        }
        if (node.left === null) {
            return node;
        }
        else {
            return this.findLeftOfRight(value, node.left);
        }
    };
    BinarySearchTree.prototype.findRightOfLeft = function (value, node) {
        if (!this.isContain(value)) {
            return null;
        }
        if (node === undefined) {
            if (this.find(value).left) {
                node = this.find(value).left;
            }
            else {
                return null;
            }
        }
        if (node.right === null) {
            return node;
        }
        else {
            return this.findRightOfLeft(value, node.right);
        }
    };
    BinarySearchTree.prototype.findParent = function (value, node) {
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
        }
        else if (node.value > value) {
            return this.findParent(value, node.left);
        }
    };
    BinarySearchTree.prototype.removeNode = function (value) {
        if (!this.isContain(value)) {
            return false;
        }
        var newNode = this.findLeftOfRight(value) || this.findRightOfLeft(value); // bằng null nếu curent là leaf
        var currentNode = this.find(value);
        var parentNode = this.findParent(value);
        if (!this.root.left && !this.root.right) {
            this.root = null;
            this.size--;
            return true;
        }
        if (newNode === null) { // nếu node là node lá
            if (parentNode.value < value) {
                parentNode.right = null;
            }
            else {
                parentNode.left = null;
            }
        }
        else {
            var parentOfNewNode = this.findParent(newNode.value);
            var temp = newNode.value; // dùng biến tạm lấy giá trị của newNode.value
            if (parentOfNewNode.value < newNode.value) {
                parentOfNewNode.right = null;
            }
            else {
                parentOfNewNode.left = null;
            }
            currentNode.value = temp;
            this.size--;
            return true;
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
