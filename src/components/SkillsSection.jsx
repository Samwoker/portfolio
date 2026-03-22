import { C, SKILLS } from '../data';
import { SectionTitle, Tag } from './UI';

export default function SkillsSection() {
  return (
    <section id="SKILLS" style={{ padding:'80px 0' }}>
      <SectionTitle>Skill Tree</SectionTitle>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
        {SKILLS.map((sk,i) => (
          <div key={sk.name}
            style={{ background:C.code, border:`1px solid ${C.border}`, padding:'20px', transition:'all .2s', animation:`slideIn .5s ${i*.08}s ease both` }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=sk.color;e.currentTarget.style.boxShadow=`0 0 16px ${sk.color}44`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.boxShadow='none';}}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
              <span style={{ fontFamily:"'Orbitron',sans-serif", fontSize:12, fontWeight:700, color:sk.color }}>{sk.name}</span>
              <Tag color={sk.color}>{sk.type}</Tag>
            </div>
            <div style={{ background:C.border, height:6, overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${sk.level}%`, background:sk.color, boxShadow:`0 0 10px ${sk.color}88`, transition:'width 1s ease' }} />
            </div>
            <div style={{ marginTop:6, fontSize:10, color:C.dim, textAlign:'right' }}>{sk.level} / 100 XP</div>
          </div>
        ))}
      </div>
    </section>
  );
}