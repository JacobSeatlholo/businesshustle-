'use client'

import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useI18n, locales } from '@/lib/i18n'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { locale, setLocale, localeInfo } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-full"
          aria-label="Switch language"
        >
          <Globe className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLocale(l.code)}
            className={cn(
              'flex items-center justify-between gap-2 cursor-pointer',
              locale === l.code && 'bg-accent'
            )}
          >
            <span className="flex items-center gap-2">
              <span className="text-base leading-none">{l.flag}</span>
              <span className="text-sm">{l.nativeName}</span>
            </span>
            {locale === l.code && <Check className="size-3.5 text-emerald" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}