import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, Phone, Mail, Facebook, Instagram, Linkedin, ChevronRight, Search, MapPin, Star, Download, Play, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---
interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  type: 'New Launch' | 'Subsale' | 'Landed' | 'Highrise';
}

// --- Mock Data ---
const FEATURED_PROJECTS: Property[] = [
  { id: '1', title: 'The Azure Residence', price: 'RM 550,000', location: 'Kuala Lumpur', image: 'https://picsum.photos/seed/prop1/800/600', type: 'Highrise' },
  { id: '2', title: 'Skyline Heights', price: 'RM 850,000', location: 'Petaling Jaya', image: 'https://picsum.photos/seed/prop2/800/600', type: 'Highrise' },
  { id: '3', title: 'Oakwood Villas', price: 'RM 1,200,000', location: 'Shah Alam', image: 'https://picsum.photos/seed/prop3/800/600', type: 'Landed' },
];

const TESTIMONIALS = [
  { name: 'Sarah Tan', quote: 'Aaron & Krist helped me find my dream home within weeks. Their expertise is unmatched!', photo: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Michael Lim', quote: 'Professional and transparent. They made selling my property a breeze.', photo: 'https://i.pravatar.cc/150?u=michael' },
  { name: 'Jessica Wong', quote: 'The best investment strategy advice I have ever received. Highly recommended!', photo: 'https://i.pravatar.cc/150?u=jessica' },
];

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Projects', path: '/projects' },
    { name: 'Listings', path: '/listings' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl">AK</span>
          </div>
          <span className="font-montserrat font-bold text-navy text-lg hidden md:block">AARON & KRIST</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-teal",
                location.pathname === link.path ? "text-teal" : "text-navy"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/60123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-teal text-white px-5 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-semibold",
                    location.pathname === link.path ? "text-teal" : "text-navy"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://wa.me/60123456789" 
                className="bg-teal text-white px-5 py-3 rounded-md font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-navy text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
            <span className="text-navy font-bold text-lg">AK</span>
          </div>
          <span className="font-montserrat font-bold text-white text-lg">AARON & KRIST</span>
        </div>
        <p className="text-sm text-light-grey leading-relaxed">
          Your trusted partners in premium real estate. We provide expert consulting for buying, selling, and investment strategies.
        </p>
        <div className="flex gap-4">
          <Facebook size={20} className="hover:text-teal cursor-pointer" />
          <Instagram size={20} className="hover:text-teal cursor-pointer" />
          <Linkedin size={20} className="hover:text-teal cursor-pointer" />
        </div>
      </div>

      <div>
        <h4 className="font-montserrat font-bold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm text-light-grey">
          <li><Link to="/buy" className="hover:text-teal">Buy Property</Link></li>
          <li><Link to="/sell" className="hover:text-teal">Sell Property</Link></li>
          <li><Link to="/projects" className="hover:text-teal">New Projects</Link></li>
          <li><Link to="/insights" className="hover:text-teal">Market Insights</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-montserrat font-bold mb-6">Contact Info</h4>
        <ul className="space-y-3 text-sm text-light-grey">
          <li className="flex items-center gap-2"><Phone size={16} /> +60 12 345 6789</li>
          <li className="flex items-center gap-2"><Mail size={16} /> info@aaronkrist.com</li>
          <li className="flex items-center gap-2"><MapPin size={16} /> Kuala Lumpur, Malaysia</li>
        </ul>
      </div>

      <div>
        <h4 className="font-montserrat font-bold mb-6">Newsletter</h4>
        <p className="text-xs text-light-grey mb-4">Get the latest property reports and market trends.</p>
        <div className="flex">
          <input type="email" placeholder="Email" className="bg-white/10 border-none px-4 py-2 rounded-l-md w-full text-sm focus:ring-1 focus:ring-teal" />
          <button className="bg-teal px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-light-grey">
      <p>© 2026 Aaron & Krist Property Consultant. All rights reserved.</p>
      <div className="flex gap-6">
        <Link to="/privacy" className="hover:text-teal">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-teal">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/60123456789" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
  >
    <MessageCircle size={32} />
  </a>
);

const MobileStickyCTA = () => (
  <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t p-4 grid grid-cols-2 gap-4 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
    <button className="btn-outline py-2 text-sm flex items-center justify-center gap-2">
      <Phone size={16} /> Call Now
    </button>
    <button className="btn-primary py-2 text-sm flex items-center justify-center gap-2">
      <MessageCircle size={16} /> WhatsApp
    </button>
  </div>
);

// --- Page Components ---

const HomePage = () => (
  <div className="overflow-hidden">
    {/* Hero Section */}
    <section className="relative min-h-[80vh] flex items-center bg-navy/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find Your <span className="text-teal">Dream Home</span> with Expert Guidance
          </h1>
          <p className="text-xl text-dark-grey/80 max-w-lg">
            Premium property consulting for savvy investors and first-time buyers. We make real estate simple, transparent, and profitable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/listings" className="btn-primary flex items-center gap-2">
              Browse Properties <ChevronRight size={20} />
            </Link>
            <Link to="/contact" className="btn-outline">Free Consultation</Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://picsum.photos/seed/hero/1200/800" 
            alt="Premium Property" 
            className="rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center">
                <Star fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-navy">Top Rated Consultant</p>
                <p className="text-sm text-dark-grey">Trusted by 500+ Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="bg-white border-y py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-navy">500+</p>
            <p className="text-sm text-dark-grey uppercase tracking-wider">Properties Sold</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-navy">10+</p>
            <p className="text-sm text-dark-grey uppercase tracking-wider">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-navy">98%</p>
            <p className="text-sm text-dark-grey uppercase tracking-wider">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-navy">20+</p>
            <p className="text-sm text-dark-grey uppercase tracking-wider">Top Developers</p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="section-padding bg-light-grey/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <p className="text-dark-grey/70 max-w-2xl mx-auto">Comprehensive real estate solutions tailored to your unique needs and goals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Buy Property', desc: 'Access exclusive listings and get expert negotiation support to secure the best deal.', icon: <Search className="text-teal" /> },
            { title: 'Sell Property', desc: 'Maximize your property value with our data-driven marketing and wide buyer network.', icon: <MapPin className="text-teal" /> },
            { title: 'Investment Strategy', desc: 'Build wealth with data-backed insights on high-yield properties and growth areas.', icon: <Star className="text-teal" /> },
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-teal/20"
            >
              <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-dark-grey/80 mb-6 leading-relaxed">{service.desc}</p>
              <Link to="/buy" className="text-teal font-bold flex items-center gap-2 group">
                Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-dark-grey/70">Hand-picked new launches with high appreciation potential.</p>
          </div>
          <Link to="/projects" className="btn-outline py-2 px-4 text-sm">View All Projects</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>
              <h3 className="text-lg font-bold group-hover:text-teal transition-colors">{project.title}</h3>
              <p className="text-sm text-dark-grey/60 flex items-center gap-1 mb-2">
                <MapPin size={14} /> {project.location}
              </p>
              <p className="text-teal font-bold">{project.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Property Categories */}
    <section className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {['New Launch', 'Subsale', 'Landed', 'Highrise'].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative h-48 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center group"
            >
              <img 
                src={`https://picsum.photos/seed/cat${i}/600/400`} 
                alt={cat} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <span className="relative z-10 font-montserrat font-bold text-xl">{cat}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Educational Section */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer">
          <img 
            src="https://picsum.photos/seed/edu/1200/800" 
            alt="Education" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/40 flex items-center justify-center group-hover:bg-navy/20 transition-all">
            <div className="w-20 h-20 bg-white text-teal rounded-full flex items-center justify-center shadow-2xl">
              <Play fill="currentColor" size={32} />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">New vs Subsale — What Should You Choose?</h2>
          <p className="text-lg text-dark-grey/80 leading-relaxed">
            Deciding between a brand-new developer unit and a pre-owned property can be tricky. We break down the pros and cons of each to help you make the most informed decision for your lifestyle and wallet.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 font-semibold"><CheckCircle className="text-teal" size={20} /> Lower entry costs for New Launch</li>
            <li className="flex items-center gap-3 font-semibold"><CheckCircle className="text-teal" size={20} /> Immediate move-in for Subsale</li>
            <li className="flex items-center gap-3 font-semibold"><CheckCircle className="text-teal" size={20} /> Modern amenities vs Established locations</li>
          </ul>
          <Link to="/insights" className="btn-primary inline-block">Read Full Guide</Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-light-grey/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm snap-center">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full border-2 border-teal/20" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-navy">{t.name}</p>
                  <div className="flex text-teal">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
              <p className="italic text-dark-grey/80 leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Magnet */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto bg-navy rounded-3xl p-10 md:p-16 text-center text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get Free Property Report 2026</h2>
          <p className="text-light-grey/80">Stay ahead of the market with our exclusive annual trend analysis.</p>
        </div>
        <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="bg-white/10 border-white/20 text-white px-6 py-3 rounded-md w-full focus:ring-1 focus:ring-teal" />
          <input type="tel" placeholder="Phone Number" className="bg-white/10 border-white/20 text-white px-6 py-3 rounded-md w-full focus:ring-1 focus:ring-teal" />
          <button className="btn-primary whitespace-nowrap">Download Now</button>
        </form>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-teal py-20 text-center text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Let’s Find Your Ideal Property</h2>
        <p className="text-xl opacity-90">Book a free 30-minute strategy session with our experts.</p>
        <Link to="/contact" className="bg-white text-teal px-10 py-4 rounded-md font-bold text-lg hover:bg-navy hover:text-white transition-all inline-block">
          Book Free Consultation
        </Link>
      </div>
    </section>
  </div>
);

const BuyPage = () => (
  <div className="min-h-screen">
    <section className="bg-navy text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Find the Right Property for You</h1>
        <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-left">
            <label className="text-xs font-bold text-navy uppercase mb-1 block">Budget</label>
            <select className="w-full text-navy font-semibold focus:outline-none">
              <option>RM 300k - 500k</option>
              <option>RM 500k - 800k</option>
              <option>RM 800k+</option>
            </select>
          </div>
          <div className="text-left">
            <label className="text-xs font-bold text-navy uppercase mb-1 block">Location</label>
            <select className="w-full text-navy font-semibold focus:outline-none">
              <option>Kuala Lumpur</option>
              <option>Petaling Jaya</option>
              <option>Shah Alam</option>
            </select>
          </div>
          <div className="text-left">
            <label className="text-xs font-bold text-navy uppercase mb-1 block">Type</label>
            <select className="w-full text-navy font-semibold focus:outline-none">
              <option>Highrise</option>
              <option>Landed</option>
              <option>Commercial</option>
            </select>
          </div>
          <button className="btn-primary w-full flex items-center justify-center gap-2">
            <Search size={18} /> Search
          </button>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all">
              <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
              <div className="p-6 space-y-4">
                <p className="text-teal font-bold text-xl">{project.price}</p>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-dark-grey/60 flex items-center gap-1"><MapPin size={14} /> {project.location}</p>
                <div className="flex gap-4 text-xs font-semibold text-dark-grey/80 border-t pt-4">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1,200 sqft</span>
                </div>
                <button className="btn-outline w-full py-2">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-light-grey/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Market Expertise', desc: 'Deep understanding of local trends and pricing.' },
            { title: 'Negotiation Skills', desc: 'We fight for the best terms and price for you.' },
            { title: 'End-to-End Support', desc: 'From viewing to legal paperwork, we handle it all.' },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-dark-grey/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding text-center">
      <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
      <div className="flex justify-center gap-4">
        <a href="https://wa.me/60123456789" className="btn-primary flex items-center gap-2">
          <MessageCircle size={20} /> WhatsApp Us
        </a>
        <Link to="/contact" className="btn-outline">Book Consultation</Link>
      </div>
    </section>
  </div>
);

const SellPage = () => (
  <div className="min-h-screen">
    <section className="bg-navy text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Sell Faster, At The Right Price</h1>
        <p className="text-xl text-light-grey/80">Our premium marketing strategy ensures your property gets the attention it deserves.</p>
        <button className="bg-teal text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-teal transition-all">
          Get Free Valuation
        </button>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Our Selling Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Evaluation', desc: 'Accurate market valuation of your property.' },
            { step: '02', title: 'Marketing', desc: 'Professional photography and targeted ads.' },
            { step: '03', title: 'Matching', desc: 'Connecting with our database of qualified buyers.' },
            { step: '04', title: 'Closing', desc: 'Expert negotiation and legal coordination.' },
          ].map((item, i) => (
            <div key={i} className="relative p-8 bg-white border rounded-2xl space-y-4">
              <span className="text-5xl font-bold text-teal/10 absolute top-4 right-4">{item.step}</span>
              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
              <p className="text-dark-grey/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-navy text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Marketing Strategy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Ads Exposure', desc: 'FB, IG, and Google Ads targeting.' },
              { title: 'Social Media', desc: 'Viral content on TikTok and Reels.' },
              { title: 'Database Buyers', desc: 'Direct access to 10k+ active buyers.' },
              { title: 'Pro Photography', desc: 'High-end visuals and drone shots.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-teal mb-2">{item.title}</h4>
                <p className="text-sm text-light-grey/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-10 rounded-3xl text-navy space-y-6 shadow-2xl">
          <h3 className="text-2xl font-bold text-center">Request Valuation</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal" />
            <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal" />
            <select className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal">
              <option>Property Type</option>
              <option>Condo</option>
              <option>Terrace</option>
              <option>Semi-D / Bungalow</option>
            </select>
            <button className="btn-primary w-full py-4">Get Valuation</button>
          </form>
        </div>
      </div>
    </section>
  </div>
);

const ProjectsPage = () => (
  <div className="min-h-screen">
    <section className="bg-navy text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">New Launch Projects</h1>
        <p className="text-xl text-light-grey/80">Exclusive early-bird access to the most anticipated developments.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-teal text-white px-3 py-1 rounded-full text-xs font-bold">New Launch</div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-dark-grey/60 flex items-center gap-1"><MapPin size={14} /> {project.location}</p>
              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-teal font-bold">From {project.price}</p>
                <button className="text-navy font-bold flex items-center gap-1 text-sm">View Details <ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-light-grey/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Investment Angle</h2>
        <p className="text-lg text-dark-grey/80">We analyze rental yields, capital growth potential, and developer track records for every project we feature.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['High Yield', 'Prime Location', 'Early Bird', 'Reputable'].map((tag, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-bold text-navy border border-teal/10">{tag}</div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const ListingsPage = () => (
  <div className="min-h-screen">
    <section className="bg-light-grey/20 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <h1 className="text-3xl font-bold">Subsale Listings</h1>
        <div className="flex flex-wrap gap-4">
          <select className="border px-4 py-2 rounded-md bg-white">
            <option>Price Range</option>
          </select>
          <select className="border px-4 py-2 rounded-md bg-white">
            <option>Location</option>
          </select>
          <select className="border px-4 py-2 rounded-md bg-white">
            <option>Property Type</option>
          </select>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl transition-all">
            <img src={project.image} alt={project.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
            <div className="p-6 space-y-4">
              <p className="text-teal font-bold text-xl">{project.price}</p>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-sm text-dark-grey/60 flex items-center gap-1"><MapPin size={14} /> {project.location}</p>
              <button className="btn-outline w-full py-2">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding text-center bg-navy text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">Can’t find what you want?</h2>
      <p className="text-light-grey/80 mb-8 max-w-xl mx-auto">We have access to off-market listings and a wide network of owners. Tell us your requirements and we'll find it for you.</p>
      <Link to="/contact" className="btn-primary">Contact Us Now</Link>
    </section>
  </div>
);


const AboutPage = () => (
  <div className="min-h-screen">
    <section className="bg-light-grey/20 py-24 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Your Trusted Property Advisors</h1>
    </section>
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <img src="https://picsum.photos/seed/about/800/1000" alt="Aaron & Krist" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">The Aaron & Krist Journey</h2>
          <p className="text-lg text-dark-grey/80 leading-relaxed">
            Founded with a vision to redefine real estate consulting in Malaysia, Aaron & Krist have spent the last decade building a reputation for integrity, transparency, and results.
          </p>
          <p className="text-lg text-dark-grey/80 leading-relaxed">
            We believe that every property transaction is a life-changing event. That's why we go beyond just "selling" — we consult, we strategize, and we partner with you to ensure your long-term success.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <p className="text-4xl font-bold text-teal">10+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Years</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-teal">RM 1B+</p>
              <p className="text-sm font-bold uppercase tracking-widest">Transacted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen section-padding">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg text-dark-grey/70">Ready to take the next step? We're here to help.</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <div>
              <p className="font-bold text-navy">Call Us</p>
              <p className="text-dark-grey">+60 12 345 6789</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-navy">WhatsApp</p>
              <p className="text-dark-grey">+60 12 345 6789</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-teal/10 text-teal rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div>
              <p className="font-bold text-navy">Email</p>
              <p className="text-dark-grey">info@aaronkrist.com</p>
            </div>
          </div>
        </div>
        <div className="h-64 bg-light-grey rounded-2xl overflow-hidden grayscale">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.42316521946!2d101.61694936353995!3d3.138503577717658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff6674351!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1711876154321!5m2!1sen!2smy" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-2xl border">
        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-navy">Name</label>
              <input type="text" className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-navy">Phone</label>
              <input type="tel" className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal" placeholder="+60 12 345 6789" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-navy">Message</label>
            <textarea rows={5} className="w-full border px-4 py-3 rounded-md focus:ring-1 focus:ring-teal" placeholder="How can we help you?"></textarea>
          </div>
          <button className="btn-primary w-full py-4">Book Consultation</button>
        </form>
      </div>
    </div>
  </div>
);

// --- Main App ---

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/insights" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </div>
    </Router>
  );
}
