import Image, { StaticImageData } from "next/image";
import { Flex, Heading, Text } from "@chakra-ui/react";

type BlogCardProps = {
  title: string;
  date: string;
  image: StaticImageData;
  blurImage: string;
  alt: string;
};

const BlogCard = async ({
  title,
  date,
  image,
  blurImage,
  alt,
}: BlogCardProps) => {
  return (
    <Flex
      flexDirection="column"
      gap={2}
      borderRadius="0.4rem"
      transition="background-color 0.25s ease-out"
      padding={4}
      _hover={{
        backgroundColor: "#202020",
      }}
    >
      <Image
        width="500"
        height="100"
        src={image}
        alt={alt}
        rel="preload"
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={blurImage}
        style={{
          minHeight: "145px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "0.4rem",
        }}
      />
      <Heading
        fontSize="1rem"
        display="inline-flex"
        justifyContent="space-between"
        alignItems="center"
        gap={4}
      >
        {title}
      </Heading>
      <Flex width="100%" justifyContent="space-between" marginTop={2}>
        <Text fontSize={13} color="#9B9DA2" textAlign="justify">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BlogCard;
