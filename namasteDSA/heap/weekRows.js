var kWeakestRows = function(mat, k) {
    const m = mat.length, n = mat[0].length;

    const countSoldiers = (row) => {
        let l = 0, r = n;                  // search in [0, n)
        while (l < r) {                    // upper_bound of 1
            const mid = (l + r) >> 1;
            if (row[mid] === 1) l = mid + 1;
            else r = mid;
        }
        return l; // number of 1s
    };

    const pairs = [];
    for (let i = 0; i < m; i++) {
        pairs.push([countSoldiers(mat[i]), i]);
    }

    pairs.sort((a, b) => a[0] - b[0] || a[1] - b[1]); // by soldiers, then index
    return pairs.slice(0, k).map(p => p[1]);
};
