import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const SupportCard = ({ leftComponent }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={IoMdMail} boxSize={6} color="p.purple" />
        <Text fontWeight="mediym" as="h1" textStyle="h1">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      {leftComponent}
    </Flex>
  );
};

export default SupportCard;
