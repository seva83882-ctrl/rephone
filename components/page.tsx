import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Services />
        <LeadForm />
      </main>
    </>
  );
}