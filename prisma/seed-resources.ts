import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const resources = [
  // Design & UI
  { name: 'Canva', url: 'https://www.canva.com', description: '8,000+ free templates and thousands of free photos.', category: 'Design & UI', isFree: true, isPaid: false, order: 1 },
  { name: 'Figma', url: 'https://www.figma.com', description: 'Generate, edit and publish beautiful websites and landing pages for your startup.', category: 'Design & UI', isFree: true, isPaid: true, order: 2 },
  { name: 'Pexels', url: 'https://www.pexels.com', description: 'Free stock photos for commercial use. Free API for searching photos by keywords.', category: 'Design & UI', isFree: true, isPaid: false, order: 3 },
  { name: 'Cool Backgrounds', url: 'https://coolbackgrounds.io', description: 'Collection of tools to create compelling, colorful images for blogs, social media, and websites.', category: 'Design & UI', isFree: true, isPaid: false, order: 4 },
  { name: 'RemoveBG', url: 'https://www.remove.bg/', description: 'Remove image backgrounds automatically.', category: 'Design & UI', isFree: true, isPaid: false, order: 5 },
  { name: 'Humaaans', url: 'https://www.humaaans.com/', description: 'Library of editable people illustrations. Free for commercial and personal use.', category: 'Design & UI', isFree: true, isPaid: false, order: 6 },
  { name: 'Cartoon Pho', url: 'https://cartoon.pho.to', description: 'Turn your photos into cartoons for your website or presentations.', category: 'Design & UI', isFree: true, isPaid: false, order: 7 },
  { name: 'Color Hunt', url: 'https://colorhunt.co', description: 'Open platform for color inspiration with thousands of trendy hand-picked color palettes.', category: 'Design & UI', isFree: true, isPaid: false, order: 8 },
  { name: 'Palette Ninja', url: 'https://palette.ninja', description: 'Design harmonious color schemes in seconds.', category: 'Design & UI', isFree: true, isPaid: false, order: 9 },
  { name: 'Stripes Generator', url: 'https://stripesgenerator.com', description: 'Stripes generator for your website backgrounds.', category: 'Design & UI', isFree: true, isPaid: false, order: 10 },
  { name: 'Photopea', url: 'https://www.photopea.com', description: 'Free, advanced online design editor with Adobe Photoshop UI supporting PSD, XCF & Sketch.', category: 'Design & UI', isFree: true, isPaid: false, order: 11 },
  { name: 'Get Waves', url: 'https://getwaves.io', description: 'SVG wave generator to make unique SVG waves for web design.', category: 'Design & UI', isFree: true, isPaid: false, order: 12 },
  { name: 'IconMonstr', url: 'https://iconmonstr.com', description: 'Black and white themed minimal icons with customizable thickness.', category: 'Design & UI', isFree: true, isPaid: false, order: 13 },
  { name: 'Undraw', url: 'https://undraw.co', description: 'MIT licensed illustrations for every project you can imagine.', category: 'Design & UI', isFree: true, isPaid: false, order: 14 },
  { name: 'Unscreen', url: 'https://www.unscreen.com/', description: 'Remove video backgrounds 100% automatically.', category: 'Design & UI', isFree: true, isPaid: false, order: 15 },
  { name: 'Gratisography', url: 'https://www.gratisography.com', description: 'High-resolution pictures free of copyright restrictions for personal or commercial use.', category: 'Design & UI', isFree: true, isPaid: false, order: 16 },
  { name: 'The Noun Project', url: 'https://thenounproject.com', description: 'Search for a noun and find an icon as simple as that.', category: 'Design & UI', isFree: true, isPaid: false, order: 17 },
  { name: 'UI Design Daily', url: 'https://uidesigndaily.com/', description: 'Fantastic UI components of all types.', category: 'Design & UI', isFree: true, isPaid: false, order: 18 },
  { name: 'Paaatterns', url: 'https://products.ls.graphics/paaatterns/', description: 'Free collection of gorgeous patterns for all vector formats.', category: 'Design & UI', isFree: true, isPaid: false, order: 19 },
  { name: 'Absurd Design', url: 'https://absurd.design/', description: 'Free surrealist illustrations for designers and developers.', category: 'Design & UI', isFree: true, isPaid: false, order: 20 },
  { name: 'Blush', url: 'https://blush.design/', description: 'Free customizable illustrations with Figma plugin.', category: 'Design & UI', isFree: true, isPaid: false, order: 21 },
  { name: 'Pixeltrue', url: 'https://www.pixeltrue.com/illustrations', description: 'Free animated illustrations.', category: 'Design & UI', isFree: true, isPaid: false, order: 22 },
  { name: 'Sketch Valley', url: 'https://sketchvalley.com', description: 'Download free PNG, SVG or AI files.', category: 'Design & UI', isFree: true, isPaid: false, order: 23 },
  { name: 'Smart Upscaler', url: 'https://icons8.com/upscaler', description: 'Upscale images by 2-4x resolution.', category: 'Design & UI', isFree: true, isPaid: false, order: 24 },
  { name: 'Pattern Monster', url: 'https://pattern.monster', description: 'Simple online pattern generator to create repeatable SVG patterns.', category: 'Design & UI', isFree: true, isPaid: false, order: 25 },
  { name: 'Dimensions', url: 'https://www.dimensions.com/', description: 'Ongoing reference database of dimensioned drawings documenting standard measurements.', category: 'Design & UI', isFree: true, isPaid: false, order: 26 },

  // Web Design Inspiration
  { name: 'Awwwards', url: 'https://www.awwwards.com', description: 'Showcasing the pinnacle of design, creativity, and innovation online.', category: 'Web Design Inspiration', isFree: true, isPaid: false, order: 1 },
  { name: 'SaaS Landing Page', url: 'https://saaslandingpage.com', description: 'Over 600 exceptional landing page examples from leading SaaS companies.', category: 'Web Design Inspiration', isFree: true, isPaid: false, order: 2 },
  { name: 'Behance', url: 'https://www.behance.net/', description: 'Creative design projects from artists worldwide, browsable by style, creator, or industry.', category: 'Web Design Inspiration', isFree: true, isPaid: false, order: 3 },
  { name: 'Design Vault', url: 'https://designvault.io/', description: 'Rich library of screenshots and design patterns from real-world digital products.', category: 'Web Design Inspiration', isFree: true, isPaid: false, order: 4 },

  // Email
  { name: 'Buttondown', url: 'https://buttondown.email', description: 'Simple yet powerful newsletter service. Up to 1,000 subscribers completely free.', category: 'Email', isFree: true, isPaid: false, order: 1 },
  { name: 'Forward Email', url: 'https://forwardemail.net/en', description: 'Effortless email forwarding for custom domains. Unlimited email addresses at no cost.', category: 'Email', isFree: true, isPaid: false, order: 2 },
  { name: 'SparkPost', url: 'https://www.sparkpost.com', description: 'Robust email delivery features, including the first 500 emails per month free.', category: 'Email', isFree: true, isPaid: true, order: 3 },

  // Website Hosting
  { name: 'Netlify', url: 'https://www.netlify.com', description: 'Seamless, Git-based serverless platform for modern web development.', category: 'Website Hosting', isFree: true, isPaid: true, order: 1 },
  { name: '000webhost', url: 'https://www.000webhost.com', description: 'Cost-free hosting with Apache, PHP, MySQL, and cPanel.', category: 'Website Hosting', isFree: true, isPaid: true, order: 2 },
  { name: 'Pingdom Tools', url: 'https://tools.pingdom.com', description: 'Performance monitoring and cost analysis tools to optimize your website.', category: 'Website Hosting', isFree: true, isPaid: true, order: 3 },

  // Downloadable Design Software
  { name: 'GIMP', url: 'https://www.gimp.org/', description: 'Powerful, open-source image editor with features comparable to Photoshop.', category: 'Design Software', isFree: true, isPaid: false, order: 1 },
  { name: 'Gravit Designer', url: 'https://www.designer.io/en/', description: 'Cross-platform vector graphic design application packed with features.', category: 'Design Software', isFree: true, isPaid: false, order: 2 },
  { name: 'Be Funky', url: 'https://www.befunky.com/features/graphic-designer/', description: 'Online graphic design platform offering easy-to-use editing tools.', category: 'Design Software', isFree: true, isPaid: true, order: 3 },
  { name: 'Krita', url: 'https://krita.org/en/download/krita-desktop/', description: 'Robust sketching and painting program designed for digital artists.', category: 'Design Software', isFree: true, isPaid: false, order: 4 },
  { name: 'GUI Prototyping', url: 'https://pencil.evolus.vn', description: 'Software for creating interactive GUI prototypes for web and app design.', category: 'Design Software', isFree: true, isPaid: false, order: 5 },
  { name: 'Color Picker', url: 'https://colorpicker.fr', description: 'Open-source color software for retrieving, manipulating, and organizing colors.', category: 'Design Software', isFree: true, isPaid: false, order: 6 },

  // SEO
  { name: 'SEO Site Checkup', url: 'https://seositecheckup.com', description: 'Audit your site for proper tags and errors to enhance SEO.', category: 'SEO', isFree: true, isPaid: true, order: 1 },
  { name: 'WebPageTest', url: 'http://webpagetest.org', description: 'Comprehensive audits with recommendations for optimizing site performance globally.', category: 'SEO', isFree: true, isPaid: true, order: 2 },
  { name: 'Backlinko', url: 'https://backlinko.com/', description: 'Exclusive SEO strategies shared through email tips.', category: 'SEO', isFree: true, isPaid: false, order: 3 },
  { name: 'Search Engine Land', url: 'https://searchengineland.com/', description: 'Detailed guides, including tips on setting up campaigns effectively.', category: 'SEO', isFree: true, isPaid: false, order: 4 },
  { name: 'Moz', url: 'https://moz.com/', description: 'Industry-leading SEO software for improving traffic, rankings, and site visibility.', category: 'SEO', isFree: true, isPaid: false, order: 5 },
  { name: 'Search Engine Watch', url: 'https://www.searchenginewatch.com/', description: 'The ultimate SEO newsletter & resources.', category: 'SEO', isFree: true, isPaid: false, order: 6 },
  { name: 'Search Engine Journal', url: 'https://www.searchenginejournal.com/', description: 'Expert insights and guides on SEO forecasting and strategies.', category: 'SEO', isFree: true, isPaid: false, order: 7 },
  { name: 'SEO Roundtable', url: 'https://www.seroundtable.com/', description: 'SEO discussions and topics on different search engine marketing strategies.', category: 'SEO', isFree: true, isPaid: false, order: 8 },
  { name: 'Learning SEO', url: 'https://learningseo.io/', description: 'Roadmap filled with free guides, tools, and resources to master SEO.', category: 'SEO', isFree: true, isPaid: false, order: 9 },

  // Content Creation
  { name: 'Mockuper', url: 'https://mockuper.net', description: 'Quickly design professional mockups for your products.', category: 'Content Creation', isFree: true, isPaid: false, order: 1 },
  { name: 'Google Fonts', url: 'https://fonts.google.com', description: 'Extensive library of free, easy-to-implement fonts.', category: 'Content Creation', isFree: true, isPaid: false, order: 2 },
  { name: 'VideoInu', url: 'https://videoinu.com', description: 'Intuitive platform for creating and editing screen recordings or other videos online.', category: 'Content Creation', isFree: true, isPaid: false, order: 3 },
  { name: 'Wireframe', url: 'https://wireframe.cc/', description: 'Minimalist tool for sketching layouts and brainstorming design ideas.', category: 'Content Creation', isFree: true, isPaid: false, order: 4 },

  // Forms
  { name: '99 Inbound', url: 'https://www.99inbound.com', description: 'Build custom forms and share them online. 2 forms, 100 entries/month free.', category: 'Forms', isFree: true, isPaid: true, order: 1 },
  { name: 'Web3Forms', url: 'https://web3forms.com', description: 'Contact forms for static and JAMstack websites without backend code.', category: 'Forms', isFree: true, isPaid: false, order: 2 },

  // Software Development
  { name: 'Developer Roadmaps', url: 'https://roadmap.sh/', description: 'Community effort to create roadmaps and educational content to guide developers.', category: 'Software Development', isFree: true, isPaid: false, order: 1 },
  { name: 'Anvil', url: 'https://anvil.works', description: 'Full stack web apps with nothing but Python.', category: 'Software Development', isFree: true, isPaid: true, order: 2 },
  { name: 'Encore', url: 'https://encore.dev', description: 'Smoother backend workflow from idea to production using source code analysis.', category: 'Software Development', isFree: true, isPaid: true, order: 3 },
  { name: 'QR Code Generator', url: 'https://markodenic.com/tools/qr-code-generator/', description: 'Easily create a QR code for your project.', category: 'Software Development', isFree: true, isPaid: false, order: 4 },
  { name: 'Shields.io', url: 'https://shields.io/', description: 'Create badges with your own customization.', category: 'Software Development', isFree: true, isPaid: false, order: 5 },
  { name: 'OverAPI', url: 'https://overapi.com/', description: 'Collection of all software development cheat sheets.', category: 'Software Development', isFree: true, isPaid: false, order: 6 },
  { name: 'DevDocs', url: 'https://devdocs.io/', description: 'Combines multiple API documentations in a fast, organized, searchable interface.', category: 'Software Development', isFree: true, isPaid: false, order: 7 },
  { name: 'Have I Been Pwned', url: 'https://haveibeenpwned.com', description: 'Check to see if your email or phone is in a data breach.', category: 'Software Development', isFree: true, isPaid: false, order: 8 },

  // Education & Training
  { name: 'edX', url: 'https://www.edx.org/', description: 'University-level courses from Harvard, MIT, Wharton, and more.', category: 'Education & Training', isFree: true, isPaid: false, order: 1 },
  { name: 'Learn UI', url: 'https://learnui.design/index.html', description: 'Learn UI design for free.', category: 'Education & Training', isFree: true, isPaid: false, order: 2 },
  { name: 'Techstars', url: 'https://toolkit.techstars.com/master-your-pitch', description: 'Master your pitch and improve your communication skills.', category: 'Education & Training', isFree: true, isPaid: false, order: 3 },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/', description: 'Practice coding skills using real-world UI challenges with HTML, CSS and JS.', category: 'Education & Training', isFree: true, isPaid: false, order: 4 },

  // SQL Practice
  { name: 'SQLZOO', url: 'https://sqlzoo.net/wiki/SQL_Tutorial', description: 'Learn & practice SQL in stages.', category: 'SQL Practice', isFree: true, isPaid: false, order: 1 },
  { name: 'W3Schools SQL', url: 'https://www.w3schools.com/sql/default.asp', description: 'Learn SQL for free.', category: 'SQL Practice', isFree: true, isPaid: false, order: 2 },
  { name: 'SQLize', url: 'https://sqlize.online', description: 'Free online SQL environment for running and experimenting with code.', category: 'SQL Practice', isFree: true, isPaid: false, order: 3 },
  { name: 'SQLBolt', url: 'https://sqlbolt.com', description: 'Series of interactive lessons and exercises to learn SQL right in your browser.', category: 'SQL Practice', isFree: true, isPaid: false, order: 4 },

  // Payment Integrations
  { name: 'FraudLabs Pro', url: 'https://www.fraudlabspro.com/', description: 'Help merchants prevent payment fraud and chargebacks. 500 queries/month free.', category: 'Payment Integrations', isFree: true, isPaid: true, order: 1 },
  { name: 'RevenueCat', url: 'https://www.revenuecat.com/', description: 'Hosted backend for in-app purchases and subscriptions. Free up to $10k/mo.', category: 'Payment Integrations', isFree: true, isPaid: true, order: 2 },
  { name: 'CurrencyStack', url: 'https://currencystack.io/', description: 'Production-ready real-time exchange rates for 154 currencies.', category: 'Payment Integrations', isFree: true, isPaid: true, order: 3 },
  { name: 'ExchangeRate API', url: 'https://www.exchangerate-api.com/', description: 'Easy to use currency conversion JSON API. Free tier with no request limit.', category: 'Payment Integrations', isFree: true, isPaid: false, order: 4 },

  // Project Management
  { name: 'Miro', url: 'https://miro.com/', description: 'Online collaborative whiteboard platform to bring teams together.', category: 'Project Management', isFree: true, isPaid: true, order: 1 },
  { name: 'Nuclino', url: 'https://www.nuclino.com/', description: 'One central place for all your team\'s work.', category: 'Project Management', isFree: true, isPaid: true, order: 2 },
  { name: 'Pendulums', url: 'https://pendulums.io/', description: 'Free time tracking tool with easy-to-use interface and useful statistics.', category: 'Project Management', isFree: true, isPaid: true, order: 3 },
  { name: 'Whereby', url: 'https://whereby.com', description: 'No app or installs required. Same meeting link every time.', category: 'Project Management', isFree: true, isPaid: true, order: 4 },
  { name: 'Visme', url: 'https://www.visme.co', description: 'Create presentations, infographics and more.', category: 'Project Management', isFree: true, isPaid: false, order: 5 },
  { name: 'Diagrams.net', url: 'https://www.diagrams.net', description: 'Diagram software and flowchart maker.', category: 'Project Management', isFree: true, isPaid: false, order: 6 },
  { name: 'Bitwarden', url: 'https://bitwarden.com/', description: 'Easiest and safest way to store, share, and sync sensitive data.', category: 'Project Management', isFree: true, isPaid: true, order: 7 },

  // Copywriting
  { name: 'Swiped', url: 'https://swiped.co/', description: 'The best copywriting inspiration.', category: 'Copywriting', isFree: true, isPaid: false, order: 1 },
  { name: 'Stripe Atlas Guide', url: 'https://stripe.com/en-in/atlas/guides/landing-page-copy', description: 'Guide on copywriting for landing pages.', category: 'Copywriting', isFree: true, isPaid: false, order: 2 },

  // Learn AI
  { name: 'AIMA', url: 'http://aima.cs.berkeley.edu', description: 'The leading textbook in AI (4th most cited publication of the century).', category: 'Learn AI', isFree: true, isPaid: false, order: 1 },
  { name: 'Fast.ai', url: 'http://course.fast.ai', description: 'Free practical deep learning course for coders without grad-level maths.', category: 'Learn AI', isFree: true, isPaid: false, order: 2 },
  { name: 'TensorFlow', url: 'https://www.tensorflow.org', description: 'Open-source software library for Machine Intelligence.', category: 'Learn AI', isFree: true, isPaid: false, order: 3 },
  { name: 'Kaggle', url: 'https://www.kaggle.com/', description: 'All-in-one ML and Data Science community with free GPUs and datasets.', category: 'Learn AI', isFree: true, isPaid: false, order: 4 },

  // Developer Tools & Everything
  { name: 'TinyWow', url: 'https://tinywow.com', description: 'Free tools for pretty much anything you need to do online.', category: 'Developer Tools', isFree: true, isPaid: false, order: 1 },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/', description: 'Documentation of all the web standards.', category: 'Developer Tools', isFree: true, isPaid: false, order: 2 },
  { name: 'Coolors', url: 'https://coolors.co/', description: 'Create the perfect palette or get inspired by beautiful color schemes.', category: 'Developer Tools', isFree: true, isPaid: false, order: 3 },
  { name: 'LottieFiles', url: 'https://lottiefiles.com/', description: 'World\'s largest online platform for Lottie animations.', category: 'Developer Tools', isFree: true, isPaid: false, order: 4 },
  { name: 'Iconscout', url: 'https://iconscout.com/', description: 'Over 2.2M+ design assets — SVGs, vector icons, illustrations, 3D graphics.', category: 'Developer Tools', isFree: true, isPaid: false, order: 5 },
  { name: 'Can I Use', url: 'https://caniuse.com/', description: 'Browser compatibility tables for modern web technologies.', category: 'Developer Tools', isFree: true, isPaid: false, order: 6 },
  { name: 'Clean Code JavaScript', url: 'https://github.com/ryanmcdermott/clean-code-javascript', description: 'Clean code concepts adapted for JavaScript.', category: 'Developer Tools', isFree: true, isPaid: false, order: 7 },
  { name: 'CSS Tricks', url: 'https://css-tricks.com/', description: 'About building websites from a front-end perspective.', category: 'Developer Tools', isFree: true, isPaid: false, order: 8 },

  // GIT & GitHub
  { name: 'GitHub Guides', url: 'https://guides.github.com', description: 'The official GitHub guides.', category: 'Git & GitHub', isFree: true, isPaid: false, order: 1 },
  { name: 'GitHub Learning Lab', url: 'https://lab.github.com', description: 'Interactive GitHub learning courses.', category: 'Git & GitHub', isFree: true, isPaid: false, order: 2 },
  { name: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2', description: 'The official Pro Git book, free online.', category: 'Git & GitHub', isFree: true, isPaid: false, order: 3 },
  { name: 'Git Commands', url: 'https://github.com/joshnh/Git-Commands', description: 'A list of commonly used Git commands.', category: 'Git & GitHub', isFree: true, isPaid: false, order: 4 },

  // JavaScript
  { name: 'FreeCodeCamp', url: 'https://freecodecamp.com', description: 'Free coding curriculum with certifications.', category: 'JavaScript', isFree: true, isPaid: false, order: 1 },
  { name: 'The Odin Project', url: 'https://www.theodinproject.com', description: 'Full-stack web development curriculum.', category: 'JavaScript', isFree: true, isPaid: false, order: 2 },
  { name: 'JavaScript.info', url: 'https://javascript.info', description: 'The Modern JavaScript Tutorial.', category: 'JavaScript', isFree: true, isPaid: false, order: 3 },
  { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net', description: 'A modern introduction to programming.', category: 'JavaScript', isFree: true, isPaid: false, order: 4 },
  { name: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS', description: 'Deep dive into JavaScript mechanics.', category: 'JavaScript', isFree: true, isPaid: false, order: 5 },
  { name: 'FullStack Open', url: 'https://fullstackopen.com/en', description: 'Full stack open course by University of Helsinki.', category: 'JavaScript', isFree: true, isPaid: false, order: 6 },

  // Podcasts
  { name: 'Syntax', url: 'https://syntax.fm', description: 'A podcast about web development, CSS, JavaScript, and more.', category: 'Podcasts', isFree: true, isPaid: false, order: 1 },
  { name: 'Indie Hackers', url: 'https://www.indiehackers.com/podcast', description: 'Stories from founders building profitable online businesses.', category: 'Podcasts', isFree: true, isPaid: false, order: 2 },
  { name: 'Masters of Scale', url: 'https://mastersofscale.com', description: 'How companies go from zero to a gazillion.', category: 'Podcasts', isFree: true, isPaid: false, order: 3 },
  { name: 'Darknet Diaries', url: 'https://darknetdiaries.com', description: 'True stories from the dark side of the internet.', category: 'Podcasts', isFree: true, isPaid: false, order: 4 },
  { name: 'Software Engineering Daily', url: 'https://dev.to/sedaily', description: 'Daily podcast about software engineering topics.', category: 'Podcasts', isFree: true, isPaid: false, order: 5 },
  { name: 'JS Party', url: 'https://changelog.com/jsparty', description: 'A celebration of JavaScript and the web.', category: 'Podcasts', isFree: true, isPaid: false, order: 6 },

  // PWA
  { name: 'PWA Codelab', url: 'https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0', description: 'Progressive Web Application hands-on codelab by Google.', category: 'Progressive Web Apps', isFree: true, isPaid: false, order: 1 },
  { name: 'PWA Guide', url: 'https://flaviocopes.com/what-is-a-progressive-web-app', description: 'The complete guide to Progressive Web Apps.', category: 'Progressive Web Apps', isFree: true, isPaid: false, order: 2 },
  { name: 'Service Workers Guide', url: 'https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6', description: 'A beginner\'s guide to service workers.', category: 'Progressive Web Apps', isFree: true, isPaid: false, order: 3 },

  // Markdown
  { name: 'Learn Markdown', url: 'https://learnxinyminutes.com/docs/markdown', description: 'Learn Markdown in Y minutes.', category: 'Markdown', isFree: true, isPaid: false, order: 1 },
  { name: 'Markdown Tutorial', url: 'https://www.markdowntutorial.com', description: 'Interactive Markdown tutorial.', category: 'Markdown', isFree: true, isPaid: false, order: 2 },
  { name: 'Markdown Cheat Sheet', url: 'https://markdownguide.org/cheat-sheet', description: 'Quick reference Markdown cheat sheet.', category: 'Markdown', isFree: true, isPaid: false, order: 3 },
  { name: 'Make a README', url: 'https://www.makeareadme.com', description: 'Guide to writing great README files.', category: 'Markdown', isFree: true, isPaid: false, order: 4 },
];

async function seed() {
  console.log('Seeding resources...');
  
  // Clear existing resources
  await prisma.resource.deleteMany();
  
  // Insert all resources
  const result = await prisma.resource.createMany({
    data: resources,
  });
  
  console.log(`Seeded ${result.count} resources across ${new Set(resources.map(r => r.category)).size} categories`);
  
  // Print category counts
  const categories = [...new Set(resources.map(r => r.category))];
  for (const cat of categories) {
    const count = resources.filter(r => r.category === cat).length;
    console.log(`  ${cat}: ${count} resources`);
  }
  
  await prisma.$disconnect();
}

seed().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});