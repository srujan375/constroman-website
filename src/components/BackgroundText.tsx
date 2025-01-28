import { useEffect, useState } from 'react';

export const BackgroundText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute left-1/3 -translate-x-1/2 top-[-150px] opacity-[0.08] transition-transform duration-0"
        style={{
          transform: `translateY(-${scrollPosition * 0.5}px)`,
        }}
      >
        <h1 className="text-[18rem] font-bold text-teal-900 whitespace-nowrap rotate-90 origin-left">
          constroman
        </h1>
      </div>
    </div>
  );
};