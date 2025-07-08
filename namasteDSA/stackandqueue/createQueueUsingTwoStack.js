
// var MyQueue = function() {
//     this.myStack1 =[];
//     this.myStack2 =[];

    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//    this.myStack1.push(x)
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     let n = this.myStack1.length-1;
//     for(let i = n;i>0;i--){
//      this.myStack2.push(this.myStack1.pop())
//     }
//     let num =  this.myStack1.pop();
//     n= this.myStack2.length-1;
//      for(let i = n;i>=0;i--){
//      this.myStack1.push(this.myStack2.pop())
//     }
//     return num;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//        let n = this.myStack1.length-1;
//     for(let i = n;i>0;i--){
//      this.myStack2.push(this.myStack1.pop())
//     }
//     let num =  this.myStack1.pop();
//     this.myStack2.push((num));
//     for(let i = n;i>=0;i--){
//      this.myStack1.push(this.myStack2.pop())
//     }

//     return num;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.myStack1.length==0;
// };

// /** 
//  * Your MyQueue object will be instantiated and called as such:
//  * var obj = new MyQueue()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.peek()
//  * var param_4 = obj.empty()
//  */



var MyQueue = function() {
    this.s1=[];
    this.s2=[];

    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length==0){
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
      if(this.s2.length==0){
        while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length-1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length==0 && this.s2.length==0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */