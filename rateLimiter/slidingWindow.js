let rateLimiterMap = {};

function isAllowed(userId) {
    let currentTime = Math.floor(Date.now() / 1000);
    let limit = 5;
    let windowSize = 10;


    let entry = rateLimiterMap[userId] || { count: 0, timeStamps: [] }

    entry.timeStamps = entry.timeStamps.filter(ts => currentTime - ts < windowSize);

    if (entry.timeStamps.length < limit) {
        entry.timeStamps.push(currentTime);
        rateLimiterMap[userId] = entry;
        return true;
    } else {
        return false;
    }
}

let i = 0;
let interval = setInterval(() => {
    i++;
    let allowed = isAllowed('user123');
    console.log(`Request ${i} : ${allowed}`);
    if (i > 10) clearInterval(interval)
}, 1000)