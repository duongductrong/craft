"use client";

import { cn } from "@/lib/tw";
import { motion } from "framer-motion";
import Link from "fumadocs-core/link";
import { Protest_Guerrilla } from "next/font/google";

const protestGuerrilla = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  return (
    <main className="relative flex h-[calc(100vh-3.5rem)] flex-col justify-center text-center bg-black per overflow-hidden">
      <motion.div
        initial={{
          transformPerspective: "300px",
          rotateX: "-50deg",
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
          transition: {
            duration: 0.5,
            stiffness: 200,
          },
        }}
        className={cn(
          "absolute -top-14 left-0 z-10",
          "w-full h-[400px] bg-[size:80px_80px]",
          // "[transform:perspective(300px)_rotateX(-50deg)]",
          "bg-[linear-gradient(90deg,#222_1px,transparent_0),linear-gradient(180deg,#222_1px,transparent_0)]",
          "border-b border-[#222]"
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, stiffness: 200 },
        }}
        className="relative z-20"
      >
        <motion.h1
          className={cn(
            protestGuerrilla.className,
            "text-[10vw] lg:text-[6.5vw] "
          )}
        >
          {`craft/daniel`}
        </motion.h1>
        <motion.p className={cn("font-sans", "text-sm lg:text-base mb-4")}>
          "Crafting is not just about making things, it's about making meaning."
        </motion.p>

        <Link
          href="/docs/ui"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring disabled:pointer-events-none disabled:opacity-50 border bg-gradient-to-t from-fd-primary/10 shadow-inner shadow-fd-primary/10 hover:bg-fd-accent/50 hover:text-fd-accent-foreground h-11 px-6 rounded-full bg-fd-background/50"
        >
          Visit now
        </Link>
      </motion.div>
      <motion.div
        initial={{
          transformPerspective: "300px",
          rotateX: "50deg",
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
          transition: {
            duration: 0.5,
            stiffness: 200,
          },
        }}
        className={cn(
          "absolute -bottom-14 left-0 z-10",
          "w-full h-[400px] bg-[size:80px_80px]",
          // "[transform:perspective(300px)_rotateX(50deg)]",
          "bg-[linear-gradient(90deg,#222_1px,transparent_0),linear-gradient(180deg,#222_1px,transparent_0)]"
        )}
      />
    </main>
  );
}
