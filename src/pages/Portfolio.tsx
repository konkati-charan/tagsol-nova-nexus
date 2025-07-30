import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  Code,
  Users,
  TrendingUp
} from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'AI/ML', 'Web Apps', 'Mobile Apps', 'Cloud Solutions', 'E-commerce'];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Sales Forecasting',
      category: 'AI/ML',
      description: 'Machine learning platform that predicts sales trends with 95% accuracy.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      client: 'TechCorp Inc.',
      timeline: '12 weeks',
      impact: '40% increase in forecast accuracy',
      challenges: 'Handling large datasets and real-time predictions',
      solution: 'Built scalable ML pipeline with automated retraining',
      results: ['95% prediction accuracy', '40% improved planning', '$2M cost savings'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform Redesign',
      category: 'Web Apps',
      description: 'Complete overhaul of legacy e-commerce system with modern UI/UX.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      client: 'ShopFlow',
      timeline: '8 weeks',
      impact: '60% increase in conversion rate',
      challenges: 'Migrating legacy data while maintaining uptime',
      solution: 'Phased migration with comprehensive testing',
      results: ['60% higher conversion', '50% faster load times', '90% user satisfaction'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Healthcare Data Dashboard',
      category: 'AI/ML',
      description: 'Real-time analytics dashboard for healthcare providers.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'D3.js', 'Python', 'Apache Kafka'],
      client: 'MedAnalytics',
      timeline: '10 weeks',
      impact: '30% reduction in diagnosis time',
      challenges: 'Processing real-time medical data streams',
      solution: 'Built robust data pipeline with ML insights',
      results: ['Real-time insights', '30% faster diagnosis', 'HIPAA compliant'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      category: 'Mobile Apps',
      description: 'AI-powered fitness tracking app with personalized workout plans.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'TensorFlow Lite'],
      client: 'FitTech Solutions',
      timeline: '14 weeks',
      impact: '500K+ downloads in first quarter',
      challenges: 'On-device AI processing for real-time feedback',
      solution: 'Optimized ML models for mobile deployment',
      results: ['500K downloads', '4.8 app rating', '85% user retention'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Migration',
      category: 'Cloud Solutions',
      description: 'Complete migration from on-premise to AWS cloud infrastructure.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
      client: 'DataFlow Corp',
      timeline: '6 weeks',
      impact: '50% reduction in infrastructure costs',
      challenges: 'Zero-downtime migration of critical systems',
      solution: 'Blue-green deployment strategy with automated rollback',
      results: ['Zero downtime', '50% cost reduction', '99.9% uptime'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Smart Inventory Management',
      category: 'AI/ML',
      description: 'IoT-enabled inventory system with predictive restocking.',
      image: '/api/placeholder/600/400',
      technologies: ['IoT', 'Machine Learning', 'React', 'MongoDB'],
      client: 'RetailMax',
      timeline: '16 weeks',
      impact: '25% reduction in stockouts',
      challenges: 'Integrating diverse IoT sensors and legacy systems',
      solution: 'Built unified IoT platform with ML predictions',
      results: ['25% fewer stockouts', '30% inventory optimization', '$1.5M savings'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <Badge variant="outline" className="mx-auto bg-primary/10 border-primary/20 text-primary">
              Our Portfolio
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground">
              Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and see how we've helped businesses 
              transform their operations with cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Code, number: '150+', label: 'Projects Completed' },
              { icon: Users, number: '50+', label: 'Happy Clients' },
              { icon: TrendingUp, number: '99%', label: 'Success Rate' },
              { icon: Eye, number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-2"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-poppins font-bold text-3xl text-foreground">{stat.number}</div>
                <div className="font-inter text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`font-inter font-medium ${
                  selectedCategory === category 
                    ? 'bg-gradient-primary text-white' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-nova-lg transition-all duration-300 border-0 bg-background overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-primary/10 flex items-center justify-center">
                        <div className="text-4xl text-primary/30">🚀</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                          <Button size="sm" variant="outline" className="bg-white/90 text-black hover:bg-white">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="bg-white/90 text-black hover:bg-white">
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{project.timeline}</span>
                      </div>
                      <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="font-inter text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-primary font-medium mb-4">
                        {project.impact}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full font-inter font-medium hover:bg-primary/5"
                            onClick={() => setSelectedProject(project)}
                          >
                            View Case Study
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="font-poppins text-2xl text-foreground">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="w-full h-64 bg-gradient-primary/10 rounded-lg flex items-center justify-center">
                              <div className="text-6xl text-primary/30">🚀</div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-poppins font-semibold text-lg mb-2">Project Overview</h4>
                                <p className="font-inter text-muted-foreground mb-4">{project.description}</p>
                                <div className="space-y-2">
                                  <div><strong>Client:</strong> {project.client}</div>
                                  <div><strong>Timeline:</strong> {project.timeline}</div>
                                  <div><strong>Impact:</strong> {project.impact}</div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-poppins font-semibold text-lg mb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.technologies.map((tech, idx) => (
                                    <Badge key={idx} variant="secondary">{tech}</Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-poppins font-semibold text-lg mb-2">Challenge</h4>
                              <p className="font-inter text-muted-foreground">{project.challenges}</p>
                            </div>

                            <div>
                              <h4 className="font-poppins font-semibold text-lg mb-2">Solution</h4>
                              <p className="font-inter text-muted-foreground">{project.solution}</p>
                            </div>

                            <div>
                              <h4 className="font-poppins font-semibold text-lg mb-2">Results</h4>
                              <ul className="space-y-1">
                                {project.results.map((result, idx) => (
                                  <li key={idx} className="font-inter text-muted-foreground flex items-center">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex space-x-4">
                              <Button className="bg-gradient-primary hover:opacity-90 text-white">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Live
                              </Button>
                              <Button variant="outline">
                                <Github className="w-4 h-4 mr-2" />
                                View Code
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
              Ready to Create Your Success Story?
            </h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar results with a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary border-white hover:bg-white/90 font-inter font-semibold px-8 py-6 rounded-xl"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-white border-white/20 border-2 hover:bg-white/10 font-inter font-semibold px-8 py-6 rounded-xl"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;