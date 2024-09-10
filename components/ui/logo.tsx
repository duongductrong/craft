import { cn } from "@/lib/tw";
import React, { ComponentPropsWithoutRef } from "react";

export interface LogoProps extends ComponentPropsWithoutRef<"div"> {}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      {...props}
      className={cn(
        "size-6 bg-gradient-to-tl from-blue-500 from-20% via-purple-800 to-yellow-500 rounded-full",
        className
      )}
    />
  );
};

export default Logo;
