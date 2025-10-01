import Contact from "@/components/layout/Contact";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Services from "@/components/home/Services";
import Slider from "@/components/home/Slider";

// In pages/_document.js or page component
import Head from 'next/head';

<Head>
  <link 
    rel="preload" 
    href="/hero-slider2.jpg" 
    as="image"  />
    <link 
    rel="preload" 
    href="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&h=1080&fit=crop&q=80" 
    as="image"  />
    <link 
    rel="preload" 
    href="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80" 
    as="image"  />
</Head>
export default function Home() {
  
  return (
    <>
      <Slider />
      <Section2 />
      <Section3 />
      <Services />
      
    </>
  );
}
