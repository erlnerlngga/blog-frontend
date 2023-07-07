import Image from "next/image";

import { SignUp } from "@/components/sign-up";

export function CTACard() {
  return (
    <div className="relative p-4 h-auto lg:px-6 lg:py-10 overflow-hidden rounded-md bg-foreground/10">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-background/90 via-background/75 to-background/30" />

      <Image
        fill
        alt="CTA Card Image"
        className="object-cover object-center"
        src={
          "https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
        }
      />

      <div className="relative z-20">
        <div className="text-md text-foreground/80 font-medium">
          #exploretheworld
        </div>
        <h3 className="mt-2 lg:mt-3 text-2xl lg:text-3xl font-semibold tracking-tight">
          Explore the world with me!
        </h3>
        <p className="max-w-lg mt-2 text-base lg:text-lg">
          Explore the world with me! I&apos;m travelling around the 🌍.
          I&apos;ve visited most of the great cities of 🇺🇸 and currently
          I&apos;m travelling in 🇪🇺 Join me!
        </p>

        <SignUp />
      </div>
    </div>
  );
}
