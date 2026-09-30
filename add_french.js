/**
 * French language addition script for Mohcine Laghmich portfolio.
 * Run once: node add_french.js
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
let c = fs.readFileSync(FILE, 'utf8');

// Normalize line endings to LF for consistent matching
c = c.replace(/\r\n/g, '\n');

const orig = c;
let changes = 0;

function replace(from, to, label) {
  if (!c.includes(from)) {
    console.error('NOT FOUND (' + label + '):', JSON.stringify(from.slice(0, 80)));
    process.exit(1);
  }
  c = c.replace(from, to);
  changes++;
  console.log('✓', label);
}

// ─── 1. CSS: Language switcher ─────────────────────────────────────────────
replace(
  '.cv-btn svg{width:12px;height:12px}\n',
  `.cv-btn svg{width:12px;height:12px}\n\n/* ── LANGUAGE SWITCHER ── */\n.lang-switch{display:inline-flex;align-items:center;gap:2px;background:var(--bg2);border:1px solid var(--border2);border-radius:8px;padding:3px;flex-shrink:0}\n.lang-btn{padding:3px 9px;border-radius:5px;font-size:11px;font-weight:600;color:var(--text3);border:none;cursor:pointer;background:transparent;font-family:'DM Mono',monospace;letter-spacing:.02em;transition:all .2s;line-height:1.5;touch-action:manipulation}\n.lang-btn.active{background:var(--bg);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.10)}\n.lang-btn:hover:not(.active){color:var(--text)}\n.mob-nav-lang{display:flex;justify-content:center;padding:12px 16px 4px}\n`,
  'CSS lang-switch'
);

// ─── 2. Nav links – add data-i18n ──────────────────────────────────────────
replace(
  `    <a href="#about" class="nl">About</a>\n    <a href="#skills" class="nl">Skills</a>\n    <a href="#projects" class="nl">Projects</a>\n    <a href="#experience" class="nl">Experience</a>\n    <a href="#contact" class="nl">Contact</a>`,
  `    <a href="#about" class="nl" data-i18n="nav.about">About</a>\n    <a href="#skills" class="nl" data-i18n="nav.skills">Skills</a>\n    <a href="#projects" class="nl" data-i18n="nav.projects">Projects</a>\n    <a href="#experience" class="nl" data-i18n="nav.experience">Experience</a>\n    <a href="#contact" class="nl" data-i18n="nav.contact">Contact</a>`,
  'Nav links data-i18n'
);

// ─── 3. Nav CV btn text + lang switch ──────────────────────────────────────
replace(
  `      Download CV\n    </a>\n    <button class="mob-menu-btn"`,
  `      <span data-i18n="nav.cvBtn">Download CV</span>\n    </a>\n    <div class="lang-switch" id="langSwitch" role="group" aria-label="Language">\n      <button class="lang-btn active" data-lang="en">EN</button>\n      <button class="lang-btn" data-lang="fr">FR</button>\n    </div>\n    <button class="mob-menu-btn"`,
  'Nav CV btn + lang switch'
);

// ─── 4. Mobile nav links + cv + lang switch ────────────────────────────────
replace(
  `  <a href="#about" class="mob-nav-link">About</a>\n  <a href="#skills" class="mob-nav-link">Skills</a>\n  <a href="#projects" class="mob-nav-link">Projects</a>\n  <a href="#experience" class="mob-nav-link">Experience</a>\n  <a href="#contact" class="mob-nav-link">Contact</a>\n  <div class="mob-nav-divider"></div>\n  <a href="cv.pdf" download="Mohcine_Laghmich_CV.pdf" class="mob-nav-cv">\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\n      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>\n      <polyline points="7 10 12 15 17 10"/>\n      <line x1="12" y1="15" x2="12" y2="3"/>\n    </svg>\n    Download CV\n  </a>\n</div>`,
  `  <a href="#about" class="mob-nav-link" data-i18n="nav.about">About</a>\n  <a href="#skills" class="mob-nav-link" data-i18n="nav.skills">Skills</a>\n  <a href="#projects" class="mob-nav-link" data-i18n="nav.projects">Projects</a>\n  <a href="#experience" class="mob-nav-link" data-i18n="nav.experience">Experience</a>\n  <a href="#contact" class="mob-nav-link" data-i18n="nav.contact">Contact</a>\n  <div class="mob-nav-divider"></div>\n  <a href="cv.pdf" download="Mohcine_Laghmich_CV.pdf" class="mob-nav-cv">\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\n      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>\n      <polyline points="7 10 12 15 17 10"/>\n      <line x1="12" y1="15" x2="12" y2="3"/>\n    </svg>\n    <span data-i18n="nav.cvBtn">Download CV</span>\n  </a>\n  <div class="mob-nav-lang">\n    <div class="lang-switch" role="group" aria-label="Language">\n      <button class="lang-btn active" data-lang="en">EN</button>\n      <button class="lang-btn" data-lang="fr">FR</button>\n    </div>\n  </div>\n</div>`,
  'Mobile nav + lang switch'
);

// ─── 5. Hero badge ─────────────────────────────────────────────────────────
replace(
  `        <span class="badge-pulse"></span>\n        Open to opportunities &nbsp;&middot;&nbsp; Tangier, Morocco`,
  `        <span class="badge-pulse"></span>\n        <span data-i18n="hero.badge">Open to opportunities &nbsp;&middot;&nbsp; Tangier, Morocco</span>`,
  'Hero badge'
);

// ─── 6. Hero h1 ────────────────────────────────────────────────────────────
replace(
  `      <h1 class="h-title">`,
  `      <h1 class="h-title" data-i18n="hero.title">`,
  'Hero h1'
);

// ─── 7. Hero type prefix ───────────────────────────────────────────────────
replace(
  `        <span class="type-pfx">I'm a</span>`,
  `        <span class="type-pfx" data-i18n="hero.prefix">I'm a</span>`,
  'Hero type prefix'
);

// ─── 8. Hero sub ──────────────────────────────────────────────────────────
replace(
  `      <p class="h-sub">Based in Tangier — I design and build digital products that feel fast, clean, and real. From React frontends to solid PHP &amp; MySQL backends.</p>`,
  `      <p class="h-sub" data-i18n="hero.sub">Based in Tangier — I design and build digital products that feel fast, clean, and real. From React frontends to solid PHP &amp; MySQL backends.</p>`,
  'Hero sub'
);

