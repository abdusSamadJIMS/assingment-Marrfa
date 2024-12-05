'use client'
import React from 'react'
import { Button } from './ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const CategoryMenu = ({ categories }: { categories: { name: string, label: string }[] }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams(searchParams)
        if (category) {
            params.set('category', category)
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <>
            {
                categories.map((category) => (
                    <Button
                        key={category.name}
                        title={category.label}
                        variant={"outline"}
                        className={cn("",
                            searchParams.get('category') === category.name && "bg-muted"
                        )}
                        onClick={() => {
                            handleCategoryClick(category.name)
                        }}
                    >
                        {category.label}
                    </Button>
                ))
            }
        </>

    )
}

export default CategoryMenu

