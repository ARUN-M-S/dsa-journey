function _differenceWith(arr1, arr2, iterate) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Please check inputs';
    
    let exclude = new Set(arr2.map(val=>JSON.stringify(val)));

    return arr1.filter(val => !exclude.has(JSON.stringify(val)))

}


const arr1 = [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
const arr2 = [{ 'x': 1, 'y': 2 }];
const iterate = (item) => ({ x: item.x, y: item.y }); // Custom comparison function


console.log(_differenceWith(arr1, arr2, iterate));  // Output: [{ 'x': 2, 'y': 1 }]
