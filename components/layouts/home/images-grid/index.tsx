"use client";

import Image from "next/image";
import { FadeUp } from "@/components/utils/fade-up";
import DanialAtCafe from "@/public/images/danial-at-cafe.webp";
import DanialWhileRunning from "@/public/images/danial-while-running.webp";
import DanialAtShomal from "@/public/images/danial-at-shomal.webp";
import DanialFromWorkAtHome from "@/public/images/danial-from-work-at-home.webp";
import { Grid, GridItem, Flex, useMediaQuery } from "@chakra-ui/react";

const MOTION_COMPONENT_DELAY = 0.5;

const ImagesGrid = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Grid
      height="400px"
      templateRows={{ base: "repeat(6, 1fr)", md: "repeat(5, 1fr)" }}
      templateColumns={{ base: "repeat(6, 1fr)", md: "repeat(5, 1fr)" }}
      gap={3}
    >
      <GridItem
        width="100%"
        height="100%"
        gridRow={{ base: "1/4", md: "1/6" }}
        gridColumn={{ base: "1/3", md: "1/3" }}
      >
        <Flex
          height={{ base: "12rem", md: "100%" }}
          position="relative"
          marginBottom={4}
        >
          <FadeUp delay={MOTION_COMPONENT_DELAY * 1}>
            <Image
              src={DanialAtCafe}
              sizes="(max-width: 768px) 213px, 40vw"
              alt="Danial Khakbaz at cafe"
              fill
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                border: "2.5px solid #3D3D3D",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: isLargerThan768 ? 20 : 0,
              }}
            />
          </FadeUp>
        </Flex>
      </GridItem>
      <GridItem
        width="100%"
        height="100%"
        gridRow={{ base: "4/7", md: "1/4" }}
        gridColumn={{ base: "1/5", md: "3/5" }}
      >
        <Flex
          height={{ base: "12rem", md: "100%" }}
          position="relative"
          marginBottom={4}
        >
          <FadeUp delay={MOTION_COMPONENT_DELAY * 2}>
            <Image
              src={DanialWhileRunning}
              sizes="(max-width: 768px) 450px, 80vw"
              alt="Danial Khakbaz playing basketball"
              fill
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
                border: "2.5px solid #3D3D3D",
                borderBottomLeftRadius: isLargerThan768 ? 0 : 20,
              }}
            />
          </FadeUp>
        </Flex>
      </GridItem>
      <GridItem
        gridRow={{ base: "1/4", md: "4/6" }}
        gridColumn={{ base: "3/7", md: "3/6" }}
      >
        <Flex
          height={{ base: "12rem", md: "100%" }}
          position="relative"
          marginBottom={4}
        >
          <FadeUp delay={MOTION_COMPONENT_DELAY * 3}>
            <Image
              src={DanialAtShomal}
              sizes="(max-width: 768px) 450px, 80vw"
              alt="Danial Khakbaz at the north of Iran"
              fill
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: isLargerThan768 ? "0 75%" : "center",
                border: "2.5px solid #3D3D3D",
                borderTopRightRadius: isLargerThan768 ? 0 : 20,
                borderBottomRightRadius: isLargerThan768 ? 20 : 0,
              }}
            />
          </FadeUp>
        </Flex>
      </GridItem>
      <GridItem
        gridRow={{ base: "4/7", md: "1/4" }}
        gridColumn={{ base: "5/7", md: "5/6" }}
      >
        <Flex
          height={{ base: "12rem", md: "100%" }}
          position="relative"
          marginBottom={4}
        >
          <FadeUp delay={MOTION_COMPONENT_DELAY * 4}>
            <Image
              src={DanialFromWorkAtHome}
              sizes="(max-width: 768px) 213px, 40vw"
              alt="Danial Khakbaz working from home"
              fill
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                border: "2.5px solid #3D3D3D",
                borderTopRightRadius: isLargerThan768 ? 20 : 0,
                borderBottomRightRadius: isLargerThan768 ? 0 : 20,
              }}
            />
          </FadeUp>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default ImagesGrid;
