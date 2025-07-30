import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Zap,
  Globe,
  Send,
  ChevronRight
} from 'lucide-react';

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses and equity options.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible schedules and remote work options.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and continuous learning opportunities.'
    },
    {
      icon: Coffee,
      title: 'Great Environment',
      description: 'Modern office space with free meals, snacks, and recreational activities.'
    },
    {
      icon: Globe,
      title: 'Remote Friendly',
      description: 'Work from anywhere with our distributed team and collaboration tools.'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI/ML solutions for enterprise clients.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        '5+ years of experience in machine learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement ML algorithms and models',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with latest AI/ML trends'
      ],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and frameworks.',
      requirements: [
        'BS in Computer Science or equivalent experience',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Familiarity with cloud services and DevOps'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Write clean, efficient, and maintainable code',
        'Participate in code reviews and testing',
        'Collaborate with design and product teams'
      ],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        'BS in Computer Science or related field',
        '4+ years of DevOps/Infrastructure experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with Infrastructure as Code (Terraform)',
        'Strong scripting skills (Python, Bash)'
      ],
      responsibilities: [
        'Design and maintain CI/CD pipelines',
        'Monitor system performance and reliability',
        'Implement security best practices',
        'Automate deployment and scaling processes'
      ],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'MBA or equivalent experience',
        '5+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Customer-focused mindset'
      ],
      responsibilities: [
        'Define product vision and strategy',
        'Work with engineering and design teams',
        'Conduct market research and analysis',
        'Manage product roadmap and priorities'
      ],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Understanding of design systems and accessibility',
        'Portfolio demonstrating design process'
      ],
      responsibilities: [
        'Design user interfaces and experiences',
        'Conduct user research and testing',
        'Create wireframes and prototypes',
        'Collaborate with product and engineering teams'
      ],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$125,000 - $165,000',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
      requirements: [
        'MS/PhD in Statistics, Mathematics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with ML libraries and tools',
        'Strong statistical analysis skills'
      ],
      responsibilities: [
        'Analyze complex datasets',
        'Build predictive models',
        'Create data visualizations',
        'Present findings to stakeholders'
      ],
      posted: '4 days ago'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

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
              Join Our Team
            </Badge>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-foreground">
              Build the <span className="bg-gradient-primary bg-clip-text text-transparent">Future</span> With Us
            </h1>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join a team of passionate innovators who are shaping the future of technology. 
              We're looking for talented individuals to help us create cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold px-8 py-6 rounded-xl"
              >
                View Open Positions
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="font-inter font-semibold px-8 py-6 rounded-xl border-2"
              >
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">Tagsol Nova</span>?
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where innovation thrives and people can do their best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-nova-lg transition-all duration-300 border-0 bg-background group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open <span className="bg-gradient-primary bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect role to advance your career and make a meaningful impact.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-nova-lg transition-all duration-300 border-0 bg-background">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="font-poppins font-semibold text-xl text-foreground">
                            {job.title}
                          </h3>
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        
                        <p className="font-inter text-muted-foreground mb-4">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row gap-3">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline"
                              className="font-inter font-medium"
                              onClick={() => setSelectedJob(job)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="font-poppins text-2xl text-foreground">
                                {job.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="flex flex-wrap gap-4 text-sm">
                                <Badge variant="secondary">{job.department}</Badge>
                                <Badge variant="outline">{job.type}</Badge>
                                <div className="flex items-center space-x-1 text-muted-foreground">
                                  <MapPin className="w-4 h-4" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center space-x-1 text-muted-foreground">
                                  <DollarSign className="w-4 h-4" />
                                  <span>{job.salary}</span>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-poppins font-semibold text-lg mb-2">Description</h4>
                                <p className="font-inter text-muted-foreground">{job.description}</p>
                              </div>

                              <div>
                                <h4 className="font-poppins font-semibold text-lg mb-2">Requirements</h4>
                                <ul className="space-y-1">
                                  {job.requirements.map((req, idx) => (
                                    <li key={idx} className="font-inter text-muted-foreground flex items-start">
                                      <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-poppins font-semibold text-lg mb-2">Responsibilities</h4>
                                <ul className="space-y-1">
                                  {job.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="font-inter text-muted-foreground flex items-start">
                                      <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="bg-gradient-primary hover:opacity-90 text-white font-inter font-medium"
                              onClick={() => setApplicationData(prev => ({ ...prev, position: job.title }))}
                            >
                              Apply Now
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="font-poppins text-xl text-foreground">
                                Apply for {job.title}
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleApplicationSubmit} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="name">Full Name *</Label>
                                  <Input
                                    id="name"
                                    value={applicationData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="email">Email *</Label>
                                  <Input
                                    id="email"
                                    type="email"
                                    value={applicationData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="phone">Phone</Label>
                                  <Input
                                    id="phone"
                                    value={applicationData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="experience">Years of Experience</Label>
                                  <Select value={applicationData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select experience" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="0-1">0-1 years</SelectItem>
                                      <SelectItem value="2-3">2-3 years</SelectItem>
                                      <SelectItem value="4-5">4-5 years</SelectItem>
                                      <SelectItem value="6-10">6-10 years</SelectItem>
                                      <SelectItem value="10+">10+ years</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="coverLetter">Cover Letter *</Label>
                                <Textarea
                                  id="coverLetter"
                                  value={applicationData.coverLetter}
                                  onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                                  placeholder="Tell us why you're interested in this position..."
                                  rows={4}
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="resume">Resume *</Label>
                                <Input
                                  id="resume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  required
                                />
                              </div>

                              <Button 
                                type="submit"
                                className="w-full bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold py-6"
                              >
                                <Send className="w-4 h-4 mr-2" />
                                Submit Application
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              We foster a culture of innovation, collaboration, and continuous learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">Innovation First</h3>
                </div>
                <p className="font-inter text-muted-foreground">
                  We encourage experimentation and creative problem-solving. Every team member is empowered to contribute ideas and drive innovation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">Collaborative Environment</h3>
                </div>
                <p className="font-inter text-muted-foreground">
                  We believe in the power of teamwork. Our open communication culture ensures everyone's voice is heard and valued.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="font-poppins font-semibold text-xl text-foreground">Continuous Learning</h3>
                </div>
                <p className="font-inter text-muted-foreground">
                  We invest in our people's growth through training, conferences, and mentorship programs. Your development is our priority.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-primary/10 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
                Join Our Mission
              </h3>
              <p className="font-inter text-muted-foreground mb-6">
                Be part of a team that's shaping the future of technology and making a real impact on businesses worldwide.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold"
              >
                Explore Opportunities
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;