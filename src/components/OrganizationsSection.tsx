

const OrganizationsSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-medium text-vora-dark leading-tight mb-12">
            Not a job board.<br />
            Not a recruiting firm.<br />
            <span className="font-serif italic text-vora-dark">A working community.</span>
          </h2>
          
          {/* Dark UI Mockup */}
          <div className="bg-[#12161E] rounded-2xl shadow-xl border border-vora-dark/10 p-6 text-white w-full max-w-lg">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="font-medium">Candidate Pipeline</div>
              <div className="text-sm text-vora-gold">4 New Matches</div>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Sarah Jenkins", role: "Registered Nurse", location: "UK", match: "98%" },
                { name: "Liam Chen", role: "Physical Therapist", location: "Canada", match: "95%" },
                { name: "Aisha Patel", role: "ICU Specialist", location: "India", match: "94%" },
                { name: "Carlos Rodriguez", role: "Medical Tech", location: "Spain", match: "92%" }
              ].map((candidate, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-medium text-sm">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{candidate.name}</div>
                      <div className="text-xs text-white/50">{candidate.role} · {candidate.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {candidate.match} Match
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
               <div className="text-xs text-white/40">Showing top matches based on your criteria</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col h-full pt-8 lg:pt-0 text-center lg:text-left">
          <p className="text-lg md:text-xl text-vora-dark/80 mb-12 leading-relaxed mx-auto lg:mx-0 max-w-xl">
            LinkMyCampus is the campus social network where verified students connect, post anonymously or visibly, and build communities that actually belong on campus.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-auto">
            {/* Stat Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-vora-dark/5 shadow-sm">
              <div className="w-8 h-8 mb-4 text-vora-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div className="text-sm text-vora-dark/60 mb-1">Time-to-Hire</div>
              <div className="text-2xl font-semibold text-vora-dark">35 days</div>
              <div className="text-xs text-vora-dark/40 mt-1">(Industry avg. 90+)</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-vora-dark/5 shadow-sm">
              <div className="w-8 h-8 mb-4 text-vora-gold">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div className="text-sm text-vora-dark/60 mb-1">Retention Rate</div>
              <div className="text-2xl font-semibold text-vora-dark">94%</div>
              <div className="text-xs text-vora-dark/40 mt-1">First-year placement</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-vora-dark/5 shadow-sm">
              <div className="w-8 h-8 mb-4 text-vora-gold">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="text-sm text-vora-dark/60 mb-1">Active Professionals</div>
              <div className="text-2xl font-semibold text-vora-dark">15,000+</div>
              <div className="text-xs text-vora-dark/40 mt-1">Ready to relocate</div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-vora-dark/5 shadow-sm">
              <div className="w-8 h-8 mb-4 text-vora-gold">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-sm text-vora-dark/60 mb-1">Verified Credentials</div>
              <div className="text-2xl font-semibold text-vora-dark">100%</div>
              <div className="text-xs text-vora-dark/40 mt-1">Primary source verified</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrganizationsSection;
