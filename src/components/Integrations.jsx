import React from 'react';
import { LinkIcon, Cog8Tooth, Cube16Solid, ChartPie, ArrowPath, Search } from './Icons';

export const Integrations = () => {
  const integrations = [
    { name: 'REST APIs', icon: <LinkIcon /> },
    { name: 'Data Warehouses', icon: <Cube16Solid /> },
    { name: 'Analytics Engines', icon: <ChartPie /> },
    { name: 'Workflow Config', icon: <Cog8Tooth /> },
    { name: 'Pipeline Sync', icon: <ArrowPath /> },
    { name: 'Elastic Search', icon: <Search /> },
  ];

  return (
    <section id="integrations" className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-mystic/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-arctic mb-4">Ecosystem Connectors</h2>
        <p className="text-mystic text-lg max-w-2xl mx-auto">Seamlessly plug into your existing data infrastructure with zero friction.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {integrations.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-oceanic border border-mystic/10 hover:bg-nocturnal/30 hover:border-arctic/30 transition-all duration-200 ease-out hover:-translate-y-1 text-arctic group cursor-pointer shadow-lg"
          >
            <div className="w-10 h-10 mb-4 flex items-center justify-center text-mystic group-hover:text-forsythia transition-colors duration-200">
              {React.cloneElement(item.icon, { className: 'w-8 h-8' })}
            </div>
            <span className="text-sm font-medium tracking-wide">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
