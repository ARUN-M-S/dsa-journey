// App.js
import React, { useRef, useEffect, useState } from "react";

const COLORS = ["green", "blue", "red","pink" ,"yellow","orange"];
const BALL_RADIUS = 10;
const CIRCLE_RADIUS = 150;
const CENTER = { x: 250, y: 250 };
const ELIMINATION_INTERVAL = 3000; 
const GRACE_PERIOD = 3000;


// sound files: place these in public/ folder
// const wallHitSound = new Audio("/hit-wall.mp3");
// const ballHitSound = new Audio("/hit-ball.mp3");
// const scoreSound = new Audio("/score.mp3");

function App() {
  const canvasRef = useRef(null);
  const gameStartTimeRef = useRef(null);

  const [scores, setScores] = useState(
    COLORS.reduce((acc, c) => ({ ...acc, [c]: 0 }), {})
  );
  const [winner, setWinner] = useState(null);

  // balls with random positions & velocities
  const ballsRef = useRef(
    COLORS.map((color) => ({
      color,
      x: CENTER.x + (Math.random() * 2 - 1) * 60,
      y: CENTER.y + (Math.random() * 2 - 1) * 60,
      vx: Math.random() * 12 - 3,
      vy: Math.random() * 6 - 3,
    }))
  );

  // links: { color, ax, ay, ball } where ax,ay anchor on wall, ball is reference to ball object
  const linksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // start animation
gameStartTimeRef.current = Date.now();  // record start time
// rafId = requestAnimationFrame(animate);

    let rafId = null;

    function drawCircle() {
      ctx.beginPath();
      ctx.arc(CENTER.x, CENTER.y, CIRCLE_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function drawLinks() {
      // each link has anchor ax,ay on wall and a live reference to the ball
      linksRef.current.forEach((link) => {
        const b = link.ball;
        if (!b) return;
        ctx.beginPath();
        ctx.moveTo(link.ax, link.ay); // fixed anchor on wall
        ctx.lineTo(b.x, b.y); // follows the ball
        ctx.strokeStyle = link.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    }

    function drawBalls() {
      ballsRef.current.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
      });
    }

    function updateBalls() {
      if (winner) return;

      let scoreUpdates = {};
      const balls = ballsRef.current;

      for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];

        // move
        ball.x += ball.vx;
        ball.y += ball.vy;

        // distance from center
        const dx = ball.x - CENTER.x;
        const dy = ball.y - CENTER.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // if hitting the circular boundary
        if (dist + BALL_RADIUS >= CIRCLE_RADIUS) {
          // reflect velocity about normal
          const nx = dx / dist;
          const ny = dy / dist;
          const dot = ball.vx * nx + ball.vy * ny;
          ball.vx -= 2 * dot * nx;
          ball.vy -= 2 * dot * ny;

          // play wall sound
          // wallHitSound.currentTime = 0;
          // wallHitSound.play().catch(() => {});

          // compute anchor point exactly on circle edge (so line starts at wall)
          const ax = CENTER.x + nx * CIRCLE_RADIUS;
          const ay = CENTER.y + ny * CIRCLE_RADIUS;
           // ✅ create link
  const newLink = { color: ball.color, ax, ay, ball };
  linksRef.current.push(newLink);

  // ✅ track it inside the ball itself
  if (!ball.activeLinks) ball.activeLinks = [];
  ball.activeLinks.push(newLink);

          // add link tethered to this ball
          linksRef.current.push({
            color: ball.color,
            ax,
            ay,
            ball,
          });

          // limit stored links for performance
          if (linksRef.current.length > 500) linksRef.current.shift();

          // score + play score sound
          scoreUpdates[ball.color] = (scoreUpdates[ball.color] || 0) + 1;
          // scoreSound.currentTime = 0;
          // scoreSound.play().catch(() => {});
        }
      }

      // batch-update React state scores and check winner
      if (Object.keys(scoreUpdates).length > 0) {
        setScores((prev) => {
          const updated = { ...prev };
          Object.keys(scoreUpdates).forEach((c) => {
            updated[c] += scoreUpdates[c];
            if (updated[c] >= 100 && !winner) {
              setWinner(c);
              // freeze balls immediately
              ballsRef.current.forEach((b) => {
                b.vx = 0;
                b.vy = 0;
              });
            }
          });
          return updated;
        });
      }
    }

    function handleCollisions() {
      // simple collision resolution: elastic-ish with separation to avoid sticking
      const balls = ballsRef.current;
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = BALL_RADIUS * 2;
          if (dist > 0 && dist < minDist) {
            // swap velocities (simple)
            const tvx = a.vx, tvy = a.vy;
            a.vx = b.vx;
            a.vy = b.vy;
            b.vx = tvx;
            b.vy = tvy;

            // separate so they don't stick
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;
            a.x += (nx * (overlap / 2));
            a.y += (ny * (overlap / 2));
            b.x -= (nx * (overlap / 2));
            b.y -= (ny * (overlap / 2));

            // play collision sound
            // ballHitSound.currentTime = 0;
            // ballHitSound.play().catch(() => {});
          }
        }
      }
    }

   function checkLinkBreaks() {
  const balls = ballsRef.current;
  const links = linksRef.current;

  linksRef.current = links.filter((link) => {
    let brokenBy = null;

    balls.forEach((b) => {
      if (b === link.ball) return; // skip owner

      // shortest distance to line segment
      const vx = link.ball.x - link.ax;
      const vy = link.ball.y - link.ay;
      const wx = b.x - link.ax;
      const wy = b.y - link.ay;

      const c1 = vx * wx + vy * wy;
      const c2 = vx * vx + vy * vy;
      let t = c1 / c2;
      t = Math.max(0, Math.min(1, t));

      const px = link.ax + t * vx;
      const py = link.ay + t * vy;

      const dx = b.x - px;
      const dy = b.y - py;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < BALL_RADIUS) {
        brokenBy = b; // this ball broke the link
      }
    });

    if (brokenBy) {
      // remove from owner
      if (link.ball.activeLinks) {
        link.ball.activeLinks = link.ball.activeLinks.filter((l) => l !== link);
      }

      // add to breaker
      if (!brokenBy.activeLinks) brokenBy.activeLinks = [];
      brokenBy.activeLinks.push(link);

      // reassign ownership
      link.ball = brokenBy;
      link.color = brokenBy.color; 

      return true; // keep link globally, just reassigned
    }

    return true; // keep if not broken
  });
}

