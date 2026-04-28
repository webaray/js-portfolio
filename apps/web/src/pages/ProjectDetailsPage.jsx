
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Tag, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { projectsData } from '@/data/projectsData.js';
import { motion } from 'framer-motion';

function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/');
    }
  }, [id, project, navigate]);

  if (!project) return null;

  const relatedProjects = projectsData
    .filter(p => p.id !== id)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{`${project.title} | Case Study | Js Josim`}</title>
        <meta name="description" content={project.problem} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <Header />

        <main className="pt-24 pb-20">
          {/* Breadcrumb & Back Button */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link 
              to="/#projects" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>
          </div>

          {/* Hero Section */}
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight text-balance mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed text-balance">
                {project.solution}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-border/50 shadow-2xl shadow-primary/5"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Main Narrative */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-8 space-y-16"
              >
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6">The Challenge</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6">The Approach</h2>
                  <div className="prose-custom space-y-6 text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                    {project.caseStudy}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl border border-border/50">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Business Impact</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {project.results.map((result, index) => (
                      <div key={index} className="bg-primary/5 border border-primary/20 p-6 rounded-2xl text-center">
                        <p className="text-primary font-bold text-lg leading-tight text-balance">{result}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>

              {/* Sidebar Metadata */}
              <motion.aside 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-4 space-y-8"
              >
                <div className="bg-muted/30 rounded-3xl p-8 border border-border/50 sticky top-32">
                  <h3 className="text-lg font-bold text-foreground mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                        <Tag className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Industry</p>
                        <p className="text-foreground font-medium">{project.industry}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Timeline</p>
                        <p className="text-foreground font-medium">{project.timeline}</p>
                      </div>
                    </div>

                    {project.budget && (
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                          <DollarSign className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Budget</p>
                          <p className="text-foreground font-medium">{project.budget}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-background border-border hover:bg-muted text-sm py-1 px-3">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button 
                      className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
                      onClick={() => document.getElementById('contact-cta').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start a Similar Project
                    </Button>
                  </div>
                </div>
              </motion.aside>

            </div>
          </article>
        </main>

        {/* Related Projects */}
        <section className="py-24 bg-muted/30 border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">More Work</h2>
              <Link to="/#projects" className="hidden sm:flex items-center text-primary font-semibold hover:underline">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard 
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  problem={p.problem}
                  solution={p.solution}
                  technologies={p.technologies}
                  result={p.results[0]}
                  image={p.image}
                />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link to="/#projects" className="inline-flex items-center text-primary font-semibold hover:underline">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section id="contact-cta" className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight text-balance">
              Ready to build your next big idea?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 text-balance">
              Let's discuss how we can apply these same principles to accelerate your business growth.
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-10 h-14 text-base font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => window.location.href = '/#contact'}
            >
              Get in Touch
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ProjectDetailsPage;
