
import { Globe2, FileCheck2, Video, ShieldCheck } from 'lucide-react';

const PlatformFeatures = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#12161E] text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div className="sticky top-24 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            One platform.<br />
            Every health professional.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-md">
            Seamlessly source, interview, hire, and onboard the best global health talent—all in one place.
          </p>
          
          {/* Tabs */}
          <div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 mb-10">
            <button className="px-6 py-2 bg-white text-vora-dark rounded-full text-sm font-medium">Source</button>
            <button className="px-6 py-2 text-white/70 hover:text-white rounded-full text-sm font-medium transition-colors">Screen</button>
            <button className="px-6 py-2 text-white/70 hover:text-white rounded-full text-sm font-medium transition-colors">Hire</button>
          </div>

          <div className="flex items-center gap-4">
             <button className="px-6 py-3 bg-white text-vora-dark rounded-full font-medium hover:bg-gray-100 transition-colors">
               Get Access
             </button>
             <button className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
               Book a demo
             </button>
          </div>
        </div>

        {/* Right Content - Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-vora-gold/20 text-vora-gold flex items-center justify-center mb-6">
              <Globe2 size={20} />
            </div>
            <h3 className="text-lg font-medium mb-3">Global Talent Pool</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Access a curated network of pre-vetted healthcare professionals from over 50 countries, ready to relocate and start working.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-vora-gold/20 text-vora-gold flex items-center justify-center mb-6">
              <FileCheck2 size={20} />
            </div>
            <h3 className="text-lg font-medium mb-3">Comprehensive Credentialing</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We handle all primary source verification, license checks, and language proficiency testing before you even see a profile.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-vora-gold/20 text-vora-gold flex items-center justify-center mb-6">
              <Video size={20} />
            </div>
            <h3 className="text-lg font-medium mb-3">Streamlined Interviews</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Schedule and conduct video interviews directly through the platform with built-in evaluation frameworks and scoring.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-vora-gold/20 text-vora-gold flex items-center justify-center mb-6">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-medium mb-3">End-to-End Compliance</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              From visa sponsorship paperwork to state licensing, our expert team navigates the complex regulatory landscape for you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformFeatures;
