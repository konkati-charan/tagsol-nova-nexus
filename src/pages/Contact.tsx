import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'DevOps & Security',
    'Business Intelligence',
    'Custom Software',
    'Consulting'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@tagsolnova.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'San Francisco, CA',
      description: '123 Innovation Street, Suite 100'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
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
              Get In Touch
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground">
              Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing</span>
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team to discuss your project and discover how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-background shadow-nova-lg">
                  <CardHeader>
                    <CardTitle className="font-poppins text-2xl text-foreground flex items-center space-x-2">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <span>Start Your Project</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-inter font-medium">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                            className="font-inter"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-inter font-medium">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="font-inter"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="font-inter font-medium">Company</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your company name"
                            className="font-inter"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-inter font-medium">Phone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                            className="font-inter"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="service" className="font-inter font-medium">Service Needed</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                            <SelectTrigger className="font-inter">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service, index) => (
                                <SelectItem key={index} value={service} className="font-inter">
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget" className="font-inter font-medium">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger className="font-inter">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range, index) => (
                                <SelectItem key={index} value={range} className="font-inter">
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-inter font-medium">Project Details *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          rows={6}
                          required
                          className="font-inter resize-none"
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold py-6"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-background shadow-nova-lg">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-foreground">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-foreground">{info.title}</h3>
                          <p className="font-inter font-medium text-primary">{info.value}</p>
                          <p className="font-inter text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-background shadow-nova-lg">
                  <CardHeader>
                    <CardTitle className="font-poppins text-xl text-foreground">Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="text-muted-foreground hover:text-primary hover:border-primary"
                          asChild
                        >
                          <a href={social.href} aria-label={social.label}>
                            <social.icon className="w-5 h-5" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gradient-primary text-white shadow-nova-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="w-6 h-6" />
                      <h3 className="font-poppins font-semibold text-lg">Schedule a Call</h3>
                    </div>
                    <p className="font-inter mb-6 text-white/80">
                      Prefer to talk? Schedule a free 30-minute consultation to discuss your project.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-white text-primary border-white hover:bg-white/90 font-inter font-semibold"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Call
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-poppins font-bold text-4xl text-foreground mb-6">
              Frequently <span className="bg-gradient-primary bg-clip-text text-transparent">Asked Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity. Simple web applications take 4-6 weeks, while complex AI solutions can take 8-16 weeks. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We offer comprehensive maintenance and support packages. This includes bug fixes, updates, performance monitoring, and feature enhancements."
              },
              {
                question: "What industries do you work with?",
                answer: "We work across various industries including healthcare, finance, e-commerce, education, and manufacturing. Our solutions are tailored to each industry's specific needs."
              },
              {
                question: "How do you ensure project success?",
                answer: "We follow agile methodologies with regular check-ins, transparent communication, and iterative development. You'll have full visibility into the project progress."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-background shadow-nova-md">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;