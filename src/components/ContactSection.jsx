import { useState } from 'react';
import { C } from '../data';
import { SectionTitle, CodeLine, GlowButton } from './UI';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <section id="CONTACT" style={{ padding: '80px 0 120px' }}>
      <SectionTitle>Send a Message (New Quest)</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>

        {/* Live code preview */}
        <div style={{ background: C.code, border: `1px solid ${C.border}`, padding: '24px' }}>
          <div style={{ marginBottom: 8, fontSize: 9, color: C.dim, letterSpacing: 2 }}>CONTACT.QC — LIVE PREVIEW</div>
          <CodeLine kw="quest" str="New Message" />
          <CodeLine kw="loot" fn="  sender" op="=" str={form.name || '???'} />
          <CodeLine kw="loot" fn="  email" op="=" str={form.email || '???'} />
          <CodeLine kw="loot" fn="  message" op="=" str={form.message || '???'} />
          <CodeLine kw="skill" fn="  send_raven" plain="():" />
          <CodeLine plain="    " cmt="Dispatch to hero's inbox" />
          <CodeLine kw="    cast" fn="success" />
          <CodeLine kw="end quest" />
        </div>

        {/* Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {!sent ? (<>
            {[
              { key: 'name', label: '// YOUR NAME', placeholder: 'Enter your name...' },
              { key: 'email', label: '// YOUR EMAIL', placeholder: 'hero@guild.com' },
            ].map(f => (
              <div key={f.key}>
                <div style={{ fontSize: 9, color: C.dim, letterSpacing: 2, marginBottom: 6 }}>{f.label}</div>
                <input value={form[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{
                    width: '100%', background: C.code, border: `1px solid ${C.border}`, color: C.accent,
                    fontFamily: "'Share Tech Mono',monospace", fontSize: 13, padding: '12px 14px', outline: 'none', transition: 'border-color .2s'
                  }}
                  onFocus={e => e.target.style.borderColor = C.accent}
                  onBlur={e => e.target.style.borderColor = C.border} />
              </div>
            ))}
            <div>
              <div style={{ fontSize: 9, color: C.dim, letterSpacing: 2, marginBottom: 6 }}>// YOUR MESSAGE</div>
              <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                placeholder="Describe your quest..." rows={4}
                style={{
                  width: '100%', background: C.code, border: `1px solid ${C.border}`, color: C.accent,
                  fontFamily: "'Share Tech Mono',monospace", fontSize: 13, padding: '12px 14px',
                  outline: 'none', resize: 'none', transition: 'border-color .2s'
                }}
                onFocus={e => e.target.style.borderColor = C.accent}
                onBlur={e => e.target.style.borderColor = C.border} />
            </div>
            <GlowButton color={C.accent} onClick={async () => {
              if (!form.name || !form.email || !form.message) {
                alert("Please fill out all fields before sending your raven!");
                return;
              }

              try {

                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    name: form.name,
                    email: form.email,
                    message: form.message,
                  }),
                });
                const result = await response.json();
                if (result.success) {
                  setSent(true);
                } else {
                  alert("Failed to send raven. Please try again later.");
                }
              } catch (error) {
                alert("Network error. Could not dispatch raven.");
              }
            }}>▶ SEND RAVEN</GlowButton>
          </>) : (
            <div style={{
              background: C.code, border: `1px solid ${C.accent}`, padding: 28, textAlign: 'center',
              boxShadow: '0 0 24px rgba(0,255,204,.25)', animation: 'fadeIn .4s ease'
            }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>✅</div>
              <div style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 10, color: C.accent, marginBottom: 8 }}>QUEST ACCEPTED!</div>
              <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.8 }}>Your raven has been dispatched.<br />Await my response, adventurer.</div>
              <div style={{ marginTop: 16, fontFamily: "'Orbitron',sans-serif", fontSize: 12, color: C.a3 }}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}