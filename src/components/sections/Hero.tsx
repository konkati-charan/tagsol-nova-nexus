import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const floatingIcons = [
    { icon: Brain, delay: 0, x: 50, y: 30 },
    { icon: Zap, delay: 0.5, x: -30, y: 50 },
    { icon: Sparkles, delay: 1, x: 70, y: -20 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ 
            top: `${30 + item.y}%`, 
            left: `${20 + item.x}%` 
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.6, 
            y: 0,
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            delay: item.delay + 1,
            duration: 1,
            rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
        >
          <div className="p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-nova-md border border-primary/20">
            <item.icon className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-inter font-medium text-primary">
              AI-Powered Innovation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="text-foreground">Transform Your</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                Business with AI
              </span>
            </h1>
            <p className="font-inter text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Tagsol Nova delivers cutting-edge artificial intelligence, machine learning, 
              and enterprise solutions that revolutionize how modern businesses operate and grow.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-white font-inter font-semibold px-8 py-6 rounded-xl shadow-nova-lg"
              asChild
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-inter font-semibold px-8 py-6 rounded-xl border-2 hover:bg-primary/5"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="font-poppins font-bold text-3xl md:text-4xl text-foreground">
                  {stat.number}
                </div>
                <div className="font-inter text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;