import Hero from '@/components/sections/Hero';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Code, 
  Cloud, 
  BarChart3, 
  Smartphone, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced algorithms and models that learn, adapt, and deliver intelligent insights for your business.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: ['React/Next.js', 'Progressive Web Apps', 'E-commerce Solutions']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Development']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that grow with your business needs.',
      features: ['AWS/Azure/GCP', 'Microservices', 'Serverless Architecture']
    },
    {
      icon: Shield,
      title: 'DevOps & Security',
      description: 'Robust deployment pipelines and security measures to protect your digital assets.',
      features: ['CI/CD Pipelines', 'Security Audits', 'Infrastructure as Code']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data-driven insights and analytics to make informed business decisions.',
      features: ['Data Visualization', 'Real-time Dashboards', 'Custom Reports']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Tagsol Nova transformed our operations with their AI solutions. We saw a 40% increase in efficiency within the first quarter.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      content: 'The team at Nova delivered beyond our expectations. Their web platform helped us scale from startup to enterprise.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      role: 'VP Engineering, DataFlow',
      content: 'Outstanding cloud architecture and DevOps implementation. Our deployment time reduced from hours to minutes.',
      rating: 5
    }
  ];

  return (
    <div>
      <Hero />

      {/* Services Section */}
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-nova-lg transition-all duration-300 border-0 bg-background group hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="font-poppins text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="font-inter text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              variant="outline"
              className="font-inter font-semibold px-8 py-6 rounded-xl border-2 hover:bg-primary/5"
              asChild
            >
              <Link to="/services" className="flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders are saying about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-nova-lg transition-all duration-300 border-0 bg-background">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-poppins font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="font-inter text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
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
              Ready to Transform Your Business?
            </h2>
            <p className="font-inter text-xl text-white/80 max-w-3xl mx-auto">
              Let's discuss how our AI-powered solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-primary border-white hover:bg-white/90 font-inter font-semibold px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-white border-white/20 border-2 hover:bg-white/10 font-inter font-semibold px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;