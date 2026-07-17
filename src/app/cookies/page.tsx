import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Cookie Policy | Business Hustle',
  description:
    'How Business Hustle uses cookies and similar technologies across its websites and platforms.',
}

export default function CookiePolicy() {
  return (
    <LegalPage title="Cookie Policy" effective="1 January 2026">
      <section>
        <h2>1. What cookies are</h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. Similar technologies include local storage and tracking
          pixels. They help websites function, remember your preferences, and
          understand how they are used.
        </p>
      </section>

      <section>
        <h2>2. How we use them</h2>
        <p>
          Across the Business Hustle family of websites and platforms we use:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary cookies</strong> — required for core
            functionality such as security, session management, and remembering
            preferences like light/dark mode and language. These cannot be
            switched off.
          </li>
          <li>
            <strong>Functional cookies</strong> — remember choices you make
            (such as form details you have entered) to improve your experience.
          </li>
          <li>
            <strong>Analytics cookies</strong> — help us understand how
            visitors use our sites so we can improve them. These are used only
            with your consent.
          </li>
        </ul>
        <p>
          We do not sell personal information collected through cookies.
        </p>
      </section>

      <section>
        <h2>3. Your choices and consent</h2>
        <p>
          In line with our digital compliance programme under the Protection of
          Personal Information Act 4 of 2013:
        </p>
        <ul>
          <li>A compliant cookie consent banner is implemented on our websites</li>
          <li>A cookie preference centre is available so you can manage non-essential cookies</li>
          <li>We conduct regular cookie audits</li>
          <li>Third-party vendors providing tracking technologies are subject to our vendor management reviews</li>
        </ul>
        <p>
          You can also control cookies through your browser settings, including
          blocking or deleting them. Blocking strictly necessary cookies may
          affect how our websites function.
        </p>
      </section>

      <section>
        <h2>4. Third-party services</h2>
        <p>
          Some features rely on third-party services (for example, form
          processing, analytics, or embedded content) that may set their own
          cookies. These providers are reviewed under our vendor management
          process, and their use of your information is governed by their own
          policies.
        </p>
      </section>

      <section>
        <h2>5. Changes to this policy</h2>
        <p>
          We may update this Cookie Policy from time to time, for example when
          we add new features or providers. The current version will always be
          available on this page.
        </p>
      </section>
    </LegalPage>
  )
}
