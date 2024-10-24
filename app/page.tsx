import { ReactNode } from "react";
import ImagesGrid from "@/components/layouts/home/images-grid";
import FavQuote from "@/components/layouts/home/fav-quote";
import Summary from "@/components/layouts/home/summary";
import About from "@/components/layouts/home/about";
import Bio from "@/components/layouts/home/bio";
import MainTechs from "@/components/layouts/home/main-techs";
import Interests from "@/components/layouts/home/interests";
import Education from "@/components/layouts/home/education";
import Socials from "@/components/layouts/home/socials";
import { FadeUp } from "@/components/utils/fade-up";
import { MOTION_COMPONENT_DELAY } from "@/lib/constants";
import { Flex } from "@chakra-ui/react";

const HomePageItems: ReactNode[] = [
  <ImagesGrid />,
  <FavQuote />,
  <Summary />,
  <About />,
  <Bio />,
  <MainTechs />,
  <Interests />,
  <Education />,
  <Socials />,
];

const HomePage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      {HomePageItems.map((component, index) => (
        <FadeUp
          key={MOTION_COMPONENT_DELAY * index}
          delay={MOTION_COMPONENT_DELAY}
        >
          {component}
        </FadeUp>
      ))}
    </Flex>
  );
};

export default HomePage;
