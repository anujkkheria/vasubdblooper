import { useState, useEffect } from 'react'

// Optimized Marijuana Leaf with ClickHouse/Slack influence
function Leaf({ className, size = "45", color = "#4ADE80" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={`drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] transition-all duration-700 hover:scale-110 ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M12,22C12,22 11,17 11,15C11,13 10,12 8,11C6,10 2,10 2,10C2,10 6,9 7,7C8,5 8,2 8,2C8,2 9,6 11,7C13,8 14,8 15,7C16,6 18,2 18,2C18,2 18,5 19,7C20,9 24,10 24,10C24,10 20,10 18,11C16,12 15,13 15,15C15,17 14,22 14,22H12Z" />
    </svg>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#151515] selection:bg-[#FCFF74] selection:text-black overflow-x-hidden font-sans">
      
      {/* BRANDED BACKGROUND: ClickHouse Black to Slack Aubergine */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#151515] via-[#2D5A27] to-[#4A154B] -z-10" />

      {/* SECTION 1: THE BHANDMAN PITCH */}
      <section className="relative h-[280vh] w-full">
        <div 
          className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center pointer-events-none px-6"
          style={{ opacity: scrollY > 1500 ? (2000 - scrollY) / 500 : 1 }}
        >
          {/* FLOATING DECORATIVE LEAVES (Mixed Brand Colors) */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Leaf color="#FCFF74" size="100" className="absolute top-[10%] left-[5%] animate-pulse rotate-12" /> {/* CH Yellow */}
            <Leaf color="#E01E5A" size="60" className="absolute top-[20%] right-[10%] -rotate-12" /> {/* Slack Red */}
            <Leaf color="#36C5F0" size="80" className="absolute bottom-[40%] left-[8%] opacity-20" /> {/* Slack Blue */}
            <Leaf color="#4ADE80" size="140" className="absolute top-[40%] right-[-2%] blur-sm opacity-10" />
          </div>

          {/* THE BHANDMAN CRAWL */}
          <div 
            className="relative w-full max-w-4xl flex flex-col items-center space-y-32 text-center"
            style={{ transform: `translateY(${700 - (scrollY * 0.85)}px)` }}
          >
            <div className="space-y-6">
              <h1 className="text-[#FCFF74] text-7xl md:text-9xl font-black tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(252,255,116,0.3)]">
                Vasu Bhandman
              </h1>
              <div className="flex items-center justify-center space-x-4">
                <span className="h-[2px] w-12 bg-[#E01E5A]"></span>
                <p className="text-white text-xl tracking-[0.5em] uppercase font-bold">Incubator of Vibes</p>
                <span className="h-[2px] w-12 bg-[#E01E5A]"></span>
              </div>
            </div>
            
            <div className="space-y-48 text-white text-3xl md:text-5xl font-bold leading-tight">
              <p>Is your <span className="text-[#4ADE80]">Cluster</span> high enough for Bangalore?</p>
              <p>Optimizing friendships with <br/> <span className="text-[#FCFF74]">ClickHouse speed</span>.</p>
              <p className="text-[#E01E5A]">CRITICAL ALERT:</p>
              <p>The Slack notification of destiny is calling.</p>
              <p className="text-white/20 uppercase text-sm tracking-[2em]">Scroll deeper</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE RECTANGULAR PORTAL */}
      <section className="relative min-h-screen w-full flex justify-center items-center p-4 z-20">
        <div className='relative bg-[#1d1c1d]/90 backdrop-blur-3xl w-full h-[88vh] max-w-6xl flex flex-col rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/5'>
          
          {/* Top: Rectangular Media with Branded Leaves */}
          <div className='relative flex-[1.6] flex justify-center items-center p-8'>
            <div className="relative">
              {/* Branded Leaf Frame */}
              <div className="absolute -inset-12 pointer-events-none">
                <Leaf color="#4ADE80" className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-[-35deg]" />
                <Leaf color="#FCFF74" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Leaf color="#E01E5A" className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-[35deg]" />
                <Leaf color="#2EB67D" className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg]" />
                <Leaf color="#36C5F0" className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-[90deg]" />
                <Leaf color="#4ADE80" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-[180deg]" />
              </div>

              {/* Media Card */}
              <div className="relative z-10 w-[340px] md:w-[600px] h-[350px] bg-black rounded-xl border-2 border-white/10 overflow-hidden shadow-[0_0_80px_rgba(224,30,90,0.1)]">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-90 saturate-150">
                  <source src="/friend-video.mp4" type="video/mp4" />
                </video>
                {/* Red "Live" indicator for that Alert Vibe */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/50 px-3 py-1 rounded-full border border-[#E01E5A]/50">
                   <div className="w-2 h-2 bg-[#E01E5A] rounded-full animate-ping"></div>
                   <span className="text-[10px] text-white font-black tracking-widest uppercase">Incubating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: The Slack/ClickHouse Fusion Input */}
          <div className='flex-1 bg-black/20 flex flex-col justify-center items-center px-10 pb-12 border-t border-white/5'>
             <div className="w-full max-w-2xl space-y-6">
                <div className="relative flex items-center bg-[#1d1c1d] border border-white/10 rounded-xl p-1 focus-within:border-[#4ADE80] transition-all">
                  <div className="px-4 text-white/30 text-xl font-bold">#</div>
                  <input 
                    type="text" 
                    placeholder="Message #vasu-bhandman..." 
                    className="w-full bg-transparent py-4 px-2 text-white placeholder-white/20 outline-none"
                  />
                  <button className="bg-[#4ADE80] hover:bg-[#FCFF74] text-black font-black px-6 py-3 rounded-lg transition-all m-1 uppercase text-xs">
                    Execute
                  </button>
                </div>
                <div className="flex justify-between items-center px-2">
                   <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-bold">Query: SELECT * FROM vibes</p>
                   <p className="text-[#E01E5A] text-[10px] uppercase tracking-[0.2em] font-bold animate-pulse">Status: High Performance</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App