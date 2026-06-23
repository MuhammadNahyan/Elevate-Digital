import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function Page() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/content`, {
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