function updateScoresFromLinks() {
  const newScores = COLORS.reduce((acc, c) => ({ ...acc, [c]: 0 }), {});

  linksRef.current.forEach((link) => {
    if (link.ball && link.ball.color) {
      newScores[link.ball.color] += 1; // count 1 for each active link
    }
  });

  setScores(newScores);

  // check winner
  COLORS.forEach((c) => {
    if (newScores[c] >= 100 && !winner) {
      setWinner(c);
      // freeze balls immediately
      ballsRef.current.forEach((b) => {
        b.vx = 0;
        b.vy = 0;
      });
    }
  });
}


function drawScoresTopLeft() {
  const ctx = canvasRef.current.getContext("2d");
  ctx.font = "16px Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";

  const startX = 10; // left padding
  const startY = 10; // top padding
  const gap = 20;    // vertical gap between rows

  COLORS.forEach((c, i) => {
    ctx.fillStyle = c;
    const count = linksRef.current.filter(link => link.ball.color === c).length;
    ctx.fillText(`${c}: ${count}`, startX, startY + i * gap);
  });
}

function drawHeader() {
  const ctx = canvasRef.current.getContext("2d");
  ctx.font = "38px Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "white";

  const startX = 10; // same left padding as scores
  const startY = 10; // same top padding

  ctx.fillText("First to 100 wins!", startX + 120, startY); // offset right of scores
}




    // function animate() {
    //   // get fresh ctx (safe)
    //   const canvas = canvasRef.current;
    //   if (!canvas) return;
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);

    //   // update physics (movement + wall hits -> create links + scoring)
    //   updateBalls();

    //   // collisions between balls
    //   if (!winner) handleCollisions();

    //   // draw arena, links, balls (links should be drawn before balls so balls overlay the line endpoints)
    //   drawCircle();
    //   drawLinks();
    //   drawBalls();

    //   if (!winner) {
    //     rafId = requestAnimationFrame(animate);
    //   }
    // }
    function animate() {
  const canvas = canvasRef.current;
  if (!canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // update physics
  updateBalls();

  // collisions
  if (!winner) handleCollisions();

  // ✅ check for broken links each frame
  if (!winner) checkLinkBreaks();
   if (!winner) eliminateBallsWithoutLinks();
updateScoresFromLinks();
  // draw arena
  drawCircle();
  drawLinks();
  drawBalls();
  drawScoresTopLeft();
  drawHeader();


  if (!winner) {
    rafId = requestAnimationFrame(animate);
  }
}

function eliminateBallsWithoutLinks() {
  const balls = ballsRef.current;
  const links = linksRef.current;

  // wait 3 seconds before elimination starts
  if (Date.now() - gameStartTimeRef.current < 6000) return;

  // 🚨 don't eliminate until at least one link exists
  if (links.length === 0) return;

  // find all balls that are still linked
  const linkedBalls = new Set(links.map((l) => l.ball));

  // eliminate only if at least one ball has a link
  if (linkedBalls.size > 0) {
    ballsRef.current = balls.filter((b) => linkedBalls.has(b));

    // log eliminated ones
    balls.forEach((b) => {
      if (!linkedBalls.has(b)) {
        console.log(`${b.color} eliminated!`);
      }
    });
  }
}





    // start animation
    rafId = requestAnimationFrame(animate);

    // cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [winner]);

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center text-white">
      <canvas
        ref={canvasRef}
        width={360}
        height={640}
        style={{ background: "black" }}
      />
      
    </div>
  );
}

export default App;
