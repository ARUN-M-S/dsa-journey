
function reversePolicy(arr) {
    let stack = []
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (/[0-9]/.test(arr[i])) {
            stack.push(Number(arr[i]))
        } else {
            let b = stack.pop();
            let a = stack.pop();

            let ans;

            if (arr[i] === '+') {
                ans = a + b;
            } else if (arr[i] === '-') {
                ans = a - b;
            } else if (arr[i] === '*') {
                ans = a * b;
            } else if (arr[i] === '/') {
                ans = Math.trunc(a / b);
            }
stack.push(ans)
        }
    }
    return stack.pop()

}


console.log(reversePolicy(['4', '13', '5', '/', '+']))



