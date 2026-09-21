export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Piggy Wiki",
  shortName: "Piggy",
  logoText: "P",
  tagline: "Roblox Chapters, Skins, Codes & Secrets Guide",
  description: "Explore Piggy Wiki for Roblox Piggy chapters, skins, codes, maps, secrets, endings, puzzles, and survival tips to master every adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://piggygame.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://piggygame.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/4623386862/Piggy",
  heroVideoId: "Y-xR6213tj8", // ROBLOX PIGGY Storyline Explained | Book 1 & 2
  social: {
    discord: "https://discord.gg/piggy",
    youtube: "https://www.youtube.com/@MiniToon",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
