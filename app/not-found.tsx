import { Link } from "next-view-transitions";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const NotFound = async () => {
  return (
    <Flex
      height="80vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      <Heading fontWeight="bold" size={{ base: "xl", md: "2xl" }}>
        NOT FOUND!
      </Heading>
      <Heading
        as="h3"
        fontWeight="extrabold"
        fontSize={{ base: "8rem", md: "15rem" }}
      >
        404
      </Heading>
      <Flex flexDirection="column">
        <Link href="/">
          <Button colorScheme="yellow" gap={2}>
            Back to the Home <FaHome fontSize={18} />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NotFound;
