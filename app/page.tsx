import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoCards len={3} className="my-1 w-fit">
        <p>sample</p>
      </InfoCards>
    </>
  );
}
