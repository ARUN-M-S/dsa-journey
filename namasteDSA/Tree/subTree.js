var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);
    let ans = strStr(hashRoot,hashSubRoot)

    return ans == -1 ? false :true
    
};


let serialize = (root)=>{
    let hash="";
    function travers(curr){
        if(!curr){
            hash= hash+'-#';
            return
        };
        hash= hash+'-'+curr.val;
        travers(curr.left)
        travers(curr.right)


     }
     travers(root)
     return hash;

}

var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;
    while (j < n) {
        if (needle[i] == needle[j]) {
            lps[j] = i + 1;
            j++;
            i++;
        } else {
            if (i == 0) {
                lps[j] = 0;
                j++
            } else {
                i = lps[i - 1];
            }
        }

    }
    i = j = 0;
    while (i < m) {
        if (haystack[i] == needle[j]) {
            i++;
            j++
        } else {
            if (j == 0) {
                i++
            } else {
                j = lps[j - 1]
            }
        }

        if (j == n) {
            return i - n;
        }
    }
    return -1;
};