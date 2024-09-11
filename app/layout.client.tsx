"use client";

import { navs } from "@/constants/navs";
import { cn } from "@/lib/tw";
import Link from "fumadocs-core/link";
import { useParams } from "next/navigation";
import { tv } from "tailwind-variants";

const itemVariants = tv({
  base: "rounded-md px-2 py-1 transition-colors hover:text-fd-accent-foreground",
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground",
    },
  },
});

export function NavChildren(): React.ReactElement {
  const mode = useMode();

  return (
    <div className="rounded-md border bg-fd-muted/80 p-1 text-sm text-fd-muted-foreground max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
      {navs.map((m) => (
        <Link
          key={m.param}
          href={`/docs/${m.param}`}
          className={cn(itemVariants({ active: mode === m.param }))}
        >
          {m.name}
        </Link>
      ))}
    </div>
  );
}

export function useMode(): string | undefined {
  const { slug } = useParams();
  return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}
