var merge = function (nums1, m, nums2, n) {
    let L = n+m-1;
    m= m-1;
    n=n-1
 
    
    let result = []
    while (m>=0 && n>=0) {
        if (nums1[m] >nums2[n]) {
            nums1[L] = nums1[m]
             m--
            
        } else {
            nums1[L] = nums2[n]
            n--
        }
        L--;
       
    }

    while (m>=0) {
       nums1[L] = nums1[m]
            L--;
            m--
    }
     while (n>=0) {
       nums1[L] = nums2[n]
            L--;
            n--
    }


};