import { Text } from "@chakra-ui/react";

const Footer = async () => {
  return (
    <Text fontSize={14} color="#9B9DA2" textAlign="center" marginY={4}>
      &copy;{new Date().getFullYear()} Danial Khakbaz. All Rights Reserved.
    </Text>
  );
};

export default Footer;
