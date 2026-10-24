export const problemSolutionTemplate = {
  name: "Problem Solution",
  goal: "Teach and drive traffic",
  prompt: `Create 1 post for {{channel}}:
  Problem: Most {{businessType}} post randomly and get 0 bookings
  Solution: Check capacity first, then post with booking link
  Example: If Tuesday has 6 open chairs, post at 6pm Monday with direct Tuesday booking link
  Voice: {{voice}}
  CTA: Steal this playbook at {{landingPage}}`,
  channels: ["threads", "linkedin", "instagram_carousel"]
}
