'use client'

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  useEffect,
  useRef,
  type ReactNode,
} from 'react'
import {
  translations,
  type Locale,
  type LocaleInfo,
  locales,
} from './translations'

const STORAGE_KEY = 'bh-locale'

// External store for locale
const listeners = new Set<() => void>()

function emitChange() {
  listeners.forEach((l) => l())
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  return () => {
    listeners.delete(callback)
  }
}

function getSnapshot(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && translations[stored]) return stored
  return 'en'
}

function getServerSnapshot(): Locale {
  return 'en'
}

// Track current dir for document updates
let currentDir: 'ltr' | 'rtl' = 'ltr'

interface I18nContextValue {
  locale: Locale
  localeInfo: LocaleInfo
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const setLocale = useCallback((newLocale: Locale) => {
    if (translations[newLocale]) {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, newLocale)
      }
      emitChange()
    }
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[locale]?.[key] ?? translations.en[key] ?? key
    },
    [locale]
  )

  const localeInfo = locales.find((l) => l.code === locale) ?? locales[0]

  // Sync document attributes using ref to avoid effect dependency issues
  const prevLocaleRef = useRef(locale)
  useEffect(() => {
    if (prevLocaleRef.current !== locale) {
      prevLocaleRef.current = locale
      const info = locales.find((l) => l.code === locale)
      if (info && info.dir !== currentDir) {
        currentDir = info.dir
        document.documentElement.dir = info.dir
      }
      document.documentElement.lang = locale
    }
  }, [locale])

  // Set initial lang on first mount
  const initializedRef = useRef(false)
  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true
      const info = locales.find((l) => l.code === locale)
      if (info) {
        currentDir = info.dir
        document.documentElement.dir = info.dir
      }
      document.documentElement.lang = locale
    }
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, localeInfo, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    const fallbackT = (key: string) => translations.en[key] ?? key
    return {
      locale: 'en' as Locale,
      localeInfo: locales[0],
      setLocale: () => {},
      t: fallbackT,
    }
  }
  return ctx
}