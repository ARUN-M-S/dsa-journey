const rateLimiter = {};

function isAllowed(userId) {
    const currentTime = Math.floor(Date.now() / 1000);
    const windowSize = 60;
    const limit = 5;
    const windowStart = Math.floor(currentTime / windowSize) * windowSize
    if (!rateLimiter[userId]) {
        rateLimiter[userId] = { windowStart, count: 1 }
        return true;
    }

    const entry = rateLimiter[userId];

    if(entry.windowStart==windowStart){
        if(entry.count<limit){
            entry.count++;
            return true;
        }else{
            return false;
        }
    }else{
        rateLimiter[userId] = { windowStart, count: 1 };
        return true;
    }

}

// Simulate requests
for (let i = 0; i < 10; i++) {
    console.log(`Request ${i + 1}:`, isAllowed("user123"));
  }
  