import BrandSlide from "@/components/BrandSlide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <BrandSlide/>
      <ProductShowcase/>
      <ProductCard/>
    </div>
  );
}
