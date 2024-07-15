'use client'

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { NavigationProps } from 'src/components/Navigation'
import { Logo } from './logo'

export default function NavbarComponent({ router }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const t = useTranslations('Navbar')

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm"
    >
      <NavbarContent className="!flex-grow-0">
        <NavbarItem className="z-10 size-10 sm:hidden">
          <Logo />
        </NavbarItem>

        <NavbarItem>
          <NavbarBrand className="smMax:hidden  flex items-center justify-center gap-4">
            <Logo />
            <span className="flex flex-col items-center">
              <h1 className="font-bold">Ondontologia Integral</h1>
              <p className="text-sm">Saúde & Estética Dental</p>
            </span>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden w-full !justify-center">
        <NavbarItem>
          <NavbarBrand className="!justify-center">
            <span className="flex flex-col items-center">
              <h1 className="font-bold">Ondontologia Integral</h1>
              <p className="text-sm">Saúde & Estética Dental</p>
            </span>
            {/* <Logo /> */}
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden p-4 sm:flex gap-4" justify="center">
        {router.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-dark-text text-light-text  text-base"
              href={item.router}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* {t(item.name)} */}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent className="flex items-center justify-center gap-0  !flex-grow-0">
        {/* <NavbarItem>
          <LangSelect></LangSelect>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem> */}
        <NavbarItem className="smMax:hidden">
          <Button>Sua vez</Button>
        </NavbarItem>

        <NavbarItem className="z-10 size-10 sm:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {router.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-dark-text text-light-text font-semibold text-xl"
              href={item.router}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
