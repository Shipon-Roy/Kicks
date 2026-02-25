import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import NewDrops from "@/components/Home/NewDrops";
import Reviews from "@/components/Home/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  );
}
