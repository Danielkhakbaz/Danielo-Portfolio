import { Link } from "next-view-transitions";
import dynamic from "next/dynamic";
import { SectionMaker } from "@/shared/utils/section-maker";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa6";

const DownloadCV = dynamic(
  () => import("@/features/home/components/about/download-cv")
);

const About = async () => {
  return (
    <SectionMaker label="About">
      <Flex flexDirection="column" gap={4}>
        <Text textAlign="justify" textIndent="1em">
          Danial is a Front-end developer (Full-stack developer by the end of
          2024), highly ambitious individual with a passion for continuous
          learning and a keen interest in embracing new challenges. His
          expertise lies in crafting seamless web applications using different
          technologies.
          <br />
          In addition to his professional endeavors, Danial is committed to
          maintaining a balanced lifestyle.
        </Text>
        <Flex
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="center"
          gap={2}
        >
          <Link href="/projects">
            <Button colorScheme="yellow" display="flex" gap={2}>
              <Text>My Portfolio</Text>
              <FaAngleRight />
            </Button>
          </Link>
          <DownloadCV />
        </Flex>
      </Flex>
    </SectionMaker>
  );
};

export default About;
