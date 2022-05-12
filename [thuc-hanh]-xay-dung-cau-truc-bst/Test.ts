import {BinarySearchTree} from "./BinarySearchTree";

let bst = new BinarySearchTree<number>()

bst.insertRoot(6); // this is the root

bst.insert(3);
bst.insert(5);
bst.insert(4);
bst.insert(2);
bst.insert(8);
bst.insert(7);
bst.insert(9);
bst.insert(9);

// console.log(bst.find(5));
// console.log(bst.isContain(8));
// bst.preOrder().forEach((node) => {
//     console.log(node.value)
// })

// bst.inOrder();
// bst.postOrder();
// console.log(bst.findLeftOfRight(5));
// console.log(bst.findRightOfLeft(5));

// let newNode = bst.findLeftOfRight(9) || bst.findRightOfLeft(9);
// console.log("new node is ",newNode);
//
// // console.log(bst.find(8))
// bst.removeNode(8);
// console.log(bst.find(9))

// console.log(bst.findParent(6))
// console.log(bst.find(4))
// bst.removeNode(6);
console.log(bst.removeNode(3));
console.log(bst.find(4))
