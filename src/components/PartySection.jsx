import { C, PARTY } from '../data';
import { SectionTitle } from './UI';

export default function PartySection() {
  return (
    <section id="PARTY" style={{ padding:'80px 0' }}>
      <SectionTitle>My Party (Tech Stack)</SectionTitle>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:16 }}>
        {PARTY.map((p,i) => (
          <div key={p.role}
            style={{ background:C.code, border:`1px solid ${C.border}`, padding:'24px', textAlign:'center', transition:'all .2s', animation:`fadeUp .5s ${i*.1}s ease both` }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=C.a2;e.currentTarget.style.boxShadow=`0 0 18px ${C.a2}33`;e.currentTarget.style.transform='translateY(-4px)';}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='none';}}>
            <div className="float-anim" style={{ fontSize:32, marginBottom:12 }}>{p.icon}</div>
            <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:9, fontWeight:700, color:C.a2, letterSpacing:2, marginBottom:8 }}>{p.role}</div>
            <div style={{ fontSize:12, color:C.text, marginBottom:14 }}>{p.member}</div>
            <div style={{ background:C.border, height:4 }}>
              <div style={{ height:'100%', width:`${p.power}%`, background:`linear-gradient(90deg,${C.a2},${C.a4})` }} />
            </div>
            <div style={{ fontSize:9, color:C.dim, marginTop:6 }}>PWR {p.power}/100</div>
          </div>
        ))}
      </div>
    </section>
  );
}