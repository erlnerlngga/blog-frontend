import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "./ui/button";

export function SocialLinks({
  platform,
  link,
  isShareURL = false,
}: {
  platform: string;
  link: string;
  isShareURL?: boolean;
}) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <Facebook size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "Instagram":
        return <Instagram size={18} />;
      case "youtube":
        return <Youtube size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "github":
        return <Github size={18} />;
    }
  };

  if (isShareURL) {
    return (
      <Button size="icon" variant="secondary">
        <Link target="_blank" href={link}>
          {getIcon(platform)}
        </Link>
      </Button>
    );
  }

  return (
    <Link target="_blank" href={link}>
      {getIcon(platform)}
    </Link>
  );
}
