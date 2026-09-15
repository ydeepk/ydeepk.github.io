import {
  Check,
  ChevronUp,
  Clock,
  Copy,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Drop the real resume PDF at this path in the deployed site (e.g. /public/Deepak-Yadav-Resume.pdf).
const RESUME_URL = '/Deepak-Yadav-Resume.pdf';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const IMPACT_STATS = [
  { value: '10+', label: 'Years in QA' },
  { value: '5', label: 'Products & platforms tested' },
  { value: '~40%', label: 'Regression time cut' },
];

const TONE_STYLES = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700',
  violet: 'bg-violet-50 border-violet-200 text-violet-700',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
};

const EXPERIENCE = [
  {
    company: 'Independent Practice',
    mark: 'IP',
    tone: 'blue',
    logoUrl: null,
    role: 'QA Consultant',
    period: '2024 – Present',
    summary:
      "Manual and API testing for clients spanning design tools, e-commerce and regulated FinTech, alongside an ongoing search for the next full-time QE Lead / SDET seat.",
    achievements: [
      "Weekly-release regression and exploratory testing for a design-collaboration platform",
      "Cross-browser, cross-platform manual QA (web, iOS, Android) for an e-commerce apparel retailer's checkout flow",
      "Full payment-lifecycle testing — initiation through settlement — for a regulated FinTech payments platform under UAE regulation and PCI DSS",
    ],
    tech: ['Manual QA', 'API Testing', 'Postman', 'SQL', 'Mobile'],
  },
  {
    company: 'Enterprise Digital Library Platform',
    mark: 'DL',
    tone: 'violet',
    logoUrl: null,
    role: 'QA Lead',
    period: '2019 – 2024',
    summary:
      "Joined when automation coverage was minimal and built the team's Playwright framework from the ground up, wiring it into the existing release process.",
    achievements: [
      "Built a Playwright + TypeScript automation framework from scratch on a Page Object Model architecture",
      "Wired the suite into Azure DevOps so every pull request triggered a run automatically",
      "Cut manual regression time by roughly 40% — every release shipped without a critical production defect",
    ],
    tech: ['Playwright', 'TypeScript', 'Azure DevOps', 'API Testing', 'Mobile'],
  },
  {
    company: 'Multi-Product EdTech Platform',
    mark: 'EP',
    tone: 'emerald',
    logoUrl: null,
    role: 'QA Lead',
    period: '2014 – 2019',
    summary:
      "Five years across three concurrent product lines — a mobile library app, a cataloging SaaS product, and an IoT-based checkout system pairing RFID hardware with software validation — growing from hands-on manual testing into the QA Lead role along the way.",
    achievements: [
      "Built and led automation coverage with Selenium WebDriver, Java and TestNG",
      "Ran performance testing with JMeter and validated backend integrity via SQL",
    ],
    tech: ['Selenium', 'Java', 'TestNG', 'JMeter', 'IoT'],
  },
];

const PROJECT_CATEGORIES = ['All', 'UI Automation', 'API Automation'];

const PROJECTS = [
  {
    title: 'Playwright + TypeScript E-Commerce Suite',
    category: 'UI Automation',
    description:
      "End-to-end and API test automation covering OrangeHRM's core HR workflows and a React Native cart app, built on a Page Object Model architecture with GitHub Actions CI.",
    tech: ['Playwright', 'TypeScript', 'Page Object Model', 'GitHub Actions', 'API Testing'],
    github: 'https://github.com/ydeepk/playwright-ts-ecommerce',
    status: null,
  },
  {
    title: 'Selenium + Java + TestNG Framework',
    category: 'UI Automation',
    description:
      "A cross-browser regression suite in Selenium WebDriver and Java, structured on TestNG with a Page Object Model and parallel execution. Publishing to GitHub as proof of work.",
    tech: ['Selenium WebDriver', 'Java', 'TestNG', 'Page Object Model', 'Maven'],
    github: null,
    status: 'In progress',
  },
  {
    title: 'API Automation — REST + MCP Server',
    category: 'API Automation',
    description:
      "REST API test automation paired with an MCP server, exploring AI-assisted test generation and triage as part of the suite. Publishing to GitHub as proof of work.",
    tech: ['REST API Testing', 'MCP Server', 'Postman', 'Contract Testing'],
    github: null,
    status: 'In progress',
  },
];

