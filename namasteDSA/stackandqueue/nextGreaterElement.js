var nextGreaterElement = function(n2, n1) {
    let stack = [];
    let map = {};
    
    for (let i = n1.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= n1[i]) {
            stack.pop();
        }
        map[n1[i]] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(n1[i]);
    }

    return n2.map(num => map[num]);
};
