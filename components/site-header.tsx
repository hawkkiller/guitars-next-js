import Link from "next/link"

import {siteConfig} from "@/config/site"
import {buttonVariants} from "@/components/ui/button"
import {Icons} from "@/components/icons"
import {MainNav, MainNavSmall} from "@/components/main-nav"
import {ThemeToggle} from "@/components/theme-toggle"
import * as React from "react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="mr-4 flex items-center space-x-2">
          <Icons.logo className="size-6"/>
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>

        {/* if screen size is more than md then show <MainNav> */}
        <div className="hidden flex-1 items-center md:flex">
          <MainNav items={siteConfig.mainNav}/>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="size-5"/>
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </nav>
          </div>
          <ThemeToggle/>
        </div>

        {/* If screen size is smaller than md, then show HamburgerMenu */}
        <div className="flex-1 md:hidden text-end">
          <MainNavSmall items={siteConfig.mainNav}/>
        </div>
      </div>
    </header>
  )
}