// ─── 9. Hero buttons ──────────────────────────────────────────────────────
replace(
  `          View projects\n          <svg`,
  `          <span data-i18n="hero.viewProjects">View projects</span>\n          <svg`,
  'Hero view projects btn'
);
replace(
  `<a href="#contact" class="btn-ghost">Get in touch</a>`,
  `<a href="#contact" class="btn-ghost" data-i18n="hero.getInTouch">Get in touch</a>`,
  'Hero get in touch btn'
);

// ─── 10. Hero stats labels ────────────────────────────────────────────────
replace(
  `<div class="stl">Projects</div>`,
  `<div class="stl" data-i18n="hero.statProjects">Projects</div>`,
  'Stat Projects'
);
replace(
  `<div class="stl">Languages</div>`,
  `<div class="stl" data-i18n="hero.statLanguages">Languages</div>`,
  'Stat Languages'
);
replace(
  `<div class="stl">Building</div>`,
  `<div class="stl" data-i18n="hero.statBuilding">Building</div>`,
  'Stat Building'
);

// ─── 11. Clock city ───────────────────────────────────────────────────────
replace(
  `          <div class="clk-city">🇲🇦 Tangier — GMT+1</div>`,
  `          <div class="clk-city" data-i18n="hero.city">🇲🇦 Tangier — GMT+1</div>`,
  'Clock city'
);

// ─── 12. About section ────────────────────────────────────────────────────
replace(
  `  <div class="s-tag rv">About me</div>`,
  `  <div class="s-tag rv" data-i18n="about.tag">About me</div>`,
  'About tag'
);
replace(
  `      <h2 class="about-h2">A developer who<br>ships real things.</h2>`,
  `      <h2 class="about-h2" data-i18n="about.heading">A developer who<br>ships real things.</h2>`,
  'About heading'
);
replace(
  `      <p class="about-p">I'm Mohcine, 21, studying Software Development at Institut CIEL in Tangier. Since 2023 I've been building web and mobile apps — not just to learn, but to <strong>solve real problems</strong>.</p>`,
  `      <p class="about-p" data-i18n="about.p1">I'm Mohcine, 21, studying Software Development at Institut CIEL in Tangier. Since 2023 I've been building web and mobile apps — not just to learn, but to <strong>solve real problems</strong>.</p>`,
  'About p1'
);
replace(
  `      <p class="about-p">Comfortable across the full stack. I can design a clean React interface, wire it to a PHP &amp; MySQL backend, and ship it live. I like projects where the product actually matters.</p>`,
  `      <p class="about-p" data-i18n="about.p2">Comfortable across the full stack. I can design a clean React interface, wire it to a PHP &amp; MySQL backend, and ship it live. I like projects where the product actually matters.</p>`,
  'About p2'
);
replace(
  `      <p class="about-p">Looking for an internship in Morocco where I can join a real team, contribute meaningfully, and keep growing fast.</p>`,
  `      <p class="about-p" data-i18n="about.p3">Looking for an internship in Morocco where I can join a real team, contribute meaningfully, and keep growing fast.</p>`,
  'About p3'
);

// ─── 13. About cards ──────────────────────────────────────────────────────
replace(
  `<div class="acard-t">Fast learner</div><div class="acard-d">Picked up React Native, Android, and MongoDB on top of my core stack. New tech doesn't slow me down.</div>`,
  `<div class="acard-t" data-i18n="about.card1t">Fast learner</div><div class="acard-d" data-i18n="about.card1d">Picked up React Native, Android, and MongoDB on top of my core stack. New tech doesn't slow me down.</div>`,
  'About card1'
);
replace(
  `<div class="acard-t">Full-stack mindset</div><div class="acard-d">Frontend, backend, database — I think about the whole system. Clean APIs matter as much as clean UI.</div>`,
  `<div class="acard-t" data-i18n="about.card2t">Full-stack mindset</div><div class="acard-d" data-i18n="about.card2d">Frontend, backend, database — I think about the whole system. Clean APIs matter as much as clean UI.</div>`,
  'About card2'
);
replace(
  `<div class="acard-t">Ships to production</div><div class="acard-d">All my projects are live and deployed — auth systems, admin dashboards, QR integrations, and collaborative platforms.</div>`,
  `<div class="acard-t" data-i18n="about.card3t">Ships to production</div><div class="acard-d" data-i18n="about.card3d">All my projects are live and deployed — auth systems, admin dashboards, QR integrations, and collaborative platforms.</div>`,
  'About card3'
);
replace(
  `<div class="acard-t">Team-ready</div><div class="acard-d">Comfortable with Git workflows and collaborative development. I've shipped projects alongside other developers.</div>`,
  `<div class="acard-t" data-i18n="about.card4t">Team-ready</div><div class="acard-d" data-i18n="about.card4d">Comfortable with Git workflows and collaborative development. I've shipped projects alongside other developers.</div>`,
  'About card4'
);

// ─── 14. Skills section ───────────────────────────────────────────────────
replace(
  `    <div class="s-tag" style="justify-content:center">Technical Skills</div>\n    <h2>What I build with</h2>`,
  `    <div class="s-tag" style="justify-content:center" data-i18n="skills.tag">Technical Skills</div>\n    <h2 data-i18n="skills.heading">What I build with</h2>`,
  'Skills heading'
);

// ─── 15. Projects section ─────────────────────────────────────────────────
replace(
  `    <div class="s-tag" style="justify-content:center">Featured Projects</div>\n    <h2>Things I've shipped</h2>`,
  `    <div class="s-tag" style="justify-content:center" data-i18n="projects.tag">Featured Projects</div>\n    <h2 data-i18n="projects.heading">Things I've shipped</h2>`,
  'Projects heading'
);

// ─── 16. Modal section headings ───────────────────────────────────────────
replace(
  `      <div class="mbody-s">About this project</div>`,
  `      <div class="mbody-s" data-i18n="projects.modalAbout">About this project</div>`,
  'Modal about'
);
replace(
  `      <div class="mbody-s">Tech Stack</div>`,
  `      <div class="mbody-s" data-i18n="projects.modalStack">Tech Stack</div>`,
  'Modal stack'
);

