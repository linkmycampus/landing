

const Footer = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-medium text-vora-dark leading-tight mb-8">
            The unfair advantage.<br />
            Now <span className="font-serif italic text-vora-gold">fair for everyone.</span>
          </h2>
          <p className="text-lg text-vora-dark/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop letting borders dictate your career or your hiring pipeline. Join the platform redefining global healthcare work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-vora-dark text-white rounded-full font-medium hover:bg-vora-dark/90 transition-colors">
              Get Access
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-vora-dark/20 text-vora-dark rounded-full font-medium hover:border-vora-dark/40 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="w-full bg-[#10141D] text-white/60 py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-2">
            <a href="/" className="text-2xl font-serif font-bold text-white mb-6 inline-block">
              LinkMyCampus
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The world's premier platform connecting highly-vetted international healthcare professionals with leading healthcare organizations.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">For Organizations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Professionals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Agencies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div>&copy; {new Date().getFullYear()} LinkMyCampus. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
