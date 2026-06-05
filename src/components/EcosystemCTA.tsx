
import { User, Building2, Network } from 'lucide-react';

const EcosystemCTA = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#10141D] text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-16">
          Choose how you<br />
          enter the <span className="font-serif italic text-vora-gold">ecosystem.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Path 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">For Professionals</h3>
            <p className="text-white/60 leading-relaxed mb-8 grow">
              Apply to the network, get vetted, and find direct placement with top healthcare organizations.
            </p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
              Join Campus
            </button>
          </div>

          {/* Path 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-xl bg-vora-gold/20 text-vora-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">For Organizations</h3>
            <p className="text-white/60 leading-relaxed mb-8 flex-grow">
              Access our pre-vetted global talent pool and streamline your entire international hiring process.
            </p>
            <button className="w-full py-3 bg-vora-gold hover:bg-[#1D4ED8] text-white rounded-lg font-medium transition-colors">
              Sign up to hire
            </button>
          </div>

          {/* Path 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Network size={24} />
            </div>
            <h3 className="text-xl font-medium mb-3">For Agencies</h3>
            <p className="text-white/60 leading-relaxed mb-8 flex-grow">
              Partner with LinkMyCampus to bring your student organization onto campus.
            </p>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
              Partner with us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EcosystemCTA;
