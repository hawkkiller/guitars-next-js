"use client"
import * as React from "react"
import Link from "next/link"

import {NavItem} from "@/types/nav"
import {cn} from "@/lib/utils"
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import {Button, buttonVariants} from "@/components/ui/button";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({items}: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}

// Navigation panel that is rendered in a drawer
export function MainNavSmall({items}: MainNavProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className={buttonVariants({variant: "outline"})}>
          <HamburgerMenuIcon></HamburgerMenuIcon>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Explore the site</SheetDescription>
        </SheetHeader>
        <nav className="flex h-full flex-col items-center justify-center">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "w-full",
                    buttonVariants({variant: "outline"}),
                    item.disabled && "cursor-not-allowed opacity-80",
                    index === 0 || "mt-3",
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
