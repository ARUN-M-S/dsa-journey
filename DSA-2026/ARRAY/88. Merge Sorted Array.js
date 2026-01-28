var merge = function (nums1, m, nums2, n) {

    let k = nums1.length - 1;
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n]) {
            nums1[k] = nums1[m - 1];
            m--
        } else {
            nums1[k] = nums2[n - 1];
            n--
        }
        k--
    }
    while (n > 0) {
        nums1[k] = nums2[n - 1];
        n--
        k--
    }
    return nums1;
};