import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Terms of Service | Business Hustle',
  description:
    'Terms governing the use of Business Hustle websites, platforms, and services operated by Simple Eternity Holdings (Pty) Ltd.',
}

const PAIA_PDF =
  'https://app.businesshustle.co.za/wp-content/uploads/2025/12/BHW-PAIA-Manual-Integrated-with-POPIA.pdf'

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effective="1 January 2026">
      <section>
        <h2>1. Agreement</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
          and use of the websites, platforms, and services of Simple Eternity
          Holdings (Pty) Ltd t/a Business Hustle (Registration No.
          2017/652523/07), including businesshustle.co.za, Hustle Portal,
          Business Hustle Local, KloofStreet Online, BreeStreet Online, and our
          other platforms (collectively, the &ldquo;Services&rdquo;). By using
          the Services you agree to these Terms. If you do not agree, do not
          use the Services.
        </p>
      </section>

      <section>
        <h2>2. Our services</h2>
        <p>
          Business Hustle provides software development solutions and digital
          marketing services, including websites, platforms, directories,
          AI-powered tools, and related digital infrastructure. Specific client
          engagements are governed by their own proposals, quotes, or service
          agreements; where those conflict with these Terms, the specific
          agreement prevails for that engagement.
        </p>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services unlawfully or in breach of any applicable law, including the Electronic Communications and Transactions Act 25 of 2002</li>
          <li>Attempt to gain unauthorised access to our systems, accounts, or data</li>
          <li>Interfere with or disrupt the integrity or performance of the Services</li>
          <li>Scrape, harvest, or misuse personal information of other users</li>
          <li>Submit false, misleading, or infringing content</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          All software, source code, designs, content, trade marks, and other
          materials comprising the Services are owned by or licensed to Simple
          Eternity Holdings (Pty) Ltd and are protected by the Copyright Act 98
          of 1978, the Trade Marks Act 194 of 1993, and related legislation.
          Software computer programs owned by Simple Eternity Holdings are
          protected by copyright and may not be copied, modified, or
          distributed without our written consent. Nothing in these Terms
          transfers any intellectual property rights to you except as expressly
          agreed in writing.
        </p>
      </section>

      <section>
        <h2>5. AI-powered tools</h2>
        <p>
          Some of our Services include AI-generated content (for example, our
          Idea Generator). AI outputs are provided for general informational
          purposes only, may contain inaccuracies, and do not constitute
          professional, financial, or legal advice. You are responsible for
          evaluating any AI-generated suggestions before acting on them.
        </p>
      </section>

      <section>
        <h2>6. Third-party links and platforms</h2>
        <p>
          The Services may link to third-party websites, including client and
          partner platforms. We do not control and are not responsible for the
          content, policies, or practices of third-party sites.
        </p>
      </section>

      <section>
        <h2>7. Consumer protection</h2>
        <p>
          Nothing in these Terms limits any rights you may have under the
          Consumer Protection Act 68 of 2008 that cannot lawfully be limited or
          excluded.
        </p>
      </section>

      <section>
        <h2>8. Disclaimers and limitation of liability</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo;. To the maximum extent permitted by law, Simple
          Eternity Holdings (Pty) Ltd disclaims all warranties, whether express
          or implied, and shall not be liable for any indirect, incidental,
          special, or consequential damages arising from your use of the
          Services. Our total aggregate liability in respect of any claim shall
          be limited to the amount you paid us for the Service giving rise to
          the claim in the preceding twelve months.
        </p>
      </section>

      <section>
        <h2>9. Privacy and information requests</h2>
        <p>
          Our processing of personal information is governed by our Privacy
          Policy and our integrated{' '}
          <a href={PAIA_PDF} target="_blank" rel="noopener noreferrer">
            PAIA Manual
          </a>
          . Requests for access to records held by Simple Eternity Holdings are
          handled in terms of the Promotion of Access to Information Act 2 of
          2000, using the prescribed Form 2, and may be subject to prescribed
          request fees and deposits. Access to requested records is granted
          once applicable fees have been paid in full.
        </p>
      </section>

      <section>
        <h2>10. Suspension and termination</h2>
        <p>
          We may suspend or terminate access to the Services where these Terms
          are breached, where required by law, or where continued provision
          poses risk to the Services or other users.
        </p>
      </section>

      <section>
        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the Republic of South Africa,
          and you consent to the jurisdiction of the South African courts.
        </p>
      </section>

      <section>
        <h2>12. Changes</h2>
        <p>
          We may amend these Terms from time to time. Continued use of the
          Services after changes are published constitutes acceptance of the
          amended Terms.
        </p>
      </section>
    </LegalPage>
  )
}
