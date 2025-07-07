
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
    let n = this.q1.length-1;
    for(let i =0;i<n;i++){
        this.q2.push(this.q1.shift())
       
    }
    let ans = this.q1.shift();
    let temp = this.q1;
    this.q1= this.q2;
    this.q2=this.q1;
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     let n = this.q1.length-1;
      let num ;
    for(let i =0;i<=n;i++){
      num = this.q1.shift()
        this.q2.push(num)
        
    }
    let temp = this.q1;
    this.q1= this.q2;
    this.q2=temp
    return num;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    let n = this.q1.length;
    return n==0 
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */



 MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length-1;
    for(let i =0;i<n;i++){
        this.q1.push(this.q1.shift())
       
    }
    let ans = this.q1.shift();
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     let n = this.q1.length-1;
      let num ;
    for(let i =0;i<=n;i++){
      num = this.q1.shift()
        this.q1.push(num)
        
    }
    return num;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    let n = this.q1.length;
    return n==0 
};