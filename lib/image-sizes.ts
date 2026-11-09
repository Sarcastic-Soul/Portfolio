// Pixel sizes of images in public/, used for width/height attributes so the
// browser reserves space before they load. Regenerate when adding an image:
// add an entry here by hand (sizes are the file's real pixel size).
export const imageSizes: Record<string, { width: number; height: number }> = {
  "/previews/brutshop-sm.webp": { width: 480, height: 348 },
  "/previews/brutshop.webp": { width: 960, height: 698 },
  "/previews/chatapp-sm.webp": { width: 480, height: 300 },
  "/previews/chatapp.webp": { width: 960, height: 600 },
  "/previews/codemon-session-sm.webp": { width: 480, height: 360 },
  "/previews/codemon-session.webp": { width: 960, height: 720 },
  "/previews/cropdoc-ask-sm.webp": { width: 240, height: 534 },
  "/previews/cropdoc-ask.webp": { width: 480, height: 1067 },
  "/previews/cropdoc-diagnosis-sm.webp": { width: 240, height: 534 },
  "/previews/cropdoc-diagnosis.webp": { width: 480, height: 1067 },
  "/previews/cropdoc-home-sm.webp": { width: 240, height: 534 },
  "/previews/cropdoc-home.webp": { width: 480, height: 1067 },
  "/previews/radish-dashboard-sm.webp": { width: 480, height: 360 },
  "/previews/radish-dashboard.webp": { width: 960, height: 720 },
  "/previews/support-desk-reasoning-sm.webp": { width: 480, height: 360 },
  "/previews/support-desk-reasoning.webp": { width: 832, height: 624 },
  "/previews/syllabai-sm.webp": { width: 480, height: 288 },
  "/previews/syllabai.webp": { width: 960, height: 574 },
  "/previews/url-shortener-grafana-sm.webp": { width: 480, height: 294 },
  "/previews/url-shortener-grafana.webp": { width: 960, height: 586 },
  "/certs/aparsoft-internship.webp": { width: 480, height: 340 },
  "/certs/oracle-badge.webp": { width: 160, height: 80 },
  "/certs/postman-badge.webp": { width: 160, height: 160 },
  "/certs/prism-internship.webp": { width: 480, height: 340 },
};

export function sizeOf(src: string) {
  return imageSizes[src] ?? {};
}