// ─── 17. Experience section ───────────────────────────────────────────────
replace(
  `  <div class="s-tag rv">Experience</div>`,
  `  <div class="s-tag rv" data-i18n="experience.tag">Experience</div>`,
  'Experience tag'
);
replace(
  `">What I've built</h2>`,
  `" data-i18n="experience.heading">What I've built</h2>`,
  'Experience heading'
);
replace(
  `      <div class="tl-date">2023 — Present</div>`,
  `      <div class="tl-date" data-i18n="experience.date">2023 — Present</div>`,
  'Experience date'
);
replace(
  `      <div class="tl-t">Personal &amp; Academic Projects</div>`,
  `      <div class="tl-t" data-i18n="experience.title">Personal &amp; Academic Projects</div>`,
  'Experience title'
);
replace(
  `      <div class="tl-s">Self-directed · Tangier, Morocco</div>`,
  `      <div class="tl-s" data-i18n="experience.sub">Self-directed · Tangier, Morocco</div>`,
  'Experience sub'
);
replace(
  `        <li>Built and deployed 5+ web and mobile projects across the full stack</li>`,
  `        <li data-i18n="experience.li1">Built and deployed 5+ web and mobile projects across the full stack</li>`,
  'Experience li1'
);
replace(
  `        <li>Designed responsive interfaces optimized for desktop and mobile</li>`,
  `        <li data-i18n="experience.li2">Designed responsive interfaces optimized for desktop and mobile</li>`,
  'Experience li2'
);
replace(
  `        <li>Built secure authentication with OTP, PIN codes, and QR code systems</li>`,
  `        <li data-i18n="experience.li3">Built secure authentication with OTP, PIN codes, and QR code systems</li>`,
  'Experience li3'
);
replace(
  `        <li>Created admin dashboards for user management and analytics</li>`,
  `        <li data-i18n="experience.li4">Created admin dashboards for user management and analytics</li>`,
  'Experience li4'
);
replace(
  `        <li>Collaborated on team projects using Git version control</li>`,
  `        <li data-i18n="experience.li5">Collaborated on team projects using Git version control</li>`,
  'Experience li5'
);
replace(
  `        <li>Integrated PHP and MySQL backends powering dynamic frontends</li>`,
  `        <li data-i18n="experience.li6">Integrated PHP and MySQL backends powering dynamic frontends</li>`,
  'Experience li6'
);

// ─── 18. Education section ────────────────────────────────────────────────
replace(
  `  <div class="s-tag rv">Education</div>`,
  `  <div class="s-tag rv" data-i18n="education.tag">Education</div>`,
  'Education tag'
);
replace(
  `">Background &amp; training</h2>`,
  `" data-i18n="education.heading">Background &amp; training</h2>`,
  'Education heading'
);
replace(
  `<div class="ecard-t">Specialized Technician in Software Development</div><div class="ecard-s">Institut CIEL · Tangier, Morocco</div>`,
  `<div class="ecard-t" data-i18n="education.e1t">Specialized Technician in Software Development</div><div class="ecard-s" data-i18n="education.e1s">Institut CIEL · Tangier, Morocco</div>`,
  'Education ecard1'
);
replace(
  `<div class="ecard-t">TR-YÖS University Entrance Exam Certificate</div><div class="ecard-s">Türkiye</div>`,
  `<div class="ecard-t" data-i18n="education.e2t">TR-YÖS University Entrance Exam Certificate</div><div class="ecard-s" data-i18n="education.e2s">Türkiye</div>`,
  'Education ecard2'
);
replace(
  `<div class="ecard-t">Baccalaureate in Physical Sciences</div><div class="ecard-s">Lycée Ibn Zohr · Tangier, Morocco</div>`,
  `<div class="ecard-t" data-i18n="education.e3t">Baccalaureate in Physical Sciences</div><div class="ecard-s" data-i18n="education.e3s">Lycée Ibn Zohr · Tangier, Morocco</div>`,
  'Education ecard3'
);

// ─── 19. Contact section ──────────────────────────────────────────────────
replace(
  `    <div class="s-tag rv" style="justify-content:center">Contact</div>\n    <h2 class="contact-h2 rv d1">Let's work together</h2>\n    <p class="contact-sub rv d2">Looking for internship opportunities in Morocco. If you need a developer who hits the ground running — let's talk.</p>`,
  `    <div class="s-tag rv" style="justify-content:center" data-i18n="contact.tag">Contact</div>\n    <h2 class="contact-h2 rv d1" data-i18n="contact.heading">Let's work together</h2>\n    <p class="contact-sub rv d2" data-i18n="contact.sub">Looking for internship opportunities in Morocco. If you need a developer who hits the ground running — let's talk.</p>`,
  'Contact heading'
);
replace(
  `      <div class="cform-t">Send a message</div>\n      <div class="cform-sub">Usually replies within 24 hours · Secure &amp; private</div>`,
  `      <div class="cform-t" data-i18n="contact.formTitle">Send a message</div>\n      <div class="cform-sub" data-i18n="contact.formSub">Usually replies within 24 hours · Secure &amp; private</div>`,
  'Contact form title/sub'
);
replace(
  `            <label class="fl" for="fn">Name</label>\n            <input type="text" id="fn" name="from_name" class="fi" placeholder="Your full name" required`,
  `            <label class="fl" for="fn" data-i18n="contact.labelName">Name</label>\n            <input type="text" id="fn" name="from_name" class="fi" placeholder="Your full name" data-i18n-ph="contact.phName" required`,
  'Form name label/ph'
);
replace(
  `            <label class="fl" for="fe">Email</label>`,
  `            <label class="fl" for="fe" data-i18n="contact.labelEmail">Email</label>`,
  'Form email label'
);
replace(
  `            <label class="fl" for="fs">Subject</label>\n            <input type="text" id="fs" name="subject" class="fi" placeholder="What's this about?" required`,
  `            <label class="fl" for="fs" data-i18n="contact.labelSubject">Subject</label>\n            <input type="text" id="fs" name="subject" class="fi" placeholder="What's this about?" data-i18n-ph="contact.phSubject" required`,
  'Form subject label/ph'
);
replace(
  `            <label class="fl" for="fm">Message</label>\n            <textarea id="fm" name="message" class="fta" placeholder="Tell me about your project or opportunity..." required`,
  `            <label class="fl" for="fm" data-i18n="contact.labelMessage">Message</label>\n            <textarea id="fm" name="message" class="fta" placeholder="Tell me about your project or opportunity..." data-i18n-ph="contact.phMessage" required`,
  'Form message label/ph'
);
replace(
  `          <span class="fnote">Your message goes directly to my inbox</span>`,
  `          <span class="fnote" data-i18n="contact.fnote">Your message goes directly to my inbox</span>`,
  'Form fnote'
);
replace(
  `            Send message\n          </button>`,
  `            <span data-i18n="contact.sendBtn">Send message</span>\n          </button>`,
  'Form send btn'
);

