import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Disciplines } from '@/components/sections/Disciplines';
import { Teachers } from '@/components/sections/Teachers';
import { Retreats } from '@/components/sections/Retreats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen relative z-10">
        <Hero />
        <Philosophy />
        <Disciplines />
        <Teachers />
        <Retreats />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
