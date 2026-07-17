export type Locale = 'en' | 'af' | 'zu' | 'fr' | 'pt' | 'sw' | 'ar'

export interface LocaleInfo {
  code: Locale
  name: string
  nativeName: string
  flag: string
  dir: 'ltr' | 'rtl'
}

export const locales: LocaleInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇿🇦', dir: 'ltr' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦', dir: 'ltr' },
  { code: 'zu', name: 'isiZulu', nativeName: 'isiZulu', flag: '🇿🇦', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
]

type TranslationMap = Record<string, string>
type Translations = Record<Locale, TranslationMap>

export const translations: Translations = {
  en: {
    // Nav
    'nav.platform': 'What We Build',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Get Started',
    'nav.openMenu': 'Open menu',

    // Hero
    'hero.badge': 'Explore. Adapt. Evolve.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'We bridge local business and frontier AI technology. From neighbourhood directories to open-source workflow automation — grounded in Batho Pele principles.',
    'hero.cta1': 'Get Started',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Working with founders and organisations who value clarity, structure, and results',

    // Platform (dual-engine)
    'platform.title': 'Two Engines. One Mission.',
    'platform.subtitle':
      'Street-level digital infrastructure that gives local businesses ownership — and AI operations that automate messy workflows with humans in the loop.',
    'platform.card1.name': 'Local Digital Infrastructure',
    'platform.card1.tag': 'Pillar A — The Now',
    'platform.card1.desc':
      'We build street-level digital layers and directories using open-source tools. Think KloofStreet.online — local businesses get digital ownership, not just a website.',
    'platform.card2.name': 'GEO Optimisation',
    'platform.card2.tag': 'Pillar A — Discovery',
    'platform.card2.desc':
      'We structure local business data so AI models and LLM assistants can read, cite, and recommend them. No local business gets left invisible.',
    'platform.card3.name': 'S2S Workflow Automation',
    'platform.card3.tag': 'Pillar B — The Next',
    'platform.card3.desc':
      'Our Services-to-Software operation automates messy enterprise workflows using open-source AI. Skilled humans stay in the loop for critical decisions.',
    'platform.card4.name': 'AI Data Operations',
    'platform.card4.tag': 'Pillar B — Intelligence',
    'platform.card4.desc':
      'Data curation, RLHF, and model evaluation. We train local youth to become elite AI operators and data specialists.',
    'platform.card5.name': 'Talent Pipelines',
    'platform.card5.tag': 'People First',
    'platform.card5.desc':
      'We train local youth as AI operators, data curators, and RLHF specialists — in partnership with Mafikeng Innovation Hub and the Western Cape Government.',
    'platform.learnMore': 'Learn more',

    // How it works
    'how.title': 'How We Work',
    'how.step1.title': 'Listen & Audit',
    'how.step1.desc':
      'We start by understanding your business — your data, workflows, and where technology creates the most leverage. No assumptions, no fluff.',
    'how.step2.title': 'Build & Integrate',
    'how.step2.desc':
      'We design and deploy practical solutions using open-source tools, integrated with your existing systems. You own everything we build.',
    'how.step3.title': 'Train & Scale',
    'how.step3.desc':
      'We upskill your team and refine operations. Your infrastructure grows with your business — no vendor lock-in.',

    // Industries
    'industries.title': 'Built for How Business Works',
    'industries.subtitle': 'Practical digital infrastructure and AI for the sectors that drive the economy.',
    'industries.finance': 'Financial Services',
    'industries.finance.desc': 'Compliance, risk, and client insight — practical AI that meets regulatory demands.',
    'industries.health': 'Healthcare',
    'industries.health.desc': 'Custom AI for healthcare operations, diagnostics support, and patient flow.',
    'industries.mining': 'Mining & Energy',
    'industries.mining.desc': 'Catch hazards, cut losses, prevent downtime with predictive intelligence.',
    'industries.agri': 'Agriculture',
    'industries.agri.desc': 'Forecast yields, optimise supply chains, and monitor crops with computer vision.',
    'industries.retail': 'Retail & E-commerce',
    'industries.retail.desc': 'Forecast demand, automate stock, and personalise the customer experience.',
    'industries.logistics': 'Logistics',
    'industries.logistics.desc': 'Route optimisation, fleet management, and real-time supply chain visibility.',
    'industries.public': 'Public Sector',
    'industries.public.desc': 'Connect systems, cut red tape, and serve citizens better with practical technology.',
    'industries.edu': 'Education',
    'industries.edu.desc': 'Personalised learning paths, automated assessment, and institutional analytics.',

    // Solutions
    'solutions.title': 'What This Looks Like',
    'solutions.training.title': 'Local Digital Directories',
    'solutions.training.desc':
      'Street-level digital layers that give neighbourhoods and business districts real online ownership and visibility.',
    'solutions.training.stat': '7+ Platforms Live',
    'solutions.automation.title': 'Workflow Automation',
    'solutions.automation.desc':
      'Automate complex or tedious work that buries your team. Open-source AI with humans in the loop.',
    'solutions.automation.stat': '70% Time Saved',
    'solutions.contact.title': 'GEO & AI Visibility',
    'solutions.contact.desc':
      'Structure your business data so AI search engines and LLM assistants find, cite, and recommend you.',
    'solutions.contact.stat': '3x More Discoverable',

    // Services
    'services.title': 'Real Projects. Real Work. Real Outcomes.',
    'services.subtitle': 'From strategy and business structuring to digital platforms and AI — we deliver what your business actually needs.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Book & Guide',
    'services.hustleBasics.desc': 'The essential toolkit for entrepreneurs, freelancers, and small business owners. Turn overwhelm into clarity, ideas into action.',
    'services.hustleBasics.cta': 'Learn More',
    'services.pm.name': 'Project Execution',
    'services.pm.tag': 'Business Delivery',
    'services.pm.desc': 'Structure your business initiatives, track progress, and move from planning to execution consistently. No guesswork.',
    'services.pm.cta': 'Access Platform',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Digital Launch',
    'services.portal.desc': 'A professionally designed, SEO-ready landing page for your business. Credible online presence for only R1,850/year.',
    'services.portal.cta': 'Launch Online',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Neighbourhood Empowerment',
    'services.local.desc': 'Championing and digitally empowering neighbourhoods, streets, and business districts across South Africa.',
    'services.local.cta': 'Explore BH LOCAL',
    'services.strategy.name': 'Strategy & Structuring',
    'services.strategy.tag': 'Consulting',
    'services.strategy.desc': 'Move from ideas and vision to clear business models, strategies, and operational structure that attract funding and enable growth.',
    'services.strategy.cta': 'Explore Solutions',
    'services.clients.title': 'Trusted by Founders Across Sectors',
    'services.clients.subtitle': 'From wellness and healthcare to food, travel, and retail — delivering results where it matters.',
    'services.clients.collab': 'In collaboration with Afrocentric Solutions',

    // About
    'about.quote':
      'Think of technology as a verb, not a noun. It provides the tools, creative people provide the imagination.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle is a South African hybrid digital infrastructure and strategic AI operations agency. We bridge street-level local commerce and frontier AI technology — building directories, automating workflows, and training the next generation of AI operators. Grounded in Batho Pele principles: practical, transparent, and results-driven.',
    'about.founded': 'Founded by Tselakgosi Jacob Seatlholo. Product of Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Our Story',
    'about.builtIn': 'Built in',
    'about.forAfrica': 'for Africa',

    // Testimonials
    'testimonials.title': 'What Our Partners Say',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Curated for Builders',
    'resources.title1': 'Go From Idea to',
    'resources.title2': 'Live Product Fast',
    'resources.subtitle':
      'Unlock the tools you need to take your business to the next level — all curated, tested, and free to start. Your hub of 120+ resources across 21 categories.',
    'resources.searchPlaceholder': 'Search resources...',
    'resources.noResults': 'No resources found matching',
    'resources.clearFilters': 'Clear filters',

    // Newsletter / Contact
    'contact.title1': 'Ready to Put Tech to Work?',
    'contact.title2': "Let's Talk.",
    'contact.subtitle':
      'Join South African entrepreneurs and business leaders getting practical insights on digital infrastructure and AI operations.',
    'contact.placeholder': 'Enter your email',
    'contact.subscribe': 'Subscribe',
    'contact.noSpam': 'No spam. Unsubscribe anytime.',

    // Footer
    'footer.brandDesc':
      'Street-level digital infrastructure and AI operations for South African entrepreneurs. Product of Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Services',
    'footer.serviceLinks.geo': 'GEO Optimisation',
    'footer.serviceLinks.s2s': 'S2S Automation',
    'footer.serviceLinks.talent': 'Talent Pipelines',
    'footer.serviceLinks.local': 'Local Directories',
    'footer.serviceLinks.automation': 'Workflow Automation',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.partnerships': 'Our Work',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.paia': 'PAIA Manual (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. All rights reserved. Product of Simple Eternity Holdings (Pty) Ltd.',
  },

  af: {
    // Nav
    'nav.platform': 'Wat Ons Bou',
    'nav.solutions': 'Oplossings',
    'nav.industries': 'Bedrywe',
    'nav.resources': 'Hulpbronne',
    'nav.about': 'Oor Ons',
    'nav.contact': 'Kontak',
    'nav.bookDemo': 'Beging Nou',
    'nav.openMenu': 'Open kieslys',

    // Hero
    'hero.badge': 'Verken. Pas aan. Evolueer.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'Ons verbind plaaslike besighede met voorste KI-tegnologie. Van buurtgids tot oopbron-werkvloei-outomatisering — gegrond op Batho Pele-beginsels.',
    'hero.cta1': 'Beging Nou',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Werk met stigters en organisasies wat duidelikheid, struktuur en resultate waardeer',

    // Platform (dual-engine)
    'platform.title': 'Twee Enjins. Een Missie.',
    'platform.subtitle':
      'Straatvlak digitale infrastruktuur wat plaaslike besighede eienaarskap gee — en KI-bedrywighede wat rommelige werkvloei outomatiseer met mense in die lus.',
    'platform.card1.name': 'Plaaslike Digitale Infrastruktuur',
    'platform.card1.tag': 'Pilaar A — Die Nou',
    'platform.card1.desc':
      'Ons bou straatsvlak digitale lae en gids met oopbron-gereedskap. Dink aan KloofStreet.online — plaaslike besighede kry digitale eienaarskap, nie net \'n webwerf nie.',
    'platform.card2.name': 'GEO Optimalisering',
    'platform.card2.tag': 'Pilaar A — Ontdekking',
    'platform.card2.desc':
      'Ons struktureer plaaslike besigheidsdata sodat KI-modelle en LLM-assistente dit kan lees, sit en aanbeveel. Geen plaaslike besigheid bly onsigbaar nie.',
    'platform.card3.name': 'S2S Werkvloei-outomatisering',
    'platform.card3.tag': 'Pilaar B — Die Volgende',
    'platform.card3.desc':
      'Ons Dienste-tot Sagteware-bewerking outomatiseer rommelige ondernemingswerkvloei met oopbron KI. Vaardige mense bly in die lus vir kritieke besluite.',
    'platform.card4.name': 'KI Data Bedrywighede',
    'platform.card4.tag': 'Pilaar B — Intelligensie',
    'platform.card4.desc':
      'Data-kuratie, RLHF en model-evaluasie. Ons oplei plaaslike jeug om top-KI-operateurs en data-spesialiste te word.',
    'platform.card5.name': 'Talentye Pyplyne',
    'platform.card5.tag': 'Mense Eerst',
    'platform.card5.desc':
      'Ons oplei plaaslike jeug as KI-operateurs, datakurators en RLHF-spesialiste — in vennootskap met Mafikeng Innovation Hub en die Wes-Kaap-regering.',
    'platform.learnMore': 'Leer meer',

    // How it works
    'how.title': 'Hoe Ons Werk',
    'how.step1.title': 'Luister & Oudit',
    'how.step1.desc':
      'Ons begin deur u besigheid te verstaan — u data, werkvloei, en waar tegnologie die meeste hefboomwerking skep. Geen aannames, geen pluis nie.',
    'how.step2.title': 'Bou & Integreer',
    'how.step2.desc':
      'Ons ontwerp en ontplooi praktiese oplossings met oopbron-gereedskap, geïntegreer met u bestaande stelsels. U besit alles wat ons bou.',
    'how.step3.title': 'Oplei & Skaleer',
    'how.step3.desc':
      'Ons verhoog u span se vaardighede en verfyn bedrywighede. U infrastruktuur groei met u besigheid — geen verkoper-sluit-in nie.',

    // Industries
    'industries.title': 'Gebou vir Hoe Besigheid Werk',
    'industries.subtitle': 'Praktiese digitale infrastruktuur en KI vir die sektore wat die ekonomie aandryf.',
    'industries.finance': 'Finansiële Dienste',
    'industries.finance.desc': 'Nalewing, risiko en kliëntinsig — praktiese KI wat aan regulatoriese eise voldoen.',
    'industries.health': 'Gesondheidsorg',
    'industries.health.desc': 'Pasgemaakte KI vir gesondheidsorgbedrywighede, diagnostiekondersteuning en pasiëntvloei.',
    'industries.mining': 'Mynbou & Energie',
    'industries.mining.desc': 'Vang gevare, verminder verliese, voorkom stilstand met voorspellende intelligensie.',
    'industries.agri': 'Landbou',
    'industries.agri.desc': 'Voorspel oesopbrengste, optimaliseer toeleveringskettings en monitor gewasse met rekenaarvisie.',
    'industries.retail': 'Kleinhandel & E-handel',
    'industries.retail.desc': 'Voorspel vraag, outomatiseer voorraad en personaliseer die kliëntervaring.',
    'industries.logistics': 'Logistiek',
    'industries.logistics.desc': 'Roete-optimalisering, vlootbestuur en intydse toeleveringsketting-sigbaarheid.',
    'industries.public': 'Openbare Sektor',
    'industries.public.desc': 'Verbind stelsels, sny rooi lint en bedien burgers beter met praktiese tegnologie.',
    'industries.edu': 'Onderwys',
    'industries.edu.desc': 'Gepersonaliseerde leerbane, outomatiseerde assessering en institusionele analise.',

    // Solutions
    'solutions.title': 'Wat Dit Lyk Soos',
    'solutions.training.title': 'Plaaslike Digitale Gidse',
    'solutions.training.desc':
      'Straatvlak digitale lae wat buurte en besigheidsdistrikte werklike aanlyn-eienaarskap en sigbaarheid gee.',
    'solutions.training.stat': '7+ Platforms Lewendig',
    'solutions.automation.title': 'Werkvloei-outomatisering',
    'solutions.automation.desc':
      'Outomatiseer komplekse of lastige werk wat u span begrawe. Oopbron KI met mense in die lus.',
    'solutions.automation.stat': '70% Tyd Gespaar',
    'solutions.contact.title': 'GEO & KI Sigbaarheid',
    'solutions.contact.desc':
      'Struktureer u besigheidsdata sodat KI-soekenjins en LLM-assistente u vind, sit en aanbeveel.',
    'solutions.contact.stat': '3x Meer Ontdekbaar',

    // Services
    'services.title': 'Regte Projekte. Regte Werk. Regte Uitslae.',
    'services.subtitle': 'Van strategie en besigheidstrukturering tot digitale platforme en KI — ons lewer wat u besigheid werklik benodig.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Boek & Gids',
    'services.hustleBasics.desc': 'Die noodsaaklike gereedskapstel vir entrepreneurs, vryskutters en kleinbesigheid eienaars. Beheer oorweldiging na helderheid, idees na aksie.',
    'services.hustleBasics.cta': 'Leer Meer',
    'services.pm.name': 'Projekuitvoering',
    'services.pm.tag': 'Besigheidslewering',
    'services.pm.desc': 'Struktureer u besigheidsinisiatiewe, volg vordering en beweeg konsekwent van beplanning na uitvoering. Geen raaiwerk nie.',
    'services.pm.cta': 'Toegang tot Platvorm',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Digitale Lanseering',
    'services.portal.desc': '\'n Professioneel ontwerpte, SEO-gereed landingsblad vir u besigheid. Geloofwaardige aanlyn teenwoordigheid vir slegs R1,850/jaar.',
    'services.portal.cta': 'Lanseer Aanlyn',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Buurt-bemagtiging',
    'services.local.desc': 'Voorstander en digitaal bemagtig buurte, strate en besigheidsdistrikte dwarsdeur Suid-Afrika.',
    'services.local.cta': 'Verken BH LOCAL',
    'services.strategy.name': 'Strategie & Strukturering',
    'services.strategy.tag': 'Konsultasie',
    'services.strategy.desc': 'Beweeg van idees en visie na duidelike besigheidsmodelle, strategieë en operasionele struktuur wat befondsing aantrek en groei moontlik maak.',
    'services.strategy.cta': 'Verken Oplossings',
    'services.clients.title': 'Vertrou deur Stigters Oor Sektore',
    'services.clients.subtitle': 'Van welstand en gesondheidsorg tot kos, reis en kleinhandel — lewer resultate waar dit saakmaak.',
    'services.clients.collab': 'In samewerking met Afrocentric Solutions',

    // About
    'about.quote':
      'Dink aan tegnologie as \'n werkwoord, nie \'n selfstandige naamwoord nie. Dit verskaf die gereedskap, kreatiewe mense verskaf die verbeelding.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle is \'n Suid-Afrikaanse hibriede digitale infrastruktuur en strategiese KI-bedrywighede agentskap. Ons verbind straatsvlak plaaslike handel en voorste KI-tegnologie — bou gidse, outomatiseer werkvloei en oplei die volgende geslag KI-operateurs. Gegrond op Batho Pele-beginsels: prakties, deursigtig en resultaatgedrewe.',
    'about.founded': 'Gestig deur Tselakgosi Jacob Seatlholo. Produk van Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Ons Storie',
    'about.builtIn': 'Gebou in',
    'about.forAfrica': 'vir Afrika',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'Wat Onse Vennote Sê',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Gekureer vir Bouers',
    'resources.title1': 'Gaan Van Idee na',
    'resources.title2': 'Lewende Produk Vinnig',
    'resources.subtitle':
      'Ontsluit die gereedskap wat u nodig het om u besigheid na die volgende vlak te neem — almal gekureer, getoets en gratis om te begin. U middel van 120+ hulpbronne oor 21 kategorieë.',
    'resources.searchPlaceholder': 'Soek hulpbronne...',
    'resources.noResults': 'Geen hulpbronne gevind wat ooreenstem nie',
    'resources.clearFilters': 'Verwyder filters',

    // Newsletter / Contact
    'contact.title1': 'Gereed om Tegnologie te Laat Werk?',
    'contact.title2': 'Kom Praat.',
    'contact.subtitle':
      'Sluit aan by Suid-Afrikaanse entrepreneurs en besigheidsleiers wat praktiese insigte kry oor digitale infrastruktuur en KI-bedrywighede.',
    'contact.placeholder': 'Voer u e-pos in',
    'contact.subscribe': 'Teken In',
    'contact.noSpam': 'Geen gemors. Ontteken enige tyd.',

    // Footer
    'footer.brandDesc':
      'Straatvlak digitale infrastruktuur en KI-bedrywighede vir Suid-Afrikaanse entrepreneurs. Produk van Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Dienste',
    'footer.serviceLinks.geo': 'GEO Optimalisering',
    'footer.serviceLinks.s2s': 'S2S Outomatisering',
    'footer.serviceLinks.talent': 'Talentye Pyplyne',
    'footer.serviceLinks.local': 'Plaaslike Gidse',
    'footer.serviceLinks.automation': 'Werkvloei-outomatisering',
    'footer.company': 'Maatskappy',
    'footer.legal': 'Wettig',
    'footer.about': 'Oor Ons',
    'footer.careers': 'Loopbane',
    'footer.partnerships': 'Ons Werk',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Kontak',
    'footer.privacy': 'Privaatheidsbeleid',
    'footer.terms': 'Diensvoorwaardes',
    'footer.cookies': 'Koekiebeleid',
    'footer.paia': 'PAIA-handleiding (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Alle regte voorbehou. Produk van Simple Eternity Holdings (Pty) Ltd.',
  },

  zu: {
    // Nav
    'nav.platform': 'Sakha Okwakhiwa',
    'nav.solutions': 'Izinkombiso',
    'nav.industries': 'Amasayini',
    'nav.resources': 'Izinsiza',
    'nav.about': 'Ngathi',
    'nav.contact': 'Ukuxhumana',
    'nav.bookDemo': 'Qala Ngoku',
    'nav.openMenu': 'Vula imenyu',

    // Hero
    'hero.badge': 'Hlola. Vumelanisa. Qhubeka.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'Siphunga amabhizinisi endaweni nomkhondo we-AI oqonde kakhulu. Kusukela kumadiresi asekuhlathini kuya kumasevisi okuzenzakalela okhululekile — okusekelwe kumigomo ka-Batho Pele.',
    'hero.cta1': 'Qala Ngoku',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Sisebenza nabasunguli namahlanganise aqonde ukucacisa, isakhiwo, namaphetho',

    // Platform (dual-engine)
    'platform.title': 'Amamotho Amabili. Injongo Eyodwa.',
    'platform.subtitle':
      'Insiza yezobuchwepheshe ezingumphakathi emadolobheni enika amabhizinisi endaweno umnikazi — kanye namasevisi e-AI azenzisa kahle umsebenzi ongcolile nothando lwabantu.',
    'platform.card1.name': 'Insiza Yezobuchwepheshe Endaweni',
    'platform.card1.tag': 'Iqanda A — Okwamanje',
    'platform.card1.desc':
      'Sakha amaqoqo amaphupho wemibhalo nge-inthanethi asetshenziswa amathuluzi ahululekile. Cabanga nge-KloofStreet.online — amabhizinisi endaweno athola ukubamba kwedijithali, hhayi kuphela iwebhusayithi.',
    'platform.card2.name': 'Ukuqondisa i-GEO',
    'platform.card2.tag': 'Iqanda A — Ukuthola',
    'platform.card2.desc':
      'Sihlela idatha yamabhizinisi endaweno ngendlela amamodeli e-AI nabasizi be-LLM bangayifunda, bayibeka, bawanikisa. Akukho bhizinisi elingaboniwa.',
    'platform.card3.name': 'S2S Ukuzenzakalela Komsebenzi',
    'platform.card3.tag': 'Iqanda B — Okulandelayo',
    'platform.card3.desc':
      'Umsebenzi wethu wamasevisi ukuya kusofthiwe uthola umsebenzi ongcolile wezinkampani nge-AI evulekile. Abantu abanamakhono bahlala kumqondo wamabheseni abalulekile.',
    'platform.card4.name': 'Amasevisi Edatha Ye-AI',
    'platform.card4.tag': 'Iqanda B — Ubuchwepheshe',
    'platform.card4.desc':
      'Ukuqoqa idatha, RLHF, kanye nokuhlolwa kwamamodeli. Sifundisa abafana abadala ukuthi babe ngabasebenzi be-AI abakhulu kakhulu kwanom specialists bedatha.',
    'platform.card5.name': 'Izinkalo Zobulili',
    'platform.card5.tag': 'Abantu Kuqala',
    'platform.card5.desc':
      'Sifundisa abasha basekhaya njengo-abasebenzi be-AI, abakhiqizi bedatha kanye nabaspeshalisti be-RLHF — ngokubambisana noMafikeng Innovation Hub noMbuso weNtshonalanga Kapa.',
    'platform.learnMore': 'Funda kabanzi',

    // How it works
    'how.title': 'Sisebenza Kanjani',
    'how.step1.title': 'Lalela & Hlola',
    'how.step1.desc':
      'Siqala nokuqonda ibhizinisi lakho — idatha yakho, umsebenzi wakho, naphi ukuthi teknoloji idala amandla amakhulu. Akukho okucinga, akukho okungahleli.',
    'how.step2.title': 'Yakha & Hlanganisa',
    'how.step2.desc':
      'Sakha bese sithuthela izinkombiso ezisebenzayo ezisebenzisa amathuluzi ahululekile, ezihlanganisiwe ngezistimu zakho. Wena unamalungelo wonke okwakhiwa kwethu.',
    'how.step3.title': 'Fundisa & Ngcenisa',
    'how.step3.desc':
      'Siphucula amakhono eqembu lakho futhi sixazulula umsebenzi. Insiza yakho ikhula nomkhondo webhizinisi lakho — asikho isikhalazo sokuthenga kumuntu.'

    ,

    // Industries
    'industries.title': 'Yakhiwe Ngendlela Amabhizinisi Asebenza Ngayo',
    'industries.subtitle': 'Insiza yezobuchwepheshe ezenziwayo ne-AI kumasektora adlula isimo sezimali.',
    'industries.finance': 'Amasevisi Ezezimali',
    'industries.finance.desc': 'Ukuzonda umthetho, isibopho, nokubona abakhasimende — i-AI esebenzayo edlula kumthetho.',
    'industries.health': 'Amasevisi Ezempilo',
    'industries.health.desc': 'I-AI eqondile kwezempilo, usizo lokuhlola, nokuhamba kwabagula.',
    'industries.mining': 'Ukutshungula Amandla',
    'industries.mining.desc': 'Thola ingozi, nciphisa ukulahleka, geda ukumisa ngesizathu sobuhlobo.',
    'industries.agri': 'Ukulima',
    'industries.agri.desc': 'Ibala okuzuzwa, lungisa ukuhamba kwezinto, futhi buka imifino ngekhompyutha.',
    'industries.retail': 'Ukuthengisa & Othongi',
    'industries.retail.desc': 'Bala isidingo, zenzise ukugcinwa kwamagodi, futhi enze ukuhumusha okuhle kumakhasimende.',
    'industries.logistics': 'Ukuthutha',
    'industries.logistics.desc': 'Ukulinganisa indlela, ukuphatha amamoto, nokubona okungokoqobo.',
    'industries.public': 'Amasevisi Aphakeme',
    'industries.public.desc': 'Hlanganisa amasistimu, sika umkhawulo, futhi sisebenzise abantu ngezobuchwepheshe ezisebenzayo.',
    'industries.edu': 'Imfundo',
    'industries.edu.desc': 'Indlela zokufunda ezilungele umuntu, ukuhlola okuzenzakalelayo, namakhasi.',

    // Solutions
    'solutions.title': 'Lokhu Kubonakala Kanjani',
    'solutions.training.title': 'Amadiresi Adijithali Endaweni',
    'solutions.training.desc':
      'Amalaya edijithali asemaphoyiseni anika amadolobha namadibhana amabhizinisi ukubamba nokubonakala ku-inthanethi.',
    'solutions.training.stat': '7+ Amapulatifomu Ayasebenza',
    'solutions.automation.title': 'Ukuzenzakalela Komsebenzi',
    'solutions.automation.desc':
      'Zenzise umsebenzi onzima noma omdala owabeka iqembu lakho. I-AI evulekile nothando lwabantu.',
    'solutions.automation.stat': '70% Isikhathi Esigcinwe',
    'solutions.contact.title': 'GEO & Ukubonakala kwe-AI',
    'solutions.contact.desc':
      'Hlela idatha yebhizinisi lakho ukuze izinjiniyozokusesha ze-AI nabasizi be-LLM bakuthole, bakubeka, bakanikisa.',
    'solutions.contact.stat': '3x Kubonakala Kakhulu',

    // Services
    'services.title': 'Izinhlelo Ezinqamuleli. Umsebenzi Omuhle. Amaphetho Azinzile.',
    'services.subtitle': 'Kusuka ku-strategy namakhowudi abhizinisi ukuya kuma-platform ayakhonjiwo nge-AI — sithulela okudinga ibhizinisi lakho ngempela.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Incwadi & Umbhalo',
    'services.hustleBasics.desc': 'Amathuluzi awoqala abalulekile kubabhijini, abasebenzi bakhulu nabakhosibili. Shintsha ukungazazi ukubona okucacile, amathuba akuvele.',
    'services.hustleBasics.cta': 'Funda Kabanzi',
    'services.pm.name': 'Ukusebenza Kwezinhlelo',
    'services.pm.tag': 'Ukulethwa Kwabhizinisi',
    'services.pm.desc': 'Yakha izinhlelo zakho zokubhizinisa, ulandele inqubo, uze uhambise ngokuhamba kwesikhathi ukusuka kwipulani ukuya ekusebenzeni. Akukho okulinganisi.',
    'services.pm.cta': 'Fika Ku-Platform',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Ukuqalisa Ku-inthanethi',
    'services.portal.desc': 'Ikhasi eliqondiwe elilungiselelwe, elisebenzayo nge-SEO elithola abakuthengi. R1,850 ngonyaka.',
    'services.portal.cta': 'Qala Ku-inthanethi',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Ukukhulisa Izindawo',
    'services.local.desc': 'Ukuxhasa nokunika amandla amadolobha, izitshalonzalo namadolobha abhizinisi eNingizimu Afrika ngokwamakhompiutha.',
    'services.local.cta': 'Sihlola BH LOCAL',
    'services.strategy.name': 'I-Strategy & Ukumisa',
    'services.strategy.tag': 'Ingxoxo',
    'services.strategy.desc': 'Sukuma kumiklamo nohlangothi ukuya kumamodeli abhizinisi aqinisekile, amasu nokumisa okusebenza akhulisa ukukhula.',
    'services.strategy.cta': 'Sihlola Izinkombiso',
    'services.clients.title': 'Abathembekile Abasungulwe Abasebenza Ezimbalwa',
    'services.clients.subtitle': 'Kusuka ku-wellness kuya kwezempilo, ukudla, ukuhamba, nokuthengisa — silulela amaphetho lapho kudingeka khona.',
    'services.clients.collab': 'Ngokubambisana ne-Afrocentric Solutions',

    // About
    'about.quote':
      'Cabanga nge-technology njengesenzo, hhayi isabizwana. Iya ngezinsiza, abantu abaqondise baya ngesibonelo.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'I-Business Hustle inkampani yaseNingizimu Afrika ephatha insiza yezobuchwepheshe nokuqonda i-AI. Siphunga amabhizinisi endaweni namandla e-AI oqonde kakhulu — sakha amadiresi, sithuthela umsebenzi, futhi sifundisa abantu abaqhubekayo abasebenzi be-AI. Esekelwe kumigomo ka-Batho Pele: okusebenzayo, okucacile, nokugcizelele amaphetho.',
    'about.founded': 'Yasungulwa ngu-Tselakgosi Jacob Seatlholo. Inkalo ye-Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Ibali Lethu',
    'about.builtIn': 'Yakhiwe e-',
    'about.forAfrica': 'kanye ne- Afrika',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'Abahlanganyeli Bathi Ngoni',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Okulungisiwe Abakhi',
    'resources.title1': 'Yiya Kuqala Ukusuka',
    'resources.title2': 'Kumkhiqizo Ohamba Vuli',
    'resources.subtitle':
      'Vula izinsiza ozidingayo ukuthi ukhulise ibhizinisi lakho — konke kulungisiwe, kuhlolwe, futhi mahhala ukuqala. Indawo yakho yesinsiza 120+ kumakhasi 21.',
    'resources.searchPlaceholder': 'Sesha izinsiza...',
    'resources.noResults': 'Akukho zinsiza ezitholiwe ezifana',
    'resources.clearFilters': 'Sula amafayela',

    // Newsletter / Contact
    'contact.title1': 'Ulungele Ukuze Teknoloji Isebenze?',
    'contact.title2': 'Sikhuluma.',
    'contact.subtitle':
      'Joinal abasunguli nabaholi ababhizimini baseNingizimu Afrika abathola izinsizo ezisebenzayo ngobuchwepheshe namasevisi e-AI.',
    'contact.placeholder': 'Faka i-imeyli yakho',
    'contact.subscribe': 'Bhalisa',
    'contact.noSpam': 'Akukho dili. Uyakwazi ukuyekela noma yini.',

    // Footer
    'footer.brandDesc':
      'Insiza yezobuchwepheshe ezingumphakathi namasevisi e-AI kubasunguli baseNingizimu Afrika. Inkalo ye-Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Amasevisi',
    'footer.serviceLinks.geo': 'Ukuqondisa i-GEO',
    'footer.serviceLinks.s2s': 'Ukuzenzakalela i-S2S',
    'footer.serviceLinks.talent': 'Izinkalo Zobulili',
    'footer.serviceLinks.local': 'Amadiresi Endaweni',
    'footer.serviceLinks.automation': 'Ukuzenzakalela Komsebenzi',
    'footer.company': 'Inkampani',
    'footer.legal': 'Amalungelo',
    'footer.about': 'Ngathi',
    'footer.careers': 'Amacareer',
    'footer.partnerships': 'Umsebenzi Wethu',
    'footer.blog': 'Ibhlogi',
    'footer.contactLink': 'Ukuxhumana',
    'footer.privacy': 'Inkathi Yokuziba',
    'footer.terms': 'Imigomo Yomsebenzi',
    'footer.cookies': 'Inkathi Ye-Cookie',
    'footer.paia': 'I-PAIA Manual (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Wonke amalungelo agodliwe. Inkalo ye-Simple Eternity Holdings (Pty) Ltd.',
  },

  fr: {
    // Nav
    'nav.platform': 'Ce Que Nous Construisons',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.resources': 'Ressources',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Commencer',
    'nav.openMenu': 'Ouvrir le menu',

    // Hero
    'hero.badge': 'Explorer. S\'adapter. Évoluer.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'Nous relions les entreprises locales et les technologies IA de pointe. Des annuaires de quartier à l\'automatisation des flux de travail en open source — fondé sur les principes Batho Pele.',
    'hero.cta1': 'Commencer',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Travailler avec des fondateurs et des organisations qui valorisent la clarté, la structure et les résultats',

    // Platform (dual-engine)
    'platform.title': 'Deux Moteurs. Une Mission.',
    'platform.subtitle':
      'Infrastructure numérique de proximité qui donne aux entreprises locales la propriété — et opérations IA qui automatisent les flux de travail complexes avec des humains dans la boucle.',
    'platform.card1.name': 'Infrastructure Numérique Locale',
    'platform.card1.tag': 'Pilier A — Le Présent',
    'platform.card1.desc':
      'Nous construisons des couches numériques et des annuaires de proximité avec des outils open source. Pensez à KloofStreet.online — les entreprises locales obtiennent une propriété numérique, pas juste un site web.',
    'platform.card2.name': 'Optimisation GEO',
    'platform.card2.tag': 'Pilier A — Découverte',
    'platform.card2.desc':
      'Nous structurons les données des entreprises locales pour que les modèles IA et les assistants LLM puissent les lire, les citer et les recommander. Aucune entreprise locale ne reste invisible.',
    'platform.card3.name': 'Automatisation de Flux S2S',
    'platform.card3.tag': 'Pilier B — L\'Avenir',
    'platform.card3.desc':
      'Notre opération Services-vers-Logiciel automatise les flux de travail d\'entreprise complexes grâce à l\'IA open source. Des humains qualifiés restent dans la boucle pour les décisions critiques.',
    'platform.card4.name': 'Opérations de Données IA',
    'platform.card4.tag': 'Pilier B — Intelligence',
    'platform.card4.desc':
      'Curation de données, RLHF et évaluation de modèles. Nous formons les jeunes locaux pour devenir des opérateurs IA et des spécialistes de données d\'élite.',
    'platform.card5.name': 'Filières de Talents',
    'platform.card5.tag': 'Les Gens D\'abord',
    'platform.card5.desc':
      'Nous formons les jeunes locaux en tant qu\'opérateurs IA, curateurs de données et spécialistes RLHF — en partenariat avec le Mafikeng Innovation Hub et le gouvernement du Cap-Occidental.',
    'platform.learnMore': 'En savoir plus',

    // How it works
    'how.title': 'Comment Nous Travaillons',
    'how.step1.title': 'Écouter & Auditer',
    'how.step1.desc':
      'Nous commençons par comprendre votre entreprise — vos données, vos flux de travail, et où la technologie crée le plus de levier. Pas de suppositions, pas de discours.',
    'how.step2.title': 'Construire & Intégrer',
    'how.step2.desc':
      'Nous concevons et déployons des solutions pratiques avec des outils open source, intégrés à vos systèmes existants. Vous possédez tout ce que nous construisons.',
    'how.step3.title': 'Former & Évoluer',
    'how.step3.desc':
      'Nous montons en compétences votre équipe et affinons les opérations. Votre infrastructure grandit avec votre entreprise — pas de verrouillage fournisseur.',

    // Industries
    'industries.title': 'Conçu pour Comment Fonctionnent les Entreprises',
    'industries.subtitle': 'Infrastructure numérique pratique et IA pour les secteurs qui font avancer l\'économie.',
    'industries.finance': 'Services financiers',
    'industries.finance.desc': 'Conformité, risque et analyse client — une IA pratique qui répond aux exigences réglementaires.',
    'industries.health': 'Santé',
    'industries.health.desc': 'IA personnalisée pour les opérations de santé, aide au diagnostic et flux des patients.',
    'industries.mining': 'Mines & Énergie',
    'industries.mining.desc': 'Détectez les dangers, réduisez les pertes, évitez les arrêts avec l\'intelligence prédictive.',
    'industries.agri': 'Agriculture',
    'industries.agri.desc': 'Prévoyez les rendements, optimisez les chaînes d\'approvisionnement et surveillez les cultures.',
    'industries.retail': 'Commerce & E-commerce',
    'industries.retail.desc': 'Prévoyez la demande, automatisez les stocks et personnalisez l\'expérience client.',
    'industries.logistics': 'Logistique',
    'industries.logistics.desc': 'Optimisation des itinéraires, gestion de flotte et visibilité en temps réel.',
    'industries.public': 'Secteur public',
    'industries.public.desc': 'Connectez les systèmes, réduisez la bureaucratie et servez mieux les citoyens avec une technologie pratique.',
    'industries.edu': 'Éducation',
    'industries.edu.desc': 'Parcours d\'apprentissage personnalisés, évaluation automatique et analytique institutionnelle.',

    // Solutions
    'solutions.title': 'À Quoi Ça Ressemble',
    'solutions.training.title': 'Annuaires Numériques Locaux',
    'solutions.training.desc':
      'Couches numériques de proximité qui donnent aux quartiers et districts commerciaux une véritable propriété et visibilité en ligne.',
    'solutions.training.stat': '7+ Plateformes en Ligne',
    'solutions.automation.title': 'Automatisation des Flux de Travail',
    'solutions.automation.desc':
      'Automatisez le travail complexe ou fastidieux qui enterre votre équipe. IA open source avec des humains dans la boucle.',
    'solutions.automation.stat': '70% de Temps Gagné',
    'solutions.contact.title': 'GEO & Visibilité IA',
    'solutions.contact.desc':
      'Structurez vos données d\'entreprise pour que les moteurs de recherche IA et les assistants LLM vous trouvent, vous citent et vous recommandent.',
    'solutions.contact.stat': '3x Plus Découvrable',

    // Services
    'services.title': 'De Vrais Projets. Du Vrai Travail. De Vrais Résultats.',
    'services.subtitle': 'De la stratégie et de la structuration d\'entreprise aux plateformes numériques et à l\'IA — nous livrons ce dont votre entreprise a vraiment besoin.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Livre & Guide',
    'services.hustleBasics.desc': 'La boîte à outils essentielle pour les entrepreneurs, freelances et petites entreprises. Transformez la surcharge en clarté, les idées en action.',
    'services.hustleBasics.cta': 'En savoir plus',
    'services.pm.name': 'Exécution de Projet',
    'services.pm.tag': 'Livraison Commerciale',
    'services.pm.desc': 'Structurez vos initiatives, suivez les progrès et passez de la planification à l\'exécution de manière constante. Pas de suppositions.',
    'services.pm.cta': 'Accéder à la plateforme',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Lancement Digital',
    'services.portal.desc': 'Une page d\'atterrissage professionnelle et optimisée SEO pour votre entreprise. Présence en ligne crédible pour seulement 1 850 R/an.',
    'services.portal.cta': 'Lancer en ligne',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Autonomisation des Quartiers',
    'services.local.desc': 'Soutenir et autonomiser numériquement les quartiers, rues et districts commerciaux à travers l\'Afrique du Sud.',
    'services.local.cta': 'Explorer BH LOCAL',
    'services.strategy.name': 'Stratégie & Structuration',
    'services.strategy.tag': 'Conseil',
    'services.strategy.desc': 'Passez des idées et de la vision à des modèles commerciaux clairs, des stratégies et une structure opérationnelle qui attirent le financement.',
    'services.strategy.cta': 'Explorer les solutions',
    'services.clients.title': 'La Confiance des Fondateurs de Tous les Secteurs',
    'services.clients.subtitle': 'Du bien-être et de la santé à l\'alimentation, aux voyages et au commerce — des résultats concrets.',
    'services.clients.collab': 'En collaboration avec Afrocentric Solutions',

    // About
    'about.quote':
      'Pensez à la technologie comme un verbe, pas un nom. Elle fournit les outils, les gens créatifs fournissent l\'imagination.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle est une agence sud-africaine hybride d\'infrastructure numérique et d\'opérations IA stratégiques. Nous relions le commerce local de proximité et la technologie IA de pointe — construisant des annuaires, automatisant les flux de travail et formant la prochaine génération d\'opérateurs IA. Fondé sur les principes Batho Pele : pratique, transparent et axé sur les résultats.',
    'about.founded': 'Fondé par Tselakgosi Jacob Seatlholo. Produit de Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Notre Histoire',
    'about.builtIn': 'Construit en',
    'about.forAfrica': 'pour l\'Afrique',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'Ce que disent nos partenaires',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Sélectionné pour les constructeurs',
    'resources.title1': 'De l\'idée au',
    'resources.title2': 'produit en un rien de temps',
    'resources.subtitle':
      'Débloquez les outils dont vous avez besoin pour passer au niveau supérieur — tout est sélectionné, testé et gratuit pour commencer. Votre hub de 120+ ressources dans 21 catégories.',
    'resources.searchPlaceholder': 'Rechercher des ressources...',
    'resources.noResults': 'Aucune ressource trouvée correspondant à',
    'resources.clearFilters': 'Effacer les filtres',

    // Newsletter / Contact
    'contact.title1': 'Prêt à Mettre la Technologie au Travail ?',
    'contact.title2': 'Parlons-en.',
    'contact.subtitle':
      'Rejoignez les entrepreneurs et dirigeants sud-africains qui obtiennent des insights pratiques sur l\'infrastructure numérique et les opérations IA.',
    'contact.placeholder': 'Entrez votre email',
    'contact.subscribe': 'S\'abonner',
    'contact.noSpam': 'Pas de spam. Désabonnez-vous à tout moment.',

    // Footer
    'footer.brandDesc':
      'Infrastructure numérique de proximité et opérations IA pour les entrepreneurs sud-africains. Produit de Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Services',
    'footer.serviceLinks.geo': 'Optimisation GEO',
    'footer.serviceLinks.s2s': 'Automatisation S2S',
    'footer.serviceLinks.talent': 'Filières de Talents',
    'footer.serviceLinks.local': 'Annuaires Locaux',
    'footer.serviceLinks.automation': 'Automatisation des Flux',
    'footer.company': 'Entreprise',
    'footer.legal': 'Juridique',
    'footer.about': 'À propos',
    'footer.careers': 'Carrières',
    'footer.partnerships': 'Nos Réalisations',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contact',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.cookies': 'Politique de cookies',
    'footer.paia': 'Manuel PAIA (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Tous droits réservés. Produit de Simple Eternity Holdings (Pty) Ltd.',
  },

  pt: {
    // Nav
    'nav.platform': 'O Que Construímos',
    'nav.solutions': 'Soluções',
    'nav.industries': 'Indústrias',
    'nav.resources': 'Recursos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.bookDemo': 'Começar',
    'nav.openMenu': 'Abrir menu',

    // Hero
    'hero.badge': 'Explorar. Adaptar. Evoluir.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'Conectamos negócios locais e tecnologia IA de ponta. De diretórios de bairro à automação de fluxos de trabalho em código aberto — baseado nos princípios Batho Pele.',
    'hero.cta1': 'Começar',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Trabalhando com fundadores e organizações que valorizam clareza, estrutura e resultados',

    // Platform (dual-engine)
    'platform.title': 'Dois Motores. Uma Missão.',
    'platform.subtitle':
      'Infraestrutura digital de rua que dá propriedade aos negócios locais — e operações de IA que automatizam fluxos de trabalho complexos com humanos no loop.',
    'platform.card1.name': 'Infraestrutura Digital Local',
    'platform.card1.tag': 'Pilar A — O Agora',
    'platform.card1.desc':
      'Construímos camadas digitais e diretórios de rua usando ferramentas de código aberto. Pense no KloofStreet.online — negócios locais ganham propriedade digital, não apenas um site.',
    'platform.card2.name': 'Otimização GEO',
    'platform.card2.tag': 'Pilar A — Descoberta',
    'platform.card2.desc':
      'Estruturamos dados de negócios locais para que modelos de IA e assistentes LLM possam ler, citar e recomendá-los. Nenhum negócio local fica invisível.',
    'platform.card3.name': 'Automação de Fluxos S2S',
    'platform.card3.tag': 'Pilar B — O Próximo',
    'platform.card3.desc':
      'Nossa operação Serviços-para-Software automatiza fluxos de trabalho empresariais complexos usando IA de código aberto. Humanos qualificados permanecem no loop para decisões críticas.',
    'platform.card4.name': 'Operações de Dados de IA',
    'platform.card4.tag': 'Pilar B — Inteligência',
    'platform.card4.desc':
      'Curadoria de dados, RLHF e avaliação de modelos. Treinamos jovens locais para se tornarem operadores de IA e especialistas em dados de elite.',
    'platform.card5.name': 'Pipelines de Talentos',
    'platform.card5.tag': 'Pessoas Primeiro',
    'platform.card5.desc':
      'Treinamos jovens locais como operadores de IA, curadores de dados e especialistas em RLHF — em parceria com o Mafikeng Innovation Hub e o Governo do Cabo Ocidental.',
    'platform.learnMore': 'Saiba mais',

    // How it works
    'how.title': 'Como Trabalhamos',
    'how.step1.title': 'Ouvir & Auditar',
    'how.step1.desc':
      'Começamos entendendo seu negócio — seus dados, fluxos de trabalho e onde a tecnologia cria mais alavancagem. Sem suposições, sem firula.',
    'how.step2.title': 'Construir & Integrar',
    'how.step2.desc':
      'Projetamos e implantamos soluções práticas usando ferramentas de código aberto, integradas aos seus sistemas existentes. Você possui tudo o que construímos.',
    'how.step3.title': 'Treinar & Escalar',
    'how.step3.desc':
      'Capacitamos sua equipe e refinamos operações. Sua infraestrutura cresce com seu negócio — sem travamento de fornecedor.',

    // Industries
    'industries.title': 'Construído para Como os Negócios Funcionam',
    'industries.subtitle': 'Infraestrutura digital prática e IA para os setores que impulsionam a economia.',
    'industries.finance': 'Serviços Financeiros',
    'industries.finance.desc': 'Conformidade, risco e análise de clientes — IA prática que atende demandas regulatórias.',
    'industries.health': 'Saúde',
    'industries.health.desc': 'IA personalizada para operações de saúde, suporte diagnóstico e fluxo de pacientes.',
    'industries.mining': 'Mineração & Energia',
    'industries.mining.desc': 'Detecte perigos, reduza perdas, evite paradas com inteligência preditiva.',
    'industries.agri': 'Agricultura',
    'industries.agri.desc': 'Preveja safras, otimize cadeias de suprimentos e monitore lavouras com visão computacional.',
    'industries.retail': 'Varejo & E-commerce',
    'industries.retail.desc': 'Preveja demanda, automatize estoque e personalize a experiência do cliente.',
    'industries.logistics': 'Logística',
    'industries.logistics.desc': 'Otimização de rotas, gestão de frotas e visibilidade em tempo real da cadeia de suprimentos.',
    'industries.public': 'Setor Público',
    'industries.public.desc': 'Conecte sistemas, corte burocracia e sirva melhor os cidadãos com tecnologia prática.',
    'industries.edu': 'Educação',
    'industries.edu.desc': 'Trilhas de aprendizagem personalizadas, avaliação automatizada e análise institucional.',

    // Solutions
    'solutions.title': 'Como Isso Se Parece',
    'solutions.training.title': 'Diretórios Digitais Locais',
    'solutions.training.desc':
      'Camadas digitais de rua que dão a bairros e distritos comerciais verdadeira propriedade e visibilidade online.',
    'solutions.training.stat': '7+ Plataformas ao Vivo',
    'solutions.automation.title': 'Automação de Fluxos de Trabalho',
    'solutions.automation.desc':
      'Automatize trabalho complexo ou tedioso que enterra sua equipe. IA de código aberto com humanos no loop.',
    'solutions.automation.stat': '70% de Tempo Economizado',
    'solutions.contact.title': 'GEO & Visibilidade de IA',
    'solutions.contact.desc':
      'Estruture os dados do seu negócio para que mecanismos de busca de IA e assistentes LLM encontrem, citem e recomendem você.',
    'solutions.contact.stat': '3x Mais Descobrível',

    // Services
    'services.title': 'Projetos Reais. Trabalho Real. Resultados Reais.',
    'services.subtitle': 'Da estratégia e estruturação empresarial a plataformas digitais e IA — entregamos o que seu negócio realmente precisa.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Livro & Guia',
    'services.hustleBasics.desc': 'O kit de ferramentas essencial para empreendedores, freelancers e pequenas empresas. Transforme sobrecarga em clareza, ideias em ação.',
    'services.hustleBasics.cta': 'Saiba mais',
    'services.pm.name': 'Execução de Projeto',
    'services.pm.tag': 'Entrega Comercial',
    'services.pm.desc': 'Estruture suas iniciativas, acompanhe o progresso e passe do planejamento à execução de forma consistente. Sem suposições.',
    'services.pm.cta': 'Acessar plataforma',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Lançamento Digital',
    'services.portal.desc': 'Uma landing page profissional e otimizada para SEO. Presença online credível por apenas R1,850/ano.',
    'services.portal.cta': 'Lançar online',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Empoderamento de Vizinhanças',
    'services.local.desc': 'Promover e capacitar digitalmente bairros, ruas e distritos comerciais pela África do Sul.',
    'services.local.cta': 'Explorar BH LOCAL',
    'services.strategy.name': 'Estratégia & Estruturação',
    'services.strategy.tag': 'Consultoria',
    'services.strategy.desc': 'Mova de ideias e visão para modelos de negócios claros, estratégias e estrutura operacional que atraem financiamento e viabilizam crescimento.',
    'services.strategy.cta': 'Explorar soluções',
    'services.clients.title': 'Confiado por Fundadores de Diversos Setores',
    'services.clients.subtitle': 'De bem-estar e saúde a alimentação, viagens e varejo — entregando resultados onde importa.',
    'services.clients.collab': 'Em colaboração com Afrocentric Solutions',

    // About
    'about.quote':
      'Pense na tecnologia como um verbo, não um substantivo. Ela fornece as ferramentas, pessoas criativas fornecem a imaginação.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'A Business Hustle é uma agência sul-africana híbrida de infraestrutura digital e operações estratégicas de IA. Conectamos o comércio local de rua e a tecnologia IA de ponta — construindo diretórios, automatizando fluxos de trabalho e treinando a próxima geração de operadores de IA. Baseado nos princípios Batho Pele: prático, transparente e focado em resultados.',
    'about.founded': 'Fundada por Tselakgosi Jacob Seatlholo. Produto da Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Nossa História',
    'about.builtIn': 'Construído na',
    'about.forAfrica': 'para a África',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'O Que Nossos Parceiros Dizem',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Curado para Construtores',
    'resources.title1': 'Da Ideia ao',
    'resources.title2': 'Produto Rápido',
    'resources.subtitle':
      'Desbloqueie as ferramentas que você precisa para levar seu negócio ao próximo nível — tudo curado, testado e gratuito para começar. Seu hub com 120+ recursos em 21 categorias.',
    'resources.searchPlaceholder': 'Pesquisar recursos...',
    'resources.noResults': 'Nenhum recurso encontrado correspondente a',
    'resources.clearFilters': 'Limpar filtros',

    // Newsletter / Contact
    'contact.title1': 'Pronto Para Colocar a Tecnologia Para Trabalhar?',
    'contact.title2': 'Vamos Conversar.',
    'contact.subtitle':
      'Junte-se a empreendedores e líderes sul-africanos recebendo insights práticos sobre infraestrutura digital e operações de IA.',
    'contact.placeholder': 'Digite seu email',
    'contact.subscribe': 'Inscrever-se',
    'contact.noSpam': 'Sem spam. Cancele a qualquer momento.',

    // Footer
    'footer.brandDesc':
      'Infraestrutura digital de rua e operações de IA para empreendedores sul-africanos. Produto da Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Serviços',
    'footer.serviceLinks.geo': 'Otimização GEO',
    'footer.serviceLinks.s2s': 'Automação S2S',
    'footer.serviceLinks.talent': 'Pipelines de Talentos',
    'footer.serviceLinks.local': 'Diretórios Locais',
    'footer.serviceLinks.automation': 'Automação de Fluxos',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.about': 'Sobre',
    'footer.careers': 'Carreiras',
    'footer.partnerships': 'Nosso Trabalho',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contato',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.cookies': 'Política de Cookies',
    'footer.paia': 'Manual PAIA (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Todos os direitos reservados. Produto da Simple Eternity Holdings (Pty) Ltd.',
  },

  sw: {
    // Nav
    'nav.platform': 'Tunachojenga',
    'nav.solutions': 'Suluhisho',
    'nav.industries': 'Viwanda',
    'nav.resources': 'Rasilimali',
    'nav.about': 'Kuhusu',
    'nav.contact': 'Mawasiliano',
    'nav.bookDemo': 'Anza Sasa',
    'nav.openMenu': 'Fungua menyu',

    // Hero
    'hero.badge': 'Chunguza. Badilika. Endelea.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'Tunapunganuza biashara za ndani na teknolojia za mwisho za AI. Kutoka kwa orodha za mitaa hadi otomatiki ya mtiririko wa kazi ya chanzo huria — inayotegemea misingi ya Batho Pele.',
    'hero.cta1': 'Anza Sasa',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'Tunafanya kazi na waanzilishi na mashirika yanayothamini uwazi, muundo, na matokeo',

    // Platform (dual-engine)
    'platform.title': 'Injini Mbili. Dharura Moja.',
    'platform.subtitle':
      'Miundombinu ya kidijitali ya mtaa inayowapa biashara za ndani umiliki — na uendeshaji wa AI unaotumia mtiririko wa kazi uliochanganyika na binadamu katika mzunguko.',
    'platform.card1.name': 'Miundombinu ya Kidijitali ya Ndani',
    'platform.card1.tag': 'Nguzo A — Sasa Hivi',
    'platform.card1.desc':
      'Tunajenga safu za kidijitali za mtaa na orodha kwa kutumia zana za chanzo huria. Fikiria KloofStreet.online — biashara za ndani zinapata umiliki wa kidijitali, sio tu tovuti.',
    'platform.card2.name': 'Uboreshaji wa GEO',
    'platform.card2.tag': 'Nguzo A — Ugunduzi',
    'platform.card2.desc':
      'Tunapanga data za biashara za ndani ili mifumo ya AI na wasaidizi wa LLM waweze kuisoma, kuitaja, na kuiendea. Hakuna biashara ya ndani inabaki haioneekani.',
    'platform.card3.name': 'Otomatiki ya Mtiririko wa Kazi ya S2S',
    'platform.card3.tag': 'Nguzo B — Ijayo',
    'platform.card3.desc':
      'Uendeshaji wetu wa Huduma-kwa-Programu unatengeneza mtiririko wa kazi uliochanganyika wa kampuni kwa kutumia AI ya chanzo huria. Binadamu wenye ujuzi wanaendelea kuwa katika mzunguko kwa maamuzi muhimu.',
    'platform.card4.name': 'Uendeshaji wa Data ya AI',
    'platform.card4.tag': 'Nguzo B — Akili',
    'platform.card4.desc':
      'Ukusanyaji wa data, RLHF, na tathmini ya mifumo. Tunafundisha vijana wa ndani kuwa waendeshaji wa AI na wataalamu wa data wa kiwango cha juu.',
    'platform.card5.name': 'Miradi ya Vipaji',
    'platform.card5.tag': 'Watu Kwanza',
    'platform.card5.desc':
      'Tunafundisha vijana wa karibu kuwa waendeshaji wa AI, wakusanyaji wa data na wataalamu wa RLHF — kwa ushirikiano na Mafikeng Innovation Hub na Serikali ya Western Cape.',
    'platform.learnMore': 'Soma zaidi',

    // How it works
    'how.title': 'Jinsi Tunavyofanya Kazi',
    'how.step1.title': 'Sikiliza & Pitia',
    'how.step1.desc':
      'Tunaanza kwa kuelewa biashara yako — data yako, mtiririko wa kazi, na nini teknolojia inayounda athari kubwa zaidi. Hakuna dhana, hakuna maneno mengi.',
    'how.step2.title': 'Jenga & Unganisha',
    'how.step2.desc':
      'Tunabuni na kusanikisha suluhisho zenye maana kwa kutumia zana za chanzo huria, zilizounganishwa na mifumo yako iliyopo. Wewe unamiliki kila tunachojenga.',
    'how.step3.title': 'Fundisha & Panua',
    'how.step3.desc':
      'Tunaongeza ujuzi wa timu yako na kuboresha uendeshaji. Miundombinu yako inakua pamoja na biashara yako — hakuna kufungwa kwa muuzaji.',

    // Industries
    'industries.title': 'Imeundwa kwa Jinsi Biashara Inavyofanya Kazi',
    'industries.subtitle': 'Miundombinu ya kidijitali ya vitendo na AI kwa sekta zinazosukuma uchumi.',
    'industries.finance': 'Huduma za Kifedha',
    'industries.finance.desc': 'Uzingatiaji, hatari, na uchambuzi wa wateja — AI ya vitendo inayotimiza mahitaji ya kanuni.',
    'industries.health': 'Afya',
    'industries.health.desc': 'AI ya kibinafsi kwa shughuli za afya, msaada wa uchambuzi, na mtiririko wa wagonjwa.',
    'industries.mining': 'Uchimbaji Madini & Nishati',
    'industries.mining.desc': 'Gundua hatari, punguza hasara, zuia kusimamishwa kwa akili ya kutabiri.',
    'industries.agri': 'Kilimo',
    'industries.agri.desc': 'Tabiri mavuno, boresha mnyororo wa usambazaji, na uchunguze mazao kwa kompyuta.',
    'industries.retail': 'Biashara ya Mauzo & Biashara ya Mtandaoni',
    'industries.retail.desc': 'Tabiri mahitaji, otomatisha akiba, na binafsisha uzoefu wa wateja.',
    'industries.logistics': 'Uchukuzi',
    'industries.logistics.desc': 'Uboreshaji wa njia, usimamizi wa gari, na mwonekano wa wakati halisi.',
    'industries.public': 'Sekta ya Umma',
    'industries.public.desc': 'Unganisha mifumo, kata ulegevu, na tumikie raia vyema kwa teknolojia ya vitendo.',
    'industries.edu': 'Elimu',
    'industries.edu.desc': 'Njia za kujifunza za kibinafsi, tathmini ya moja kwa moja, na uchambuzi wa taasisi.',

    // Solutions
    'solutions.title': 'Inavyonekana',
    'solutions.training.title': 'Orodha za Kidijitali za Ndani',
    'solutions.training.desc':
      'Safu za kidijitali za mtaa zinazowapa mitaa na maeneo ya biashara umiliki halisi na kuonekana kwenye mtandao.',
    'solutions.training.stat': '7+ Mifumo Iko Hai',
    'solutions.automation.title': 'Otomatiki ya Mtiririko wa Kazi',
    'solutions.automation.desc':
      'Otomatisa kazi ngumu au ya kuchosha inayozama timu yako. AI ya chanzo huria na binadamu katika mzunguko.',
    'solutions.automation.stat': '70% Wakati Uliohifadhiwa',
    'solutions.contact.title': 'GEO & Kuonekana kwa AI',
    'solutions.contact.desc':
      'Panga data ya biashara yako ili injini za utafutaji za AI na wasaidizi wa LLM wakupate, wakutaje, na wakupendekeze.',
    'solutions.contact.stat': '3x Zaidi ya Kuonekana',

    // Services
    'services.title': 'Miradi Halisi. Kazi Halisi. Matokeo Halisi.',
    'services.subtitle': 'Kutoka kwenye mkakati na muundo wa biashara hadi kwenye mitandao ya kidijitali na AI — tunawaletea biashara yako inayohitajika.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'Kitabu & Mwongozo',
    'services.hustleBasics.desc': 'Zana muhimu kwa wajasiriamali, wafanyakazi huria na wamiliki wa biashara ndogo. Badilisha mkanganyiko kuwa uwazi, mawazo kuwa hatua.',
    'services.hustleBasics.cta': 'Soma zaidi',
    'services.pm.name': 'Utekelezi wa Miradi',
    'services.pm.tag': 'Utoaji wa Biashara',
    'services.pm.desc': 'Panga miradi yako, fuatilia maendeleo, na songa kutoka kupanga kwenda kutekeleza kwa uendelevu. Hakuna kufikiria bila hakika.',
    'services.pm.cta': 'Fikia jukwaa',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'Uzinduzi wa Kidijitali',
    'services.portal.desc': 'Ukurasa wa kuangukia wenye ubunifu unaofaa SEO. Uwepo wa mtandaoni kwa R1,850 kwa mwaka.',
    'services.portal.cta': 'Uzinduzi mtandaoni',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'Uwezeshaji wa Mitaa',
    'services.local.desc': 'Kukuza na kuwezesha mitaa, mitaa ya biashara kote Afrika Kusini kwa teknolojia.',
    'services.local.cta': 'Tafuta BH LOCAL',
    'services.strategy.name': 'Mkakati & Muundo',
    'services.strategy.tag': 'Ushauri',
    'services.strategy.desc': 'Hamisha kutoka mawazo na hadhira kwenda mifumo ya biashara wazi, mikakati na muundo wa uendeshaji unaovuta ufadhili.',
    'services.strategy.cta': 'Tafuta suluhisho',
    'services.clients.title': 'Waaminika na Waanzilishi wa Sekta Zote',
    'services.clients.subtitle': 'Kutoka afya hadi chakula, usafiri na biashara — tunatoa matokeo yanayohesabika.',
    'services.clients.collab': 'Kwa ushirikiano na Afrocentric Solutions',

    // About
    'about.quote':
      'Fikiria teknolojia kama kitenzi, si kiumbe. Inatoa zana, watu wenye ubunifu wanaleta taswira.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle ni shirika la Afrika Kusini la hibridi la miundombinu ya kidijitali na uendeshaji wa kimkakati wa AI. Tunapunganuza biashara za ndani za mtaa na teknolojia ya mwisho ya AI — tukiijenga orodha, tukiotomatisha mtiririko wa kazi, na tukifundisha kizazi kijacho cha waendeshaji wa AI. Inayotegemea misingi ya Batho Pele: ya vitendo, wazi, na inayolenga matokeo.',
    'about.founded': 'Ilianzishwa na Tselakgosi Jacob Seatlholo. Bidhaa ya Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'Hadithi Yetu',
    'about.builtIn': 'Iliyojengwa',
    'about.forAfrica': 'kwa Afrika',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'Washirika Wetu Wanasema Nini',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'Ilivyochaguliwa kwa Wajenzi',
    'resources.title1': 'Kutoka Wazo',
    'resources.title2': 'Kwa Bidhaa Haraka',
    'resources.subtitle':
      'Fungua zana unazohitaji kupeleka biashara yako kiwango cha juu — zote zimechaguliwa, zimejaribiwa, na bure kuanza. Kituo chako cha rasilimali 120+ katika vikundi 21.',
    'resources.searchPlaceholder': 'Tafuta rasilimali...',
    'resources.noResults': 'Hakuna rasilimali zilizopatikana zinazolingana na',
    'resources.clearFilters': 'Futa vichujio',

    // Newsletter / Contact
    'contact.title1': 'Umeandaliwa Kuweka Teknolojia Kazi?',
    'contact.title2': 'Tuongee.',
    'contact.subtitle':
      'Jiunge na wajasiriamali na viongozi wa biashara wa Afrika Kusini wanaopata maarifa ya vitendo kuhusu miundombinu ya kidijitali na uendeshaji wa AI.',
    'contact.placeholder': 'Ingiza barua pepe yako',
    'contact.subscribe': 'Jisajili',
    'contact.noSpam': 'Hakuna barua taka. Jiondoe wakati wowote.',

    // Footer
    'footer.brandDesc':
      'Miundombinu ya kidijitali ya mtaa na uendeshaji wa AI kwa wajasiriamali wa Afrika Kusini. Bidhaa ya Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'Huduma',
    'footer.serviceLinks.geo': 'Uboreshaji wa GEO',
    'footer.serviceLinks.s2s': 'Otomatiki ya S2S',
    'footer.serviceLinks.talent': 'Miradi ya Vipaji',
    'footer.serviceLinks.local': 'Orodha za Ndani',
    'footer.serviceLinks.automation': 'Otomatiki ya Mtiririko wa Kazi',
    'footer.company': 'Kampuni',
    'footer.legal': 'Kisheria',
    'footer.about': 'Kuhusu',
    'footer.careers': 'Kazi',
    'footer.partnerships': 'Kazi Yetu',
    'footer.blog': 'Blogu',
    'footer.contactLink': 'Mawasiliano',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Huduma',
    'footer.cookies': 'Sera ya Kuki',
    'footer.paia': 'Mwongozo wa PAIA (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Haki zote zimehifadhiwa. Bidhaa ya Simple Eternity Holdings (Pty) Ltd.',
  },

  ar: {
    // Nav
    'nav.platform': 'ما نبنيه',
    'nav.solutions': 'الحلول',
    'nav.industries': 'الصناعات',
    'nav.resources': 'الموارد',
    'nav.about': 'حول',
    'nav.contact': 'اتصل',
    'nav.bookDemo': 'ابدأ الآن',
    'nav.openMenu': 'فتح القائمة',

    // Hero
    'hero.badge': 'استكشف. تكيّف. تطوّر.',
    'hero.title1': "Building Africa’s",
    'hero.title2': 'Business Operating System',
    'hero.subtitle':
      'نربط الأعمال المحلية وتكنولوجيا الذكاء الاصطناعي المتقدمة. من أدلة الأحياء إلى أتمتة سير العمل بمصدر مفتوح — مبنية على مبادئ Batho Pele.',
    'hero.cta1': 'ابدأ الآن',
    'hero.cta2': 'Try AI Idea Generator',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Years Experience',
    'hero.stat3': 'Platforms Live',

    // Trusted by
    'trusted.text': 'نعمل مع مؤسسين ومنظمات يقدرون الوضوح والهيكلية والنتائج',

    // Platform (dual-engine)
    'platform.title': 'محركان. مهمة واحدة.',
    'platform.subtitle':
      'بنية تحتية رقمية على مستوى الشارع تمنح الأعمال المحلية الملكية — وعمليات ذكاء اصطناعي تؤتمت سير العمل المعقد مع بقاء الإنسان في الحلقة.',
    'platform.card1.name': 'البنية الرقمية المحلية',
    'platform.card1.tag': 'الركيزة أ — الآن',
    'platform.card1.desc':
      'نبني طبقات رقمية وأدلة على مستوى الشارع باستخدام أدوات مفتوحة المصدر. فكّر في KloofStreet.online — الأعمال المحلية تحصل على ملكية رقمية، وليس مجرد موقع ويب.',
    'platform.card2.name': 'تحسين GEO',
    'platform.card2.tag': 'الركيزة أ — الاكتشاف',
    'platform.card2.desc':
      'نُهيكل بيانات الأعمال المحلية حتى يتمكن نماذج الذكاء الاصطناعي ومساعدو LLM من قراءتها واستشهادها والتوصية بها. لا تُترك أي أعمال محلية غير مرئية.',
    'platform.card3.name': 'أتمتة سير عمل S2S',
    'platform.card3.tag': 'الركيزة ب — المستقبل',
    'platform.card3.desc':
      'عملياتنا من الخدمات إلى البرمجيات تؤتمت سير العمل المعقد للشركات باستخدام ذكاء اصطناعي مفتوح المصدر. يبقى البشر المهرة في الحلقة للقرارات الحاسمة.',
    'platform.card4.name': 'عمليات بيانات الذكاء الاصطناعي',
    'platform.card4.tag': 'الركيزة ب — الذكاء',
    'platform.card4.desc':
      'تنظيم البيانات وRLHF وتقييم النماذج. ندرب الشباب المحلي ليصبحوا مشغلي ذكاء اصطناعي ومتخصصي بيانات من الطراز الأول.',
    'platform.card5.name': 'خطوط المواهب',
    'platform.card5.tag': 'الناس أولاً',
    'platform.card5.desc':
      'ندرب الشباب المحلي ليصبحوا مشغلي ذكاء اصطناعي ومكتبي بيانات ومتخصصين في RLHF — بالشراكة مع Mafikeng Innovation Hub وحكومة ويسترن كيب.',
    'platform.learnMore': 'اعرف المزيد',

    // How it works
    'how.title': 'كيف نعمل',
    'how.step1.title': 'استمع وافحص',
    'how.step1.desc':
      'نبدأ بفهم عملك — بياناتك، سير عملك، وأين تخلق التكنولوجيا أكبر تأثير. بدون افتراضات، بدون حشو.',
    'how.step2.title': 'ابنِ وادمج',
    'how.step2.desc':
      'نصمم وننشر حلولاً عملية باستخدام أدوات مفتوحة المصدر، مدمجة مع أنظمتك الحالية. أنت تملك كل ما نبنيه.',
    'how.step3.title': 'دّرب ووسّع',
    'how.step3.desc':
      'نطوّر مهارات فريقك ونحسّن العمليات. بنيتك التحتية تنمو مع عملك — بدون قفل بائع.',

    // Industries
    'industries.title': 'مُصمم لكيفية عمل الأعمال',
    'industries.subtitle': 'بنية تحتية رقمية عملية وذكاء اصطناعي للقطاعات التي تدفع عجلة الاقتصاد.',
    'industries.finance': 'الخدمات المالية',
    'industries.finance.desc': 'الامتثال والمخاطرورؤى العملاء — ذكاء اصطناعي عملي يلبي المتطلبات التنظيمية.',
    'industries.health': 'الرعاية الصحية',
    'industries.health.desc': 'ذكاء اصطناعي مخصص لعمليات الرعاية الصحية ودعم التشخيص وتدفق المرضى.',
    'industries.mining': 'التعدين والطاقة',
    'industries.mining.desc': 'اكتشف المخاطر وقلل الخسائر ومنع التوقف مع الذكاء التنبؤي.',
    'industries.agri': 'الزراعة',
    'industries.agri.desc': 'توقع المحاصيل وحسّن سلاسل التوريد وراقب المحاصيل بالرؤية الحاسوبية.',
    'industries.retail': 'التجزئة والتجارة الإلكترونية',
    'industries.retail.desc': 'توقع الطلب وأتمت المخزون وشخصّن تجارب العملاء.',
    'industries.logistics': 'اللوجستيات',
    'industries.logistics.desc': 'تحسين المسارات وإدارة الأسطول ورؤية سلسلة التوريد في الوقت الفعلي.',
    'industries.public': 'القطاع العام',
    'industries.public.desc': 'اربط الأنظمة واخترق البيروقراطية وخدم المواطنين بشكل أفضل بتكنولوجيا عملية.',
    'industries.edu': 'التعليم',
    'industries.edu.desc': 'مسارات تعلم مخصصة وتقييم آلي وتحليلات مؤسسية.',

    // Solutions
    'solutions.title': 'كيف يبدو هذا عملياً',
    'solutions.training.title': 'أدلة رقمية محلية',
    'solutions.training.desc':
      'طبقات رقمية على مستوى الشارع تمنح الأحياء والمناطق التجارية ملكية وحضوراً حقيقياً على الإنترنت.',
    'solutions.training.stat': '+10 أدلة فعّالة',
    'solutions.automation.title': 'أتمتة سير العمل',
    'solutions.automation.desc':
      'أتمت العمل المعقد أو الممل الذي ي bury فريقك. ذكاء اصطناعي مفتوح المصدر مع بقاء الإنسان في الحلقة.',
    'solutions.automation.stat': '70% وفّر في الوقت',
    'solutions.contact.title': 'GEO وظهور الذكاء الاصطناعي',
    'solutions.contact.desc':
      'هيكل بيانات عملك حتى يجدك محركات بحث الذكاء الاصطناعي ومساعدو LLM ويستشهدوا بك ويوصوا بك.',
    'solutions.contact.stat': '3x أكثر ظهوراً',

    // Services
    'services.title': 'مشاريع حقيقية. عمل حقيقي. نتائج حقيقية.',
    'services.subtitle': 'من الاستراتيجية وهيكلة الأعمال إلى المنصات الرقمية والذكاء الاصطناعي — نقدم ما تحتاجه أعمالك فعلاً.',
    'services.hustleBasics.name': 'Hustle Basics',
    'services.hustleBasics.tag': 'كتاب ودليل',
    'services.hustleBasics.desc': 'مجموعة الأدوات الأساسية لرواد الأعمال والمستقلين وأصحاب الأعمال الصغيرة. حوّل الفوضى إلى وضوح والأفكار إلى عمل.',
    'services.hustleBasics.cta': 'اعرف المزيد',
    'services.pm.name': 'تنفيذ المشاريع',
    'services.pm.tag': 'تسليم الأعمال',
    'services.pm.desc': 'هيكل مبادراتك وتتبع التقدم وانتقل من التخطيط إلى التنفيذ باتساق. بدون تخمين.',
    'services.pm.cta': 'الوصول إلى المنصة',
    'services.portal.name': 'HustlePortal™',
    'services.portal.tag': 'إطلاق رقمي',
    'services.portal.desc': 'صفحة هبوط احترافية ومحسّنة لمحركات البحث لعملك. تواجد رقمي موثوق مقابل 1,850 راند فقط سنوياً.',
    'services.portal.cta': 'أطلق على الإنترنت',
    'services.local.name': 'BH LOCAL',
    'services.local.tag': 'تمكين الأحياء',
    'services.local.desc': 'دعم وتمكين الأحياء والشوارع والمناطق التجارية رقمياً في جميع أنحاء جنوب أفريقيا.',
    'services.local.cta': 'استكشف BH LOCAL',
    'services.strategy.name': 'الاستراتيجية والهيكلة',
    'services.strategy.tag': 'استشارات',
    'services.strategy.desc': 'انتقل من الأفكار والرؤية إلى نماذج أعمال واضحة واستراتيجيات وهيكل تشغيلي يجذب التمويل ويمكّن النمو.',
    'services.strategy.cta': 'استكشف الحلول',
    'services.clients.title': 'موثوق من قبل مؤسسي القطاعات المختلفة',
    'services.clients.subtitle': 'من العافية والرعاية الصحية إلى الغذاء والسفر والتجزئة — نحقق نتائج حيث يهم.',
    'services.clients.collab': 'بالتعاون مع Afrocentric Solutions',

    // About
    'about.quote':
      'فكر في التكنولوجيا كفعل، لا كاسم. هي توفر الأدوات، والأشخاص المبدعون يوفرون الخيال.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'بيزنس هاسل هي وكالة جنوب أفريقية هجينة للبنية الرقمية التحتية وعمليات الذكاء الاصطناعي الاستراتيجية. نربط تجارة الشارع المحلية وتكنولوجيا الذكاء الاصطناعي المتقدمة — نبني الأدلة، نؤتمت سير العمل، وندرب الجيل القادم من مشغلي الذكاء الاصطناعي. مبنية على مبادئ Batho Pele: عملية وشفافة ونتائجية.',
    'about.founded': 'تأسست بواسطة Tselakgosi Jacob Seatlholo. منتج من Simple Eternity Holdings (Pty) Ltd.',
    'about.learnStory': 'قصتنا',
    'about.builtIn': 'بُنيت في',
    'about.forAfrica': 'لأفريقيا',

    // Testimonials (kept in English — direct client quotes)
    'testimonials.title': 'ماذا يقول شركاؤنا',
    'testimonials.quote1': "I love this app, it’s convenient and easy to use.",
    'testimonials.author1': 'Pako Mahumo',
    'testimonials.role1': 'Google Review ★★★★★',
    'testimonials.quote2': "I did not only get a landing page for my business, I found a like-minded family that supports my vision and dream. Great partnership.",
    'testimonials.author2': 'Ronald Menoe',
    'testimonials.role2': 'Gabonewe · Google Review ★★★★★',
    'testimonials.quote3': "Their AI platform streamlined our patient booking and communications. Dr Wendy Dicks' practice has never been more efficient.",
    'testimonials.author3': 'Dr Wendy Dicks',
    'testimonials.role3': 'Healthcare Practitioner',

    // Resources
    'resources.badge': 'منتقاة للبنائين',
    'resources.title1': 'من الفكرة إلى',
    'resources.title2': 'المنتج بسرعة',
    'resources.subtitle':
      'افتح الأدوات التي تحتاجها لترقية عملك — جميعها منتقاة ومختبرة ومجانية للبدء. مركزك لأكثر من 120 مصدراً في 21 فئة.',
    'resources.searchPlaceholder': 'البحث عن موارد...',
    'resources.noResults': 'لم يتم العثور على موارد تطابق',
    'resources.clearFilters': 'مسح الفلاتر',

    // Newsletter / Contact
    'contact.title1': 'مستعد لوضع التكنولوجيا في العمل؟',
    'contact.title2': 'لنتحدث.',
    'contact.subtitle':
      'انضم إلى رواد الأعمال وقادة الأعمال في جنوب أفريقيا الحاصلين على رؤى عملية حول البنية الرقمية وعمليات الذكاء الاصطناعي.',
    'contact.placeholder': 'أدخل بريدك الإلكتروني',
    'contact.subscribe': 'اشترك',
    'contact.noSpam': 'لا رسائل مزعجة. إلغاء الاشتراك في أي وقت.',

    // Footer
    'footer.brandDesc':
      'بنية تحتية رقمية على مستوى الشارع وعمليات ذكاء اصطناعي لرواد الأعمال في جنوب أفريقيا. منتج من Simple Eternity Holdings (Pty) Ltd.',
    'footer.services': 'الخدمات',
    'footer.serviceLinks.geo': 'تحسين GEO',
    'footer.serviceLinks.s2s': 'أتمتة S2S',
    'footer.serviceLinks.talent': 'خطوط المواهب',
    'footer.serviceLinks.local': 'الأدلة المحلية',
    'footer.serviceLinks.automation': 'أتمتة سير العمل',
    'footer.company': 'الشركة',
    'footer.legal': 'قانوني',
    'footer.about': 'حول',
    'footer.careers': 'وظائف',
    'footer.partnerships': 'أعمالنا',
    'footer.blog': 'المدونة',
    'footer.contactLink': 'اتصل',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.paia': 'دليل PAIA (POPIA)',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. جميع الحقوق محفوظة. منتج من Simple Eternity Holdings (Pty) Ltd.',
  },
}