// ─── 20. Footer ───────────────────────────────────────────────────────────
replace(
  `  <span>Tangier, Morocco &middot; Full Stack Developer</span>`,
  `  <span data-i18n="footer.sub">Tangier, Morocco &middot; Full Stack Developer</span>`,
  'Footer sub'
);

// ─── 21. JS: Add translations + state + setLang at top of IIFE ────────────
replace(
  `(function() {\n'use strict';\n`,
  `(function() {\n'use strict';\n\n/* ─── TRANSLATIONS ─── */\nconst translations = {\n  en: {\n    nav: { about:"About", skills:"Skills", projects:"Projects", experience:"Experience", contact:"Contact", cvBtn:"Download CV" },\n    hero: {\n      badge:"Open to opportunities &nbsp;&middot;&nbsp; Tangier, Morocco",\n      title:"Building modern<br>web &amp; <span class='h-title-light'>mobile</span><br>experiences.",\n      prefix:"I'm a",\n      sub:"Based in Tangier — I design and build digital products that feel fast, clean, and real. From React frontends to solid PHP &amp; MySQL backends.",\n      viewProjects:"View projects", getInTouch:"Get in touch",\n      statProjects:"Projects", statLanguages:"Languages", statBuilding:"Building",\n      city:"🇲🇦 Tangier — GMT+1",\n      words:["Full Stack Developer","React Native Developer","PHP & MySQL Developer","Building real products"]\n    },\n    about: {\n      tag:"About me",\n      heading:"A developer who<br>ships real things.",\n      p1:"I'm Mohcine, 21, studying Software Development at Institut CIEL in Tangier. Since 2023 I've been building web and mobile apps — not just to learn, but to <strong>solve real problems</strong>.",\n      p2:"Comfortable across the full stack. I can design a clean React interface, wire it to a PHP &amp; MySQL backend, and ship it live. I like projects where the product actually matters.",\n      p3:"Looking for an internship in Morocco where I can join a real team, contribute meaningfully, and keep growing fast.",\n      card1t:"Fast learner", card1d:"Picked up React Native, Android, and MongoDB on top of my core stack. New tech doesn't slow me down.",\n      card2t:"Full-stack mindset", card2d:"Frontend, backend, database — I think about the whole system. Clean APIs matter as much as clean UI.",\n      card3t:"Ships to production", card3d:"All my projects are live and deployed — auth systems, admin dashboards, QR integrations, and collaborative platforms.",\n      card4t:"Team-ready", card4d:"Comfortable with Git workflows and collaborative development. I've shipped projects alongside other developers."\n    },\n    skills: {\n      tag:"Technical Skills", heading:"What I build with",\n      cats:{"Frontend":"Frontend","Language":"Language","Backend":"Backend","Database":"Database","Mobile":"Mobile","Tool":"Tool","Backend Framework":"Backend Framework"}\n    },\n    projects: {\n      tag:"Featured Projects", heading:"Things I've shipped",\n      modalAbout:"About this project", modalStack:"Tech Stack", liveDemo:"Live demo"\n    },\n    experience: {\n      tag:"Experience", heading:"What I've built",\n      date:"2023 — Present", title:"Personal &amp; Academic Projects", sub:"Self-directed · Tangier, Morocco",\n      li1:"Built and deployed 5+ web and mobile projects across the full stack",\n      li2:"Designed responsive interfaces optimized for desktop and mobile",\n      li3:"Built secure authentication with OTP, PIN codes, and QR code systems",\n      li4:"Created admin dashboards for user management and analytics",\n      li5:"Collaborated on team projects using Git version control",\n      li6:"Integrated PHP and MySQL backends powering dynamic frontends"\n    },\n    education: {\n      tag:"Education", heading:"Background &amp; training",\n      e1t:"Specialized Technician in Software Development", e1s:"Institut CIEL · Tangier, Morocco",\n      e2t:"TR-YÖS University Entrance Exam Certificate", e2s:"Türkiye",\n      e3t:"Baccalaureate in Physical Sciences", e3s:"Lycée Ibn Zohr · Tangier, Morocco"\n    },\n    contact: {\n      tag:"Contact", heading:"Let's work together",\n      sub:"Looking for internship opportunities in Morocco. If you need a developer who hits the ground running — let's talk.",\n      formTitle:"Send a message", formSub:"Usually replies within 24 hours · Secure &amp; private",\n      labelName:"Name", labelEmail:"Email", labelSubject:"Subject", labelMessage:"Message",\n      phName:"Your full name", phSubject:"What's this about?", phMessage:"Tell me about your project or opportunity...",\n      fnote:"Your message goes directly to my inbox", sendBtn:"Send message",\n      toastDownload:"Downloading CV\u2026", toastSent:"Message sent \u2014 I'll reply within 24h \u2713", toastSendFail:"Could not send \u2014 please try emailing directly",\n      toastWait:"Please wait a moment before sending again",\n      errName:"Please enter your name", errEmail:"Please enter a valid email", errSubject:"Please add a subject", errMsg:"Message too short \u2014 say more!"\n    },\n    footer: { sub:"Tangier, Morocco &middot; Full Stack Developer" }\n  },\n  fr: {\n    nav: { about:"\u00c0 propos", skills:"Comp\u00e9tences", projects:"Projets", experience:"Exp\u00e9rience", contact:"Contact", cvBtn:"T\u00e9l\u00e9charger CV" },\n    hero: {\n      badge:"Disponible &nbsp;&middot;&nbsp; Tanger, Maroc",\n      title:"Cr\u00e9er des exp\u00e9riences<br>web &amp; <span class='h-title-light'>mobile</span><br>modernes.",\n      prefix:"Je suis",\n      sub:"Bas\u00e9 \u00e0 Tanger \u2014 je con\u00e7ois et d\u00e9veloppe des produits num\u00e9riques rapides, soign\u00e9s et concrets. Des interfaces React aux backends PHP &amp; MySQL solides.",\n      viewProjects:"Voir les projets", getInTouch:"Me contacter",\n      statProjects:"Projets", statLanguages:"Langages", statBuilding:"Exp\u00e9rience",\n      city:"🇲🇦 Tanger \u2014 GMT+1",\n      words:["D\u00e9veloppeur Full Stack","D\u00e9veloppeur React Native","D\u00e9veloppeur PHP & MySQL","Je cr\u00e9e des produits r\u00e9els"]\n    },\n    about: {\n      tag:"\u00c0 propos",\n      heading:"Un d\u00e9veloppeur qui<br>livre de vrais projets.",\n      p1:"Je m'appelle Mohcine, 21 ans, \u00e9tudiant en D\u00e9veloppement Logiciel \u00e0 l'Institut CIEL de Tanger. Depuis 2023, je construis des applications web et mobiles \u2014 pas seulement pour apprendre, mais pour <strong>r\u00e9soudre de vrais probl\u00e8mes</strong>.",\n      p2:"\u00c0 l'aise sur toute la stack. Je peux concevoir une interface React propre, la connecter \u00e0 un backend PHP &amp; MySQL, et la d\u00e9ployer en production. J'aime les projets o\u00f9 le produit compte vraiment.",\n      p3:"\u00c0 la recherche d'un stage au Maroc pour rejoindre une vraie \u00e9quipe, contribuer concr\u00e8tement et progresser rapidement.",\n      card1t:"Apprentissage rapide", card1d:"J'ai int\u00e9gr\u00e9 React Native, Android et MongoDB en plus de ma stack principale. Les nouvelles technologies ne me freinent pas.",\n      card2t:"Vision full-stack", card2d:"Frontend, backend, base de donn\u00e9es \u2014 je pense \u00e0 l'ensemble du syst\u00e8me. Des APIs propres comptent autant qu'une UI soign\u00e9e.",\n      card3t:"Livraison en production", card3d:"Tous mes projets sont en ligne et d\u00e9ploy\u00e9s \u2014 syst\u00e8mes d'auth, tableaux de bord admin, int\u00e9grations QR et plateformes collaboratives.",\n      card4t:"Esprit d'\u00e9quipe", card4d:"\u00c0 l'aise avec les workflows Git et le d\u00e9veloppement collaboratif. J'ai livr\u00e9 des projets aux c\u00f4t\u00e9s d'autres d\u00e9veloppeurs."\n    },\n    skills: {\n      tag:"Comp\u00e9tences techniques", heading:"Mes outils",\n      cats:{"Frontend":"Frontend","Language":"Langage","Backend":"Backend","Database":"Base de donn\u00e9es","Mobile":"Mobile","Tool":"Outil","Backend Framework":"Framework Backend"}\n    },\n    projects: {\n      tag:"Projets phares", heading:"Mes r\u00e9alisations",\n      modalAbout:"\u00c0 propos du projet", modalStack:"Stack technique", liveDemo:"D\u00e9mo en ligne"\n    },\n    experience: {\n      tag:"Exp\u00e9rience", heading:"Ce que j'ai r\u00e9alis\u00e9",\n      date:"2023 \u2014 Pr\u00e9sent", title:"Projets Personnels &amp; Acad\u00e9miques", sub:"Autodidacte \u00b7 Tanger, Maroc",\n      li1:"D\u00e9velopp\u00e9 et d\u00e9ploy\u00e9 5+ projets web et mobiles sur toute la stack",\n      li2:"Con\u00e7u des interfaces responsives optimis\u00e9es pour desktop et mobile",\n      li3:"Mis en place des authentifications s\u00e9curis\u00e9es avec OTP, codes PIN et syst\u00e8mes QR",\n      li4:"Cr\u00e9\u00e9 des tableaux de bord admin pour la gestion des utilisateurs et les statistiques",\n      li5:"Collabor\u00e9 sur des projets d'\u00e9quipe en utilisant Git",\n      li6:"Int\u00e9gr\u00e9 des backends PHP et MySQL alimentant des frontends dynamiques"\n    },\n    education: {\n      tag:"Formation", heading:"Parcours &amp; formation",\n      e1t:"Technicien Sp\u00e9cialis\u00e9 en D\u00e9veloppement Logiciel", e1s:"Institut CIEL \u00b7 Tanger, Maroc",\n      e2t:"Certificat TR-Y\u00d6S d'entr\u00e9e universitaire", e2s:"T\u00fcrkiye",\n      e3t:"Baccalaur\u00e9at en Sciences Physiques", e3s:"Lyc\u00e9e Ibn Zohr \u00b7 Tanger, Maroc"\n    },\n    contact: {\n      tag:"Contact", heading:"Travaillons ensemble",\n      sub:"\u00c0 la recherche d'opportunit\u00e9s de stage au Maroc. Si vous avez besoin d'un d\u00e9veloppeur op\u00e9rationnel imm\u00e9diatement \u2014 parlons-en.",\n      formTitle:"Envoyer un message", formSub:"R\u00e9ponse habituelle sous 24 heures \u00b7 S\u00e9curis\u00e9 &amp; priv\u00e9",\n      labelName:"Nom", labelEmail:"Email", labelSubject:"Sujet", labelMessage:"Message",\n      phName:"Votre nom complet", phSubject:"Quel est le sujet ?", phMessage:"Parlez-moi de votre projet ou opportunit\u00e9...",\n      fnote:"Votre message arrive directement dans ma bo\u00eete mail", sendBtn:"Envoyer",\n      toastDownload:"T\u00e9l\u00e9chargement du CV\u2026", toastSent:"Message envoy\u00e9 \u2014 je r\u00e9pondrai sous 24h \u2713", toastSendFail:"Envoi \u00e9chou\u00e9 \u2014 envoyez-moi directement un email",\n      toastWait:"Veuillez patienter avant d'envoyer \u00e0 nouveau",\n      errName:"Veuillez entrer votre nom", errEmail:"Veuillez entrer une adresse email valide", errSubject:"Veuillez ajouter un sujet", errMsg:"Message trop court \u2014 dites-en plus !"\n    },\n    footer: { sub:"Tanger, Maroc &middot; D\u00e9veloppeur Full Stack" }\n  }\n};\n\nlet currentLang = localStorage.getItem('_lang') || 'en';\n\nfunction _T() { return translations[currentLang]; }\n\nfunction setLang(lang) {\n  currentLang = lang;\n  localStorage.setItem('_lang', lang);\n  document.documentElement.lang = lang;\n  document.title = lang === 'fr' ? 'Mohcine Laghmich \u2014 D\u00e9veloppeur Full Stack' : 'Mohcine Laghmich \u2014 Full Stack Developer';\n  const T = _T();\n  document.querySelectorAll('[data-i18n]').forEach(el => {\n    const v = el.dataset.i18n.split('.').reduce((o,k)=>o&&o[k],T);\n    if (v !== undefined) el.innerHTML = v;\n  });\n  document.querySelectorAll('[data-i18n-ph]').forEach(el => {\n    const v = el.dataset.i18nPh.split('.').reduce((o,k)=>o&&o[k],T);\n    if (v !== undefined) el.placeholder = v;\n  });\n  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));\n  document.querySelectorAll('.sk-card').forEach((card,i) => {\n    const cat = card.querySelector('.sk-cat');\n    if (cat && skills[i]) cat.textContent = (T.skills.cats[skills[i].c] || skills[i].c);\n  });\n  document.querySelectorAll('.pcard').forEach((card,i) => {\n    const d = card.querySelector('.pcard-desc');\n    if (d && projects[i]) d.textContent = (projects[i][lang] || projects[i].en).desc;\n  });\n  if (currentWords !== T.hero.words) {\n    currentWords = T.hero.words;\n    clearTimeout(typeTimer); wi = 0; ci = 0; del = false;\n    if (tp) { tp.textContent = ''; typeTimer = setTimeout(typeN, 400); }\n  }\n}\n\n`,
  'JS translations + setLang'
);

