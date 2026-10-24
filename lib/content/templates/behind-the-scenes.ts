export const behindScenesTemplate = {
  name: "Behind The Scenes",
  goal: "Show Amplifi marketing itself",
  prompt: `Create 1 authentic post for {{channel}}:
  Today Amplifi did: Checked its own goal ({{goal}}), created {{count}} posts, scheduled for {{time}}
  Result so far: {{trials}} trials this week
  Voice: {{voice}}, honest builder log
  CTA: Watch us market ourselves at {{landingPage}}`,
  channels: ["threads", "instagram_story", "linkedin"]
}
