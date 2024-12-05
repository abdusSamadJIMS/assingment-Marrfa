"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icon";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Button
            variant={"outline"}
            className="size-10 rounded-full"
            onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}>
            {
                theme === 'dark' ? <Icons.sun className="size-6" /> : <Icons.moon className="size-6" />
            }
        </Button>
    )
};