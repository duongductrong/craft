import Logo from "@/components/ui/logo";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-sm font-bold">Vol</span>
      </div>
    ),
  },
  links: [
    {
      text: "UI",
      url: "/docs/ui",
      active: "nested-url",
    },
  ],
};