const SKILL_GROUPS = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Playwright', level: 3, context: 'Advanced — POM, parallel exec' },
      { name: 'TypeScript', level: 3 },
      { name: 'Selenium WebDriver', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'Java', level: 2 },
      { name: 'TestNG', level: 2 },
    ],
  },
  {
    title: 'Automation & Tools',
    skills: [
      { name: 'GitHub Actions', level: 3 },
      { name: 'Azure DevOps', level: 3 },
      { name: 'Postman', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'Apache JMeter', level: 2 },
      { name: 'Docker', level: 2 },
      { name: 'BrowserStack', level: 2 },
      { name: 'LambdaTest', level: 2 },
      { name: 'Swagger', level: 2 },
    ],
  },
  {
    title: 'Methodologies & Architecture',
    skills: [
      { name: 'Page Object Model', level: 3 },
      { name: 'CI/CD Pipeline Design', level: 3 },
      { name: 'Release Governance', level: 3 },
      { name: 'Team Leadership & Mentoring', level: 3 },
      { name: 'API & Contract Testing', level: 3 },
      { name: 'Agile / Scrum', level: 3 },
      { name: 'Risk-Based & Shift-Left QA', level: 2 },
    ],
  },
];

const BLOG_POSTS = [
  {
    title: 'How to Learn Test Automation Without Burning Out',
    date: '2026-08-16',
    excerpt:
      "A practical, no-fluff path from manual testing to real automation skill — the order that actually works, and the traps that don't.",
    tags: ['automation', 'playwright', 'career'],
    url: null,
  },
];

const CONTACT = {
  email: 'ydeepkcs@gmail.com',
  github: 'https://github.com/ydeepk',
  githubLabel: 'github.com/ydeepk',
  linkedin: 'https://www.linkedin.com/in/deepak-yadav-qa/',
  linkedinLabel: 'linkedin.com/in/deepak-yadav-qa',
  location: 'Noida, India',
};

const m3Ease = { transitionTimingFunction: 'cubic-bezier(0.2, 0.0, 0, 1.0)' };

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

function SectionLabel({ children }) {
  return <p className="font-body text-sm font-medium text-blue-600 mb-3 tracking-wide">{children}</p>;
}

function OrgMark({ initials, tone, logoUrl }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (logoUrl && !imgFailed) {
    return (
      <img
        src={logoUrl}
        alt=""
        aria-hidden="true"
        onError={() => setImgFailed(true)}
        className="w-11 h-11 rounded-2xl object-contain bg-white border border-slate-200 p-1.5 flex-none"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`font-display w-11 h-11 rounded-2xl border flex items-center justify-center font-bold text-sm flex-none ${TONE_STYLES[tone] || TONE_STYLES.blue}`}
    >
      {initials}
    </span>
  );
}

