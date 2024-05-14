import Benefits from "@/components/layouts/benefits";
import Homepage from "@/components/layouts/homepage";
import Info from "@/components/layouts/info";
import Integrations from "@/components/layouts/integrations";

export default function Home() {
  return (
    <main className="">
      <Homepage />
      <Benefits />
      <Info />
      <Integrations />
    </main>
  );
}