// ─── 22. JS: Modify typing animation to use currentWords ──────────────────
replace(
  `const words = ['Full Stack Developer','React Native Developer','PHP & MySQL Developer','Building real products'];\nlet wi = 0, ci = 0, del = false;\nfunction typeN() {\n  const w = words[wi];`,
  `let currentWords = translations[currentLang].hero.words;\nlet wi = 0, ci = 0, del = false, typeTimer;\nfunction typeN() {\n  const w = currentWords[wi];`,
  'JS typing currentWords'
);
replace(
  `  if (!del) { tp.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; setTimeout(typeN, 1900); return; } }\n  else { tp.textContent = w.slice(0, --ci); if (ci === 0) { del = false; wi = (wi + 1) % words.length; setTimeout(typeN, 380); return; } }\n  setTimeout(typeN, del ? 45 : 82);\n}\nsetTimeout(typeN, 1000);`,
  `  if (!del) { tp.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; typeTimer = setTimeout(typeN, 1900); return; } }\n  else { tp.textContent = w.slice(0, --ci); if (ci === 0) { del = false; wi = (wi + 1) % currentWords.length; typeTimer = setTimeout(typeN, 380); return; } }\n  typeTimer = setTimeout(typeN, del ? 45 : 82);\n}\ntypeTimer = setTimeout(typeN, 1000);`,
  'JS typing timer'
);

