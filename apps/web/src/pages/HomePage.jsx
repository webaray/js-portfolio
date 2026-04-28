
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Layout, Shield, Zap, ShoppingCart, CheckCircle2, Award, Users, Clock, Globe, Code2, LayoutTemplate, Blocks, Server } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import SkillBadge from '@/components/SkillBadge.jsx';
import TimelineItem from '@/components/TimelineItem.jsx';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projectsData.js';

function HomePage() {
  const heroAnimation = useScrollAnimation(0.1);
  const aboutAnimation = useScrollAnimation(0.2);
  const servicesAnimation = useScrollAnimation(0.2);
  const projectsAnimation = useScrollAnimation(0.2);
  const experienceAnimation = useScrollAnimation(0.2);
  const skillsAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);

  const services = [
    {
      title: 'Custom Web Application Development',
      problem: 'Businesses struggle with off-the-shelf solutions that don\'t fit their unique workflows and requirements.',
      outcome: 'Tailored applications built from scratch that perfectly align with your processes, improving efficiency by up to 60%.',
      icon: Code
    },
    {
      title: 'E-commerce Development',
      problem: 'Online stores lose customers due to slow checkout processes and poor mobile user experience.',
      outcome: 'Fast, conversion-optimized platforms with seamless payment integration and mobile-first design.',
      icon: ShoppingCart
    },
    {
      title: 'WordPress & CMS Solutions',
      problem: 'Content teams waste hours managing websites with complex, outdated, and inflexible systems.',
      outcome: 'User-friendly CMS implementations that empower your team to update content in minutes, not hours.',
      icon: Layout
    },
    {
      title: 'API Development & Integration',
      problem: 'Disconnected systems create data silos and manual work that slows down daily operations.',
      outcome: 'Robust APIs and integrations that connect your tools, automate workflows, and eliminate manual entry.',
      icon: Zap
    },
    {
      title: 'Performance Optimization',
      problem: 'Slow websites and security vulnerabilities cost businesses customers, search rankings, and revenue.',
      outcome: 'Lightning-fast load times and enterprise-grade security that protects your data and reputation.',
      icon: Shield
    }
  ];

  const experiences = [
    {
      date: '2019 – 2020',
      title: 'Web Developer & Instructor',
      company: 'Times IT',
      description: 'Engineered custom WordPress themes and plugins. Instructed advanced web development cohorts, graduating over 200 students into the tech industry.'
    },
    {
      date: '2020 – Present',
      title: 'Senior Full Stack Developer',
      company: 'CmsTechy',
      description: 'Lead development of enterprise applications using the MERN stack. Architect scalable infrastructure supporting 50,000+ daily active users while mentoring engineering teams.'
    },
    {
      date: '2018 – 2019',
      title: 'Figma to WordPress Developer',
      company: 'Flowdigital.my',
      description: 'Translated complex design requirements into pixel-perfect, responsive interfaces using modern CSS frameworks and JavaScript.'
    }
  ];

  const skillCategories = [
    { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { title: 'Backend', skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
    { title: 'Database', skills: ['MongoDB', 'PostgreSQL', 'Redis'] },
    { title: 'Architecture', skills: ['System Design', 'Microservices', 'AWS', 'Docker'] },
    { title: 'CMS', skills: ['WordPress', 'Wix', 'Shopify'] },
    { title: 'Basic UI Design', skills: ['Figma', 'Canva', 'Sketch'] }
  ];

  const expertiseHighlights = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end solutions using the MERN stack and Next.js for scalable, high-performance applications.',
      icon: Code2
    },
    {
      title: 'E-commerce Solutions',
      description: 'Conversion-optimized storefronts built on Shopify, WooCommerce, or custom headless architectures.',
      icon: ShoppingCart
    },
    {
      title: 'WordPress Development',
      description: 'Custom themes, plugin development, and deep optimization for the world\'s most popular CMS.',
      icon: LayoutTemplate
    },
    {
      title: 'Custom Web Applications',
      description: 'Bespoke digital tools and dashboards engineered to solve complex business operational challenges.',
      icon: Blocks
    },
    {
      title: 'Performance & Security',
      description: 'Comprehensive audits and implementations to ensure lightning-fast load times and robust data protection.',
      icon: Shield
    },
    {
      title: 'API Integration',
      description: 'Seamless connection of third-party services and custom API development to unify your digital ecosystem.',
      icon: Server
    }
  ];

  return (
    <>
      <Helmet>
        <title>Js Josim - Full Stack Developer | Next.js & MERN Expert</title>
        <meta name="description" content="Professional Full Stack Developer specializing in highly scalable web applications, custom platforms, and e-commerce solutions." />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Header />

        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <motion.div
                ref={heroAnimation.ref}
                initial={{ opacity: 0, y: 20 }}
                animate={heroAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 pt-10 lg:pt-0 order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-8 border border-border/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for new projects
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight text-balance">
                  Building Scalable Web <span className="text-primary">Applications.</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl text-balance">
                  I help businesses build fast, secure, and conversion-focused digital products using modern web technologies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    size="lg" 
                    className="rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Case Studies
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-full px-8 h-14 text-base font-semibold border-border/60 hover:bg-muted hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Consultation
                  </Button>
                </div>

                {/* <div className="flex flex-wrap gap-8 items-center border-t border-border/50 pt-8">
                  <div>
                    <p className="text-3xl font-bold text-foreground tracking-tight">
                      <AnimatedCounter end={400} suffix="+" />
                    </p>
                    <p className="text-sm font-medium text-muted-foreground mt-1">Projects Delivered</p>
                  </div>
                  <div className="w-px h-12 bg-border/50 hidden sm:block" />
                  <div>
                    <p className="text-3xl font-bold text-foreground tracking-tight">
                      <AnimatedCounter end={6} suffix="+" />
                    </p>
                    <p className="text-sm font-medium text-muted-foreground mt-1">Years Experience</p>
                  </div>
                </div> */}

                {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
                    <div className="bg-background rounded-2xl p-5 border border-border/50 shadow-sm">
                      <Award className="h-6 w-6 text-primary mb-3" />
                      <p className="text-2xl font-bold text-foreground mb-1">  <AnimatedCounter end={400} suffix="+" /> </p>
                      <p className="text-sm text-muted-foreground font-medium">Projects Delivered</p>
                    </div>
                    <div className="bg-background rounded-2xl p-5 border border-border/50 shadow-sm">
                      <Clock className="h-6 w-6 text-primary mb-3" />
                      <p className="text-2xl font-bold text-foreground mb-1">  <AnimatedCounter end={6} suffix="+" /> </p>
                      <p className="text-sm text-muted-foreground font-medium">Years of Experience</p>
                    </div>
                    {/* <div className="bg-background rounded-2xl p-5 border border-border/50 shadow-sm">
                      <Code className="h-6 w-6 text-primary mb-3" />
                      <p className="text-lg font-bold text-foreground mb-1 leading-snug">WordPress, Wix, Shopify & Custom Code</p>
                      <p className="text-sm text-muted-foreground font-medium">Expert</p>
                    </div>
                    <div className="bg-background rounded-2xl p-5 border border-border/50 shadow-sm">
                      <Globe className="h-6 w-6 text-primary mb-3" />
                      <p className="text-2xl font-bold text-foreground mb-1">Global</p>
                      <p className="text-sm text-muted-foreground font-medium">Client Base</p>
                    </div> */}
                  </div>


              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroAnimation.isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-5 relative order-1 lg:order-2"
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 bg-muted border border-border/50">
                  <img 
                    src="https://horizons-cdn.hostinger.com/b6f340cb-f1f9-4bfd-900f-df4f5081a627/e1bffc9c0abafc3ec70d88d2680c2252.jpg" 
                    alt="Js Josim - Professional Full Stack Developer in suit"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent mix-blend-multiply" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={aboutAnimation.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={aboutAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                
                {/* Left Column: Image */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-foreground/5 border border-border/50 aspect-[4/3] lg:aspect-auto lg:h-[650px]">
                    <img 
                      src="https://images.unsplash.com/photo-1590085327097-cf67e44baab3?w=1200&q=80" 
                      alt="Professional developer workspace" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>

                {/* Right Column: Content */}
                <div className="order-1 lg:order-2">
                  <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">About Me</h2>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 text-balance leading-tight">
                    Building Digital Solutions for <span className="text-gradient">6+ Years</span>
                  </h3>
                 

                  {/* Narrative */}
                  <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                    <p>
                      With 6+ years of professional experience, I've successfully delivered 400+ projects across diverse industries and technologies. My expertise spans WordPress, Wix, Shopify, and custom code solutions, enabling me to provide tailored approaches for every client need.
                    </p>
                    <p>
                      I specialize in transforming business challenges into scalable digital solutions. Whether building custom applications with MERN Stack and Next.js, optimizing WordPress sites for performance, or creating conversion-focused e-commerce platforms on Shopify, I focus on delivering measurable results that directly impact your bottom line.
                    </p>
                    <p>
                      My approach combines technical excellence with strategic business thinking. I don't just write code—I solve problems. Every project is built with clean, maintainable architecture, optimized performance, and a deep understanding of your business objectives.
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    className="rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  >
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Expertise Highlights Grid */}
              <div className="mt-24">
                <div className="text-center mb-12">
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground">Core Expertise</h4>
                  <p className="text-muted-foreground mt-3">Comprehensive technical capabilities to drive your project forward.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expertiseHighlights.map((item, index) => (
                    <div key={index} className="expertise-card group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h5 className="text-lg font-bold text-foreground mb-3">{item.title}</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={servicesAnimation.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={servicesAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div className="max-w-2xl">
                <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Expertise</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-foreground text-balance">
                  Specialized solutions for modern businesses.
                </h3>
              </div>
              <p className="text-muted-foreground text-lg max-w-sm">
                Targeted technical services engineered to resolve your most pressing operational bottlenecks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
              
              <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.slice(3, 5).map((service, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    animate={servicesAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                  >
                    <ServiceCard {...service} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-padding bg-muted/30 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={projectsAnimation.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={projectsAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16 md:mb-24"
            >
              <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Work</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-foreground text-balance max-w-2xl">
                Featured case studies.
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard 
                    id={project.id}
                    title={project.title}
                    problem={project.problem}
                    solution={project.solution}
                    technologies={project.technologies}
                    result={project.results[0]}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & SKILLS GRID */}
        <section id="experience" className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12">
              
              <motion.div
                ref={experienceAnimation.ref}
                initial={{ opacity: 0, x: -20 }}
                animate={experienceAnimation.isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Journey</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Experience</h3>
                
                <div className="space-y-2">
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index} {...exp} isLast={index === experiences.length - 1} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                ref={skillsAnimation.ref}
                initial={{ opacity: 0, x: 20 }}
                animate={skillsAnimation.isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                id="skills"
              >
                <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Capabilities</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">Tech Stack</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                      <h4 className="text-base font-bold text-foreground mb-4">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* CTA & CONTACT SECTION */}
        <section id="contact" className="section-padding bg-muted/30 border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              ref={contactAnimation.ref}
              initial={{ opacity: 0, y: 20 }}
              animate={contactAnimation.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12"
            >
              <div>
                <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Connect</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 text-balance tracking-tight">
                  Let's build something remarkable together.
                </h3>
                <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                  Ready to transform your ideas into a high-performance digital reality? Drop a message, and I'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <a href="mailto:contact@jsjosim.dev" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Email me at</p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">contact@jsjosim.dev</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Response time</p>
                      <p className="text-lg font-bold text-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-3xl p-8 border border-border shadow-xl shadow-foreground/5">
                <h4 className="text-2xl font-bold text-foreground mb-8">Send a Message</h4>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
