import Link from "next/link";
import { siteConfig } from "@/config/site";
import PaddingContainer from "@/components/layout/padding-container";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="py-8 border-t">
      <PaddingContainer>
        <div>
          <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
          <p className="max-w-md mt-2 text-lg text-foreground/70">
            {siteConfig.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <div>
            <div className="text-lg font-medium">#exploretheworld</div>
            <div className="flex items-center space-x-3 mt-2 text-foreground/60">
              {siteConfig.socialLinks.map((val, idx) => {
                return (
                  <SocialLinks key={idx} platform={val.title} link={val.link} />
                );
              })}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Currently At</div>
            <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-md shadow-md">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              {siteConfig.currentlyAt}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-t mt-16">
          <div className="text-sm text-muted-foreground">
            All rights are reserved | Copyright {new Date().getFullYear()}
          </div>
          <div className="text-sm">
            Made with ❤️ by{" "}
            <Link
              className="underline underline-offset-4"
              href="https://twitter.com/Laann_ln"
              target="_blank"
            >
              @Laann_ln
            </Link>
          </div>
        </div>
      </PaddingContainer>
    </footer>
  );
}
