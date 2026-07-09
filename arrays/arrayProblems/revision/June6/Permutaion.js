var checkInclusion = function (s1, s2) {
    let s1Map = {}
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1
    }
    let i = 0;
    let j = 0;
    let k = s1.length;
    let s2Map = {}


    while (j < s2.length) {
        if (j - i + 1 > k) {
            let count = 0
            for (let ch in s1Map) {
                if (s1Map[ch] == s2Map[ch]) {
                    count++
                }

            }
            if (count == Object.keys(s1Map).length) return true;
            s2Map[s2[i]] = (s2Map[s2[i]] || 0) - 1;
            i++


        } else {
            s2Map[s2[j]] = (s2Map[s2[j]] || 0) + 1;
            j++
        }
    }
    let count = 0
    for (let ch in s1Map) {
        if (s1Map[ch] == s2Map[ch]) {
            count++
        }

    }
    if (count == Object.keys(s1Map).length) return true;

    return false

};


var checkInclusion = function (s1, s2) {
    let s1Map = {}
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i]] = (s1Map[s1[i]] || 0) + 1
    }
    let i = 0;
    let j = 0;
    let k = s1.length;
    let s2Map = {}


    while (j < s2.length) {

        s2Map[s2[j]] = (s2Map[s2[j]] || 0) + 1;
        if (j - i + 1 == k) {
            let count = true
            for (let ch in s1Map) {
                if (s1Map[ch] != s2Map[ch]) {
                    count=false;
                    break;
                }

            }
            if (count) return true;
            s2Map[s2[i]] = (s2Map[s2[i]] || 0) - 1;
            i++


        }
        j++
    }
    

    return false

};