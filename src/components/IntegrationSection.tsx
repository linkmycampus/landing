

const IntegrationSection = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-[#F8F9FA] border-t border-vora-dark/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium text-vora-dark leading-tight mb-12 text-center lg:text-left">
            Built to power the<br />
            <span className="font-serif italic text-vora-gold">top healthcare networks.</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Seamless Integration",
                desc: "Integrate LinkMyCampus campus verification and group APIs into your student systems."
              },
              {
                title: "Real-time sync",
                desc: "Keep candidate statuses, interview schedules, and offer details perfectly aligned."
              },
              {
                title: "Automated compliance",
                desc: "Webhook alerts notify your team instantly when a candidate's visa or license clears."
              },
              {
                title: "Data-driven matching",
                desc: "Access our matching algorithms programmatically to surface the best talent faster."
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-8 h-8 shrink-0 rounded bg-vora-gold/10 text-vora-gold flex items-center justify-center font-medium text-sm mt-1 border border-vora-gold/20">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-vora-dark mb-1">{item.title}</h3>
                  <p className="text-vora-dark/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Code Snippet Mockup */}
        <div className="bg-[#12161E] rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="text-white/40 text-xs font-mono ml-4">api/v1/candidates/match</div>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <div className="text-blue-400 mb-4">GET /api/v1/candidates/match?req_id=RN-ICU-492</div>
            <div className="text-white/50 mb-2">{`{`}</div>
            <div className="pl-4">
              <span className="text-purple-400">"status"</span>: <span className="text-emerald-400">200</span>,<br/>
              <span className="text-purple-400">"data"</span>: <span className="text-white/50">[</span>
              <div className="pl-4">
                <span className="text-white/50">{`{`}</span><br/>
                <div className="pl-4">
                  <span className="text-purple-400">"candidate_id"</span>: <span className="text-sky-300">"c_849201a"</span>,<br/>
                  <span className="text-purple-400">"name"</span>: <span className="text-sky-300">"Aisha Patel"</span>,<br/>
                  <span className="text-purple-400">"role"</span>: <span className="text-sky-300">"ICU Registered Nurse"</span>,<br/>
                  <span className="text-purple-400">"match_score"</span>: <span className="text-emerald-400">98.5</span>,<br/>
                  <span className="text-purple-400">"credentials"</span>: <span className="text-white/50">{`{`}</span>
                  <div className="pl-4">
                    <span className="text-purple-400">"verified"</span>: <span className="text-blue-400">true</span>,<br/>
                    <span className="text-purple-400">"nclex_passed"</span>: <span className="text-blue-400">true</span>,<br/>
                    <span className="text-purple-400">"cgfns_status"</span>: <span className="text-sky-300">"issued"</span>
                  </div>
                  <span className="text-white/50">{`}`}</span>,<br/>
                  <span className="text-purple-400">"immigration"</span>: <span className="text-white/50">{`{`}</span>
                  <div className="pl-4">
                    <span className="text-purple-400">"visa_type"</span>: <span className="text-sky-300">"EB-3"</span>,<br/>
                    <span className="text-purple-400">"status"</span>: <span className="text-sky-300">"ready_for_filing"</span>
                  </div>
                  <span className="text-white/50">{`}`}</span>
                </div>
                <span className="text-white/50">{`}`}</span>
              </div>
              <span className="text-white/50">]</span>
            </div>
            <div className="text-white/50">{`}`}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;