// ─── 23. JS: Update CV download toast ────────────────────────────────────
replace(
  `  showToast('Downloading CV\u2026', 'success');`,
  `  showToast(_T().contact.toastDownload, 'success');`,
  'JS CV toast'
);

// ─── 24. JS: Update projects to bilingual ────────────────────────────────
replace(
  `  { name:'TangierCart', url:'tangiercart.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'Mobile & web app for managing digital cards \u2014 OTP login, PIN auth, admin dashboard, QR scanning.',\n    full:'A full-stack system for managing digital identity cards. Built with React Native and PHP/MySQL. Features OTP verification, PIN authentication, an admin dashboard for user management, and a QR code scanning system.',\n    tags:['React Native','PHP','MySQL','JavaScript','QR Code'],\n    img:'img/TangierCart.PNG', imgCls:'pimg-tangiercart' },\n  { name:'GYMCOO', url:'gymcoo.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'Fitness platform with user management, profiles, and PHP/MySQL backend for dynamic data.',\n    full:'A responsive fitness web platform with a complete user lifecycle \u2014 sign up, login, and profile editing. Connects to a PHP and MySQL backend for real-time dynamic data.',\n    tags:['HTML','CSS','JavaScript','PHP','MySQL'],\n    img:'img/GYMCOO.PNG', imgCls:'pimg-gymcoo' },\n  { name:'StudySphere', url:'studify-azure.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'Collaborative student platform \u2014 study groups, resource sharing, built in a team with Git.',\n    full:'A collaborative platform for students to form study groups, share resources, and manage events. Built in a team environment using Git for version control and collaborative workflows.',\n    tags:['HTML','CSS','JavaScript','Git','Team'],\n    img:'img/studify.PNG', imgCls:'pimg-studysphere' },\n  { name:'SkillCrafter', url:'skill-crafter-omega.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'Modern frontend project with polished UI design and smooth JavaScript interactions.',\n    full:'A polished frontend application showcasing clean UI design principles, animated components, and a refined user experience across all screen sizes.',\n    tags:['JavaScript','CSS','React','UI Design'],\n    img:'img/skillcrafters.PNG', imgCls:'pimg-skillcrafter' },\n  { name:'T\u00e9l\u00e9Travail', url:'teletravail-final.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'Remote work platform for managing telework requests, schedules, and team coordination.',\n    full:'A telework management platform enabling employees to submit requests, view schedules, and coordinate with teams. Focused on usability and workflow efficiency.',\n    tags:['HTML','CSS','JavaScript','PHP'],\n    img:'img/Teletravail.PNG', imgCls:'pimg-teletravail' },\n  { name:'Tangier Furnish', url:'tangier-furnish-v1.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    desc:'E-commerce furniture showcase with product listings, filtering, and modern shopping UI.',\n    full:'An e-commerce furniture showcase for the Tangier market featuring product listings, category filtering, clean shopping cards, and smooth hover interactions.',\n    tags:['HTML','CSS','JavaScript','E-commerce'],\n    img:'img/Tangierfurnish.PNG', imgCls:'pimg-tangierfurnish' },`,
  `  { name:'TangierCart', url:'tangiercart.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'Mobile & web app for managing digital cards \u2014 OTP login, PIN auth, admin dashboard, QR scanning.',full:'A full-stack system for managing digital identity cards. Built with React Native and PHP/MySQL. Features OTP verification, PIN authentication, an admin dashboard for user management, and a QR code scanning system.'},\n    fr:{desc:'Application mobile & web pour g\u00e9rer des cartes num\u00e9riques \u2014 connexion OTP, PIN, tableau de bord admin, scan QR.',full:"Un syst\u00e8me full-stack pour g\u00e9rer des cartes d'identit\u00e9 num\u00e9riques. D\u00e9velopp\u00e9 avec React Native et PHP/MySQL. Inclut la v\u00e9rification OTP, l'authentification PIN, un tableau de bord admin et un syst\u00e8me de scan QR."},\n    tags:['React Native','PHP','MySQL','JavaScript','QR Code'],\n    img:'img/TangierCart.PNG', imgCls:'pimg-tangiercart' },\n  { name:'GYMCOO', url:'gymcoo.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'Fitness platform with user management, profiles, and PHP/MySQL backend for dynamic data.',full:'A responsive fitness web platform with a complete user lifecycle \u2014 sign up, login, and profile editing. Connects to a PHP and MySQL backend for real-time dynamic data.'},\n    fr:{desc:'Plateforme fitness avec gestion des utilisateurs, profils et backend PHP/MySQL pour des donn\u00e9es dynamiques.',full:"Une plateforme web fitness responsive avec un cycle utilisateur complet \u2014 inscription, connexion et modification du profil. Connect\u00e9e \u00e0 un backend PHP et MySQL pour des donn\u00e9es dynamiques en temps r\u00e9el."},\n    tags:['HTML','CSS','JavaScript','PHP','MySQL'],\n    img:'img/GYMCOO.PNG', imgCls:'pimg-gymcoo' },\n  { name:'StudySphere', url:'studify-azure.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'Collaborative student platform \u2014 study groups, resource sharing, built in a team with Git.',full:'A collaborative platform for students to form study groups, share resources, and manage events. Built in a team environment using Git for version control and collaborative workflows.'},\n    fr:{desc:"Plateforme collaborative pour \u00e9tudiants \u2014 groupes d'\u00e9tude, partage de ressources, d\u00e9velopp\u00e9e en \u00e9quipe avec Git.",full:"Une plateforme collaborative pour les \u00e9tudiants pour former des groupes d'\u00e9tude, partager des ressources et g\u00e9rer des \u00e9v\u00e9nements. D\u00e9velopp\u00e9e en \u00e9quipe avec Git pour le contr\u00f4le de version."},\n    tags:['HTML','CSS','JavaScript','Git','Team'],\n    img:'img/studify.PNG', imgCls:'pimg-studysphere' },\n  { name:'SkillCrafter', url:'skill-crafter-omega.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'Modern frontend project with polished UI design and smooth JavaScript interactions.',full:'A polished frontend application showcasing clean UI design principles, animated components, and a refined user experience across all screen sizes.'},\n    fr:{desc:"Projet frontend moderne avec un design UI soign\u00e9 et des interactions JavaScript fluides.",full:"Une application frontend soign\u00e9e mettant en valeur des principes de design UI propres, des composants anim\u00e9s et une exp\u00e9rience utilisateur raffin\u00e9e sur toutes les tailles d'\u00e9cran."},\n    tags:['JavaScript','CSS','React','UI Design'],\n    img:'img/skillcrafters.PNG', imgCls:'pimg-skillcrafter' },\n  { name:'T\u00e9l\u00e9Travail', url:'teletravail-final.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'Remote work platform for managing telework requests, schedules, and team coordination.',full:'A telework management platform enabling employees to submit requests, view schedules, and coordinate with teams. Focused on usability and workflow efficiency.'},\n    fr:{desc:"Plateforme de t\u00e9l\u00e9travail pour g\u00e9rer les demandes, les plannings et la coordination d'\u00e9quipe.",full:"Une plateforme de gestion du t\u00e9l\u00e9travail permettant aux employ\u00e9s de soumettre des demandes, consulter les plannings et coordonner avec les \u00e9quipes. Ax\u00e9e sur la facilit\u00e9 d'utilisation et l'efficacit\u00e9 des flux de travail."},\n    tags:['HTML','CSS','JavaScript','PHP'],\n    img:'img/Teletravail.PNG', imgCls:'pimg-teletravail' },\n  { name:'Tangier Furnish', url:'tangier-furnish-v1.vercel.app', gh:'github.com/laghmichmohcine6-coder',\n    en:{desc:'E-commerce furniture showcase with product listings, filtering, and modern shopping UI.',full:'An e-commerce furniture showcase for the Tangier market featuring product listings, category filtering, clean shopping cards, and smooth hover interactions.'},\n    fr:{desc:"Vitrine e-commerce de meubles avec listes de produits, filtrage et interface shopping moderne.",full:"Une vitrine e-commerce de meubles pour le march\u00e9 de Tanger avec des listes de produits, un filtrage par cat\u00e9gorie, des cartes shopping soign\u00e9es et des interactions hover fluides."},\n    tags:['HTML','CSS','JavaScript','E-commerce'],\n    img:'img/Tangierfurnish.PNG', imgCls:'pimg-tangierfurnish' },`,
  'JS projects bilingual'
);

