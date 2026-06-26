import React, { useState } from 'react';
import { ChevronDown } from './Icons';

export function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "How does the engine isolate component state updates?",
      answer: "We employ a zero-dependency PubSub architecture paired with direct DOM node references. Updates target raw textContent values directly, completely bypassing parent virtual DOM reconciliation."
    },
    {
      id: 2,
      question: "Why is there a limit to the active bento-node tracking matrix?",
      answer: "The tracking matrix scales dynamically. Calculations map native CSS variables directly to the GPU compositor layer. Thus, node count is constrained only by VRAM limits, not main-thread JS capacity."
    },
    {
      id: 3,
      question: "Where can I deploy the automated pipelines to my own VPC?",
      answer: "Yes. All orchestration containers are strictly packaged OCI images. Securely pull and deploy them into your own Kubernetes clusters. This works within private AWS, GCP, or Azure Virtual Private Clouds."
    },
    {
      id: 4,
      question: "What SLA guarantees apply to the real-time neural streams?",
      answer: "Enterprise tier deployments feature a 99.99% multi-region uptime SLA. Intelligent routing and predictive scaling manage traffic. This ensures latency remains under 15ms, even during unpredictable payload spikes."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-oceanic relative overflow-hidden border-t border-mystic/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-arctic mb-4">Common Inquiries</h2>
          <p className="text-mystic text-lg">Detailed technical specifications regarding platform orchestration and behavior.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// State isolation via separate functional component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="reveal-on-scroll bg-[#114C5A]/30 border border-mystic/10 rounded-xl overflow-hidden transition-colors duration-200 ease-out hover:border-mystic/30"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button 
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forsythia"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-lg text-arctic pr-8">{faq.question}</span>
        <div className={`transform transition-transform duration-200 ease-out text-mystic shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-mystic/80 font-light leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
