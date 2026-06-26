import React, { useState, useEffect, useRef } from 'react';
import { ChartPie, ArrowPath, Cog8Tooth, ArrowTrendingUp } from './Icons';

const featuresData = [
  {
    id: 0,
    title: 'Visual Pipeline Builder',
    description: 'How it works: Drag and drop nodes to construct complex data transformations. You never write a single line of code.',
    icon: <ArrowPath className="w-6 h-6" />,
  },
  {
    id: 1,
    title: 'Real-time Analytics',
    description: 'Monitor throughput, error rates, and latency instantly. Track metrics with 99.999% precision.',
    icon: <ChartPie className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Predictive Scaling',
    description: 'Why it scales: Our AI anticipates traffic spikes and pre-warms containers. You never drop a payload.',
    icon: <ArrowTrendingUp className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Deep Configuration',
    description: 'Fine-tune memory allocation, concurrency limits, and retry backoffs at the node level. Reduce execution overhead by 40% globally.',
    icon: <Cog8Tooth className="w-6 h-6" />,
  }
];

export const Features = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Measure window size to flip between Mobile Accordion and Desktop Bento
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-oceanic relative overflow-hidden border-t border-mystic/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-arctic mb-4">Architecture of Speed</h2>
          <p className="text-mystic text-lg max-w-2xl mx-auto">A cohesive toolset designed to remove bottlenecks from your data engineering lifecycle.</p>
        </div>

      {isMobile ? (
        // Mobile Accordion View
        <div className="flex flex-col gap-4">
          {featuresData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={item.id} 
                className={`mouse-glow border rounded-xl overflow-hidden transition-colors duration-200 ease-out ${isActive ? 'border-forsythia/50 bg-nocturnal/50' : 'border-mystic/20 bg-oceanic'}`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                }}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${isActive ? 'bg-forsythia text-oceanic' : 'bg-nocturnal text-forsythia'}`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-lg text-arctic">{item.title}</span>
                  </div>
                  <div className={`transform transition-transform duration-200 ease-out ${isActive ? 'rotate-180 text-forsythia' : 'text-mystic'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-mystic/80">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Desktop Symmetrical 2x2 Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[250px]">
          {featuresData.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  className={`mouse-glow reveal-on-scroll relative group flex flex-col justify-between h-full p-8 rounded-2xl transition-all duration-200 ease-out cursor-default overflow-hidden
                    bg-gradient-to-br from-[#114C5A]/50 to-[#172836] border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#114C5A]/20
                    ${isActive ? 'border-forsythia/50 shadow-lg shadow-[#114C5A]/20 -translate-y-1' : 'border-transparent'}
                  `}
                >
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-forsythia rounded-full blur-[100px] transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-20' : 'opacity-0'}`}></div>

                <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-200 ease-out ${isActive ? 'bg-forsythia text-oceanic shadow-lg' : 'bg-nocturnal text-mystic group-hover:text-forsythia'}`}>
                  {item.icon}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-arctic mb-3">{item.title}</h3>
                  <p className="text-mystic/80 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>
    </section>
  );
};
