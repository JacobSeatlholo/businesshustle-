import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function LegalPage({
  title,
  effective,
  children,
}: {
  title: string
  effective: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="size-4" />
          Back to Business Hustle
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Simple Eternity Holdings (Pty) Ltd t/a Business Hustle · Registration
          No. 2017/652523/07 · Effective: {effective}
        </p>
        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-2 [&_h3]:text-base [&_h3]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
        <div className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            Questions? Contact the Information Officer: Mr Tselakgosi Jacob
            Seatlholo · <a href="mailto:ceo@businesshustle.co.za" className="underline underline-offset-2">ceo@businesshustle.co.za</a> ·
            +27 21 422 5140 · 99 Kloof Street, Gardens, Cape Town, 8001
          </p>
        </div>
      </div>
    </div>
  )
}
