import fs from 'fs';
const memory = { name: "Amplifi", landingPage: "/free-campaign-preview", goal: "20 trials/week" };
const templates = ["Customer Win", "Problem Solution", "Behind The Scenes"];

function generatePost() {
  const template = templates[Math.floor(Math.random() * templates.length)];
  const post = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    template,
    channel: "instagram_reel",
    content: `${template}: ${memory.name} - ${memory.goal} - See how at ${memory.landingPage}`,
    cta: `${memory.landingPage}?utm_source=amplifi-self&utm_campaign=${template}`,
    status: "queued",
    revenueTracked: false
  };
  // Save post
  let posts = [];
  if (fs.existsSync('data/self-posts.json')) {
    posts = JSON.parse(fs.readFileSync('data/self-posts.json', 'utf8'));
  }
  posts.unshift(post);
  fs.writeFileSync('data/self-posts.json', JSON.stringify(posts, null, 2));
  console.log(`[Amplifi Self] Generated: ${template} at ${post.createdAt} -> ${post.cta}`);
  return post;
}

// If --once, generate 1 and exit
if (process.argv.includes('--once')) {
  generatePost();
  process.exit(0);
}

// Otherwise run every 24h (for demo, every 60 seconds)
console.log("Amplifi Standalone running in background. Generating 1 post every 60s for demo (change to 24h in prod).");
generatePost(); // first one now
setInterval(generatePost, 60 * 1000);
