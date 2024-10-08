import { MotionOpacity } from "@/components/utils/motion/opacity";
import { Flex } from "@chakra-ui/react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiPwa,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
} from "react-icons/si";

const MOTION_COMPONENT_DELAY = 0.6;

const skills = [
  <SiReact
    style={{
      width: "40px",
      height: "40px",
      color: "#61DBFB",
      filter: "drop-shadow(0 0 1em #61DBFB)",
    }}
  />,
  <SiNextdotjs
    style={{
      width: "40px",
      height: "40px",
      color: "#FFFFFF",
      filter: "drop-shadow(0 0 1em #FFF)",
    }}
  />,
  <SiJavascript
    style={{
      width: "40px",
      height: "40px",
      color: "#F0DB4F",
      filter: "drop-shadow(0 0 1em #F0DB4F)",
    }}
  />,
  <SiTypescript
    style={{
      width: "40px",
      height: "40px",
      color: "#007ACC",
      filter: "drop-shadow(0 0 1em #007ACC)",
    }}
  />,
  <SiGit
    style={{
      width: "40px",
      height: "40px",
      color: "#F1502F",
      filter: "drop-shadow(0 0 1em #F1502F)",
    }}
  />,
  <SiPwa
    style={{
      width: "40px",
      height: "40px",
      color: "#590DC4",
      filter: "drop-shadow(0 0 1em #590DC4)",
    }}
  />,
  <SiTailwindcss
    style={{
      width: "40px",
      height: "40px",
      color: "#39BDF8",
      filter: "drop-shadow(0 0 1em #39BDF8)",
    }}
  />,
  <SiRedux
    style={{
      width: "40px",
      height: "40px",
      color: "#764ABC",
      filter: "drop-shadow(0 0 1em #764ABC)",
    }}
  />,
  <SiReactquery
    style={{
      width: "40px",
      height: "40px",
      color: "#FF495B",
      filter: "drop-shadow(0 0 1em #FF495B)",
    }}
  />,
];

export const Skills = async () => {
  return (
    <Flex
      width="100%"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
      gap={8}
    >
      {skills.map((skillComponent, index) => (
        <MotionOpacity
          key={MOTION_COMPONENT_DELAY * index}
          delay={MOTION_COMPONENT_DELAY + index * 0.1}
        >
          {skillComponent}
        </MotionOpacity>
      ))}
    </Flex>
  );
};

export default Skills;
