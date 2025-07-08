
var MinStack = function() {
    this.stack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
    let min =val
    if(this.stack.length>0){
        let current =this.stack[this.stack.length-1]
         min = Math.min(val,current.min)    
    }
    let obj = {val:val,min:min };
    this.stack.push(obj)
    
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop().val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   return  this.stack[this.stack.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */