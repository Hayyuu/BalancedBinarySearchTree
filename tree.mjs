import { Node } from "./node.mjs";
class Tree{
    constructor(arr){
        this.arr=arr;
        this.root=null;
    }
    buildTree(arr,startIndex,endIndex){
        if(startIndex > endIndex){
            return null;
        }
        let midElementIndex=Math.floor((startIndex+endIndex)/2);
        let root=new Node(arr[midElementIndex]);
        

        root.left=this.buildTree(arr,startIndex,midElementIndex-1);
        root.right=this.buildTree(arr,midElementIndex+1,endIndex);

        return root;
    }
    feedData(){
        return this.buildTree(this.arr,0,this.arr.length-1);
    }
    
}

let data=[1,2,3,4,5,6,7,8,9];
let tree=new Tree(data);

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(tree.feedData());