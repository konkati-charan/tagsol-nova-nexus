import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Code,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive analytics.',
      features: [
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Recommendation Systems',
        'Chatbots & Virtual Assistants',
        'Custom ML Model Development'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'AWS SageMaker'],
      pricing: 'Starting at $10,000',
      timeline: '6-12 weeks'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      features: [
        'React/Next.js Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Content Management Systems',
        'API Development & Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL'],
      pricing: 'Starting at $5,000',
      timeline: '4-8 weeks'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: [
        'iOS & Android Development',
        'React Native Applications',
        'Flutter Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications & Analytics'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting at $8,000',
      timeline: '6-10 weeks'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure that grows with your business needs.',
      features: [
        'Cloud Migration & Optimization',
        'Microservices Architecture',
        'Serverless Applications',
        'Container Orchestration',
        'Auto-scaling Infrastructure',
        'Multi-cloud Strategies'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
      pricing: 'Starting at $7,500',
      timeline: '4-6 weeks'
    },
    {
      icon: Shield,
      title: 'DevOps & Security',
      description: 'Robust deployment pipelines and security measures for your applications.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Security Audits & Compliance',
        'Monitoring & Alerting',
        'Automated Testing',
        'Disaster Recovery Planning'
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
      pricing: 'Starting at $6,000',
      timeline: '3-5 weeks'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics to make informed business decisions.',
      features: [
        'Custom Dashboards & Reports',
        'Real-time Data Visualization',
        'ETL Pipeline Development',
        'Data Warehouse Design',
        'KPI Tracking & Metrics',
        'Predictive Analytics'
      ],
      technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch', 'Grafana'],
      pricing: 'Starting at $9,000',
      timeline: '5-8 weeks'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, goals, and constraints to create a comprehensive project roadmap.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture and user experience for your project.',
      icon: Code
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing and quality assurance.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support to ensure optimal performance.',
      icon: Award
    }
  ];

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
              Our Services
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground">
              Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Solutions</span>
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From AI-powered applications to cloud infrastructure, we provide end-to-end technology 
              solutions that drive business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-nova-lg transition-all duration-300 border-0 bg-background group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.timeline}</span>
                        </div>
                        <div className="font-poppins font-semibold text-primary">
                          {service.pricing}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="font-poppins text-2xl text-foreground mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="font-inter text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      className="w-full mt-6 bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center justify-center space-x-2">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-poppins font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-6">
              Proven <span className="bg-gradient-primary bg-clip-text text-transparent">Results</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed', description: 'Successful deliveries across industries' },
              { number: '99%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
              { number: '50+', label: 'Expert Engineers', description: 'Skilled professionals on our team' },
              { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 border-0 bg-background hover:shadow-nova-lg transition-all duration-300">
                  <div className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="font-poppins font-semibold text-lg text-primary mb-2">
                    {stat.label}
                  </div>
                  <div className="font-inter text-muted-foreground text-sm">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Let's discuss your project requirements and how our services can help achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary border-white hover:bg-white/90 font-inter font-semibold px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-white border-white/20 border-2 hover:bg-white/10 font-inter font-semibold px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;