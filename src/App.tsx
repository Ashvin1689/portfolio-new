import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  ChevronRight, 
  Code2, 
  Database, 
  Cpu, 
  Cloud, 
  BarChart3, 
  Wrench,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';

const SKILLS = {
  frontend: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  database: ['MySQL', 'Database Design', 'Query Optimization'],
  ai: ['Google Gemini API', 'Anthropic Claude API', 'OpenAI', 'Prompt Engineering'],
  cloud: ['DigitalOcean', 'NGINX', 'PM2', 'CI/CD Basics'],
  tools: ['Git', 'GitHub', 'SEO Optimization', 'SSR/SSG', 'Google Analytics']
};

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Remasto Pvt Ltd',
    location: 'Vadodara',
    period: '2023 – Present',
    highlights: [
      'Developed and maintained scalable full-stack applications Like Remasto (4L+ Users) using React.js, Next.js, Node.js, and Express.js',
      'Built RESTful APIs supporting AI-driven features used in production environments',
      'Improved page load speed and search visibility using SSR & SSG techniques',
      'Integrated Gemini and Claude APIs for interview, resume, and analytics generation',
      'Designed prompt-engineering strategies with fallback logic for reliable AI responses',
      'Deployed, monitored, and scaled applications on DigitalOcean using NGINX and PM2'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Shadowing AI',
    location: 'Dallas, USA',
    period: '2021 – 2023',
    highlights: [
      'Built AI-powered resume and cover-letter generation platforms using OpenAI',
      'Developed SEO-optimized, server-rendered web applications',
      'Designed and maintained backend APIs and database schemas',
      'Managed cloud deployment and application monitoring'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Nirvaana Technologies',
    location: 'Vadodara',
    period: '2016 – 2021',
    highlights: [
      'Developed and maintained WordPress-based business and corporate websites',
      'Optimized website performance and SEO, increasing organic traffic by ~10%',
      'Customized themes, plugins, and integrations based on client requirements'
    ]
  }
];

const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Gujarat Technological University',
    year: '2016'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Sardar Patel University',
    year: '2013'
  }
];

