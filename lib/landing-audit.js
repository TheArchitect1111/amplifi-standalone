const fs=require('fs');
const html=fs.readFileSync('landing/index.html','utf8');
const checks={
 headlineSellsOutcome: html.includes('Bookings for Tuesday') && html.includes('Without Discounting'),
 subheadlineShowsHow: html.includes('checks your real calendar'),
 oneCTAOutcome: html.includes('Yes, Fill My Tuesday'),
 heroShowsOutcomeNotProduct: html.includes('What you see on phone') && html.includes('Booking confirmed'),
 problemStatement: html.includes('Posting randomly'),
 solutionGuide: html.includes('Understand') && html.includes('Guide') && html.includes('Solve'),
 socialProofBesideCTA: html.includes('Live Proof') && html.includes('11 posts'),
 pricingROI: html.includes('Needs') && html.includes('bookings') && html.includes('to pay'),
 channelLockedGuarantee: html.includes('Channel-Locked') && html.includes('full refund')
};
console.log(checks);
console.log('All TRUE?', Object.values(checks).every(v=>v));
