import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(`http://localhost:3000/api/content`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div suppressHydrationWarning key="home">
      <Hero />
      <About data={data.about} />
      <Services data={data.services} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
      <Footer />
    </div>
  );
}