export interface SiteConfigType {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

export const siteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world.",
  currentlyAt: "Budapest",
  socialLinks: [
    { title: "twitter", link: "https://twitter.com" },
    { title: "youtube", link: "https://youtube.com" },
    { title: "github", link: "https://github.com" },
    { title: "linkedin", link: "https://linkedin.com" },
    { title: "instagram", link: "https://instagram.com" },
  ],
};
