'use client'

import { Logo } from './Logo'
import { Search, LifeBuoy, Cog, Menu } from 'lucide-react'
import { NavItem } from './Navigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Navigation } from './Navigation'
import * as Input from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden border-b border-zinc-200 bg-white p-4 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        asChild
        className="data-[state=closed]:animate-slideUpAndFade data-[state=closed]:hidden data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">
          <Input.Root>
            <Input.Prefix>
              <Search className="size-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control placeholder="Search" />
          </Input.Root>

          <Navigation />

          <div className="mt-auto flex flex-col gap-6">
            <nav className="space-y-0.5">
              <NavItem title="Support" icon={LifeBuoy} />
              <NavItem title="Settings" icon={Cog} />
            </nav>

            <UsedSpaceWidget />

            <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
