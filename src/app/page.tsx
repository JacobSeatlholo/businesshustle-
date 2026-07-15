'use client'

import { useState, useEffect, useRef, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Database,
  Workflow,
  Users,
  Activity,
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
} from 'lucide-react'
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
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Platform', 'Solutions', 'Industries', 'About', 'Contact']

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
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald text-emerald-foreground font-bold text-sm">
              BH
            </div>
            <span className="hidden sm:inline font-semibold text-lg tracking-tight">
              Business Hustle
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" className="rounded-full px-5">
              Book a Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald text-emerald-foreground font-bold text-xs">
                    BH
                  </div>
                  Business Hustle
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {link}
                  </a>
                ))}
                <Separator className="my-3" />
                <Button className="rounded-full w-full">Book a Demo</Button>
              </div>
            </SheetContent>
          </Sheet>
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
                Explore. Adapt. Evolve.
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI Infrastructure
              <br />
              <span className="gradient-text">for African Business</span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              From your first idea to AI-powered revenue — we build the systems
              that transform data and manual processes into intelligent,
              agent-ready workflows.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button size="lg" className="rounded-full px-7 text-sm">
                Book a Demo
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-7 text-sm"
              >
                Explore Platform
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
              { value: c1, suffix: '+', ref: r1, label: 'Businesses Transformed' },
              { value: c2, suffix: '%', ref: r2, label: 'Client Retention' },
              { value: c3, suffix: '/7', ref: r3, label: 'AI Operations' },
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
              Trusted by leading organisations across Southern Africa
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
                Building Blocks, Not Black Boxes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
                Deploy on your existing stack, configure for your operations,
                train on your data. Infrastructure that evolves with AI.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Database,
                  name: 'Vortex',
                  tag: 'Data Platform',
                  description:
                    'Get your messy, multi-source data machine-ready. Pulls scattered data into one governed, AI-ready platform.',
                },
                {
                  icon: Workflow,
                  name: 'Flux',
                  tag: 'Process Builder',
                  description:
                    'Document manual workflows for automation. Visual map of how work gets done, running every step automatically.',
                },
                {
                  icon: Users,
                  name: 'Nexus',
                  tag: 'Expert Network',
                  description:
                    'A curated network of vetted AI specialists and domain experts deployed on demand for your projects.',
                },
                {
                  icon: Activity,
                  name: 'Pulse',
                  tag: 'Evaluations',
                  description:
                    'Run rigorous evaluation for quality, safety, and accuracy. Measure AI performance against your actual use cases.',
                },
                {
                  icon: Bot,
                  name: 'Axon',
                  tag: 'AI Agents',
                  description:
                    'Build governed AI agents that mirror your workflows. Deploy agents that hand off finished results to your systems.',
                },
              ].map((item, i) => (
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
                          Learn more
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
                Weeks to Working AI, Not Months of Planning
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
                  title: 'Discover',
                  description:
                    'We audit your data, workflows, and operations to identify where AI creates the most impact.',
                },
                {
                  num: '02',
                  title: 'Build',
                  description:
                    'Our team designs, trains, and deploys custom AI solutions integrated with your existing systems.',
                },
                {
                  num: '03',
                  title: 'Scale',
                  description:
                    'Monitor, evaluate, and continuously improve. Your AI infrastructure grows as your business evolves.',
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
                Any Sector, Any Stack
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-base sm:text-lg">
                Built for the industries driving Africa&apos;s growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Landmark,
                  name: 'Financial Services',
                  desc: 'Compliance, risk, and customer insight — AI that meets regulatory demands.',
                },
                {
                  icon: Heart,
                  name: 'Healthcare',
                  desc: 'Custom AI for healthcare operations, diagnostics support, and patient flow.',
                },
                {
                  icon: Zap,
                  name: 'Mining & Energy',
                  desc: 'Catch hazards, cut losses, prevent downtime with predictive intelligence.',
                },
                {
                  icon: Sprout,
                  name: 'Agriculture',
                  desc: 'Forecast yields, optimise supply chains, and monitor crops with computer vision.',
                },
                {
                  icon: ShoppingBag,
                  name: 'Retail & E-commerce',
                  desc: 'Forecast demand, automate inventory, and personalise customer experiences.',
                },
                {
                  icon: Truck,
                  name: 'Logistics',
                  desc: 'Route optimisation, fleet management, and real-time supply chain visibility.',
                },
                {
                  icon: Building2,
                  name: 'Public Sector',
                  desc: 'Cut red tape, connect systems, and serve citizens better with AI.',
                },
                {
                  icon: GraduationCap,
                  name: 'Education',
                  desc: 'Personalised learning paths, automated assessment, and institutional analytics.',
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
                Featured Solutions
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'AI Training & Data',
                  desc: 'Research-grade annotation, training, and evaluation for machine learning models.',
                  stat: '100+ Models Trained',
                  icon: Database,
                },
                {
                  title: 'Back-Office Automation',
                  desc: 'Automate complex or tedious work that buries your team. Handle messy data with precision.',
                  stat: '70% Time Reduction',
                  icon: Workflow,
                },
                {
                  title: 'Intelligent Contact Centre',
                  desc: 'Unified data, automated QA, sentiment analysis, and AI voice agents.',
                  stat: '3x Efficiency Gains',
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
                    &ldquo;Think of technology as a verb, not a noun. It provides
                    the tools, creative people provide the imagination.&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted-foreground mb-8">
                    — Red Burns
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Business Hustle is a complete AI solutions and digital
                    transformation provider for African enterprises. From
                    specialised AI agent development to data platform
                    architecture, we handle it all — so you can focus on what
                    matters most: your work.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Founded in South Africa, serving the continent.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:gap-2.5 transition-all"
                  >
                    Learn About Our Story
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
                          Built in{' '}
                          <span className="gradient-text">Africa</span>,
                          <br />
                          for Africa
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
        {/*  9. TESTIMONIALS                                              */}
        {/* ============================================================ */}
        <section className="py-20 sm:py-28 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                What Our Partners Say
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  quote:
                    "Business Hustle's AI automation reduced our invoice processing time by 80%. Their team understood our unique challenges and delivered a solution that actually works.",
                  author: 'Thabo M.',
                  role: 'CFO, TechLogistics SA',
                },
                {
                  quote:
                    'The data platform they built gave us visibility we never had before. We can now make decisions in hours, not weeks.',
                  author: 'Lindiwe K.',
                  role: 'Head of Operations, AgriGrow',
                },
                {
                  quote:
                    'Their approach to AI agents transformed our customer service. Response times dropped 60% while satisfaction scores hit all-time highs.',
                  author: 'Michael D.',
                  role: 'CEO, FinServe Africa',
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
        {/*  10. NEWSLETTER / CTA                                         */}
        {/* ============================================================ */}
        <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 glow" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Ready to Make AI Real
                <br />
                <span className="gradient-text">for Your Business?</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto">
                Join 5,000+ African business leaders receiving insights at the
                bleeding edge of enterprise AI.
              </p>
              <form
                onSubmit={(e: FormEvent) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="rounded-full h-11 px-5 bg-card border-border"
                />
                <Button type="submit" className="rounded-full h-11 px-7 whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* ============================================================ */}
      {/*  11. FOOTER                                                   */}
      {/* ============================================================ */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald text-emerald-foreground font-bold text-sm">
                  BH
                </div>
                <span className="font-semibold text-lg tracking-tight">
                  Business Hustle
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
                AI infrastructure and automation solutions built for African
                enterprises. Part of Simple Eternity Holdings (Pty) Ltd.
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

            {/* Platform */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Platform</h4>
              <ul className="space-y-2.5">
                {['Vortex', 'Flux', 'Nexus', 'Pulse', 'Axon'].map((link) => (
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
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5">
                {['About', 'Careers', 'Partnerships', 'Blog', 'Contact'].map(
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
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Cookie Policy',
                ].map((link) => (
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © 2025 Business Hustle Ltd. All rights reserved. Part of Simple
              Eternity Holdings (Pty) Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}