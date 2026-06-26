import React from 'react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "The state isolation engine completely eliminated our main-thread layout lag during peak data ingestion events.",
      author: "Sarah Jenkins",
      role: "Lead Data Engineer",
      company: "StarkTech Pipelines"
    },
    {
      id: 2,
      quote: "We refactored our entire multi-currency billing matrix in minutes. The API response latency is practically zero.",
      author: "David Chen",
      role: "VP of Engineering",
      company: "Quantum Scale"
    },
    {
      id: 3,
      quote: "Terminal velocity isn't just a buzzword here. This platform handled 10x our usual throughput without dropping a single payload.",
      author: "Elena Rodriguez",
      role: "System Architect",
      company: "Nexus Cybernetics"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-oceanic relative overflow-hidden border-t border-mystic/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-arctic mb-4">Validated by Builders</h2>
          <p className="text-mystic text-lg max-w-2xl mx-auto">See how engineering teams are scaling their data automation pipelines with SpeedRun AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              style={{ transitionDelay: `${index * 150}ms` }}
              className="reveal-on-scroll relative group bg-[#114C5A]/30 border border-mystic/10 p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:border-mystic/50 transition-all duration-200 ease-out"
            >
              <div>
                <div className="flex gap-1 mb-6 text-forsythia">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-arctic font-medium leading-relaxed mb-8 font-sans">"{testimonial.quote}"</p>
              </div>
              <div className="mt-auto">
                <div className="font-bold text-arctic">{testimonial.author}</div>
                <div className="text-sm font-mono text-mystic/80 mt-1">{testimonial.role}</div>
                <div className="text-xs font-mono text-forsythia mt-1 tracking-wider uppercase">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
