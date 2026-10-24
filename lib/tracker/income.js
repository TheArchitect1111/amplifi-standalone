import fs from 'fs';
export function trackIncome() {
  const posts = JSON.parse(fs.readFileSync('data/self-posts.json', 'utf8'));
  const clicks = posts.length * 12;
  const trials = Math.floor(clicks * 0.15);
  const paid = Math.floor(trials * 0.3);
  const revenue = paid * 29;
  const report = {
    generatedAt: new Date().toISOString(),
    postsGenerated: posts.length,
    estimatedClicks: clicks,
    estimatedTrials: trials,
    estimatedPaid: paid,
    estimatedRevenue: `$${revenue}`,
    posts
  };
  fs.writeFileSync('data/income-report.json', JSON.stringify(report, null, 2));
  console.log(`Income Report: ${posts.length} posts -> ${clicks} clicks -> ${trials} trials -> $${revenue} revenue`);
  return report;
}
