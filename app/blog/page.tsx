import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import BlogCard from "@/features/blog/components/card";
import { FadeUp } from "@/shared/utils/fade-up";
import { blogPosts } from "@/features/blog/constants/blog-posts";
import { MOTION_COMPONENT_DELAY } from "@/shared/constants";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import moment from "moment";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Blog",
  description:
    "Read all my thoughts about technologies and programming in general.",
};

const sortedBlogPosts = blogPosts.sort((a, b) => {
  return (
    moment(a.date, "MMMM DD, YYYY").toDate().getTime() -
    moment(b.date, "MMMM DD, YYYY").toDate().getTime()
  );
});

const BlogPage = async () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <FadeUp>
        <Heading>Blog</Heading>
      </FadeUp>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {sortedBlogPosts.map(
          ({ link, title, date, image, blurImage, alt }, index) => (
            <FadeUp
              key={link}
              delay={(MOTION_COMPONENT_DELAY / 2) * (index + 1)}
            >
              <GridItem as={Link} href={link}>
                <BlogCard
                  title={title}
                  date={date}
                  image={image}
                  blurImage={blurImage}
                  alt={alt}
                />
              </GridItem>
            </FadeUp>
          )
        )}
      </Grid>
    </Flex>
  );
};

export default BlogPage;
