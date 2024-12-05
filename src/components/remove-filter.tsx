'use client'
import React from 'react'
import { Icons } from './icon'
import { NavigationMenuLink } from './ui/navigation-menu'
import { Button } from './ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const RemoveFilter = () => {
  const pathname = usePathname()
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const handleRemoveFilter = async () => {
    const params = new URLSearchParams(searchParams)
    params.keys().forEach(key => {
      params.delete(key)
    })
    push(pathname)
  }

  return (
    <NavigationMenuLink >
      <Button
        onClick={handleRemoveFilter}
        variant={'secondary'}
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
      >
        <Icons.logo className="h-6 w-6" />
        <div className="mb-2 mt-4 text-sm md:text-lg font-medium">
          Apni Khabar
        </div>
        <p className="text-sm leading-tight text-muted-foreground">
          {/* some description */}
        </p>
      </Button>
    </NavigationMenuLink>
  )
}

export default RemoveFilter