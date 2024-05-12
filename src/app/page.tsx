import Benefits from "@/components/layouts/benefits";
import Homepage from "@/components/layouts/homepage";
import Info from "@/components/layouts/info";

export default function Home() {
  return (
    <main className="container">
      <Homepage />
      <Benefits />
      <Info />
    </main>
  );
}
