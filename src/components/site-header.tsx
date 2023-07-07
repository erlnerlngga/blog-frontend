import Link from "next/link";
import PaddingContainer from "@/components/layout/padding-container";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <div className="sticky z-30 top-0 right-0 left-0 border-b bg-background/50 backdrop-blur-md">
      <PaddingContainer>
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="text-lg font-bold">
            Explorer
          </Link>

          <nav className="flex items-center space-x-4">
            <ModeToggle />
            <MainNav />
            <MobileNav />
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
}
