export const customerWinTemplate = {
  name: "Customer Win",
  goal: "Drive trial signups with proof",
  prompt: `Create 1 short-form post for {{channel}} about this win:
  Business: {{businessName}} ({{businessType}})
  Result: Filled {{slots}} slots on {{day}}, made \${{revenue}}
  How: Used Amplifi goal: "{{goal}}"
  Voice: {{voice}}
  Must include CTA: See how at {{landingPage}}
  Rules: Use real numbers only, no hype, 1 image of real shop, 1 booking link`,
  channels: ["instagram_reel", "facebook", "linkedin"],
  cta: "Get your free campaign preview"
}
