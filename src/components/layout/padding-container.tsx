import * as React from "react";
import { cn } from "@/lib/utils";

function PaddingContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-full px-8 mx-auto max-w-7xl", className)}
      {...props}
    />
  );
}

export default PaddingContainer;
