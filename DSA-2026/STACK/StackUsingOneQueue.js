
var MyStack = function() {
    this.q1=[];
    this.q2=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i =0;i<n-1;i++){
        this.q1.push(this.q1.shift())
    }
    let val = this.q1.shift();
    let temp = this.q1;
 
    return val
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     let n = this.q1.length;
    for(let i =0;i<n-1;i++){
        this.q1.push(this.q1.shift())
    }
    let val = this.q1.shift();
     this.q1.push(val)
    let temp = this.q1;
    // this.q1=this.q2;
    // this.q2=temp
    return val
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length==0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */