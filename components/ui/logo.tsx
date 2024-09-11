import { cn } from "@/lib/tw";
import React, { ComponentPropsWithoutRef } from "react";

export interface LogoProps extends ComponentPropsWithoutRef<"div"> {}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div
      {...props}
      className={cn(
        "size-5 bg-gradient-to-tr from-[#192A5E] via-[#9FADD0] to-[#C04149] rounded-full",
        className
      )}
    />
  );
};

export default Logo;
