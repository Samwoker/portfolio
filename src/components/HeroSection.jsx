import { useState, useEffect } from 'react';
import { C } from '../data';
import { CodeLine, GlowButton } from './UI';

export default function HeroSection() {
  const [typed, setTyped] = useState('');
  const full = 'Full-Stack Developer';
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { setTyped(full.slice(0, ++i)); if (i >= full.length) clearInterval(t); }, 65);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="HERO" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '90px 0 60px', animation: 'fadeDown .8s ease both' }}>
      <div style={{ width: '100%' }}>
        <div style={{ background: C.code, border: `1px solid ${C.border}`, padding: '26px 30px', marginBottom: 32, position: 'relative' }}>
          <div style={{ position: 'absolute', top: -11, left: 16, background: C.a2, color: '#000', fontFamily: "'Press Start 2P',monospace", fontSize: 7, padding: '2px 10px', letterSpacing: 1 }}>HERO.QC</div>
          <CodeLine kw="quest" str="My Portfolio" />
          <CodeLine kw="loot" fn="  name" op="=" str="Samuel Birhanu" />
          <CodeLine kw="loot" fn="  class" op="=" str="Full-Stack Developer" />
          <CodeLine kw="loot" fn="  level" op="=" num="2" cmt="years of grinding" />
          <CodeLine kw="loot" fn="  status" op="=" str="Open to Work" />
          <CodeLine kw="loot" fn="  location" op="=" str="Addis Ababa, Ethiopia" />
        </div>
        <div style={{ fontSize: 10, color: C.dim, letterSpacing: 3, marginBottom: 8, fontFamily: "'Press Start 2P',monospace" }}>PLAYER ONE —</div>
        <h1 className="logo-text" style={{ fontSize: 'clamp(28px,6vw,58px)', color: C.accent, fontFamily: "'Press Start 2P',monospace", lineHeight: 1.25, marginBottom: 16, letterSpacing: 2 }}>SAMUEL BIRHANU</h1>
        <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 'clamp(13px,2.5vw,20px)', color: C.text, marginBottom: 36, minHeight: 32 }}>
          {typed}<span className="cursor-blink" style={{ color: C.accent }}>█</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 12, marginBottom: 40 }}>
          {[{ label: 'QUESTS DONE', val: '2' }, { label: 'XP EARNED', val: '12K' }, { label: 'SKILLS', val: '10' }, { label: 'GUILD RANK', val: 'S-TIER' }].map(s => (
            <div key={s.label} style={{ background: C.code, border: `1px solid ${C.border}`, padding: '14px 16px', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.boxShadow = '0 0 18px rgba(0,255,204,.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ fontSize: 9, color: C.dim, letterSpacing: 2, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 18, fontWeight: 900, color: C.accent }}>{s.val}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <GlowButton color={C.accent} onClick={() => document.getElementById('QUESTS')?.scrollIntoView({ behavior: 'smooth' })}>▶ VIEW QUESTS</GlowButton>
          <GlowButton color={C.a3} onClick={() => document.getElementById('CONTACT')?.scrollIntoView({ behavior: 'smooth' })}>✉ SEND MESSAGE</GlowButton>
          <GlowButton color={C.a2} onClick={() => {
            const link = document.createElement('a');
            link.href = '/Samuel-Birhanu-Alemayehu-resume.pdf';
            link.download = 'Samuel-Birhanu-Alemayehu-resume.pdf';
            link.click();
          }}>📄 DOWNLOAD CV</GlowButton>
        </div>
      </div>
    </section>
  );
}