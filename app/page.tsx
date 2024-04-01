import AboutPage from "@/components/About/about";
import CallToActioin from "@/components/CalltoAction/CallToActioin";
import Endorsement from "@/components/Endorsement/Endorsement";
import Faq from "@/components/Faq/Faq";
import Hero from "@/components/Hero/Hero";
import Metrics from "@/components/Metrics/Metrics";
import Teams from "@/components/Team/Teams";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Footer from "@/components/footer/footer";
import ScrollToTopArrow from "@/components/ScrollHandler";

export default function Home() {
  const { userId } = auth();

  // if (userId) redirect("/dashboard");

  return (
    <main className="flex scroll-smooth overflow-y-hidden flex-col mt-5 bg-white h-full items-center ">
      <Hero />
      <Endorsement />
      <AboutPage />
      <Metrics />
      <CallToActioin />
      <Teams />
      <Faq />
      <ScrollToTopArrow />
    </main>
  );
}