function AccessGate({ open, resourceLabel, onClose, onSuccess }) {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!open) {
      setStep('email');
      setEmail('');
      setCode('');
      setErrorMsg('');
    }
  }, [open]);

  if (!open) return null;

  const handleSendCode = async () => {
    if (!email.trim()) return;
    setStep('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource: resourceLabel }),
      });
      if (!res.ok) throw new Error('no backend');
      setStep('code');
    } catch (err) {
      setErrorMsg("Access requests aren't wired up yet — this needs a backend at /api/request-access (see code comments).");
      setStep('error');
    }
  };

  const handleVerifyCode = async () => {
    if (!code.trim()) return;
    setStep('verifying');
    setErrorMsg('');
    try {
      const res = await fetch('/api/verify-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code, resource: resourceLabel }),
      });
      if (!res.ok) throw new Error('no backend');
      const data = await res.json();
      onSuccess(data.url);
    } catch (err) {
      setErrorMsg("Verification isn't wired up yet — this needs a backend at /api/verify-access (see code comments).");
      setStep('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl" style={m3Ease}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 ${focusRing}`}
        >
          <X size={18} />
        </button>

        <SectionLabel>Request access</SectionLabel>
        <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{resourceLabel}</h3>
        <p className="text-sm text-slate-600 mb-5">Enter your email and I'll send a one-time code to unlock it.</p>

        {(step === 'email' || step === 'sending') && (
          <div className="space-y-4">
            <div>
              <label htmlFor="gate-email" className="block text-xs font-medium text-slate-600 mb-1.5">
                Email address
              </label>
              <input
                id="gate-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendCode();
                }}
                placeholder="you@company.com"
                className="w-full rounded-t-lg bg-slate-100 border-b-2 border-slate-400 focus:border-blue-600 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 outline-none transition-colors"
              />
            </div>
            <button
              type="button"
              onClick={handleSendCode}
              disabled={step === 'sending'}
              style={m3Ease}
              className={`w-full rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium px-4 py-3 transition-colors ${focusRing}`}
            >
              {step === 'sending' ? 'Sending code…' : 'Send code'}
            </button>
          </div>
        )}

        {(step === 'code' || step === 'verifying') && (
          <div className="space-y-4">
            <p className="text-xs text-slate-500">Code sent to {email}</p>
            <div>
              <label htmlFor="gate-code" className="block text-xs font-medium text-slate-600 mb-1.5">
                6-digit code
              </label>
              <input
                id="gate-code"
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleVerifyCode();
                }}
                placeholder="000000"
                className="w-full rounded-t-lg bg-slate-100 border-b-2 border-slate-400 focus:border-blue-600 px-4 py-3 text-sm text-slate-900 placeholder-slate-500 tracking-widest outline-none transition-colors"
              />
            </div>
            <button
              type="button"
              onClick={handleVerifyCode}
              disabled={step === 'verifying'}
              style={m3Ease}
              className={`w-full rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium px-4 py-3 transition-colors ${focusRing}`}
            >
              {step === 'verifying' ? 'Verifying…' : 'Verify & continue'}
            </button>
            <button
              type="button"
              onClick={() => setStep('email')}
              className={`w-full text-xs text-slate-500 hover:text-slate-700 rounded-md ${focusRing}`}
            >
              Use a different email
            </button>
          </div>
        )}

        {step === 'error' && (
          <div className="space-y-3">
            <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-2xl p-3">{errorMsg}</p>
            <button
              type="button"
              onClick={() => setStep('email')}
              className={`w-full rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-medium px-4 py-3 ${focusRing}`}
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [copied, setCopied] = useState(false);
  const [gate, setGate] = useState(null);
  const [showFab, setShowFab] = useState(false);

  const filteredProjects =
    activeCategory === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!gate) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setGate(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [gate]);

  const scrollTo = (href) => (e) => {
    e.preventDefault();
    setNavOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Clipboard fallback
    }
  };

  const requestAccess = (label, targetUrl) => setGate({ label, targetUrl });

  const handleGateSuccess = (url) => {
    window.open(url || (gate && gate.targetUrl), '_blank', 'noopener');
    setGate(null);
  };

  return (
    <div className="font-body min-h-screen bg-white text-slate-700">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Flex:wght@600;700;800&family=Roboto+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: heroIn 0.6s cubic-bezier(0.2,0,0,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-animate { animation: none; }
        }
        .font-display { font-family: 'Roboto Flex', 'Roboto', ui-sans-serif, sans-serif; }
        .font-mono-data { font-family: 'Roboto Mono', ui-monospace, monospace; }
        .font-body { font-family: 'Roboto', ui-sans-serif, sans-serif; }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#top" onClick={scrollTo('#top')} className={`flex items-center gap-2.5 rounded-md ${focusRing}`}>
            <span className="font-display w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
              DY
            </span>
            <span className="font-display font-bold text-slate-900 tracking-tight">Deepak Yadav</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={scrollTo(link.href)}
                className={`text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors rounded-full px-3 py-2 ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => requestAccess('Resume (PDF)', RESUME_URL)}
              style={m3Ease}
              className={`hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 transition-colors ${focusRing}`}
            >
              <FileText size={16} />
              Request Resume
            </button>
            <button
              onClick={() => setNavOpen((v) => !v)}
              className={`md:hidden w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 ${focusRing}`}
              aria-label="Toggle menu"
              aria-expanded={navOpen}
            >
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={scrollTo(link.href)}
                className="py-2.5 text-slate-700 hover:text-blue-600 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setNavOpen(false);
                requestAccess('Resume (PDF)', RESUME_URL);
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white text-sm font-medium px-4 py-3"
            >
              <FileText size={16} />
              Request Resume
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="relative overflow-hidden pt-36 pb-20 px-5 sm:px-8 bg-white">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute top-32 -left-40 w-80 h-80 rounded-full bg-violet-200/40 blur-3xl pointer-events-none"
          />

          <div className="relative max-w-6xl mx-auto">
            <div className="hero-animate max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-700">Open to Senior QE Lead / SDET roles</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6">
                QE Lead & Automation Architect, built for teams that ship with confidence
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                I move between manual and automated testing deliberately — Playwright and TypeScript for the coverage
                that has to run every time, hands-on testing for the judgment calls that still need a person. A
                recent engagement cut regression cycles by roughly 40% without cutting corners.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#projects"
                  onClick={scrollTo('#projects')}
                  style={m3Ease}
                  className={`inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 transition-colors shadow-sm hover:shadow-md ${focusRing}`}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  onClick={scrollTo('#contact')}
                  className={`inline-flex items-center gap-2 rounded-full border-2 border-blue-600 hover:bg-blue-50 text-blue-700 font-medium px-6 py-3 transition-colors ${focusRing}`}
                >
                  Get in Touch
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> Noida, India
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} /> 10+ years in QA
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={`w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors ${focusRing}`}
                >
                  <Github size={18} />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors ${focusRing}`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  aria-label="Email"
                  className={`w-10 h-10 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-colors ${focusRing}`}
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Impact bar */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-white">
          <SectionLabel>About</SectionLabel>
          <div className="grid md:grid-cols-3 gap-10">
            <h2 className="font-display md:col-span-1 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Quality isn't a phase at the end of a sprint
            </h2>
            <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                It's decisions made early about what's worth automating and what isn't. I move between manual and
                automated testing deliberately: functional and UI testing — web and mobile — for what needs a real
                person's judgment, Playwright and TypeScript automation for the coverage that has to run every time,
                and API testing with Postman for the layer the UI can't fully verify.
              </p>
              <p>
                As a QE Lead, that extends further — test strategy, team mentoring, release governance, and CI/CD
                pipelines on GitHub Actions or Azure DevOps, so none of it depends on someone remembering to run it
                by hand. I'm also exploring where AI and MCP tooling genuinely help a test suite, rather than just
                adding another dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-slate-50">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Where the work happened</h2>
          <p className="text-slate-600 max-w-2xl mb-12">
            Ten-plus years moving between manual depth and automated speed, in-house and independent. Employer and
            client names are kept off this page by request — happy to share specifics in conversation.
          </p>

          <div className="space-y-5">
            {EXPERIENCE.map((job) => (
              <div key={job.company} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <OrgMark initials={job.mark} tone={job.tone} logoUrl={job.logoUrl} />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{job.company}</h3>
                      <p className="text-sm text-blue-600 font-medium mt-0.5">{job.role}</p>
                    </div>
                  </div>
                  <span className="font-mono-data text-sm text-slate-500 mt-1">{job.period}</span>
                </div>
                <p className="text-slate-600 mb-4 max-w-2xl">{job.summary}</p>
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex gap-2.5 text-sm text-slate-600">
                      <Check size={16} className="text-blue-600 flex-none mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-white">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Selected work</h2>
              <p className="text-slate-600 max-w-xl">
                Framework builds published as proof of work. Source access is gated behind a quick email
                verification — request it below.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full border font-medium transition-colors ${focusRing} ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {activeCategory === cat && <Check size={14} />}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-lg font-bold text-slate-900">{p.title}</h3>
                    {p.status && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium flex-none">
                        {p.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono-data">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 ${focusRing}`}
                    >
                      View on GitHub <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => requestAccess(`Source repo: ${p.title}`, '#')}
                      className={`inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 ${focusRing}`}
                    >
                      Request source access <ExternalLink size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-slate-50">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12">Core Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.skills.map((s) => (
                    <li key={s.name} className="text-sm text-slate-600 flex justify-between items-center">
                      <span>{s.name}</span>
                      {s.context && <span className="text-xs text-slate-400">{s.context}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-white">
          <SectionLabel>Blog</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Articles & Insights</h2>
          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <div key={post.title} className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs text-slate-400 mb-1 font-mono-data">{post.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24 bg-slate-900 text-white rounded-3xl mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-300 mb-8">
              Open to discussions regarding QA Leadership, Test Automation Framework builds, or SDET consulting.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 text-sm transition-colors"
              >
                Send an Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 hover:bg-slate-800 text-slate-200 font-medium px-6 py-3 text-sm transition-colors"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      {showFab && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Access Gate Modal */}
      <AccessGate
        open={Boolean(gate)}
        resourceLabel={gate ? gate.label : ''}
        onClose={() => setGate(null)}
        onSuccess={handleGateSuccess}
      />
    </div>
  );
}