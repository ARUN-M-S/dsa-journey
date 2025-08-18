class Stack {
    constructor() {
        // Initialize your stack
        this.item =[]
    }
    
    push(element) {
        // Add element to the top
        this.item.push(element);
        return this.size()
    }
    
     pop() {
    if (this.isEmpty()) return undefined;
    return this.item.pop();
  }

  // Peek top element
  peek() {
    if (this.isEmpty()) return undefined;
    return this.item[this.item.length - 1];
  }
    
    isEmpty() {
        // Check if stack is empty
        return this.item.length ==0
    }
    
    size() {
        // Return number of elements
        return this.item.length;
    }
    
    clear() {
        // Remove all elements
        this.item = []
    }
}

module.exports = Stack;