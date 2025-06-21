var hasCycle = function(head) {
    if(!head)return false;
    let obj=new Set()
    let temp = head;
    while(temp){
        if(obj.has(temp)){
            return true;
        }else{
            obj.add(temp)
        }
        temp=temp.next
    }
    return false;
};