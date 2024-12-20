"use client";

import Image from "next/image";
import { Flex, Heading, Text } from "@chakra-ui/react";

type ProjectCardProps = {
  imageSrc: string;
  blurImage: string;
  alt: string;
  title: string;
  description: string;
};

const ProjectCard = ({
  imageSrc,
  blurImage,
  alt,
  title,
  description,
}: ProjectCardProps) => {
  return (
    <Flex
      backgroundColor="transparent"
      flexDirection="column"
      gap={2}
      borderRadius="0.4rem"
      transition="background-color 0.25s ease-out"
      padding={4}
      cursor="pointer"
      _hover={{ backgroundColor: "#202020" }}
    >
      <Image
        width="500"
        height="150"
        src={imageSrc}
        alt={alt}
        rel="preload"
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={blurImage}
        style={{
          borderRadius: "0.4rem",
        }}
      />
      <Heading
        fontSize="1.4rem"
        display="inline-flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
        marginTop={2}
      >
        {title}
      </Heading>
      <Text fontSize={15} textAlign="justify">
        {description.length <= 101
          ? description
          : `${description.slice(0, 101)} ...`}
      </Text>
    </Flex>
  );
};

export default ProjectCard;
