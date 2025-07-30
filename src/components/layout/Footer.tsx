import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'DevOps',
    'Business Intelligence'
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-poppins font-bold text-xl text-foreground">
                Tagsol Nova
              </span>
            </div>
            <p className="text-muted-foreground font-inter leading-relaxed">
              Transforming businesses through cutting-edge AI technology and innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-inter">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground font-inter text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button size="icon" className="bg-gradient-primary hover:opacity-90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contact@tagsolnova.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2024 Tagsol Nova. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm font-inter">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm font-inter">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;