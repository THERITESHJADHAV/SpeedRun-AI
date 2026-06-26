import { useEffect, useState } from 'react';

export function Workspace() {
  const [logs, setLogs] = useState([
    '[SYSTEM] Initializing neural data streams...',
    '[PIPELINE] Connecting to AWS S3 bucket [us-east-1]...',
    '[AUTH] Verified token. Generating workspace session...'
  ]);

  useEffect(() => {
    const newLogs = [
      '[PROCESS] Node #14 compiled successfully.',
      '[ML-AGENT] Detected anomaly in payload chunk 4A. Correcting...',
      '[SYSTEM] Auto-scaling cluster to meet throughput demands.',
      '[PIPELINE] Data flow optimized. Latency reduced to 12ms.'
    ];
    let count = 0;
    const interval = setInterval(() => {
      if (count < newLogs.length) {
        const currentLog = newLogs[count];
        setLogs(prev => [...prev, currentLog].slice(-5));
        count++;
      } else {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Active Pipelines', value: '1,420' },
    { label: 'Data Throughput', value: '84.7 GB/s' },
    { label: 'SLA Response', value: '99.99%' },
    { label: 'Token Usage', value: '8.4M' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-oceanic relative overflow-hidden flex flex-col items-center border-t border-mystic/10">
      <div className="max-w-7xl w-full text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-extrabold text-arctic mb-6">
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">Terminal Velocity</span>
        </h2>
        <p className="text-xl text-mystic/80 max-w-3xl mx-auto font-light">
          A real-time workspace tracking active neural pulses and pipeline efficiency.
        </p>
      </div>

      <div className="w-full max-w-5xl bg-[#114C5A]/30 border border-[#D9E8E2]/10 rounded-2xl p-8 relative overflow-hidden reveal-on-scroll delay-100">
        {/* Looping Data Stream Pulse Effect */}
        <div className="absolute top-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-forsythia to-transparent animate-data-stream opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent animate-data-stream opacity-70" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Core Stats Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div 
                key={stat.label} 
                className="reveal-on-scroll flex flex-col justify-center"
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="text-sm font-mono text-mystic/60 mb-2 uppercase tracking-wider">{stat.label}</div>
                <div className="text-2xl font-bold text-arctic">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Rolling Live System Log */}
          <div className="lg:col-span-2 bg-nocturnal/80 border border-mystic/10 rounded-xl p-6 font-mono text-sm text-[#F1F6F4]">
            <div className="flex items-center gap-2 mb-4 border-b border-mystic/10 pb-4">
              <div className="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse"></div>
              <span className="text-mystic/80">LIVE TERMINAL FEED</span>
            </div>
            <div className="flex flex-col gap-3">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-mystic/40 shrink-0">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                  <span className={log.includes('PROCESS') || log.includes('PIPELINE') ? 'text-forsythia' : log.includes('ML-AGENT') ? 'text-saffron' : 'text-arctic'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
