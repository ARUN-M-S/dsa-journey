

// Output { name: 'Arun', house: 'Xyz', main: 21, city: 'abc' }

// ✅ Flatten object without paths
function flattenObj(obj) {
    let result = {};
    function flatten(current) {
        Object.keys(current).map((key) => {
            if (typeof current[key] == 'object' && current[key] !== null) {
                flatten(current[key])
            } else {
                result[key] = current[key]
            }

        })
    }
    flatten(obj);
    return result;
}
// console.log(flattenObj(user))


// ✅ Flatten object with full path keys
function flattenWithPath(obj, result = {}) {
    function flatten(current, path = '') {
        Object.keys(current).map((key) => {
            let currentPath = path ? `${path}.${key}` : key;
            if (typeof current[key] == 'object') {
                flatten(current[key], currentPath)
            } else {
                result[currentPath] = current[key];
            }
        })
    }
    flatten(obj);
    return result;
}


// ✅ Unflatten object from path keys
function unFlattenObj(obj) {
    let result = {}
    for (let path in obj) {

        let keys = path.split('.');
        let current = result;

        keys.forEach((key, index) => {
            if (index == keys.length - 1) {
                current[key] = obj[path]
            } else {
                if (!current[key]) current[key] = {}
                current = current[key]
            }
        })

    }
    return result;
}



// 🧪 Sample Input
const user = {
    name: "Arun",
    Address: {
      primary: {
        house: "Xyz",
        street: {
          main: 21,
        },
        city: "abc",
      },
    },
  };
  
  // 🧪 Run Examples
  console.log('Flatten (shallow):', flattenObj(user));
  console.log('Flatten with path:', flattenWithPath(user));
  
  const flatData = {
    name: 'Arun',
    'Address.primary.house': 'Xyz',
    'Address.primary.street.main': 21,
    'Address.primary.city': 'abc',
  };
  console.log('Unflatten:', unFlattenObj(flatData));