const Badge = ({ children, color = "indigo" }: { children: React.ReactNode, color?: string, key?: string | number }) => {
  const colors: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
    slate: "bg-slate-100 text-slate-600 border-slate-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-100"
  };
  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border rounded-full ${colors[color]}`}>
      {children}
    </span>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-2 mb-4">
      <div className="h-[1px] w-8 bg-indigo-600" />
      <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.2em]">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 italic font-serif">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1t9dtt_TUtqDdrGolvaQ5LjzCIwHCigRf";
    link.setAttribute("download", "Ashvin-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-indigo-600 selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [bg-size:32px_32px] [mask:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
    
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-indigo-200">A</div>
            <span className="font-serif italic text-lg font-bold text-slate-900 tracking-tighter">Ashwin Parmar.</span>
          </div>
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Stack</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Connect</a>
          </div>
          <button onClick={handleDownload} className="px-5 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-indigo-600 transition-all shadow-md">
            Resume
          </button>
        </div>
      </nav>

      <section id="about" className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Badge>Full Stack Engineer</Badge>
              <Badge color="slate">9+ Years Exp</Badge>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.85] mb-12">
              BUILDING <br />
              <span className="text-indigo-600 italic font-serif">INTELLIGENT</span> <br />
              SYSTEMS.
            </h1>

            <div className="grid md:grid-cols-[1fr_300px] gap-12 items-end">
              <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                I'm <span className="text-slate-900 font-medium">Ashwin Parmar</span>, a specialist in crafting scalable web architectures and integrating Generative AI into production environments. Currently scaling platforms for 400k+ users.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-12 h-[px] bg-slate-200" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Based in India</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/Ashvin1689" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/ashvin-parmar/" className="p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
          <Terminal size={600} strokeWidth={0.5} className="text-indigo-600" />
        </div>
      </section>

      <section className="py-20 border-y border-slate-100 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Years of Engineering', value: '09' },
              { label: 'Active Users Managed', value: '400K+' },
              { label: 'AI Solutions Built', value: '12+' },
              { label: 'System Uptime', value: '99.9%' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-5xl font-bold tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Bento Grid */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Technical Stack" subtitle="Capabilities" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="md:col-span-2 p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-6 text-indigo-600">
                <Code2 size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest">Frontend Mastery</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map(s => <Badge key={s} color="slate">{s}</Badge>)}
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-6 text-indigo-600">
                <Cpu size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest">AI & GenAI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.ai.map(s => <Badge key={s} color="slate">{s}</Badge>)}
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Database size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map(s => <Badge key={s} color="slate">{s}</Badge>)}
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Cloud size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest">DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.cloud.map(s => <Badge key={s} color="slate">{s}</Badge>)}
              </div>
            </div>

            <div className="md:col-span-2 p-8 bg-white border border-slate-200 rounded-3xl hover:border-indigo-600/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
              <div className="flex items-center gap-3 mb-6 text-slate-900">
                <Wrench size={20} />
                <h3 className="text-sm font-bold uppercase tracking-widest">Tools & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...SKILLS.tools, 'Google Tag Manager', 'MySQL'].map(s => <Badge key={s} color="slate">{s}</Badge>)}
              </div>
            </div>

            <div className="p-8 bg-indigo-600 rounded-3xl flex flex-col justify-between group cursor-pointer shadow-lg shadow-indigo-200">
              <h3 className="text-white text-2xl font-bold tracking-tighter leading-none">
                READY TO <br /> COLLABORATE?
              </h3>
              <div className="flex justify-end">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform shadow-md">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 bg-slate-50 rounded-[3rem] mx-4 border border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-8 bg-indigo-600" />
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-[0.2em]">Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter italic font-serif text-slate-900">
              Professional Journey
            </h2>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="group grid md:grid-cols-[300px_1fr] gap-8 py-12 border-t border-slate-200 hover:bg-white transition-all px-4 rounded-2xl hover:shadow-sm">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{exp.period}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{exp.company}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={14} /> {exp.location}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6 text-indigo-600">{exp.role}</h4>
                  <ul className="space-y-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-4 text-slate-500 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-indigo-200 rounded-full shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader title="Education" subtitle="Academic" />
            <div className="space-y-6">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl flex justify-between items-center hover:shadow-md transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-sm text-slate-500">{edu.school}</p>
                  </div>
                  <span className="text-xs font-mono text-indigo-600 font-bold">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Featured Project" subtitle="Highlight" />
            <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <Badge color="emerald">Industrial Project</Badge>
                <span className="text-xs font-mono text-slate-400">2016</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vote4Nation</h3>
              <p className="text-slate-500 leading-relaxed mb-6">
                Developed an OLAP-based system for election data analysis during the 2014 Lok Sabha Election. Focused on high-performance data processing and visualization.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>Nirvaana Technologies</span>
                <div className="w-1 h-1 bg-slate-200 rounded-full" />
                <span>Data Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-40 px-6 relative overflow-hidden bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge>Get in touch</Badge>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mt-8 mb-16">
            LET'S CREATE <br />
            <span className="text-indigo-600 italic font-serif">THE FUTURE.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            <a href="mailto:ashvinp18@gmail.com" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover:border-indigo-600 group-hover:shadow-lg transition-all">
                <Mail size={32} className="text-slate-400 group-hover:text-indigo-600" />
              </div>
              <span className="text-xl font-bold text-slate-900">ashvinp18@gmail.com</span>
            </a>
            <div className="w-[1px] h-20 bg-slate-200 hidden md:block" />
            <a href="tel:+919924591881" className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center group-hover:border-indigo-600 group-hover:shadow-lg transition-all">
                <Phone size={32} className="text-slate-400 group-hover:text-indigo-600" />
              </div>
              <span className="text-xl font-bold text-slate-900">+91 9924591881</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white text-[10px] font-bold">A</div>
            <span className="font-serif italic font-bold text-slate-900">Ashwin Parmar.</span>
          </div>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Designed for impact © 2026
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/Ashvin1689" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/ashvin-parmar/" className="text-slate-400 hover:text-indigo-600 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
