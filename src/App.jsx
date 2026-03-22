import './index.css';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import QuestsSection from './components/QuestsSection';
import PartySection from './components/PartySection';
import ContactSection from './components/ContactSection';
import { C } from './data';

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ position: 'relative', zIndex: 1, maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
        <HeroSection />
        <ProfileSection />
        <SkillsSection />
        <QuestsSection />
        <PartySection />
        <ContactSection />
      </main>
      <footer style={{
        position: 'relative', zIndex: 1, textAlign: 'center', padding: '28px 0',
        borderTop: `1px solid ${C.border}`, fontSize: 9, color: C.dim,
        fontFamily: "'Press Start 2P',monospace", letterSpacing: 2,
      }}>
        SAMUEL PORTFOLIO v1.0 — ALL RIGHTS RESERVED
      </footer>
    </>
  );
}
