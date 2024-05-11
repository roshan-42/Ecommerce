"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/app/components/Navbar/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
const Navigation = () => {
  return (
    <div className=" flex items-center justify-between px-10">
      <NavigationMenu>
        <NavigationMenuList className=" flex-col gap-3 sm:flex-row">
          {/* ===========================Home========================== */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  description
                </ListItem>
                <ListItem href="" title="Page 1">
                  Page 1 description
                </ListItem>
                <ListItem href="" title="Page 2">
                  Page 2 description
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* =============Pages=================== */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  description
                </ListItem>
                <ListItem href="" title="Page 1">
                  Page 1 description
                </ListItem>
                <ListItem href="" title="Page 2">
                  Page 2 description
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ==============================Shop============================= */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  description
                </ListItem>
                <ListItem href="" title="Page 1">
                  Page 1 description
                </ListItem>
                <ListItem href="" title="Page 2">
                  Page 2 description
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  description
                </ListItem>
                <ListItem href="" title="Page 1">
                  Page 1 description
                </ListItem>
                <ListItem href="" title="Page 2">
                  Page 2 description
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  description
                </ListItem>
                <ListItem href="" title="Page 1">
                  Page 1 description
                </ListItem>
                <ListItem href="" title="Page 2">
                  Page 2 description
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ==============Extra====================== */}
          {/* <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
