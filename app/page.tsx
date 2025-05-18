import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import CodeSnippetsSection from '@/components/code-snippets-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}