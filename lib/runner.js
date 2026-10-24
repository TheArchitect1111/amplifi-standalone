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
  let posts = [];
  if (fs.existsSync('data/self-posts.json')) {
    posts = JSON.parse(fs.readFileSync('data/self-posts.json', 'utf8'));
  }
  posts.unshift(post);
  fs.writeFileSync('data/self-posts.json', JSON.stringify(posts, null, 2));
  console.log(`[Amplifi Self] Generated: ${template} at ${post.createdAt} -> ${post.cta}`);
  return post;
}

if (process.argv.includes('--once')) {
  generatePost();
  process.exit(0);
}

console.log("Amplifi Standalone running in background. Generating 1 post every 24h - production mode");
generatePost();
setInterval(generatePost, 24 * 60 * 60 * 1000);
