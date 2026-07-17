'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const CONSENT_KEY = 'bh-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setVisible(true)
    } catch {
      /* storage unavailable — stay hidden */
    }
  }, [])

  const choose = (value: 'all' | 'necessary') => {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ value, at: new Date().toISOString() })
      )
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[100] border-t border-border bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to make this site work and, with your consent, to
          understand how it&apos;s used. See our{' '}
          <a href="/cookies" className="underline underline-offset-2 hover:text-foreground">
            Cookie Policy
          </a>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => choose('necessary')}
          >
            Necessary only
          </Button>
          <Button size="sm" className="rounded-full" onClick={() => choose('all')}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}
