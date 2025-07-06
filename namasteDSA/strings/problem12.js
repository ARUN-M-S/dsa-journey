var titleToNumber = function(columnTitle) {
    let result =0;
    for(let i =0;i<columnTitle.length;i++){
        let index = columnTitle[i].charCodeAt()-65;
        index++;
    
        result = index +(result*26);
    }
    return result
    
};