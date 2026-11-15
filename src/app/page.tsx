import { HomeHero } from "@/components/home/HomeHero";
import {
  HomeCapabilities,
  HomeExperience,
  HomeIntro,
  HomeRynvo,
  HomeWork,
} from "@/components/home/HomeSections";
import { HomeFaq } from "@/components/home/HomeFaq";
import { ContactBand } from "@/components/site/ContactBand";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeWork />
      <HomeCapabilities />
      <HomeExperience />
      <HomeRynvo />
      <HomeFaq />
      <ContactBand id="home-contact" />
    </>
  );
}