// ─── 25. JS: Skill card renders translated category ───────────────────────
replace(
  "  el.innerHTML = `<div class=\"sk-ico\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">${s.svg}</svg></div><div class=\"sk-name\">${s.n}</div><div class=\"sk-cat\">${s.c}</div>`;",
  "  const _cat = (_T().skills.cats[s.c] || s.c);\n  el.innerHTML = `<div class=\"sk-ico\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\">${s.svg}</svg></div><div class=\"sk-name\">${s.n}</div><div class=\"sk-cat\">${_cat}</div>`;",
  'JS skill cat translation'
);

// ─── 26. JS: Project card renders current lang description ────────────────
replace(
  `  el.innerHTML = \`\n    <div class="pcard-prev">\n      <img class="pcard-img \${p.imgCls}" src="\${p.img}" alt="\${p.name} screenshot" loading="\${isFirst ? 'eager' : 'lazy'}"\${isFirst ? ' fetchpriority="high"' : ''} decoding="async" draggable="false">\n    </div>\n    <div class="pcard-body">\n      <div class="pcard-row">\n        <div class="pcard-t">\${p.name}</div>\n        <div class="pcard-btns">\n          <a href="https://\${p.url}" target="_blank" rel="noopener" class="pb-btn" title="Live site" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>\n          <a href="https://\${p.gh}" target="_blank" rel="noopener" class="pb-btn" title="GitHub" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>\n        </div>\n      </div>\n      <p class="pcard-desc">\${p.desc}</p>\n      <div class="ptags">\${p.tags.slice(0,4).map(t=>\`<span class="ptag">\${t}</span>\`).join('')}</div>\n    </div>\`;`,
  `  const _pd = (p[currentLang] || p.en);\n  el.innerHTML = \`\n    <div class="pcard-prev">\n      <img class="pcard-img \${p.imgCls}" src="\${p.img}" alt="\${p.name} screenshot" loading="\${isFirst ? 'eager' : 'lazy'}"\${isFirst ? ' fetchpriority="high"' : ''} decoding="async" draggable="false">\n    </div>\n    <div class="pcard-body">\n      <div class="pcard-row">\n        <div class="pcard-t">\${p.name}</div>\n        <div class="pcard-btns">\n          <a href="https://\${p.url}" target="_blank" rel="noopener" class="pb-btn" title="Live site" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>\n          <a href="https://\${p.gh}" target="_blank" rel="noopener" class="pb-btn" title="GitHub" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>\n        </div>\n      </div>\n      <p class="pcard-desc">\${_pd.desc}</p>\n      <div class="ptags">\${p.tags.slice(0,4).map(t=>\`<span class="ptag">\${t}</span>\`).join('')}</div>\n    </div>\`;`,
  'JS project card lang desc'
);

