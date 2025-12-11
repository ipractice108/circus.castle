import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Disciplines } from '@/components/sections/Disciplines';
import { Retreats } from '@/components/sections/Retreats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <Disciplines />
      <Retreats />
      <Testimonials />
      <Footer />
    </main>
  );
}
