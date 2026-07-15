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
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Book a Demo',
    'nav.openMenu': 'Open menu',

    // Hero
    'hero.badge': 'Explore. Adapt. Evolve.',
    'hero.title1': 'AI Infrastructure',
    'hero.title2': 'for African Business',
    'hero.subtitle':
      'From your first idea to AI-powered revenue — we build the systems that transform data and manual processes into intelligent, agent-ready workflows.',
    'hero.cta1': 'Book a Demo',
    'hero.cta2': 'Explore Platform',
    'hero.stat1': 'Businesses Transformed',
    'hero.stat2': 'Client Retention',
    'hero.stat3': 'AI Operations',

    // Trusted by
    'trusted.text': 'Trusted by leading organisations across Southern Africa',

    // Platform
    'platform.title': 'Building Blocks, Not Black Boxes',
    'platform.subtitle':
      'Deploy on your existing stack, configure for your operations, train on your data. Infrastructure that evolves with AI.',
    'platform.vortex.tag': 'Data Platform',
    'platform.vortex.desc':
      'Get your messy, multi-source data machine-ready. Pulls scattered data into one governed, AI-ready platform.',
    'platform.flux.tag': 'Process Builder',
    'platform.flux.desc':
      'Document manual workflows for automation. Visual map of how work gets done, running every step automatically.',
    'platform.nexus.tag': 'Expert Network',
    'platform.nexus.desc':
      'A curated network of vetted AI specialists and domain experts deployed on demand for your projects.',
    'platform.pulse.tag': 'Evaluations',
    'platform.pulse.desc':
      'Run rigorous evaluation for quality, safety, and accuracy. Measure AI performance against your actual use cases.',
    'platform.axon.tag': 'AI Agents',
    'platform.axon.desc':
      'Build governed AI agents that mirror your workflows. Deploy agents that hand off finished results to your systems.',
    'platform.learnMore': 'Learn more',

    // How it works
    'how.title': 'Weeks to Working AI, Not Months of Planning',
    'how.step1.title': 'Discover',
    'how.step1.desc':
      'We audit your data, workflows, and operations to identify where AI creates the most impact.',
    'how.step2.title': 'Build',
    'how.step2.desc':
      'Our team designs, trains, and deploys custom AI solutions integrated with your existing systems.',
    'how.step3.title': 'Scale',
    'how.step3.desc':
      'Monitor, evaluate, and continuously improve. Your AI infrastructure grows as your business evolves.',

    // Industries
    'industries.title': 'Any Sector, Any Stack',
    'industries.subtitle': 'Built for the industries driving Africa\'s growth.',
    'industries.finance': 'Financial Services',
    'industries.finance.desc': 'Compliance, risk, and customer insight — AI that meets regulatory demands.',
    'industries.health': 'Healthcare',
    'industries.health.desc': 'Custom AI for healthcare operations, diagnostics support, and patient flow.',
    'industries.mining': 'Mining & Energy',
    'industries.mining.desc': 'Catch hazards, cut losses, prevent downtime with predictive intelligence.',
    'industries.agri': 'Agriculture',
    'industries.agri.desc': 'Forecast yields, optimise supply chains, and monitor crops with computer vision.',
    'industries.retail': 'Retail & E-commerce',
    'industries.retail.desc': 'Forecast demand, automate inventory, and personalise customer experiences.',
    'industries.logistics': 'Logistics',
    'industries.logistics.desc': 'Route optimisation, fleet management, and real-time supply chain visibility.',
    'industries.public': 'Public Sector',
    'industries.public.desc': 'Cut red tape, connect systems, and serve citizens better with AI.',
    'industries.edu': 'Education',
    'industries.edu.desc': 'Personalised learning paths, automated assessment, and institutional analytics.',

    // Solutions
    'solutions.title': 'Featured Solutions',
    'solutions.training.title': 'AI Training & Data',
    'solutions.training.desc':
      'Research-grade annotation, training, and evaluation for machine learning models.',
    'solutions.training.stat': '100+ Models Trained',
    'solutions.automation.title': 'Back-Office Automation',
    'solutions.automation.desc':
      'Automate complex or tedious work that buries your team. Handle messy data with precision.',
    'solutions.automation.stat': '70% Time Reduction',
    'solutions.contact.title': 'Intelligent Contact Centre',
    'solutions.contact.desc':
      'Unified data, automated QA, sentiment analysis, and AI voice agents.',
    'solutions.contact.stat': '3x Efficiency Gains',

    // About
    'about.quote':
      'Think of technology as a verb, not a noun. It provides the tools, creative people provide the imagination.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle is a complete AI solutions and digital transformation provider for African enterprises. From specialised AI agent development to data platform architecture, we handle it all — so you can focus on what matters most: your work.',
    'about.founded': 'Founded in South Africa, serving the continent.',
    'about.learnStory': 'Learn About Our Story',
    'about.builtIn': 'Built in',
    'about.forAfrica': 'for Africa',

    // Testimonials
    'testimonials.title': 'What Our Partners Say',

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
    'contact.title1': 'Ready to Make AI Real',
    'contact.title2': 'for Your Business?',
    'contact.subtitle':
      'Join 5,000+ African business leaders receiving insights at the bleeding edge of enterprise AI.',
    'contact.placeholder': 'Enter your email',
    'contact.subscribe': 'Subscribe',
    'contact.noSpam': 'No spam. Unsubscribe anytime.',

    // Footer
    'footer.brandDesc':
      'AI infrastructure and automation solutions built for African enterprises. Part of Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Platform',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.partnerships': 'Partnerships',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. All rights reserved. Part of Simple Eternity Holdings (Pty) Ltd.',
  },

  af: {
    // Nav
    'nav.platform': 'Platvorm',
    'nav.solutions': 'Oplossings',
    'nav.industries': 'Bedrywe',
    'nav.resources': 'Hulpbronne',
    'nav.about': 'Oor Ons',
    'nav.contact': 'Kontak',
    'nav.bookDemo': 'Boek \'n Demo',
    'nav.openMenu': 'Open kieslys',

    // Hero
    'hero.badge': 'Verken. Pas aan. Evolueer.',
    'hero.title1': 'KI-infrastruktuur',
    'hero.title2': 'vir Afrikaanse Besighede',
    'hero.subtitle':
      'Van u eerste idee tot KI-aangedrewe inkomste — ons bou die stelsels wat data en handmatige prosesse in intelligente, agent-gereede werkvloei omskep.',
    'hero.cta1': 'Boek \'n Demo',
    'hero.cta2': 'Verken Platvorm',
    'hero.stat1': 'Besighede Getransformeer',
    'hero.stat2': 'Kliëntbehoud',
    'hero.stat3': 'KI-bedrywighede',

    // Trusted by
    'trusted.text': 'Vertrou deur voorste organisasies dwarsdeur Suider-Afrika',

    // Platform
    'platform.title': 'Boublokke, Geen Swartkassies Nie',
    'platform.subtitle':
      'Ontplooi op u bestaande stapel, konfigureer vir u bedrywighede, oplei op u data. Infrastruktuur wat met KI evolueer.',
    'platform.vortex.tag': 'Dataplatform',
    'platform.vortex.desc':
      'Kry u gemorsige, multi-bron data masjien-gereed. Trek verstrooide data in een beheerde, KI-gereede platform.',
    'platform.flux.tag': 'Prosesbouer',
    'platform.flux.desc':
      'Dokumenteer handmatige werkvloei vir outomatisering. Visuele kaart van hoe werk gedoen word, elke stap outomaties.',
    'platform.nexus.tag': 'Kundigenetwerk',
    'platform.nexus.desc':
      '\'N behoefde netwerk van goedgekeurde KI-spesialiste en domeinkundiges wat op aanvraag vir u projekte ontplooi word.',
    'platform.pulse.tag': 'Evaluasies',
    'platform.pulse.desc':
      'Voer streng evaluasie uit vir gehalte, veiligheid en akkuraatheid. Meet KI-prestasie teen u werklike gebruiksgewalle.',
    'platform.axon.tag': 'KI-agente',
    'platform.axon.desc':
      'Bou beheerde KI-agente wat u werkvloei weerspieël. Ontplooi agente wat voltooide resultate aan u stelsels oorhandig.',
    'platform.learnMore': 'Leer meer',

    // How it works
    'how.title': 'Wekke na Werkende KI, Nie Maande van Beplanning Nie',
    'how.step1.title': 'Ontdek',
    'how.step1.desc':
      'Ons ouditeer u data, werkvloei en bedrywighede om te identifiseer waar KI die meeste impak skep.',
    'how.step2.title': 'Bou',
    'how.step2.desc':
      'Onspan ontwerp, oplei en ontplooi pasgemaakte KI-oplossings geïntegreer met u bestaande stelsels.',
    'how.step3.title': 'Skaal',
    'how.step3.desc':
      'Monitor, evalueer en verbeter voortdurend. U KI-infrastruktuur groei soos u besigheid evolueer.',

    // Industries
    'industries.title': 'Enige Sektor, Enige Stapel',
    'industries.subtitle': 'Gebou vir die bedrywe wat Afrika se groei dryf.',
    'industries.finance': 'Finansiële Dienste',
    'industries.finance.desc': 'Nalewing, risiko en kliëntinsig — KI wat aan regulatoriese vereistes voldoen.',
    'industries.health': 'Gesondheidsorg',
    'industries.health.desc': 'Pasgemaakte KI vir gesondheidsorgbedrywighede, diagnostiekondersteuning en pasiëntvloei.',
    'industries.mining': 'Mynbou & Energie',
    'industries.mining.desc': 'Vang gevare, verminder verliese, voorkom stilstand met voorspellende intelligensie.',
    'industries.agri': 'Landbou',
    'industries.agri.desc': 'Voorspel oesopbrengste, optimaliseer toeleveringskettings en monitor gewasse met rekenaarvisie.',
    'industries.retail': 'Kleinhandel & E-handel',
    'industries.retail.desc': 'Voorspel vraag, outomatiseer voorraad en personaliseer kliëntervarings.',
    'industries.logistics': 'Logistiek',
    'industries.logistics.desc': 'Roete-optimalisering, vlootbestuur en intydse toeleveringsketting-sigbaarheid.',
    'industries.public': 'Openbare Sektor',
    'industries.public.desc': 'Sny rooi lint, verbind stelsels en bedien burgers beter met KI.',
    'industries.edu': 'Onderwys',
    'industries.edu.desc': 'Gepersonaliseerde leerbane, outomatiseerde assessering en institusionele analities.',

    // Solutions
    'solutions.title': 'Uitgestaalde Oplossings',
    'solutions.training.title': 'KI-opleiding & Data',
    'solutions.training.desc':
      'Navorsingsgraad-annotasie, opleiding en evaluasie vir masjienleermodelle.',
    'solutions.training.stat': '100+ Modelle Oplei',
    'solutions.automation.title': 'Kantoor-outomatisering',
    'solutions.automation.desc':
      'Outomatiseer komplekse of lastige werk wat u span begrawe. Hanteer gemorsige data met presisie.',
    'solutions.automation.stat': '70% Tydvermindering',
    'solutions.contact.title': 'Intelligente KontakSentrum',
    'solutions.contact.desc':
      'Verenigde data, outomatiseerde gehalteversekering, sentimentanalise en KI-stemagente.',
    'solutions.contact.stat': '3x Doeltreffendheid',

    // About
    'about.quote':
      'Dink aan tegnologie as \'n werkwoord, nie \'n selfstandige naamwoord nie. Dit verskaf die gereedskap, kreatiewe mense verskaf die verbeelding.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle is \'n volledige KI-oplossings en digitale transformasie-verskaffer vir Afrikaanse ondernemings. Van gespesialiseerde KI-agentontwikkeling tot dataplatform-argitektuur, ons hanteer dit almal — sodat u kan fokus op wat die meeste saakmaak: u werk.',
    'about.founded': 'Gestig in Suid-Afrika, dien die vasteland.',
    'about.learnStory': 'Leer Oor Ons Storie',
    'about.builtIn': 'Gebou in',
    'about.forAfrica': 'vir Afrika',

    // Testimonials
    'testimonials.title': 'Wat Onse Vennote Sê',

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
    'contact.title1': 'Gereed om KI Werklik te Maak',
    'contact.title2': 'vir U Besigheid?',
    'contact.subtitle':
      'Sluit by 5,000+ Afrikaanse besigheidsleiers aan wat insigte ontvang aan die voorpunt van ondernemings-KI.',
    'contact.placeholder': 'Voer u e-pos in',
    'contact.subscribe': 'Teken In',
    'contact.noSpam': 'Geen gemors. Ontteken enige tyd.',

    // Footer
    'footer.brandDesc':
      'KI-infrastruktuur en outomatiseringsoplossings gebou vir Afrikaanse ondernemings. Deel van Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Platvorm',
    'footer.company': 'Maatskappy',
    'footer.legal': 'Wettig',
    'footer.about': 'Oor Ons',
    'footer.careers': 'Loopbane',
    'footer.partnerships': 'Vennootskappe',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Kontak',
    'footer.privacy': 'Privaatheidsbeleid',
    'footer.terms': 'Diensvoorwaardes',
    'footer.cookies': 'Koekiebeleid',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Alle regte voorbehou. Deel van Simple Eternity Holdings (Pty) Ltd.',
  },

  zu: {
    // Nav
    'nav.platform': 'Iplatifomu',
    'nav.solutions': 'Izinkombiso',
    'nav.industries': 'Amasayini',
    'nav.resources': 'Izinsiza',
    'nav.about': 'Ngathi',
    'nav.contact': 'Ukuxhumana',
    'nav.bookDemo': 'Bhukha iDemo',
    'nav.openMenu': 'Vula imenyu',

    // Hero
    'hero.badge': 'Sihlola. Sifaka isimo. Sikhula.',
    'hero.title1': 'Insiza Ye-AI',
    'hero.title2': 'Kwamabhizinisi Afrika',
    'hero.subtitle':
      'Kusukela kwencwadi yakho yokuqala ukuya ekukhiqizeni okunamandla oku-AI — sibakha amasistimu abaguqula idatha namasu ahlala ngemva abe ngamasevisi anokuzenzakalela.',
    'hero.cta1': 'Bhukha iDemo',
    'hero.cta2': 'Sihlola Iplatifomu',
    'hero.stat1': 'Amabhizinisi Aqhubekile',
    'hero.stat2': 'Ukugcinwa Kwamakhasimende',
    'hero.stat3': 'Amasevisi E-AI',

    // Trusted by
    'trusted.text': 'Abathembekile abahlanganyeli abakhulu kunzansi ye-Afrika',

    // Platform
    'platform.title': 'Izakhiwo, HHayi Amabhokisi Amnyama',
    'platform.subtitle':
      'Qamba kusistimu yakho, lungisa ngamasevisi akho, funda ngamadatha akho. Insiza ekhula nge-AI.',
    'platform.vortex.tag': 'Iplatifomu Yedatha',
    'platform.vortex.desc':
      'Thola idatha yakho edidaywa ibe ngento evumelekile ku-AI. Hlanganisa idatha edayelayo kube nguwo wonke.',
    'platform.flux.tag': 'Umbanji Wamasu',
    'platform.flux.desc':
      'Bhala amasu akho okwenza ngemva ukuthi zibe ngamasevisi okuzenzakalela.',
    'platform.nexus.tag': 'Uxhumano Lwabakhulu',
    'platform.nexus.desc':
      'Inethiwekhi yabacwaningi be-AI nabantu abaqondise abahamba ngezibopho.',
    'platform.pulse.tag': 'Ukuhlola',
    'platform.pulse.desc':
      'Qamba ukuhlola okuqinile ngo-quality, ukuphepha, nokunembile. Velela inzuzo ye-AI.',
    'platform.axon.tag': 'Amagenti E-AI',
    'platform.axon.desc':
      'Yakha amagenti e-AI alawula amasu akho. Qamba amagenti adlulela iziphumo ku-systems yakho.',
    'platform.learnMore': 'Funda kabanzi',

    // How it works
    'how.title': 'Amasonto ku-AI Osebenzayo, HHayi Izinyanga Zokuhlela',
    'how.step1.title': 'Thola',
    'how.step1.desc':
      'Sihlola idatha, amasu, namasevisi akho ukuthola lapho i-AI inenzuzo kakhulu.',
    'how.step2.title': 'Yakha',
    'how.step2.desc':
      'Iqembu lethu ldizayina, ifunde, futhi iqambe izinkombiso ze-AI ezihlanganisiwe ne-systems yakho.',
    'how.step3.title': 'Ngcenisa',
    'how.step3.desc':
      'Buka, hlola, futhiThuthukisa ngokuhamba kwesikhathi. Insiza ye-AI yakho ikhula njengoba ibhizinisi lakho lithuthuka.',

    // Industries
    'industries.title': 'Noma Iyiphi Indawo, Noma Iyiphi Isethi',
    'industries.subtitle': 'Yakhiwe ngamasevisi aqhutsha ukukhula kwe-Afrika.',
    'industries.finance': 'Amasevisi Ezezimali',
    'industries.finance.desc': 'Ukuzonda umthetho, isibopho, nokubona abakhasimende — i-AI ezimisele ukulandela imithetho.',
    'industries.health': 'Amasevisi Ezempilo',
    'industries.health.desc': 'I-AI eqondile kwezempilo, usizo lokuhlola, nokuhamba kwabagula.',
    'industries.mining': 'Ukutshungula Amandla',
    'industries.mining.desc': 'Thola ingozi, nciphisa ukulahleka, geda ukumisa ngesizathu sobuhlobo.',
    'industries.agri': 'Ukulima',
    'industries.agri.desc': 'Ibala okuzuzwa, lungisa ukuhamba kwezinto, futhi buka imifino ngekhompyutha.',
    'industries.retail': 'Ukuthengisa & Othongi',
    'industries.retail.desc': 'Bala isidingo, zenzise ukugcinwa kwamagodi, futhienze amakhasimende.',
    'industries.logistics': 'Ukuthutha',
    'industries.logistics.desc': 'Ukulinganisa indlela, ukuphatha amamoto, nokubona okungokoqobo.',
    'industries.public': 'Amasevisi Aphakeme',
    'industries.public.desc': 'Sika umkhawulo, hlanganisa amasistimu, futhi sisebenzise abantu nge-AI.',
    'industries.edu': 'Imfundo',
    'industries.edu.desc': 'Indlela zokufunda ezilungele umuntu, ukuhlola okuzenzakalelayo, namakhasi.',

    // Solutions
    'solutions.title': 'Izinkombiso Ezikhombisiwe',
    'solutions.training.title': 'Ukufunda I-AI & Idatha',
    'solutions.training.desc':
      'Ukuhlela okuyisisekelo, ukufunda, nokuhlola amamodeli okufunda ngamashini.',
    'solutions.training.stat': '100+ Amamodeli Afundiswe',
    'solutions.automation.title': 'Ukuzenzakalela KwaseOfisini',
    'solutions.automation.desc':
      'Zenzise umsebenzi onzima noma omdala owabeka iqembu lakho. Phatha idatha edayelayo nokuqondene.',
    'solutions.automation.stat': '70% Ukunciphisa Isikhathi',
    'solutions.contact.title': 'I-Centre Lokuxhumana Eliphephile',
    'solutions.contact.desc':
      'Idatha ehlanganisiwe, ukuzenzakalela kwe-QA, ukuhlola isimo, namagumbi e-AI.',
    'solutions.contact.stat': '3x Ukuzenzakalela Okuphezulu',

    // About
    'about.quote':
      'Cabanga nge-technology njengesenzo, hhayi isabizwana. Iya ngezinsiza, abantu abaqondise baya ngesibonelo.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'I-Business Hustle yinkampani ephelele ye-AI nokushintshela kwedijithali kwamabhizinisi ase-Afrika. Kusukela kumagumbi e-AI aqondile ukuya kwakhiwo kwedatha, siphatha konke — bakwazi ukuzabalaza ngokuthi kunconywa kakhulu: umsebenzi wakho.',
    'about.founded': 'Yasungulwa eNingizimu Afrika, isebenza kuwo wonke amazwe.',
    'about.learnStory': 'Funda Ngangesiko Lethu',
    'about.builtIn': 'Yakhiwe e-',
    'about.forAfrica': 'kanye ne- Afrika',

    // Testimonials
    'testimonials.title': 'Abahlanganyeli Bathi Ngoni',

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
    'contact.title1': 'Ulungele Ukwenza I-AI Iyiqiniso',
    'contact.title2': 'Kwabhizinisi Lakho?',
    'contact.subtitle':
      'Joinal abaholi abangu-5,000+ ababhizimini base-Afrika abathola izinsizo ezintsha ngomumo we-AI.',
    'contact.placeholder': 'Faka i-imeyli yakho',
    'contact.subscribe': 'Bhalisa',
    'contact.noSpam': 'Akukho dili. Uyakwazi ukuyekela noma yini.',

    // Footer
    'footer.brandDesc':
      'Insiza ye-AI namasolutions okuzenzakalela akhiwe ngamabhizinisi ase-Afrika. Ingxenye ye-Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Iplatifomu',
    'footer.company': 'Inkampani',
    'footer.legal': 'Amalungelo',
    'footer.about': 'Ngathi',
    'footer.careers': 'Amacareer',
    'footer.partnerships': 'Ubudlelwano',
    'footer.blog': 'Ibhlogi',
    'footer.contactLink': 'Ukuxhumana',
    'footer.privacy': 'Inkathi Yokuziba',
    'footer.terms': 'Imigomo Yomsebenzi',
    'footer.cookies': 'Inkathi Ye-Cookie',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Wonke amalungelo agodliwe. Ingxenye ye-Simple Eternity Holdings (Pty) Ltd.',
  },

  fr: {
    // Nav
    'nav.platform': 'Plateforme',
    'nav.solutions': 'Solutions',
    'nav.industries': 'Industries',
    'nav.resources': 'Ressources',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.bookDemo': 'Réserver une démo',
    'nav.openMenu': 'Ouvrir le menu',

    // Hero
    'hero.badge': 'Explorer. S\'adapter. Évoluer.',
    'hero.title1': 'Infrastructure IA',
    'hero.title2': 'pour les Entreprises Africaines',
    'hero.subtitle':
      'De votre première idée aux revenus propulsés par l\'IA — nous construisons les systèmes qui transforment les données et les processus manuels en flux de travail intelligents et prêts pour les agents.',
    'hero.cta1': 'Réserver une démo',
    'hero.cta2': 'Explorer la plateforme',
    'hero.stat1': 'Entreprises transformées',
    'hero.stat2': 'Rétention client',
    'hero.stat3': 'Opérations IA',

    // Trusted by
    'trusted.text': 'La confiance des organisations leaders en Afrique australe',

    // Platform
    'platform.title': 'Blocs de construction, pas des boîtes noires',
    'platform.subtitle':
      'Déployez sur votre stack existante, configurez pour vos opérations, entraînez sur vos données. Une infrastructure qui évolue avec l\'IA.',
    'platform.vortex.tag': 'Plateforme de données',
    'platform.vortex.desc':
      'Rendez vos données multi-sources prêtes pour le machine learning. Centralisez vos données éparpillées en une plateforme gouvernée et prête pour l\'IA.',
    'platform.flux.tag': 'Constructeur de processus',
    'platform.flux.desc':
      'Documentez les processus manuels pour l\'automatisation. Cartographie visuelle du travail, chaque étape exécutée automatiquement.',
    'platform.nexus.tag': 'Réseau d\'experts',
    'platform.nexus.desc':
      'Un réseau de spécialistes IA et d\'experts métier vérifiés, déployés à la demande pour vos projets.',
    'platform.pulse.tag': 'Évaluations',
    'platform.pulse.desc':
      'Menez des évaluations rigoureuses pour la qualité, la sécurité et la précision. Mesurez les performances de l\'IA.',
    'platform.axon.tag': 'Agents IA',
    'platform.axon.desc':
      'Construisez des agents IA gouvernés qui reflètent vos workflows. Déployez des agents qui livrent les résultats finis.',
    'platform.learnMore': 'En savoir plus',

    // How it works
    'how.title': 'Des semaines vers une IA fonctionnelle, pas des mois de planification',
    'how.step1.title': 'Découvrir',
    'how.step1.desc':
      'Nous auditons vos données, workflows et opérations pour identifier où l\'IA a le plus d\'impact.',
    'how.step2.title': 'Construire',
    'how.step2.desc':
      'Notre équipe conçoit, entraîne et déploie des solutions IA personnalisées intégrées à vos systèmes.',
    'how.step3.title': 'Évoluer',
    'how.step3.desc':
      'Surveillez, évaluez et améliorez en continu. Votre infrastructure IA grandit avec votre entreprise.',

    // Industries
    'industries.title': 'Tous les secteurs, toutes les stacks',
    'industries.subtitle': 'Conçu pour les industries qui propulsent la croissance de l\'Afrique.',
    'industries.finance': 'Services financiers',
    'industries.finance.desc': 'Conformité, risque et analyse client — une IA qui répond aux exigences réglementaires.',
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
    'industries.public.desc': 'Réduisez la bureaucratie, connectez les systèmes et servez mieux les citoyens avec l\'IA.',
    'industries.edu': 'Éducation',
    'industries.edu.desc': 'Parcours d\'apprentissage personnalisés, évaluation automatique et analytique institutionnelle.',

    // Solutions
    'solutions.title': 'Solutions en vedette',
    'solutions.training.title': 'Formation IA & Données',
    'solutions.training.desc':
      'Annotation, formation et évaluation de niveau recherche pour les modèles d\'apprentissage automatique.',
    'solutions.training.stat': '100+ Modèles formés',
    'solutions.automation.title': 'Automatisation du back-office',
    'solutions.automation.desc':
      'Automatisez le travail complexe ou fastidieux. Traitez les données complexes avec précision.',
    'solutions.automation.stat': '70% de réduction du temps',
    'solutions.contact.title': 'Centre de contact intelligent',
    'solutions.contact.desc':
      'Données unifiées, QA automatique, analyse de sentiment et agents vocaux IA.',
    'solutions.contact.stat': '3x Gains d\'efficacité',

    // About
    'about.quote':
      'Pensez à la technologie comme un verbe, pas un nom. Elle fournit les outils, les gens créatifs fournissent l\'imagination.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle est un fournisseur complet de solutions IA et de transformation numérique pour les entreprises africaines. Du développement d\'agents IA spécialisés à l\'architecture de plateformes de données, nous gérons tout.',
    'about.founded': 'Fondé en Afrique du Sud, au service du continent.',
    'about.learnStory': 'Découvrir notre histoire',
    'about.builtIn': 'Construit en',
    'about.forAfrica': 'pour l\'Afrique',

    // Testimonials
    'testimonials.title': 'Ce que disent nos partenaires',

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
    'contact.title1': 'Prêt à rendre l\'IA réelle',
    'contact.title2': 'pour votre entreprise ?',
    'contact.subtitle':
      'Rejoignez 5 000+ dirigeants d\'entreprise africains recevant des analyses à la pointe de l\'IA.',
    'contact.placeholder': 'Entrez votre email',
    'contact.subscribe': 'S\'abonner',
    'contact.noSpam': 'Pas de spam. Désabonnez-vous à tout moment.',

    // Footer
    'footer.brandDesc':
      'Infrastructure IA et solutions d\'automatisation conçues pour les entreprises africaines. Partie de Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Plateforme',
    'footer.company': 'Entreprise',
    'footer.legal': 'Juridique',
    'footer.about': 'À propos',
    'footer.careers': 'Carrières',
    'footer.partnerships': 'Partenariats',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contact',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.cookies': 'Politique de cookies',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Tous droits réservés. Partie de Simple Eternity Holdings (Pty) Ltd.',
  },

  pt: {
    // Nav
    'nav.platform': 'Plataforma',
    'nav.solutions': 'Soluções',
    'nav.industries': 'Indústrias',
    'nav.resources': 'Recursos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.bookDemo': 'Agendar Demo',
    'nav.openMenu': 'Abrir menu',

    // Hero
    'hero.badge': 'Explorar. Adaptar. Evoluir.',
    'hero.title1': 'Infraestrutura de IA',
    'hero.title2': 'para Empresas Africanas',
    'hero.subtitle':
      'Da sua primeira ideia a receitas impulsionadas por IA — construímos os sistemas que transformam dados e processos manuais em fluxos de trabalho inteligentes e prontos para agentes.',
    'hero.cta1': 'Agendar Demo',
    'hero.cta2': 'Explorar Plataforma',
    'hero.stat1': 'Empresas Transformadas',
    'hero.stat2': 'Retenção de Clientes',
    'hero.stat3': 'Operações de IA',

    // Trusted by
    'trusted.text': 'Confiado por organizações líderes na África Austral',

    // Platform
    'platform.title': 'Blocos de Construção, Não Caixas Pretas',
    'platform.subtitle':
      'Implante na sua stack existente, configure para suas operações, treine com seus dados. Infraestrutura que evolui com a IA.',
    'platform.vortex.tag': 'Plataforma de Dados',
    'platform.vortex.desc':
      'Prepare seus dados multi-fonte para uso. Centralize dados dispersos em uma plataforma governada e pronta para IA.',
    'platform.flux.tag': 'Construtor de Processos',
    'platform.flux.desc':
      'Documente processos manuais para automação. Mapa visual de como o trabalho é feito, cada passo executado automaticamente.',
    'platform.nexus.tag': 'Rede de Especialistas',
    'platform.nexus.desc':
      'Uma rede curada de especialistas em IA e especialistas de domínio implantados sob demanda para seus projetos.',
    'platform.pulse.tag': 'Avaliações',
    'platform.pulse.desc':
      'Execute avaliações rigorosas de qualidade, segurança e precisão. Meça o desempenho da IA nos seus casos reais.',
    'platform.axon.tag': 'Agentes de IA',
    'platform.axon.desc':
      'Construa agentes de IA governados que espelham seus workflows. Implante agentes que entregam resultados ao seus sistemas.',
    'platform.learnMore': 'Saiba mais',

    // How it works
    'how.title': 'Semanas para IA Funcional, Não Meses de Planejamento',
    'how.step1.title': 'Descobrir',
    'how.step1.desc':
      'Auditamos seus dados, workflows e operações para identificar onde a IA cria mais impacto.',
    'how.step2.title': 'Construir',
    'how.step2.desc':
      'Nossa equipe projeta, treina e implanta soluções de IA personalizadas integradas aos seus sistemas.',
    'how.step3.title': 'Escalar',
    'how.step3.desc':
      'Monitore, avalie e melhore continuamente. Sua infraestrutura de IA cresce conforme seu negócio evolui.',

    // Industries
    'industries.title': 'Qualquer Setor, Qualquer Stack',
    'industries.subtitle': 'Construído para as indústrias que impulsionam o crescimento da África.',
    'industries.finance': 'Serviços Financeiros',
    'industries.finance.desc': 'Conformidade, risco e análise de clientes — IA que atende demandas regulatórias.',
    'industries.health': 'Saúde',
    'industries.health.desc': 'IA personalizada para operações de saúde, suporte diagnóstico e fluxo de pacientes.',
    'industries.mining': 'Mineração & Energia',
    'industries.mining.desc': 'Detecte perigos, reduza perdas, evite paradas com inteligência preditiva.',
    'industries.agri': 'Agricultura',
    'industries.agri.desc': 'Preveja safras, otimize cadeias de suprimentos e monitore lavouras com visão computacional.',
    'industries.retail': 'Varejo & E-commerce',
    'industries.retail.desc': 'Preveja demanda, automatize estoque e personalize experiências do cliente.',
    'industries.logistics': 'Logística',
    'industries.logistics.desc': 'Otimização de rotas, gestão de frotas e visibilidade em tempo real da cadeia de suprimentos.',
    'industries.public': 'Setor Público',
    'industries.public.desc': 'Corte burocracia, conecte sistemas e sirva melhor os cidadãos com IA.',
    'industries.edu': 'Educação',
    'industries.edu.desc': 'Trilhas de aprendizagem personalizadas, avaliação automatizada e análise institucional.',

    // Solutions
    'solutions.title': 'Soluções em Destaque',
    'solutions.training.title': 'Treinamento de IA & Dados',
    'solutions.training.desc':
      'Anotação de nível de pesquisa, treinamento e avaliação para modelos de aprendizado de máquina.',
    'solutions.training.stat': '100+ Modelos Treinados',
    'solutions.automation.title': 'Automação de Back-office',
    'solutions.automation.desc':
      'Automatize trabalho complexo ou tedioso. Trate dados confusos com precisão.',
    'solutions.automation.stat': '70% de Redução de Tempo',
    'solutions.contact.title': 'Central de Contato Inteligente',
    'solutions.contact.desc':
      'Dados unificados, QA automatizado, análise de sentimento e agentes de voz com IA.',
    'solutions.contact.stat': '3x Ganhos de Eficiência',

    // About
    'about.quote':
      'Pense na tecnologia como um verbo, não um substantivo. Ela fornece as ferramentas, pessoas criativas fornecem a imaginação.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'A Business Hustle é um provedor completo de soluções de IA e transformação digital para empresas africanas. Do desenvolvimento de agentes de IA especializados à arquitetura de plataformas de dados, cuidamos de tudo.',
    'about.founded': 'Fundada na África do Sul, servindo o continente.',
    'about.learnStory': 'Conheça Nossa História',
    'about.builtIn': 'Construído na',
    'about.forAfrica': 'para a África',

    // Testimonials
    'testimonials.title': 'O Que Nossos Parceiros Dizem',

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
    'contact.title1': 'Pronto Para Tornar a IA Realidade',
    'contact.title2': 'Para Seu Negócio?',
    'contact.subtitle':
      'Junte-se a 5.000+ líderes empresariais africanos recebendo insights na vanguarda da IA empresarial.',
    'contact.placeholder': 'Digite seu email',
    'contact.subscribe': 'Inscrever-se',
    'contact.noSpam': 'Sem spam. Cancele a qualquer momento.',

    // Footer
    'footer.brandDesc':
      'Infraestrutura de IA e soluções de automação construídas para empresas africanas. Parte da Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Plataforma',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.about': 'Sobre',
    'footer.careers': 'Carreiras',
    'footer.partnerships': 'Parcerias',
    'footer.blog': 'Blog',
    'footer.contactLink': 'Contato',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.cookies': 'Política de Cookies',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Todos os direitos reservados. Parte da Simple Eternity Holdings (Pty) Ltd.',
  },

  sw: {
    // Nav
    'nav.platform': 'Jukwaa',
    'nav.solutions': 'Suluhisho',
    'nav.industries': 'Viwanda',
    'nav.resources': 'Rasilimali',
    'nav.about': 'Kuhusu',
    'nav.contact': 'Mawasiliano',
    'nav.bookDemo': 'Panga Demo',
    'nav.openMenu': 'Fungua menyu',

    // Hero
    'hero.badge': 'Chunguza. Kubali. Endelea.',
    'hero.title1': 'Miundombinu ya AI',
    'hero.title2': 'kwa Biashara za Afrika',
    'hero.subtitle':
      'Kutoka wazo lako la kwanza hadi mapato yanayotokana na AI — tunajenga mifumo inayobadilisha data na mchakato wa kibinadamu kuwa mtiririko wa kazi wenye akili.',
    'hero.cta1': 'Panga Demo',
    'hero.cta2': 'Chunguza Jukwaa',
    'hero.stat1': 'Biashara Zilizobadilishwa',
    'hero.stat2': 'Ushikamaji wa Wateja',
    'hero.stat3': 'Uendeshaji wa AI',

    // Trusted by
    'trusted.text': 'Wanaotegemewa na mashirika yanayoongoza kusini mwa Afrika',

    // Platform
    'platform.title': 'Vifungo vya Ujenzi, Si Sanduku Nyeusi',
    'platform.subtitle':
      'Sanikisha kwenye mfumo wako, sanifisha kwa shughuli zako, funza kwa data yako. Miundombinu inayoendelea na AI.',
    'platform.vortex.tag': 'Jukwaa la Data',
    'platform.vortex.desc':
      'Pata data yako iliyochanganyika iwe tayari kwa mashine. Kusanya data iliyosambazwa kwenye jukwaa moja.',
    'platform.flux.tag': 'Muundaji wa Mchakato',
    'platform.flux.desc':
      'Andika mchakato wa kibinadamu kwa otomatiki. Ramani ya kuona jinsi kazi inavyofanywa, kila hatua ikitembea peke yake.',
    'platform.nexus.tag': 'Mtandao wa Wataalam',
    'platform.nexus.desc':
      'Mtandao uliochaguliwa wa wataalamu wa AI na wataalam wa uwanja wanaotumwa kwa ombi kwa miradi yako.',
    'platform.pulse.tag': 'Tathmini',
    'platform.pulse.desc':
      'Fanya tathmini kali ya ubora, usalama, na usahihi. Pima utendaji wa AI dhidi ya matumizi yako halisi.',
    'platform.axon.tag': 'Wakala wa AI',
    'platform.axon.desc':
      'Jenga wakala wa AI wenye utawala wanaoakisi mchakato wako. Sanikisha wakala wanaohandisha matokeo kwa mifumo yako.',
    'platform.learnMore': 'Soma zaidi',

    // How it works
    'how.title': 'Wiki za AI Inayofanya Kazi, Si Miezi ya Mpango',
    'how.step1.title': 'Gundua',
    'how.step1.desc':
      'Tunakagua data yako, mchakato wako, na shughuli zako kutambua mahali AI ina athari kubwa zaidi.',
    'how.step2.title': 'Jenga',
    'how.step2.desc':
      'Timu yetu inabuni, inafunza, na kusanikisha suluhisho za AI zilizobinafsishwa zilizounganishwa na mifumo yako.',
    'how.step3.title': 'Panua',
    'how.step3.desc':
      'Fuatilia, tathmini, na boresha endelea. Miundombinu yako ya AI inakua kadiri biashara yako inavyobadilika.',

    // Industries
    'industries.title': 'Sekta Yoyote, Mfumo Wowote',
    'industries.subtitle': 'Iliyoundwa kwa viwanda vinavyoendesha ukuaji wa Afrika.',
    'industries.finance': 'Huduma za Kifedha',
    'industries.finance.desc': 'Uzingatiaji, hatari, na uchambuzi wa wateja — AI inayotimiza mahitaji ya kanuni.',
    'industries.health': 'Afya',
    'industries.health.desc': 'AI ya kibinafsi kwa shughuli za afya, msaada wa uchambuzi, na mtiririko wa wagonjwa.',
    'industries.mining': 'Uchimbaji Madini & Nishati',
    'industries.mining.desc': 'Gundua hatari, punguza hasara,uzuia kusimamishwa kwa akili ya kutabiri.',
    'industries.agri': 'Kilimo',
    'industries.agri.desc': 'Tabiri mavuno, boresha mnyororo wa usambazaji, na uchunguze mazao kwa kompyuta.',
    'industries.retail': 'Biashara ya Mauzo',
    'industries.retail.desc': 'Tabiri mahitaji, otomatisha akiba, na binafsisha uzoefu wa wateja.',
    'industries.logistics': 'Uchukuzi',
    'industries.logistics.desc': 'Uboreshaji wa njia, usimamizi wa gari, na mwonekano wa wakati halisi.',
    'industries.public': 'Sekta ya Umma',
    'industries.public.desc': 'Kata ulegevu, unganisha mifumo, na tumikie raia vyema kwa AI.',
    'industries.edu': 'Elimu',
    'industries.edu.desc': 'Njia za kujifunza za kibinafsi, tathmini ya moja kwa moja, na uchambuzi wa taasisi.',

    // Solutions
    'solutions.title': 'Suluhisho Zinazoangaziwa',
    'solutions.training.title': 'Mafunzo ya AI & Data',
    'solutions.training.desc':
      'Uandishi wa kiwango cha utafiti, mafunzo, na tathmini kwa mifumo ya kujifunza mashine.',
    'solutions.training.stat': '100+ Mifumo Iliyofunzwa',
    'solutions.automation.title': 'Otomatiki ya Ofisi',
    'solutions.automation.desc':
      'Otomatisa kazi ngumu au ya kuchosha. Tatua data iliyochanganyika kwa usahihi.',
    'solutions.automation.stat': '70% Upungufu wa Wakati',
    'solutions.contact.title': 'Kituo cha Mawasiliano',
    'solutions.contact.desc':
      'Data iliyounganishwa, QA ya moja kwa moja, uchambuzi hisia, na wakala wa sauti wa AI.',
    'solutions.contact.stat': '3x Maendeleo ya Ufanisi',

    // About
    'about.quote':
      'Fikiria teknolojia kama kitenzi, si kiumbe. Inatoa zana, watu wenye ubunifu wanaleta taswira.',
    'about.quoteAuthor': '— Red Burns',
    'about.description':
      'Business Hustle ni mtayarishaji kamili wa suluhisho za AI na mabadiliko ya kidijitali kwa biashara za Afrika. Kutoka kwa uendelezaji wa wakala maalum wa AI hadi usanifu wa jukwaa la data, tunashughulikia yote.',
    'about.founded': 'Ilianzishwa Afrika Kusini, ikihudumia bara.',
    'about.learnStory': 'Jifunze Kuhusu Hadithi Yetu',
    'about.builtIn': 'Iliyojengwa',
    'about.forAfrica': 'kwa Afrika',

    // Testimonials
    'testimonials.title': 'Washirika Wetu Wanasema Nini',

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
    'contact.title1': 'Umeandaliwa Kufanya AI iwe',
    'contact.title2': 'Kwa Biashara Yako?',
    'contact.subtitle':
      'Jiunge na viongozi 5,000+ wa biashara za Afrika wanaopata maarifa ya kisasa zaidi ya AI.',
    'contact.placeholder': 'Ingiza barua pepe yako',
    'contact.subscribe': 'Jisajili',
    'contact.noSpam': 'Hakuna barua taka. Jiondoe wakati wowote.',

    // Footer
    'footer.brandDesc':
      'Miundombinu ya AI na suluhisho za otomatiki zilizojengwa kwa biashara za Afrika. Sehemu ya Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'Jukwaa',
    'footer.company': 'Kampuni',
    'footer.legal': 'Kisheria',
    'footer.about': 'Kuhusu',
    'footer.careers': 'Kazi',
    'footer.partnerships': 'Ushirikiano',
    'footer.blog': 'Blogu',
    'footer.contactLink': 'Mawasiliano',
    'footer.privacy': 'Sera ya Faragha',
    'footer.terms': 'Masharti ya Huduma',
    'footer.cookies': 'Sera ya Kuki',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. Haki zote zimehifadhiwa. Sehemu ya Simple Eternity Holdings (Pty) Ltd.',
  },

  ar: {
    // Nav
    'nav.platform': 'المنصة',
    'nav.solutions': 'الحلول',
    'nav.industries': 'الصناعات',
    'nav.resources': 'الموارد',
    'nav.about': 'حول',
    'nav.contact': 'اتصل',
    'nav.bookDemo': 'احجز عرضاً',
    'nav.openMenu': 'فتح القائمة',

    // Hero
    'hero.badge': 'استكشف. تكيّف. تطوّر.',
    'hero.title1': 'بنية تحتية للذكاء الاصطناعي',
    'hero.title2': 'للأعمال التجارية الأفريقية',
    'hero.subtitle':
      'من فكرتك الأولى إلى إيرادات مدعومة بالذكاء الاصطناعي — نبني الأنظمة التي تحول البيانات والعمليات اليدوية إلى سير عمل ذكي.',
    'hero.cta1': 'احجز عرضاً',
    'hero.cta2': 'استكشف المنصة',
    'hero.stat1': 'شركات محوّلة',
    'hero.stat2': 'الاحتفاظ بالعملاء',
    'hero.stat3': 'عمليات الذكاء الاصطناعي',

    // Trusted by
    'trusted.text': 'موثوق من قبل المنظمات الرائدة في جنوب أفريقيا',

    // Platform
    'platform.title': 'لبنات بناء، وليس صناديق سوداء',
    'platform.subtitle':
      'انشر على بنيتك الحالية، وقم بالتكوين لعملياتك، وتدرب على بياناتك. بنية تحتية تتطور مع الذكاء الاصطناعي.',
    'platform.vortex.tag': 'منصة بيانات',
    'platform.vortex.desc':
      'اجعل بياناتك المتعددة المصادر جاهزة للآلة. اجمع البيانات المبعثرة في منصة واحدة منظمة.',
    'platform.flux.tag': 'منشئ العمليات',
    'platform.flux.desc':
      'وثّق العمليات اليدوية للأتمتة. خريطة بصرية لكيفية إنجاز العمل، كل خطوة تعمل تلقائياً.',
    'platform.nexus.tag': 'شبكة الخبراء',
    'platform.nexus.desc':
      'شبكة منتقاة من متخصصي الذكاء الاصطناعي وخبراء المجال يتم نشرهم عند الطلب لمشاريعك.',
    'platform.pulse.tag': 'التقييمات',
    'platform.pulse.desc':
      'أجرِ تقييمات صارمة للجودة والسلامة والدقة. قيس أداء الذكاء الاصطناعي مقابل حالات الاستخدام الفعلية.',
    'platform.axon.tag': 'وكلاء ذكاء اصطناعي',
    'platform.axon.desc':
      'ابنِ وكلاء ذكاء اصطناعي منظمين يعكسون سير عملك. انشر وكلاء يسلمون النتائج النهائية لأنظمتك.',
    'platform.learnMore': 'اعرف المزيد',

    // How it works
    'how.title': 'أسابيع لذكاء اصطناعي عامل، وليس أشهر من التخطيط',
    'how.step1.title': 'اكتشف',
    'how.step1.desc':
      'نراجع بياناتك وسير عملك وعملياتك لتحديد المكان الذي يخلق فيه الذكاء الاصطناعي أكبر تأثير.',
    'how.step2.title': 'ابنِ',
    'how.step2.desc':
      'يصمم فريقنا ويدرب وينشر حلول ذكاء اصطناعي مخصصة مدمجة مع أنظمتك الحالية.',
    'how.step3.title': 'وسّع',
    'how.step3.desc':
      'راقب وقيم وحسّن باستمرار. بنيتك التحتية للذكاء الاصطناعي تنمو مع تطور أعمالك.',

    // Industries
    'industries.title': 'أي قطاع، أي بنية',
    'industries.subtitle': 'مُصمم للصناعات التي تقود نمو أفريقيا.',
    'industries.finance': 'الخدمات المالية',
    'industries.finance.desc': 'الامتثال والمخاطر ورؤى العملاء — ذكاء اصطناعي يلبي المتطلبات التنظيمية.',
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
    'industries.public.desc': 'اقطع البيروقراطية واربط الأنظمة وخدم المواطنين بشكل أفضل بالذكاء الاصطناعي.',
    'industries.edu': 'التعليم',
    'industries.edu.desc': 'مسارات تعلم مخصصة وتقييم آلي وتحليلات مؤسسية.',

    // Solutions
    'solutions.title': 'حلول مميزة',
    'solutions.training.title': 'تدريب الذكاء الاصطناعي والبيانات',
    'solutions.training.desc':
      'تعليق وتدريب وتقييم بمستوى البحث لنماذج التعلم الآلي.',
    'solutions.training.stat': '+100 نموذج مدرب',
    'solutions.automation.title': 'أتمتة المكتب الخلفي',
    'solutions.automation.desc':
      'أتمت العمل المعقد أو الممل. تعامل مع البيانات الفوضوية بدقة.',
    'solutions.automation.stat': '70% تقليل في الوقت',
    'solutions.contact.title': 'مركز اتصال ذكي',
    'solutions.contact.desc':
      'بيانات موحدة وضمان جودة آلي وتحليل المشاعر ووكلاء صوت بالذكاء الاصطناعي.',
    'solutions.contact.stat': '3x مكاسب في الكفاءة',

    // About
    'about.quote':
      'فكر في التكنولوجيا كفعل، لا كاسم. هي توفر الأدوات، والأشخاص المبدعون يوفرون الخيال.',
    'about.quoteAuthor': '— ريد بيرنز',
    'about.description':
      'بيزنس هاسل هي مزود كامل لحلول الذكاء الاصطناعي والتحول الرقمي للشركات الأفريقية. من تطوير وكلاء الذكاء الاصطناعي المتخصصين إلى هندسة منصات البيانات، نتولى كل شيء.',
    'about.founded': 'تأسست في جنوب أفريقيا، تخدم القارة.',
    'about.learnStory': 'تعرف على قصتنا',
    'about.builtIn': 'بُنيت في',
    'about.forAfrica': 'لأفريقيا',

    // Testimonials
    'testimonials.title': 'ماذا يقول شركاؤنا',

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
    'contact.title1': 'مستعد لجعل الذكاء الاصطناعي حقيقة',
    'contact.title2': 'لعملك؟',
    'contact.subtitle':
      'انضم إلى أكثر من 5,000 قائد أعمال أفريقي يتلقون رؤى في طليعة الذكاء الاصطناعي المؤسسي.',
    'contact.placeholder': 'أدخل بريدك الإلكتروني',
    'contact.subscribe': 'اشترك',
    'contact.noSpam': 'لا رسائل مزعجة. إلغاء الاشتراك في أي وقت.',

    // Footer
    'footer.brandDesc':
      'بنية تحتية للذكاء الاصطناعي وحلول أتمتة مبنية للشركات الأفريقية. جزء من Simple Eternity Holdings (Pty) Ltd.',
    'footer.platform': 'المنصة',
    'footer.company': 'الشركة',
    'footer.legal': 'قانوني',
    'footer.about': 'حول',
    'footer.careers': 'وظائف',
    'footer.partnerships': 'شراكات',
    'footer.blog': 'المدونة',
    'footer.contactLink': 'اتصل',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.copyright':
      '© 2025 Business Hustle Ltd. جميع الحقوق محفوظة. جزء من Simple Eternity Holdings (Pty) Ltd.',
  },
}