// ─── 27. JS: openModal uses current lang ─────────────────────────────────
replace(
  `  document.getElementById('mtitle').textContent = p.name;\n  const mprev = document.getElementById('mprev');\n  mprev.style.background = '';\n  mprev.innerHTML = \`<img src="\${p.img}" alt="\${p.name} screenshot" style="width:100%;height:100%;object-fit:cover;display:block">\`;\n  document.getElementById('mdesc').textContent = p.full;`,
  `  const _mp = (p[currentLang] || p.en);\n  document.getElementById('mtitle').textContent = p.name;\n  const mprev = document.getElementById('mprev');\n  mprev.style.background = '';\n  mprev.innerHTML = \`<img src="\${p.img}" alt="\${p.name} screenshot" style="width:100%;height:100%;object-fit:cover;display:block">\`;\n  document.getElementById('mdesc').textContent = _mp.full;`,
  'JS openModal lang'
);
replace(
  `  document.getElementById('macts').innerHTML = \`\n    <a href="https://\${p.url}" target="_blank" rel="noopener" class="btn-black" style="\${mBtnStyle}">Live demo</a>\n    <a href="https://\${p.gh}" target="_blank" rel="noopener" class="btn-ghost" style="\${mBtnStyle}">GitHub</a>\`;`,
  `  document.getElementById('macts').innerHTML = \`\n    <a href="https://\${p.url}" target="_blank" rel="noopener" class="btn-black" style="\${mBtnStyle}">\${_T().projects.liveDemo}</a>\n    <a href="https://\${p.gh}" target="_blank" rel="noopener" class="btn-ghost" style="\${mBtnStyle}">GitHub</a>\`;`,
  'JS openModal liveDemo label'
);

// ─── 28. JS: Form validation messages ────────────────────────────────────
replace(
  `  if (!name || name.length < 2)\n    { showToast('Please enter your name', 'error'); form.from_name.focus(); return; }\n  if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email))\n    { showToast('Please enter a valid email', 'error'); form.from_email.focus(); return; }\n  if (!subject || subject.length < 3)\n    { showToast('Please add a subject', 'error'); form.subject.focus(); return; }\n  if (!msg || msg.length < 10)\n    { showToast('Message too short \u2014 say more!', 'error'); form.message.focus(); return; }`,
  `  if (!name || name.length < 2)\n    { showToast(_T().contact.errName, 'error'); form.from_name.focus(); return; }\n  if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email))\n    { showToast(_T().contact.errEmail, 'error'); form.from_email.focus(); return; }\n  if (!subject || subject.length < 3)\n    { showToast(_T().contact.errSubject, 'error'); form.subject.focus(); return; }\n  if (!msg || msg.length < 10)\n    { showToast(_T().contact.errMsg, 'error'); form.message.focus(); return; }`,
  'JS form validation msgs'
);
replace(
  `    { showToast('Please wait a moment before sending again', 'error'); return; }`,
  `    { showToast(_T().contact.toastWait, 'error'); return; }`,
  'JS rate limit toast'
);

// ─── 29. JS: Form submit toasts ──────────────────────────────────────────
replace(
  `    showToast("Message sent \u2014 I'll reply within 24h \u2713", 'success');`,
  `    showToast(_T().contact.toastSent, 'success');`,
  'JS submit success toast'
);
replace(
  `    showToast('Could not send \u2014 please try emailing directly', 'error');`,
  `    showToast(_T().contact.toastSendFail, 'error');`,
  'JS submit fail toast'
);

// ─── 30. JS: Initialize language + bind lang buttons ─────────────────────
replace(
  `})();\n</script>`,
  `/* ─── LANGUAGE INIT ─── */\ndocument.querySelectorAll('.lang-btn').forEach(btn => {\n  btn.addEventListener('click', () => setLang(btn.dataset.lang));\n});\nif (currentLang !== 'en') setLang(currentLang);\n\n})();\n</script>`,
  'JS lang init'
);

// ─── Write output ─────────────────────────────────────────────────────────
fs.writeFileSync(FILE, c, 'utf8');
console.log(`\nDone! ${changes} replacements applied.`);
console.log('File size:', c.length, 'chars (was', orig.length, ')');
