import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
