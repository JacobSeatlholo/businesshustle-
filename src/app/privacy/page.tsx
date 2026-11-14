import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy | Business Hustle',
  description:
    'How Simple Eternity Holdings (Pty) Ltd t/a Business Hustle collects, uses, and protects personal information under POPIA.',
}

const PAIA_PDF =
  'https://app.businesshustle.co.za/wp-content/uploads/2026/11/PAIA_Manual_v2.0_Business_Hustle.pdf'

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effective="14 November 2026">
      <section>
        <h2>1. Who we are</h2>
        <p>
          Business Hustle (www.businesshustle.co.za) is a provider of software
          development solutions and digital marketing services and is a product
          of Simple Eternity Holdings (Pty) Ltd (Registration No.
          2017/652523/07), a company registered under the Companies Act 71 of
          2008 in the Republic of South Africa, with its registered office at
          99 Kloof Street, Gardens, Cape Town, 8001 (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;Business Hustle&rdquo;).
        </p>
        <p>
          This policy applies to Business Hustle and our family of platforms,
          including Hustle Portal (hustleportal.online), Business Hustle Local
          (app.businesshustle.co.za), KloofStreet Online (kloofstreet.online),
          BreeStreet Online (breestreet.online), Longstreet Online
          (longstreet.online), Bo-Kaap Online (bo-kaap.online), Camps Bay
          Online (campsbay.online), Century City Online (centurycity.online),
          Longmarket Online (longmarket.online), Maboneng Online
          (maboneng.online), and Sandton Online (sandton.online), together
          with any other platform listed in our PAIA Manual.
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
          <li>Identity, registration, and licence numbers, dates of birth, and FICA documentation where required by law</li>
          <li>Banking and invoicing details for client engagements</li>
          <li>BEE certificates and tender documents supplied in the course of business</li>
          <li>Business and social media profile information relevant to our services</li>
          <li>Employee and candidate information where required for recruitment or employment, such as contact details, identity or passport numbers, and lawful screening checks</li>
          <li>Technical information generated through your use of our websites (see our Cookie Policy)</li>
        </ul>
      </section>

      <section>
        <h2>3. Why we process it: our legal bases under POPIA</h2>
        <p>
          We only process personal information where a ground in section 11(1)
          of POPIA applies. POPIA&rsquo;s grounds are South African law and
          differ from the legal bases in the EU GDPR:
        </p>
        <ul>
          <li><strong>Consent</strong> (section 11(1)(a)): voluntary, specific, and informed</li>
          <li><strong>Contractual necessity</strong> (section 11(1)(b)): processing needed to conclude or perform a contract with you</li>
          <li><strong>Legal obligation</strong> (section 11(1)(c)): required by South African or other applicable law</li>
          <li><strong>Your legitimate interest</strong> (section 11(1)(d)): processing that protects a legitimate interest of yours</li>
          <li><strong>Public-law duty</strong> (section 11(1)(e)): listed for completeness only. It applies to public bodies and not to us as a private company</li>
          <li><strong>Legitimate interests</strong> (section 11(1)(f)): our own or a third party&rsquo;s legitimate interests, provided yours are not overridden. Where we rely on this ground, we support it with a documented Legitimate Interests Assessment</li>
        </ul>
        <p>
          Every processing activity is mapped to a specific ground and recorded
          in our processing register, as described in our integrated PAIA/POPIA
          Manual.
        </p>
      </section>

      <section>
        <h2>4. Special personal information and children&rsquo;s data</h2>
        <p>
          We do not process special personal information (such as health,
          biometric, or religious data) unless an exception in section 32 of
          POPIA applies: explicit consent, employment law obligations,
          legitimate activities of foundations or associations, data manifestly
          made public by you, or the establishment, exercise, or defence of
          legal claims.
        </p>
        <p>
          We do not process the personal information of a child (a person
          under 18) unless an exception in section 35 of POPIA applies, for
          example the consent of a competent person such as a parent or
          guardian. Where our programmes, including training and development,
          involve participants who may be minors, we obtain a competent
          person&rsquo;s consent before processing takes place and keep a
          record of those consents.
        </p>
      </section>

      <section>
        <h2>5. Direct marketing</h2>
        <p>In line with section 69 of POPIA and our internal rules:</p>
        <ul>
          <li>Existing customers: electronic marketing of our own similar goods or services is allowed under section 69(3) of POPIA only where your details were collected during a sale, you could object at the time of collection, and every message includes a way to opt out</li>
          <li>New prospects: we get your prior consent (opt in) before sending any electronic direct marketing</li>
          <li>You may also refuse or pre-emptively block unwanted direct marketing under section 11 of the Consumer Protection Act 68 of 2008</li>
        </ul>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>Under POPIA you have the right to:</p>
        <ul>
          <li>Be notified when your personal information is collected (section 18)</li>
          <li>Access the personal information we hold about you, including the categories of third parties who have had access (section 23)</li>
          <li>Request the correction or deletion of personal information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading, or unlawfully obtained (section 24)</li>
          <li>Object to the processing of your personal information (section 26)</li>
          <li>Object to the processing of your personal information for direct marketing (sections 26 and 69)</li>
          <li>Not be subject, in the circumstances POPIA sets out, to a decision based only on automated processing (section 28)</li>
          <li>Complain to the Information Regulator and use civil remedies (sections 73, 74, and 99)</li>
        </ul>
        <p>
          POPIA does not create a statutory right of data portability or a
          general right to restrict processing. Even so, as good practice we
          will help you get your information in a structured, commonly used
          format, or pause processing while we resolve a query for you.
        </p>
        <p>
          POPIA requests are simple and free. Email the Information Officer at{' '}
          <a href="mailto:ceo@businesshustle.co.za">ceo@businesshustle.co.za</a>{' '}
          (for example: &ldquo;What personal data do you have about
          me?&rdquo;) and we will respond within a reasonable time. Requests
          for company records (non-personal information) follow the formal
          PAIA procedure described in our{' '}
          <a href={PAIA_PDF} target="_blank" rel="noopener noreferrer">
            PAIA Manual
          </a>
          , using the prescribed Form 2. We respond within 30 days, which may
          be extended by a further 30 days for large or complex requests, and
          prescribed fees may apply.
        </p>
        <p>
          You may also lodge a complaint with the Information Regulator (South
          Africa) at www.inforegulator.org.za, by email to
          POPIAComplaints@inforegulator.org.za (POPIA matters) or
          PAIAComplaints@inforegulator.org.za (PAIA matters).
        </p>
      </section>

      <section>
        <h2>7. How we protect your information</h2>
        <p>Our IT practices include:</p>
        <ul>
          <li>Password and access controls</li>
          <li>Network security controls</li>
          <li>Physical security at our premises</li>
          <li>Regular software updates, patch management, and virus/malware protection</li>
          <li>A disaster recovery and back-up policy</li>
        </ul>
        <p>
          Where personal information is processed on our behalf by an operator,
          such as a hosting, payment, or analytics provider, we sign a written
          contract with that operator, as required by section 21 of POPIA,
          before processing takes place.
        </p>
      </section>

      <section>
        <h2>8. Data breaches</h2>
        <p>
          We operate a documented breach response protocol. In the first 24
          hours we contain the incident, preserve forensic evidence, and change
          compromised credentials. We then assess the scope of the compromise
          and the data subjects who may be affected, and record every incident
          in our incident register. We notify the Information Regulator and
          affected data subjects in writing as soon as reasonably possible, and
          we aim to notify within 72 hours, using the form and guidance
          prescribed by the Regulator. After every incident we review and
          strengthen our safeguards as necessary.
        </p>
      </section>

      <section>
        <h2>9. International transfers</h2>
        <p>
          We only transfer personal information across borders where a
          condition in section 72 of POPIA applies: the recipient is subject to
          a law, binding corporate rules, or a binding agreement that gives a
          level of protection similar to POPIA; you have consented to the
          transfer; the transfer is needed to perform a contract in your
          interest; or the transfer is for your benefit where your consent
          cannot reasonably be obtained. If none of these conditions is met,
          the transfer does not proceed. Our Information Officer records every
          transfer, the destination country, and the condition relied upon.
        </p>
      </section>

      <section>
        <h2>10. Retention and governance</h2>
        <p>
          We retain personal information only as long as necessary for the
          purpose collected or as required by law. Before any new processing
          operation is launched, our Information Officer screens it against
          the prior-authorisation requirements of section 57 of POPIA and
          assesses its necessity, proportionality, and risks. Our annual
          compliance programme includes privacy training, third-party vendor
          and operator reviews, policy framework reviews, cookie audits,
          internal audits with board reporting, and breach tabletop exercises.
        </p>
      </section>

      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The current version
          will always be available on this page. Our integrated PAIA/POPIA
          Manual, Version 2.0 (effective 14 November 2026), is reviewed at
          least every two years, and earlier when legislation or our
          operations change materially. The next scheduled review is November
          2027.
        </p>
      </section>
    </LegalPage>
  )
}
