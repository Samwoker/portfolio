import { C } from '../data';

export function Tag({ children, color }) {
  return (
    <span style={{
      display:'inline-block', padding:'2px 9px',
      border:`1px solid ${color||C.accent}`, color:color||C.accent,
      fontSize:10, letterSpacing:1, marginRight:6, marginBottom:4,
      fontFamily:"'Share Tech Mono',monospace",
    }}>{children}</span>
  );
}

export function SectionTitle({ children }) {
  return (
    <div style={{
      fontFamily:"'Orbitron',sans-serif", fontSize:10, fontWeight:700,
      letterSpacing:4, textTransform:'uppercase', color:C.a3,
      marginBottom:28, paddingBottom:10, borderBottom:`1px solid ${C.border}`,
    }}>// {children}</div>
  );
}

export function CodeLine({ kw, fn, str, cmt, num, op, plain, indent=0 }) {
  return (
    <div style={{ lineHeight:2.1, fontSize:13, paddingLeft:indent*20 }}>
      {kw    && <span style={{color:C.a2}}>{kw} </span>}
      {fn    && <span style={{color:C.accent}}>{fn}</span>}
      {op    && <span style={{color:'#ff9944'}}> {op} </span>}
      {str   && <span style={{color:C.a3}}>"{str}"</span>}
      {num   && <span style={{color:C.a4}}>{num}</span>}
      {cmt   && <span style={{color:C.dim,fontStyle:'italic'}}>  -- {cmt}</span>}
      {plain && <span style={{color:C.text}}>{plain}</span>}
    </div>
  );
}

export function GlowButton({ children, color, onClick, style={} }) {
  const col = color||C.accent;
  return (
    <button onClick={onClick}
      style={{ padding:'13px 26px', background:'transparent', border:`2px solid ${col}`,
        color:col, fontFamily:"'Press Start 2P',monospace", fontSize:9,
        letterSpacing:2, cursor:'pointer', transition:'all .2s', ...style }}
      onMouseEnter={e=>{e.currentTarget.style.background=col;e.currentTarget.style.color='#000';}}
      onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=col;}}
    >{children}</button>
  );
}
