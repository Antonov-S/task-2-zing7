import Benefits from "@/components/layouts/home-benefits";
import Homepage from "@/components/layouts/home-hero";
import Info from "@/components/layouts/home-info";
import Integrations from "@/components/layouts/home-integrations";
import News from "@/components/layouts/home-news";
import Results from "@/components/layouts/home-results";
import Supercharge from "@/components/layouts/home-supercharge";
import Testimonials from "@/components/layouts/home-testimonials";

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
      <Supercharge />
    </main>
  );
}
