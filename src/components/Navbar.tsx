

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center">
        <a href="/" className="text-2xl font-serif font-bold text-vora-dark">
          LinkMyCampus
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-vora-dark/80">
        <a href="#for-you" className="hover:text-vora-gold transition-colors">For Students</a>
        <a href="#features" className="hover:text-vora-gold transition-colors">Features</a>
        <a href="#what" className="hover:text-vora-gold transition-colors">About</a>
      </div>

      <div className="flex items-center gap-6">
        <a href="#login" className="hidden md:block text-sm font-medium hover:text-vora-gold transition-colors">
          Log in
        </a>
        <a href="#access" className="bg-vora-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-vora-dark/90 transition-colors">
          Get Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
