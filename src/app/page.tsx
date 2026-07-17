'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Database,
  Workflow,
  Users,
  Bot,
  Landmark,
  Heart,
  Zap,
  Sprout,
  ShoppingBag,
  Truck,
  Building2,
  GraduationCap,
  Star,
  Menu,
  ArrowRight,
  Quote,
  Search,
  ExternalLink,
  BookOpen,
  Sparkles,
  LayoutDashboard,
  Globe,
  MapPin,
  Target,
  Handshake,
  Lightbulb,
  Loader2,
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

/* ------------------------------------------------------------------ */
/*  Idea Generator                                              */
/* ------------------------------------------------------------------ */
type Idea = { title: string; description: string; impact: string }

function IdeaGenerator() {
  const [business, setBusiness] = useState('')
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generate = async () => {
    if (business.trim().length < 3 || loading) return
    setLoading(true)
    setError('')
    setIdeas([])
    try {
      const res = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business: business.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setIdeas(data.ideas)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="idea-generator" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-gold/40 text-gold">
            <Lightbulb className="size-3.5 mr-1.5" />
            Free AI Tool
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Idea <span className="gradient-text">Generator</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Describe your business in one sentence. Our AI finds three practical
            automation opportunities you could deploy this quarter.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <Input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && generate()}
              placeholder="e.g. I run a physiotherapy practice in Gardens, Cape Town"
              maxLength={300}
              className="h-12"
            />
            <Button
              onClick={generate}
              disabled={loading || business.trim().length < 3}
              className="h-12 px-6 bg-gold text-background hover:bg-gold/90 font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  Thinking…
                </>
              ) : (
                <>
                  <Sparkles className="size-4 mr-2" />
                  Find Opportunities
                </>
              )}
            </Button>
          </div>
          {error && (
            <p className="text-sm text-destructive text-center mt-4">{error}</p>
          )}
        </AnimatedSection>

        {ideas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {ideas.map((idea, i) => (
              <Card
                key={i}
                className="border-border/60 bg-card/80 backdrop-blur-sm hover:border-gold/40 transition-colors py-0 gap-0"
              >
                <CardContent className="p-6 flex flex-col gap-3 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Lightbulb className="size-5" />
                  </div>
                  <h3 className="font-semibold leading-snug">{idea.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {idea.description}
                  </p>
                  <Badge variant="outline" className="w-fit border-emerald/40 text-emerald text-xs">
                    {idea.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            <div className="md:col-span-3 text-center mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:gap-2.5 transition-all"
              >
                Want us to build one of these? Book a free consult
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCounter(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView && startOnView) return
    let start = 0
    const step = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration, startOnView])

  return { count, ref }
}

/* ------------------------------------------------------------------ */
/*  Section wrapper with scroll animation                               */
/* ------------------------------------------------------------------ */
function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Resources Hub (from get-started.mdx)                              */
/* ------------------------------------------------------------------ */
interface ResourceItem {
  id: string
  name: string
  url: string
  description: string
  category: string
  isFree: boolean
  isPaid: boolean
}

function ResourcesHub() {
  const { t } = useI18n()
  const [resources, setResources] = useState<ResourceItem[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    fetch('/api/resources')
      .then((r) => r.json())
      .then((data) => {
        setResources(data.resources)
        setCategories(data.categories)
        setLoading(false)
      })
  }, [])

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory
    const matchesSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="resources" className="py-20 sm:py-28 bg-muted/30">
      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 gap-1.5 px-3 py-1 text-xs font-medium">
            <BookOpen className="size-3" />
            {t('resources.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t('resources.title1')}{' '}
            <span className="gradient-text">{t('resources.title2')}</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('resources.searchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-full h-11 bg-background border-border"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-emerald text-emerald-foreground shadow-sm'
                  : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
              }`}
            >
              All ({resources.length})
            </button>
            {categories.map((cat) => {
              const count = resources.filter((r) => r.category === cat).length
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald text-emerald-foreground shadow-sm'
                      : 'bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {cat} ({count})
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Resource Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-background animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filtered.length} of {resources.length} resources
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[720px] overflow-y-auto custom-scrollbar pr-1">
              {filtered.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-4 rounded-xl bg-background border border-border hover:border-emerald/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-emerald transition-colors line-clamp-1">
                      {resource.name}
                    </h3>
                    <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-emerald shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-2 py-0 font-normal"
                    >
                      {resource.category}
                    </Badge>
                    <div className="flex gap-1.5 ml-auto">
                      {resource.isFree && (
                        <span className="inline-flex items-center rounded-full bg-emerald/10 text-emerald px-2 py-0.5 text-[10px] font-medium">
                          Free
                        </span>
                      )}
                      {resource.isPaid && (
                        <span className="inline-flex items-center rounded-full bg-gold/10 text-gold px-2 py-0.5 text-[10px] font-medium">
                          Paid
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <Sparkles className="size-10 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {t('resources.noResults')} &quot;{search}&quot;
                </p>
                <button
                  onClick={() => {
                    setSearch('')
                    setActiveCategory('All')
                  }}
                  className="text-emerald text-sm mt-2 hover:underline"
                >
                  {t('resources.clearFilters')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { t, localeInfo } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { key: 'platform', label: t('nav.platform') },
    { key: 'solutions', label: t('nav.solutions') },
    { key: 'industries', label: t('nav.industries') },
    { key: 'resources', label: t('nav.resources') },
    { key: 'about', label: t('nav.about') },
    { key: 'idea-generator', label: 'Idea Generator' },
    { key: 'contact', label: t('nav.contact') },
  ]

  const { count: c1, ref: r1 } = useCounter(50)
  const { count: c2, ref: r2 } = useCounter(98)
  const { count: c3, ref: r3 } = useCounter(24)

  return (
    <div className="min-h-screen flex flex-col">
      {/* ============================================================ */}
      {/*  1. NAVIGATION                                                */}
      {/* ============================================================ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="Business Hustle"
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="hidden sm:inline font-semibold text-lg tracking-tight">
              Business Hustle
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={`#${link.key}`}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Controls */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button size="sm" className="rounded-full px-5">
              {t('nav.bookDemo')}
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                  <span className="sr-only">{t('nav.openMenu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <img
                      src="/logo.svg"
                      alt="Business Hustle"
                      className="h-8 w-8 rounded-lg object-contain"
                    />
                    Business Hustle
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 px-4 pt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.key}
                      href={`#${link.key}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Separator className="my-3" />
                  <Button className="rounded-full w-full">{t('nav.bookDemo')}</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* ============================================================ */}
        {/*  2. HERO SECTION                                              */}
        {/* ============================================================ */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-16"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/hero-bg.png)', opacity: 0.3 }}
            aria-hidden="true"
          />
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-pattern" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="mb-6 border-emerald/40 text-emerald px-4 py-1.5 text-sm"
              >
                {t('hero.badge')}
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('hero.title1')}
              <br />
              <span className="gradient-text">{t('hero.title2')}</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" className="rounded-full px-7 text-sm">
                {t('hero.cta1')}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-7 text-sm"
              >
                {t('hero.cta2')}
              </Button>
            </motion.div>
          </div>

          {/* Stat counters */}
          <motion.div
            className="relative z-10 mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            {[
              { value: c1, suffix: '+', ref: r1, label: t('hero.stat1') },
              { value: c2, suffix: '%', ref: r2, label: t('hero.stat2') },
              { value: c3, suffix: '/7', ref: r3, label: t('hero.stat3') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  <span ref={stat.ref}>
                    {stat.value}
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ============================================================ */}
        {/*  3. TRUSTED BY BAR                                            */}
        {/* ============================================================ */}
        <section className="border-y border-border bg-muted/30 py-6 sm:py-8">
          <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm sm:text-base text-muted-foreground font-medium">
              {t('trusted.text')}
            </p>
          </AnimatedSection>
        </section>

        {/* ============================================================ */}
        {/*  4. PLATFORM SECTION                                          */}
        {/* ============================================================ */}
        <section id="platform" className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('platform.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
                {t('platform.subtitle')}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Globe,
                  name: t('platform.card1.name'),
                  tag: t('platform.card1.tag'),
                  description: t('platform.card1.desc'),
                },
                {
                  icon: Target,
                  name: t('platform.card2.name'),
                  tag: t('platform.card2.tag'),
                  description: t('platform.card2.desc'),
                },
                {
                  icon: Workflow,
                  name: t('platform.card3.name'),
                  tag: t('platform.card3.tag'),
                  description: t('platform.card3.desc'),
                },
                {
                  icon: Database,
                  name: t('platform.card4.name'),
                  tag: t('platform.card4.tag'),
                  description: t('platform.card4.desc'),
                },
                {
                  icon: Users,
                  name: t('platform.card5.name'),
                  tag: t('platform.card5.tag'),
                  description: t('platform.card5.desc'),
                },
              ].map((item) => (
                <AnimatedSection key={item.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card className="group h-full border-border/60 bg-card/80 backdrop-blur-sm hover:border-emerald/40 transition-colors duration-300 py-0 gap-0">
                      <CardContent className="p-6 flex flex-col gap-4 h-full">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                            <item.icon className="size-5" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {item.description}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm font-medium text-emerald hover:gap-2 transition-all"
                        >
                          {t('platform.learnMore')}
                          <ArrowRight className="size-3.5" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  5. HOW IT WORKS                                              */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('how.title')}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
              {/* Connecting line (desktop only) */}
              <div
                className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-border to-transparent"
                aria-hidden="true"
              />

              {[
                {
                  num: '01',
                  title: t('how.step1.title'),
                  description: t('how.step1.desc'),
                },
                {
                  num: '02',
                  title: t('how.step2.title'),
                  description: t('how.step2.desc'),
                },
                {
                  num: '03',
                  title: t('how.step3.title'),
                  description: t('how.step3.desc'),
                },
              ].map((step, i) => (
                <AnimatedSection key={step.title}>
                  <div className="relative text-center md:text-left">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border-2 border-emerald/50 bg-background text-emerald font-bold text-lg mb-5 relative z-10">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  6. INDUSTRIES SECTION                                        */}
        {/* ============================================================ */}
        <section id="industries" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('industries.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-base sm:text-lg">
                {t('industries.subtitle')}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Landmark,
                  name: t('industries.finance'),
                  desc: t('industries.finance.desc'),
                },
                {
                  icon: Heart,
                  name: t('industries.health'),
                  desc: t('industries.health.desc'),
                },
                {
                  icon: Zap,
                  name: t('industries.mining'),
                  desc: t('industries.mining.desc'),
                },
                {
                  icon: Sprout,
                  name: t('industries.agri'),
                  desc: t('industries.agri.desc'),
                },
                {
                  icon: ShoppingBag,
                  name: t('industries.retail'),
                  desc: t('industries.retail.desc'),
                },
                {
                  icon: Truck,
                  name: t('industries.logistics'),
                  desc: t('industries.logistics.desc'),
                },
                {
                  icon: Building2,
                  name: t('industries.public'),
                  desc: t('industries.public.desc'),
                },
                {
                  icon: GraduationCap,
                  name: t('industries.edu'),
                  desc: t('industries.edu.desc'),
                },
              ].map((ind) => (
                <AnimatedSection key={ind.name}>
                  <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                    <Card className="group h-full border-border/50 bg-card/60 hover:border-emerald/30 transition-colors duration-300 py-0 gap-0 cursor-default">
                      <CardContent className="p-5 flex flex-col gap-3 h-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald shrink-0">
                          <ind.icon className="size-5" />
                        </div>
                        <h3 className="text-sm font-semibold leading-tight">
                          {ind.name}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {ind.desc}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  7. SOLUTIONS SHOWCASE                                         */}
        {/* ============================================================ */}
        <section id="solutions" className="py-20 sm:py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('solutions.title')}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: t('solutions.training.title'),
                  desc: t('solutions.training.desc'),
                  stat: t('solutions.training.stat'),
                  icon: Database,
                },
                {
                  title: t('solutions.automation.title'),
                  desc: t('solutions.automation.desc'),
                  stat: t('solutions.automation.stat'),
                  icon: Workflow,
                },
                {
                  title: t('solutions.contact.title'),
                  desc: t('solutions.contact.desc'),
                  stat: t('solutions.contact.stat'),
                  icon: Bot,
                },
              ].map((sol) => (
                <AnimatedSection key={sol.title}>
                  <Card className="group h-full border border-emerald/20 bg-card hover:border-emerald/50 transition-colors duration-300 py-0 gap-0">
                    <CardContent className="p-6 sm:p-8 flex flex-col gap-5 h-full">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                        <sol.icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {sol.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-border">
                        <span className="text-lg font-bold gradient-text">
                          {sol.stat}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  7.5 OUR SERVICES (from Solutions page)                      */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('services.title')}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
                {t('services.subtitle')}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: BookOpen,
                  name: t('services.hustleBasics.name'),
                  tag: t('services.hustleBasics.tag'),
                  desc: t('services.hustleBasics.desc'),
                  cta: t('services.hustleBasics.cta'),
                },
                {
                  icon: LayoutDashboard,
                  name: t('services.pm.name'),
                  tag: t('services.pm.tag'),
                  desc: t('services.pm.desc'),
                  cta: t('services.pm.cta'),
                },
                {
                  icon: Globe,
                  name: t('services.portal.name'),
                  tag: t('services.portal.tag'),
                  desc: t('services.portal.desc'),
                  cta: t('services.portal.cta'),
                },
                {
                  icon: MapPin,
                  name: t('services.local.name'),
                  tag: t('services.local.tag'),
                  desc: t('services.local.desc'),
                  cta: t('services.local.cta'),
                },
                {
                  icon: Target,
                  name: t('services.strategy.name'),
                  tag: t('services.strategy.tag'),
                  desc: t('services.strategy.desc'),
                  cta: t('services.strategy.cta'),
                },
              ].map((svc) => (
                <AnimatedSection key={svc.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card className="group h-full border-border/60 bg-card/80 backdrop-blur-sm hover:border-emerald/40 transition-colors duration-300 py-0 gap-0">
                      <CardContent className="p-6 flex flex-col gap-4 h-full">
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                            <svc.icon className="size-5" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            {svc.tag}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">{svc.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {svc.desc}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:gap-2 transition-all"
                        >
                          {svc.cta}
                          <ArrowRight className="size-3.5" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            {/* Trusted by clients bar */}
            <AnimatedSection className="mt-16 pt-12 border-t border-border">
              <div className="text-center mb-8">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {t('services.clients.title')}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t('services.clients.subtitle')}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {([
                  { name: 'Ubuntu Wellness', url: 'http://ubuntuwellness.com/' },
                  { name: 'Gabonewe', url: 'https://gabonewe.co.za/consult' },
                  { name: 'Institute of Kemetic & Marcus Garvey Studies', url: 'https://ikmgs.co.za/' },
                  { name: 'Khotso Seatlholo Institute', url: 'https://www.khotsoseatlholo.institute/' },
                  { name: 'BodyVision.online', url: 'https://www.bodyvision.online/' },
                  { name: 'Sunshine Foods', url: 'https://www.sunshinefoods.co.za/' },
                  { name: 'Smoothie On The Go', url: 'https://smoothieonthego.co.za/' },
                  { name: 'On-Safari Photography', url: 'https://www.on-safari.co.za/' },
                  { name: 'Cape Town MediSpa', url: '' },
                  { name: 'Trudy Christians', url: 'https://www.kloofstreet.online/trudy-christians' },
                  { name: 'Revive Studio', url: 'https://www.kloofstreet.online/revive-studio' },
                  { name: 'PostNet Gardens', url: 'https://www.kloofstreet.online/postnet-gardens' },
                  { name: 'Dr Dale Geoffreys', url: 'https://www.kloofstreet.online/dr-dale-geoffreys' },
                  { name: 'HS Physio', url: 'https://www.kloofstreet.online/hayley-schuter-physio' },
                  { name: 'Dr Wendy Dicks', url: 'https://www.kloofstreet.online/dr-wendy-dicks' },
                  { name: 'Honest Travel Experience', url: 'https://www.honesttravelexperience.com/' },
                ] as { name: string; url: string }[]).map((client) =>
                  client.url ? (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground/70 font-medium hover:text-gold transition-colors"
                    >
                      {client.name}
                    </a>
                  ) : (
                    <span
                      key={client.name}
                      className="text-sm text-muted-foreground/70 font-medium"
                    >
                      {client.name}
                    </span>
                  )
                )}
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Handshake className="size-3.5" />
                    <a
                      href="https://www.afrocentricsolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {t('services.clients.collab')}
                    </a>
                  </span>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  8. ABOUT SECTION                                             */}
        {/* ============================================================ */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Text */}
                <div>
                  <Quote className="size-8 text-emerald/60 mb-4" />
                  <blockquote className="text-lg sm:text-xl font-medium leading-relaxed italic text-foreground/90 mb-6">
                    &ldquo;{t('about.quote')}&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted-foreground mb-8">
                    {t('about.quoteAuthor')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t('about.description')}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {t('about.founded')}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:gap-2.5 transition-all"
                  >
                    {t('about.learnStory')}
                    <ArrowRight className="size-4" />
                  </a>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-border/60">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: 'url(/platform-bg.png)',
                        opacity: 0.5,
                      }}
                    />
                    <div className="absolute inset-0 dot-pattern" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald/10 text-emerald mb-6 animate-float">
                          <Bot className="size-10" />
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                          {t('about.builtIn')}{' '}
                          <span className="gradient-text">Africa</span>,
                          <br />
                          {t('about.forAfrica')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BUILT BY US, USED BY MANY                                    */}
        {/* ============================================================ */}
        <section id="portfolio" className="py-20 sm:py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Built by us, <span className="gradient-text">Used by many</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We don&apos;t just build for clients — we ship and operate our own
                platforms. Live products, real users, South African problems solved.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {([
                {
                  name: 'KloofStreet.online',
                  url: 'https://www.kloofstreet.online/',
                  desc: 'Curated directory for Kloof Street — ranked #22 on Time Out\u2019s World\u2019s Coolest Streets. 50+ businesses, AI concierge.',
                  tag: 'Hyperlocal',
                },
                {
                  name: 'FundingStatsSA',
                  url: 'https://www.fundingstatssa.online/',
                  desc: 'Civic dashboard tracking South African development funding — verified figures, clear visualisations.',
                  tag: 'Civic Tech',
                },
                {
                  name: 'OpenTender ZA',
                  url: 'https://www.opentender.online/',
                  desc: 'Procurement transparency with supplier verification and trust ratings across public tenders.',
                  tag: 'Civic Tech',
                },
                {
                  name: 'PoliceData ZA',
                  url: 'https://www.policedata.online/',
                  desc: 'Crime statistics made accessible — real SAPS figures, interactive heat maps, launched Human Rights Day 2026.',
                  tag: 'Civic Tech',
                },
                {
                  name: 'BlackBiz',
                  url: 'https://blackbiz.co.za/',
                  desc: 'South Africa\u2019s Black Business Intelligence Platform — verified directory, business feed, and growth tools.',
                  tag: 'Platform',
                },
                {
                  name: 'MoveCape.online',
                  url: 'https://www.movecape.online/',
                  desc: 'Cape Town on the move — a hyperlocal platform connecting people to the city.',
                  tag: 'Hyperlocal',
                },
              ] as { name: string; url: string; desc: string; tag: string }[]).map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full border-border/60 bg-card/80 backdrop-blur-sm group-hover:border-gold/40 transition-colors py-0 gap-0">
                    <CardContent className="p-6 flex flex-col gap-3 h-full">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                          <Globe className="size-5" />
                        </div>
                        <Badge variant="outline" className="text-xs border-border text-muted-foreground">
                          {p.tag}
                        </Badge>
                      </div>
                      <h3 className="font-semibold flex items-center gap-1.5">
                        {p.name}
                        <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.desc}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://app.businesshustle.co.za/shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:gap-2.5 transition-all"
              >
                Browse our online store
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <IdeaGenerator />

        {/* ============================================================ */}
        {/*  9. TESTIMONIALS                                              */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {t('testimonials.title')}
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  quote: t('testimonials.quote1'),
                  author: t('testimonials.author1'),
                  role: t('testimonials.role1'),
                },
                {
                  quote: t('testimonials.quote2'),
                  author: t('testimonials.author2'),
                  role: t('testimonials.role2'),
                },
                {
                  quote: t('testimonials.quote3'),
                  author: t('testimonials.author3'),
                  role: t('testimonials.role3'),
                },
              ].map((t) => (
                <AnimatedSection key={t.author}>
                  <Card className="group h-full border-border/60 hover:border-emerald/30 transition-colors duration-300 py-0 gap-0">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      {/* Stars */}
                      <div className="flex gap-0.5 text-gold">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm font-semibold">{t.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {t.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  10. RESOURCES HUB                                           */}
        {/* ============================================================ */}
        <ResourcesHub />

        {/* ============================================================ */}
        {/*  11. NEWSLETTER / CTA                                         */}
        {/* ============================================================ */}
        <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                {t('contact.title1')}
                <br />
                <span className="gradient-text">{t('contact.title2')}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto">
                {t('contact.subtitle')}
              </p>
              <form
                onSubmit={(e: FormEvent) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder={t('contact.placeholder')}
                  required
                  className="rounded-full h-11 px-5 bg-card border-border"
                />
                <Button type="submit" className="rounded-full h-11 px-7 whitespace-nowrap">
                  {t('contact.subscribe')}
                </Button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                {t('contact.noSpam')}
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/*  12. FOOTER                                                   */}
      {/* ============================================================ */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="/logo.svg"
                  alt="Business Hustle"
                  className="h-9 w-9 rounded-lg object-contain"
                />
                <span className="font-semibold text-lg tracking-tight">
                  Business Hustle
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
                {t('footer.brandDesc')}
              </p>
              <div className="flex gap-3">
                {['twitter', 'linkedin', 'github'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    {social === 'twitter' && (
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {social === 'linkedin' && (
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social === 'github' && (
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2.5">
                {[t('footer.serviceLinks.geo'), t('footer.serviceLinks.s2s'), t('footer.serviceLinks.talent'), t('footer.serviceLinks.local'), t('footer.serviceLinks.automation')].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2.5">
                {[t('footer.about'), t('footer.careers'), t('footer.partnerships'), t('footer.blog'), t('footer.contactLink')].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2.5">
                {([
                  { label: t('footer.privacy'), href: '/privacy' },
                  { label: t('footer.terms'), href: '/terms' },
                  { label: t('footer.cookies'), href: '/cookies' },
                ] as { label: string; href: string }[]).map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://app.businesshustle.co.za/wp-content/uploads/2025/12/BHW-PAIA-Manual-Integrated-with-POPIA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t('footer.paia')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}