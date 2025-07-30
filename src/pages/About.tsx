import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Globe,
  Lightbulb,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of technology to create groundbreaking solutions.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We deliver high-quality work that exceeds expectations every time.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a meaningful difference in the world.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at major tech company. 15+ years in AI/ML.',
      skills: ['Leadership', 'AI Strategy', 'Product Vision']
    },
    {
      name: 'Sarah Kim',
      role: 'CTO & Co-Founder',
      bio: 'PhD in Computer Science, ML researcher with 50+ published papers.',
      skills: ['Machine Learning', 'Deep Learning', 'Cloud Architecture']
    },
    {
      name: 'Michael Zhang',
      role: 'Head of Engineering',
      bio: 'Full-stack expert with experience building scalable systems.',
      skills: ['React/Node.js', 'DevOps', 'System Design']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on human-centered technology.',
      skills: ['UX/UI Design', 'Design Systems', 'User Research']
    },
    {
      name: 'David Chen',
      role: 'AI Research Lead',
      bio: 'Former Google AI researcher specializing in NLP and computer vision.',
      skills: ['NLP', 'Computer Vision', 'Research']
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Operations',
      bio: 'Operations expert ensuring smooth project delivery and client success.',
      skills: ['Project Management', 'Process Optimization', 'Client Relations']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Tagsol Nova was born with a vision to democratize AI technology.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Delivered our first enterprise AI solution, transforming business operations.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 25+ talented engineers and researchers across multiple domains.'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Won "AI Innovation Company of the Year" and expanded to international markets.'
    },
    {
      year: '2024',
      title: 'Next Chapter',
      description: 'Launched advanced AI platform serving 500+ companies worldwide.'
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
              About Tagsol Nova
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground">
              Building the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span> of Technology
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate technologists, researchers, and innovators dedicated to 
              transforming businesses through cutting-edge artificial intelligence and modern software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-background shadow-nova-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-poppins font-bold text-3xl text-foreground">Our Mission</h2>
                </div>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making powerful 
                  solutions accessible to businesses of all sizes. We believe that every organization 
                  deserves the opportunity to leverage cutting-edge technology to achieve their goals.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 border-0 bg-background shadow-nova-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-poppins font-bold text-3xl text-foreground">Our Vision</h2>
                </div>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  To be the leading force in the AI revolution, creating intelligent solutions 
                  that enhance human capabilities and drive positive change across industries. 
                  We envision a future where technology amplifies human potential.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 bg-background hover:shadow-nova-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown and evolved.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 border-0 bg-background shadow-nova-md">
                      <div className="font-poppins font-bold text-2xl text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="font-inter text-muted-foreground">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-nova-sm relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind Tagsol Nova's innovative solutions and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 border-0 bg-background hover:shadow-nova-lg transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="font-inter text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="font-inter text-muted-foreground text-sm mb-4">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-foreground">
              Ready to Work With Us?
            </h2>
            <p className="font-inter text-xl text-muted-foreground">
              Let's discuss how our team can help bring your vision to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold px-8 py-6 rounded-xl"
                asChild
              >
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-inter font-semibold px-8 py-6 rounded-xl border-2"
                asChild
              >
                <Link to="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;