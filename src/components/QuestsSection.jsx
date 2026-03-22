import { useState } from 'react';
import { C, QUESTS } from '../data';
import { SectionTitle, Tag, CodeLine, GlowButton } from './UI';

export default function QuestsSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="QUESTS" style={{ padding: '80px 0' }}>
      <SectionTitle>Quest Log</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
        {QUESTS.map((q, i) => (
          <div key={q.title} onClick={() => setActive(active === i ? null : i)}
            style={{
              background: C.code, border: `1px solid ${active === i ? q.color : C.border}`,
              cursor: 'pointer', transition: 'all .3s',
              boxShadow: active === i ? `0 0 25px ${q.color}55` : 'none',
              animation: `fadeUp .5s ${i * .1}s ease both`,
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={e => { if (active !== i) { e.currentTarget.style.borderColor = q.color; e.currentTarget.style.boxShadow = `0 0 18px ${q.color}44`; } }}
            onMouseLeave={e => { if (active !== i) { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.boxShadow = 'none'; } }}>

            {/* Header / File Info */}
            <div style={{ background: C.border, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: C.dim }}>QUEST_{String(i + 1).padStart(3, '0')}.QC</span>
              <span style={{ padding: '2px 8px', border: `1px solid ${q.color}`, color: q.color, fontSize: 9, letterSpacing: 1 }}>{q.status}</span>
            </div>

            {/* Project Image Area */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
              <img src={q.image} alt={q.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  filter: active === i ? 'none' : 'brightness(0.65) saturate(0.8)',
                  transition: 'all .4s',
                  transform: active === i ? 'scale(1.05)' : 'scale(1)',
                }} />

              {/* Scan line effect */}
              {active === i && (
                <div style={{
                  position: 'absolute', left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${q.color}, transparent)`,
                  animation: 'scanPhoto 2s linear infinite',
                  top: 0,
                  zIndex: 2
                }} />
              )}

              {/* Corner brackets */}
              {active === i && <>
                <div style={{ position: 'absolute', top: 10, left: 10, width: 20, height: 20, borderTop: `2px solid ${q.color}`, borderLeft: `2px solid ${q.color}` }} />
                <div style={{ position: 'absolute', top: 10, right: 10, width: 20, height: 20, borderTop: `2px solid ${q.color}`, borderRight: `2px solid ${q.color}` }} />
                <div style={{ position: 'absolute', bottom: 10, left: 10, width: 20, height: 20, borderBottom: `2px solid ${q.color}`, borderLeft: `2px solid ${q.color}` }} />
                <div style={{ position: 'absolute', bottom: 10, right: 10, width: 20, height: 20, borderBottom: `2px solid ${q.color}`, borderRight: `2px solid ${q.color}` }} />
              </>}
            </div>

            {/* Content Body */}
            <div style={{ padding: '20px' }}>
              <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 900, color: C.text, marginBottom: 10 }}>{q.title.toUpperCase()}</div>
              <div style={{ fontSize: 11, color: C.dim, marginBottom: 16, lineHeight: 1.7 }}>{q.desc}</div>
              <div style={{ marginBottom: 16 }}>{q.stack.map(s => <Tag key={s} color={C.a4}>{s}</Tag>)}</div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `1px solid ${C.border}`, paddingTop: 16 }}>
                <span style={{ fontSize: 10, color: C.dim, letterSpacing: 2 }}>GITHUB</span>
                <a href={q.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Orbitron',sans-serif", fontSize: 14, fontWeight: 900, color: C.a3, textDecoration: 'none' }}>Github-Link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}