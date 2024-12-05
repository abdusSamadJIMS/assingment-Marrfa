/* eslint-disable @next/next/no-html-link-for-pages */
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icon"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeSwitcher } from "./theme-switcher"
import Search from "./search"
import CategoryMenu from "./category-menu"
import RemoveFilter from "./remove-filter"
const categories = [
    {
        name: "entertainment",
        label: "Entertainment",
    },
    {
        name: "general",
        label: "General",
    },
    {
        name: "health",
        label: "Health",
    },
    {
        name: "science",
        label: "Science",
    },
    {
        name: "sports",
        label: "Sports",
    },
    {
        name: "technology",
        label: "Technology",
    },

]

export function Header() {
    return (
        <header
            className="flex justify-between sm:items-center sm:px-5 px-2 py-4 flex-wrap "
        >
            <div>

                <Link href={'/'} className="flex size-10 items-center justify-center rounded-full bg-gradient-to-b from-muted/50 to-muted hover:from-muted/75 hover:to-muted/50 transition-colors">
                    <Icons.logo className="size-4" />
                </Link>

            </div>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
                <div className="">
                    <React.Suspense>

                        <Search />
                    </React.Suspense>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <RemoveFilter />
                                    </li>
                                    <React.Suspense>

                                        <CategoryMenu
                                            categories={categories}
                                        />
                                    </React.Suspense>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="https://abdus.site" target="_blank" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

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
    )
})
ListItem.displayName = "ListItem"
