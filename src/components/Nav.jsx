import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { C, NAV_ITEMS } from '../data';

export default function Nav() {
  const [active, setActive] = useState('HERO');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setActive(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : 'none',
      transition: 'all .3s', padding: '0 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 62,
    }}>
      <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 11, color: C.accent, letterSpacing: 2 }}>
        SAM<span style={{ color: C.a2 }}>UEL</span>
      </div>

      {/* Desktop Navigation */}
      <div style={{ gap: 4, flexWrap: 'wrap' }} className="hidden md:flex">
        {NAV_ITEMS.map(item => (
          <button key={item} onClick={() => go(item)} style={{
            background: 'transparent',
            border: active === item ? `1px solid ${C.accent}` : '1px solid transparent',
            color: active === item ? C.accent : C.dim,
            fontFamily: "'Press Start 2P',monospace",
            fontSize: 7, padding: '8px 12px', cursor: 'pointer', letterSpacing: 1, transition: 'all .2s',
            boxShadow: active === item ? '0 0 12px rgba(0,255,204,.25)' : 'none',
          }}
            onMouseEnter={e => { if (active !== item) e.currentTarget.style.color = C.text; }}
            onMouseLeave={e => { if (active !== item) e.currentTarget.style.color = C.dim; }}
          >{item}</button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="flex items-center md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          background: 'transparent', border: 'none', color: C.accent,
          cursor: 'pointer', zIndex: 1100
        }}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(10,10,15,0.98)', zIndex: 1050,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '24px', animation: 'fadeIn .3s ease'
        }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => go(item)}
              style={{
                background: 'transparent', border: 'none',
                color: active === item ? C.accent : C.text,
                fontFamily: "'Press Start 2P',monospace",
                fontSize: 14, letterSpacing: 2, cursor: 'pointer',
                transition: 'all .2s',
                textShadow: active === item ? `0 0 10px ${C.accent}` : 'none'
              }}
            >
              {active === item && <span style={{ marginRight: 12, color: C.accent }}>▶</span>}
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
