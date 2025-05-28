let bucket = Array(10).fill(0);
console.log(bucket);
let rateLimiterMap={}

function isValid(userId){
    rateLimiterMap[userId] = rateLimiterMap[userId] || {bucket:bucket}
}