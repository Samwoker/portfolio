import { C, ABOUT } from '../data';
import { SectionTitle, CodeLine } from './UI';

export default function ProfileSection() {
    return (
        <section id="PROFILE" style={{ padding: '80px 0' }}>
            <SectionTitle>Hero Profile</SectionTitle>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'start'
            }}>
                {/* Photo Card */}
                <div style={{
                    background: C.code,
                    border: `1px solid ${C.border}`,
                    padding: '24px',
                    position: 'relative',
                    animation: 'fadeUp .6s ease both'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: -11,
                        left: 16,
                        background: C.accent,
                        color: '#000',
                        fontFamily: "'Press Start 2P',monospace",
                        fontSize: 7,
                        padding: '2px 10px',
                        letterSpacing: 1,
                        zIndex: 2
                    }}>AVATAR.QC</div>

                    <div style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${C.border}` }}>
                        <img
                            src="/photos/samuel.png"
                            alt={ABOUT.name}
                            style={{ width: '100%', display: 'block', filter: 'brightness(0.9)' }}
                        />
                        {/* Corner brackets */}
                        <div style={{ position: 'absolute', top: 10, left: 10, width: 15, height: 15, borderTop: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}` }} />
                        <div style={{ position: 'absolute', top: 10, right: 10, width: 15, height: 15, borderTop: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}` }} />
                        <div style={{ position: 'absolute', bottom: 10, left: 10, width: 15, height: 15, borderBottom: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}` }} />
                        <div style={{ position: 'absolute', bottom: 10, right: 10, width: 15, height: 15, borderBottom: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}` }} />
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div style={{ fontSize: 9, color: C.dim, letterSpacing: 2, marginBottom: 4 }}>NAME —</div>
                        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, fontWeight: 900, color: C.accent }}>{ABOUT.name.toUpperCase()}</div>
                    </div>
                </div>

                {/* Stats & Bio */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ background: C.code, border: `1px solid ${C.border}`, padding: '24px' }}>
                        <div style={{ marginBottom: 16 }}>
                            <CodeLine kw="quest" str="About the Hero" />
                            <CodeLine kw="loot" fn="  rank" op="=" str={ABOUT.guild} />
                            <CodeLine kw="loot" fn="  xp" op="=" str={ABOUT.xp} />
                            <CodeLine kw="loot" fn="  lvl" op="=" num={ABOUT.level} />
                        </div>

                        <div style={{
                            fontFamily: "'Share Tech Mono', monospace",
                            fontSize: 14,
                            color: C.text,
                            lineHeight: 1.8,
                            borderTop: `1px solid ${C.border}`,
                            paddingTop: '16px'
                        }}>
                            {ABOUT.bio}
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '12px'
                    }}>
                        <div style={{ background: C.code, border: `1px solid ${C.border}`, padding: '16px' }}>
                            <div style={{ fontSize: 8, color: C.dim, letterSpacing: 2, marginBottom: 4 }}>SPECIALIZATION</div>
                            <div style={{ fontSize: 13, color: C.a3, fontFamily: "'Orbitron', sans-serif" }}>Blockchain Developer</div>
                        </div>
                        <div style={{ background: C.code, border: `1px solid ${C.border}`, padding: '16px' }}>
                            <div style={{ fontSize: 8, color: C.dim, letterSpacing: 2, marginBottom: 4 }}>MAIN ROLE</div>
                            <div style={{ fontSize: 13, color: C.a2, fontFamily: "'Orbitron', sans-serif" }}>FULL-STACK</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
