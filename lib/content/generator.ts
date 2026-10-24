import { AMPLIFI_SELF_MEMORY } from "../amplifi-self/business-memory";
import { customerWinTemplate } from "./templates/customer-win";
import { problemSolutionTemplate } from "./templates/problem-solution";
import { behindScenesTemplate } from "./templates/behind-the-scenes";

export function generateSelfCampaign() {
  const memory = AMPLIFI_SELF_MEMORY;
  return {
    memory,
    templates: [customerWinTemplate, problemSolutionTemplate, behindScenesTemplate],
    nextPost: {
      template: "Customer Win",
      scheduledAt: new Date(Date.now() + 24*60*60*1000).toISOString(),
      channel: "instagram_reel",
      landingPage: memory.landingPage
    }
  };
}
