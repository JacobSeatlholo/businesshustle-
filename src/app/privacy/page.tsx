import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | Business Hustle',
  description:
    'How Simple Eternity Holdings (Pty) Ltd t/a Business Hustle collects, uses, and protects personal information under POPIA.',
}

const PAIA_PDF =
  'https://app.businesshustle.co.za/wp-content/uploads/2025/12/BHW-PAIA-Manual-Integrated-with-POPIA.pdf'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effective="1 January 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Business Hustle (www.businesshustle.co.za) is a provider of software
          development solutions and digital marketing services and is a product
          of Simple Eternity Holdings (Pty) Ltd (Registration No.
          2017/652523/07), a company registered under the Companies Act 71 of
          2008 in the Republic of South Africa (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;Business Hustle&rdquo;).
        </p>
        <p>
          This policy applies to Business Hustle and our family of platforms,
          including Hustle Portal (hustleportal.online), Business Hustle Local
          (app.businesshustle.co.za), KloofStreet Online (kloofstreet.online),
          BreeStreet Online (breestreet.online), and our other hyperlocal
          platforms as listed in our PAIA Manual.
        </p>
        <p>
          The Chief Executive Officer, Mr Tselakgosi Jacob Seatlholo, is our
          designated Information Officer in terms of the Protection of Personal
          Information Act 4 of 2013 (&ldquo;POPIA&rdquo;) and the Promotion of
          Access to Information Act 2 of 2000 (&ldquo;PAIA&rdquo;), registered
          with the Information Regulator.
        </p>
      </section>

      <section>
        <h2>2. What personal information we collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>Names, email addresses, and telephone numbers (e.g. when you submit our contact or newsletter forms)</li>
          <li>Physical and postal addresses</li>
          <li>Identity or registration numbers, and FICA documentation where required by law</li>
          <li>Banking and invoicing details for client engagements</li>
          <li>BEE certificates and tender documents supplied in the course of business</li>
          <li>Business and social media profile information relevant to our services</li>
          <li>Technical information generated through your use of our websites (see our Cookie Policy)</li>
        </ul>
      </section>

      <section>
        <h2>3. Why we process it — our six legal bases</h2>
        <p>
          We only process personal information where a lawful basis exists
          under POPIA:
        </p>
        <ul>
          <li><strong>Consent</strong> — freely given, specific, informed, and unambiguous</li>
          <li><strong>Contractual necessity</strong> — processing needed to fulfil a contract with you</li>
          <li><strong>Legal obligation</strong> — required by South African or other applicable law</li>
          <li><strong>Vital interests</strong> — to protect someone&rsquo;s life</li>
          <li><strong>Public task</strong> — in the public interest or under official authority</li>
          <li><strong>Legitimate interest</strong> — supported by a documented Legitimate Interests Assessment</li>
        </ul>
        <p>
          Every processing activity we undertake is mapped to a specific legal
          basis in our integrated PAIA/POPIA Manual.
        </p>
      </section>

      <section>
        <h2>4. Special category information</h2>
        <p>
          We do not process special personal information (such as health,
          biometric, or religious data) unless a POPIA exception applies:
          explicit consent, employment law obligations, legitimate activities
          of foundations or associations, data manifestly made public by you,
          or the establishment, exercise, or defence of legal claims.
        </p>
      </section>

      <section>
        <h2>5. Direct marketing</h2>
        <p>In line with POPIA and our internal rules:</p>
        <ul>
          <li>Existing customers: a soft opt-in applies and every message includes the ability to opt out</li>
          <li>New prospects: we require your explicit consent before marketing to you</li>
          <li>We will ask for consent at most once before marketing</li>
        </ul>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>As a data subject you have the right to:</p>
        <ul>
          <li>Be informed about how your information is processed</li>
          <li>Access the personal information we hold about you</li>
          <li>Request correction, deletion, or destruction of your personal information</li>
          <li>Restrict or object to processing</li>
          <li>Data portability</li>
          <li>Not be subject solely to automated decision-making</li>
        </ul>
        <p>
          POPIA requests are simple and free — email the Information Officer at{' '}
          <a href="mailto:ceo@businesshustle.co.za">ceo@businesshustle.co.za</a>{' '}
          (e.g. &ldquo;What personal data do you have about me?&rdquo;) and we
          will respond within a reasonable timeframe. Requests for company
          records (non-personal information) follow the formal PAIA procedure
          described in our{' '}
          <a href={PAIA_PDF} target="_blank" rel="noopener noreferrer">
            PAIA Manual
          </a>
          , using the prescribed Form 2, which may involve prescribed fees and
          a 30-day response period.
        </p>
        <p>
          You may also lodge a complaint with the Information Regulator (South
          Africa).
        </p>
      </section>

      <section>
        <h2>7. How we protect your information</h2>
        <p>Our IT practices include:</p>
        <ul>
          <li>Password and network security controls</li>
          <li>Physical security at our premises</li>
          <li>Regular software updates and virus/malware protection</li>
          <li>A disaster recovery and back-up policy</li>
        </ul>
      </section>

      <section>
        <h2>8. Data breaches</h2>
        <p>
          We operate a documented breach response protocol: containment and
          forensic preservation within the first 24 hours, assessment of scope
          and affected data subjects, and — for high-risk incidents —
          notification of the Information Regulator within 72 hours, with
          affected individuals informed as required by law.
        </p>
      </section>

      <section>
        <h2>9. International transfers</h2>
        <p>
          We only transfer personal information across borders where the
          recipient is subject to laws, binding corporate rules, or contractual
          safeguards providing an adequate level of protection as required
          under section 72 of POPIA. Where no adequate protection exists, the
          transfer does not proceed.
        </p>
      </section>

      <section>
        <h2>10. Retention and governance</h2>
        <p>
          We retain personal information only as long as necessary for the
          purpose collected or as required by law. Our compliance programme
          includes annual privacy training, third-party vendor reviews, policy
          framework reviews, and internal audits with board reporting.
        </p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The current version will
          always be available on this page, and our PAIA Manual is reviewed at
          least every two years (next review: January 2028).
        </p>
      </section>
    </LegalPage>
  )
}
