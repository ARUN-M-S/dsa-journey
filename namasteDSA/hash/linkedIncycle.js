var hasCycle = function(head) {
    if(!head) return false;
  let set = new Set();
  let curr = head;
  while(curr!=null){
    if(set.has(curr)){
        return true
    }
    set.add(curr);
    curr = curr.next
  }
  return false;
};