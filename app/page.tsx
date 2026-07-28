import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Facts from "@/components/Facts";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Facts />
        <Services />
        <Reviews />
        <Contacts />
        <LeadForm />
      </main>
    </>
  );
}