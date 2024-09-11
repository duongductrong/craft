import {
  LayoutIcon,
  LucideIcon
} from "lucide-react";

export interface Nav {
  param: string;
  name: string;
  package: string;
  description: string;
  icon: LucideIcon;
}

export const navs: Nav[] = [
  // {
  //   param: "headless",
  //   name: "Core",
  //   package: "fumadocs-core",
  //   description: "The core library",
  //   icon: LibraryIcon,
  // },
  {
    param: "ui",
    name: "UI",
    package: "fumadocs-ui",
    description: "The user interface",
    icon: LayoutIcon,
  },
  // {
  //   param: "mdx",
  //   name: "MDX",
  //   package: "fumadocs-mdx",
  //   description: "Built-in source provider",
  //   icon: PaperclipIcon,
  // },
];
