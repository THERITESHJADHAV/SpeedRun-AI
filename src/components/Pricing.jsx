import React, { useEffect, useRef } from 'react';
import { ChevronDown } from './Icons';

// ZERO-DEPENDENCY EXTERNAL STATE STORE (PubSub)
const pricingStore = {
  listeners: new Set(),
  state: { currency: 'USD', billing: 'monthly' },
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  },
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(cb => cb(this.state));
  }
};

const pricingMatrix = {
  Starter: { baseRateUSD: 49 },
  Professional: { baseRateUSD: 99 },
  Enterprise: { baseRateUSD: 249 },
};

const regionalConfig = {
  USD: { symbol: '$', multiplier: 1 },
  EUR: { symbol: '€', multiplier: 0.92 },
  INR: { symbol: '₹', multiplier: 83 },
};

// ISOLATED DOM MUTATOR COMPONENT
const PriceDisplay = ({ tier }) => {
  const priceRef = useRef(null);

  useEffect(() => {
    const updateDOM = (state) => {
      if (!priceRef.current) return;
      
      const config = regionalConfig[state.currency];
      const base = pricingMatrix[tier].baseRateUSD;
      let finalPrice = base * config.multiplier;
      
      if (state.billing === 'annual') {
        finalPrice = finalPrice * 0.8; // 20% discount
      }
      
      const formattedPrice = Math.round(finalPrice).toLocaleString();
      priceRef.current.textContent = `${config.symbol}${formattedPrice}`;
    };

    // Initialize text on mount
    updateDOM(pricingStore.state);
    
    // Subscribe to external store without causing React re-renders
    return pricingStore.subscribe(updateDOM);
  }, [tier]);

  return <span ref={priceRef} className="text-5xl font-extrabold text-arctic tracking-tight"></span>;
};

// COMPLETELY STATIC PARENT COMPONENT
export const Pricing = () => {
  const handleToggle = (e) => {
    pricingStore.setState({ billing: e.target.checked ? 'annual' : 'monthly' });
  };

  const handleCurrencyChange = (e) => {
    pricingStore.setState({ currency: e.target.value });
  };

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-oceanic relative overflow-hidden border-t border-mystic/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-arctic mb-4">Transparent Scaling</h2>
        <p className="text-mystic text-lg max-w-2xl mx-auto">Predictable, matrix-driven pricing tailored for global teams.</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <span className="text-arctic font-medium">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            {/* Uncontrolled input dispatching to external store */}
            <input type="checkbox" className="sr-only peer" onChange={handleToggle} />
            <div className="w-11 h-6 bg-nocturnal rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-forsythia border border-mystic/20"></div>
          </label>
          <span className="text-arctic font-medium">Annually <span className="text-forsythia text-sm ml-1">(Save 20%)</span></span>
        </div>

        <div className="relative">
          {/* Uncontrolled select dispatching to external store */}
          <select 
            className="appearance-none bg-nocturnal border border-mystic/20 text-arctic py-2 pl-4 pr-10 rounded-md focus:outline-none focus:border-forsythia/50 transition-colors duration-200 cursor-pointer font-mono"
            onChange={handleCurrencyChange}
            defaultValue="USD"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-mystic w-4 h-4 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Starter', 'Professional', 'Enterprise'].map((tier, index) => (
          <div 
            key={tier}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`mouse-glow reveal-on-scroll relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 ease-out 
              ${index === 1  
                ? 'bg-nocturnal border-forsythia/50 shadow-[0_0_30px_rgba(255,200,1,0.15)] -translate-y-2' 
                : 'bg-oceanic border-mystic/20 hover:border-mystic/50 hover:-translate-y-1 hover:shadow-lg'
              }`}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            }}
          >
            {index === 1 && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-forsythia text-oceanic text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-arctic mb-2">{tier}</h3>
            <p className="text-mystic/80 text-sm mb-6 h-10">
              {index === 0 && "Perfect for indie hackers and small teams."}
              {index === 1 && "Advanced automation for scaling startups."}
              {index === 2 && "Uncapped resources for enterprise workflows."}
            </p>
            
            <div className="mb-8 font-mono">
              {/* Isolated Price Component to prevent parent re-renders */}
              <PriceDisplay tier={tier} />
              <span className="text-mystic ml-2">/ mo</span>
            </div>

            <ul className="flex flex-col gap-4 mb-8 flex-grow">
              {[1,2,3].map(i => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forsythia/20 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-forsythia"></div>
                  </div>
                  <span className="text-mystic text-sm">
                    {tier === 'Starter' && (i === 1 ? '10k pipeline runs' : i === 2 ? 'Community support' : 'Basic models')}
                    {tier === 'Professional' && (i === 1 ? '100k pipeline runs' : i === 2 ? 'Priority email support' : 'Advanced AI models')}
                    {tier === 'Enterprise' && (i === 1 ? 'Unlimited runs' : i === 2 ? '24/7 Phone support' : 'Custom model fine-tuning')}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ease-out ${index === 1 ? 'bg-forsythia text-oceanic hover:bg-saffron hover:shadow-[0_0_15px_rgba(255,200,1,0.4)]' : 'bg-nocturnal text-arctic border border-mystic/20 hover:bg-nocturnal/80 hover:border-arctic'}`}>
              Get {tier}
            </button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
