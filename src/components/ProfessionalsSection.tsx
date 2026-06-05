
import { CheckCircle2, ChevronDown } from 'lucide-react';

const ProfessionalsSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Content */}
        <div className="sticky top-24 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-medium text-vora-dark leading-tight mb-6">
            Your practice.<br />
            Your terms.<br />
            <span className="font-serif italic text-vora-gold">The right pay.</span>
          </h2>
          <p className="text-lg text-vora-dark/70 mb-8 leading-relaxed mx-auto lg:mx-0 max-w-xl">
            Join a curated network of premier global health talent. We connect you directly with top US and UK healthcare organizations, bypassing traditional agencies to secure you better compensation and benefits.
          </p>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-vora-gold/20 mb-8 shadow-sm">
            <div className="text-vora-gold mt-0.5">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div className="font-medium text-sm text-vora-dark">Average compensation increase</div>
              <div className="text-2xl font-semibold text-vora-dark mt-1">42%</div>
            </div>
          </div>

          <button className="px-8 py-3.5 bg-[#2563EB] text-white rounded-full font-medium hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-vora-gold/20">
            Join LinkMyCampus
          </button>
        </div>

        {/* Right Content - Accordion/Steps */}
        <div className="space-y-4">
          {[
            {
              title: "Verified credentials & licenses",
              desc: "Upload your documents once. We verify everything and create a portable credential profile that employers trust.",
              active: true
            },
            {
              title: "Direct placement, no agencies",
              desc: "Work directly for the healthcare organization. No agency cuts, meaning higher pay and better benefits for you.",
              active: false
            },
            {
              title: "Transparent compensation",
              desc: "See salary ranges, benefits, and signing bonuses upfront. No hidden terms or surprise deductions.",
              active: false
            },
            {
              title: "Visa & relocation support",
              desc: "Our dedicated immigration team handles your visa, while our relocation specialists help you settle into your new home.",
              active: false
            }
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${item.active ? 'bg-white border-vora-gold/30 shadow-md' : 'bg-transparent border-vora-dark/10 hover:bg-white/50 cursor-pointer'} transition-all`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xl font-medium ${item.active ? 'text-vora-dark' : 'text-vora-dark/70'}`}>
                  {item.title}
                </h3>
                {item.active ? (
                  <div className="text-vora-gold bg-vora-gold/10 px-3 py-1 rounded-full text-xs font-medium">Active</div>
                ) : (
                  <ChevronDown size={20} className="text-vora-dark/30" />
                )}
              </div>
              {item.active && (
                <p className="text-vora-dark/70 leading-relaxed mt-4">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalsSection;
