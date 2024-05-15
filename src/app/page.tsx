import Benefits from "@/components/layouts/benefits";
import Homepage from "@/components/layouts/homepage";
import Info from "@/components/layouts/info";
import Integrations from "@/components/layouts/integrations";
import News from "@/components/layouts/news";
import Results from "@/components/layouts/results";
import Testimonials from "@/components/layouts/testimonials";

export default function Home() {
  return (
    <main className="">
      <Homepage />
      <Benefits />
      <Info />
      <Integrations />
      <News />
      <Results />
      <Testimonials />
    </main>
  );
}
