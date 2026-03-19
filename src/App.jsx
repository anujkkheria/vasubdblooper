import { useState, useEffect } from 'react'

// Branded Leaf Component
function Leaf({ className, size = "45", color = "#4ADE80", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} className={`drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] transition-all duration-700 hover:scale-110 ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M12,22C12,22 11,17 11,15C11,13 10,12 8,11C6,10 2,10 2,10C2,10 6,9 7,7C8,5 8,2 8,2C8,2 9,6 11,7C13,8 14,8 15,7C16,6 18,2 18,2C18,2 18,5 19,7C20,9 24,10 24,10C24,10 20,10 18,11C16,12 15,13 15,15C15,17 14,22 14,22H12Z" />
    </svg>
  );
}

// Tech-Bro Toast Component
function Toast({ message, sender, color }) {
  const isKherisky = sender.toLowerCase().includes('kherisky');
  const isDhar = sender.toLowerCase().includes('dhar');
  return (
    <div className={`animate-bounce-in bg-[#1d1c1d]/95 backdrop-blur-md border-l-4 p-4 rounded-r-lg shadow-2xl mb-3 w-[75vw] max-w-[300px] border border-white/5 transition-all ${isKherisky ? 'rotate-[-4deg] -translate-x-4 opacity-90' : ''} ${isDhar ? 'rotate-0 translate-x-0 border-white/20' : ''}`} style={{ borderColor: color }}>
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-[10px]" style={{ color }}>{sender[0]}</div>
        <div>
          <p className="text-xs font-black" style={{ color }}>@{sender}</p>
          <p className="text-[11px] text-white/70 leading-tight">{message}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeToasts, setActiveToasts] = useState([]);
  const [isExecuted, setIsExecuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const mediaItems = [
    { type: 'image', src: '/IMG20240712160218.jpg', message: "Bhand. Dhua. Kida. The holy trinity. This man invented the lifestyle. 🪲🌿" },
    { type: 'image', src: '/IMG20240803210143.jpg', message: "Main tho Cool hun ab yeh bhi cool hogaya" },
    { type: 'image', src: '/IMG20250204235246.jpg', message: "Yeh maine kiya ya Claude ne? Claude ne kiya hoga. Abhi prompt karta hun. 🤖" },
    { type: 'image', src: '/IMG20250925142908.jpg', message: "Island pe gaya, ghass chod aaya. Agar mile tho utha dena bhai. 🏝️🌿" },
    { type: 'image', src: '/IMG_20190206_195033.jpg', message: "Jungle ne roka, smile ne nahi. Pre-IPO Vasu, rare footage. Yaar tune photo kyun li — 'Trust me it'll be funny later.' It is. 😭🌿" },
  ];

  // Ticker Messages for the Video Section
  const tickerMessages = [
    "VIBE_STATUS: EXTREMELY HIGH",
    "DEPRECATING: SOBRIETY_VERSION_1.0",
    "NEW_RELEASE: BHANDMAN_BIRTHDAY_2026",
    "QUERY_RESULT: 100% LEGENDARY",
    "ALERT: SYSTEM OVERLOADED WITH CHILL",
  ];

  const toastData = [
    { sender: "Erlich_Bachman", message: "I've taken 10% equity in your birthday. Also your cake. Especially your cake. #beignvasu", color: "#E01E5A" },
    { sender: "Steve_iJobs", message: "One more thing — you're 26. We're discontinuing the previous version. 🫡 #beignvasu", color: "#FCFF74" },
    { sender: "Sundar_Pitch-ai", message: "We've scaled Vasu's happiness to 1B users. Birthday latency: sub-1ms. Ship it. #beignvasu", color: "#36C5F0" },
    { sender: "Sorav_Nodedhar", message: "Bhai main toh stable branch pe hun. Tum log ke saath party crash ho rahi hai 💀 #beignvasu", color: "#2EB67D" },
    { sender: "Anuj_Kherisky", message: "Tried to buy you a gift. Gin happened. You're getting vibes. Happy birthday bhai 🫗 #beignvasu", color: "#4ADE80" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    if (scrollY > 1200 && activeToasts.length === 0) {
      toastData.forEach((toast, i) => {
        setTimeout(() => setActiveToasts(prev => [...prev, toast]), i * 3000);
      });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, activeToasts.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % mediaItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mediaItems.length]);

  const handleExecute = () => {
    new Audio('/glass-break.mp3').play().catch(() => {});
    if (window.confetti) window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    setIsExecuted(true);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#0a1508] overflow-x-hidden font-sans selection:bg-[#FCFF74]">
      
      {/* 1. THE CLASSIC THEME GRADIENT */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#2D5A27] to-[#4A154B] -z-10" />

      {/* 2. TOASTS */}
      <div className="fixed top-4 right-4 z-[100] pointer-events-none flex flex-col items-end">
        {activeToasts.map((t, i) => <Toast key={i} {...t} />)}
      </div>

      {/* SECTION 1: THE CRAWL + FLOATING START LEAVES */}
      <section className="relative h-[250vh] w-full">
        <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center pointer-events-none px-6"
             style={{ opacity: scrollY > 1200 ? (1800 - scrollY) / 600 : 1 }}>
          
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <Leaf size="120" color="#4ADE80" className="absolute top-[10%] left-[5%] animate-pulse" />
            <Leaf size="80" color="#FCFF74" className="absolute top-[25%] right-[12%] animate-bounce" />
            <Leaf size="150" color="#4ADE80" className="absolute bottom-[30%] left-[10%] opacity-10 blur-sm" 
                  style={{ transform: `translateY(${-scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }} />
          </div>

          <div className="relative text-center space-y-32" style={{ transform: `translateY(${500 - (scrollY * 0.8)}px)` }}>
            <h1 className="text-[#FCFF74] text-6xl md:text-9xl font-black uppercase tracking-tighter drop-shadow-2xl">Vasu Bhandman</h1>
            <div className="space-y-48 text-white text-3xl md:text-5xl font-bold">
              <p>Series B <br/> Birthday Round</p>
              <p>Allocating <br/> <span className="text-[#4ADE80]">Organic Assets</span></p>
              <p>Valuation: <br/> <span className="text-[#E01E5A]">Priceless (Negotiable)</span></p>
              <p>Disrupting <br/> <span className="text-[#36C5F0]">Sobriety Since 2000</span></p>
              <p className="text-white/50 text-xl md:text-2xl font-medium">⚠️ Side effects include: <br/> uncontrollable vibe, peak bhandness,<br/> and zero f**ks remaining.</p>
              <p className="text-white/20 animate-bounce text-sm tracking-[2em] pt-10">SCROLL ↓</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PORTAL */}
      <section className="relative min-h-screen w-full flex justify-center items-center p-4 z-20">
        <div className={`relative bg-black/40 backdrop-blur-3xl w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500 ${isExecuted ? 'scale-[1.02]' : ''}`}>
          
          <div className='relative flex-[1.6] flex flex-col justify-center items-center p-6 md:p-12'>
            <div className="relative w-full max-w-[500px] aspect-video">
              {/* LEAF FRAME */}
              <Leaf color="#4ADE80" className="absolute -top-10 -left-10 z-30 rotate-[-25deg] scale-75 md:scale-100" />
              <Leaf color="#FCFF74" className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 scale-75 md:scale-100" />
              <Leaf color="#E01E5A" className="absolute -top-10 -right-10 z-30 rotate-[25deg] scale-75 md:scale-100" />
              <Leaf color="#2EB67D" className="absolute -bottom-10 -left-10 z-30 rotate-[-135deg] scale-75 md:scale-100" />
              <Leaf color="#36C5F0" className="absolute -bottom-10 -right-10 z-30 rotate-[135deg] scale-75 md:scale-100" />

              <div className="relative z-10 w-full h-full bg-black rounded-3xl border-2 border-white/5 overflow-hidden shadow-2xl">
                {mediaItems[currentSlide].type === 'video' ? (
                  <video key={mediaItems[currentSlide].src} autoPlay loop muted playsInline className="w-full h-full object-cover saturate-150">
                    <source src={mediaItems[currentSlide].src} type="video/mp4" />
                  </video>
                ) : (
                  <img key={mediaItems[currentSlide].src} src={mediaItems[currentSlide].src} alt="" className="w-full h-full object-cover saturate-150" />
                )}
              </div>
            </div>

            {/* SLIDE MESSAGE */}
            <div className="mt-6 w-full max-w-125 text-center px-2">
              <p key={currentSlide} className="animate-bounce-in text-white/80 text-sm md:text-base font-medium leading-snug">
                {mediaItems[currentSlide].message}
              </p>
            </div>

            {/* NAV DOTS */}
            <div className="mt-4 flex space-x-2">
              {mediaItems.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#FCFF74] scale-125' : 'bg-white/30'}`} />
              ))}
            </div>

            {/* THE NEW AUTO-TICKER MESSAGES */}
            <div className="mt-6 w-full max-w-[500px] bg-black/60 rounded-xl py-2 px-4 border border-white/10 overflow-hidden relative">
               <div className="flex animate-marquee whitespace-nowrap space-x-12">
                  {tickerMessages.map((msg, i) => (
                    <span key={i} className="text-[#FCFF74] font-mono text-[10px] md:text-xs tracking-widest uppercase italic">
                      {msg}
                    </span>
                  ))}
                  {tickerMessages.map((msg, i) => (
                    <span key={i + 'copy'} className="text-[#FCFF74] font-mono text-[10px] md:text-xs tracking-widest uppercase italic">
                      {msg}
                    </span>
                  ))}
               </div>
            </div>
          </div>

          <div className='flex-1 bg-black/20 flex flex-col justify-center items-center px-6 md:px-20 pb-10 border-t border-white/5'>
             <div className="w-full max-w-xl text-center">
                {!isExecuted ? (
                  <div className="relative flex items-center bg-black/40 border border-white/10 rounded-2xl p-1 focus-within:border-[#FCFF74] transition-all">
                    <input type="text" placeholder="Message #vasu-bhandman..." className="w-full bg-transparent py-4 px-4 text-white text-sm md:text-base outline-none" />
                    <button onClick={handleExecute} className="bg-[#E01E5A] text-white font-black px-8 py-3 rounded-xl uppercase text-[10px] tracking-widest">Execute</button>
                  </div>
                ) : (
                  <div className="animate-bounce-in flex flex-col items-center space-y-6">
                    <h3 className="text-[#4ADE80] font-black uppercase text-xs">Disbursement Authorized</h3>
                    <a href="YOUR_AMAZON_LINK" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-[#FCFF74] text-black font-black rounded-2xl shadow-[0_0_50px_rgba(252,255,116,0.4)] uppercase text-xs tracking-widest">Claim Gift Card</a>
                  </div>
                )}
             </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounceIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-bounce-in { animation: bounceIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  )
}

export default App