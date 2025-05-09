class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right= null;
    }
}

class BTS{
    constructor(){
        this.root= null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root){
            this.root=newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(val==current.val) return undefined;
                if(val<current.value){
                    if(!current.left){
                        current.left= newNode;
                        return this; 
                    }else{
                        current = current.left;
                    }

                }else{
                    if(!current.right){
                        current.right= newNode;
                        return this; 
                    }else{
                        current = current.right;
                    }

                }
            }
        }
    }
}