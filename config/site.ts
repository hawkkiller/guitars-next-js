export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Guitars",
  description: "Quality guitars for professionals",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
