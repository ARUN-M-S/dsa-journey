var carPooling = function(trips, capacity) {
    let loc = Array(1001).fill(0)

for(let i =0;i<trips.length;i++){
    let [Passengers,from,to] = trips[i]
    loc[from] = loc[from]+Passengers;
    loc[to] = loc[to] -Passengers

}
let usedCapacity=0;
for(let i =0;i<1001;i++){
    usedCapacity = usedCapacity+loc[i];
    if(usedCapacity>capacity) return false;
}
    return true;
};