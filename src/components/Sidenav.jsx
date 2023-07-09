import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <>
      <Stack
        justify="space-between"
        boxShadow={{ base: "none", lg: "lg" }}
        w={{
          base: "full",
          lg: "16rem",
        }}
        h="100vh"
      >
        <Box>
          <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
            @AATIF WARRAICH
          </Heading>
          <Box mt="6" mx="3">
            {navLinks.map((nav) => (
              <HStack
                borderRadius="10px"
                mx="3"
                key={nav.text}
                py="3"
                px="4"
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
                color="#797E82"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            ))}
          </Box>
        </Box>
        <Box mt="6" mx="3" mb="6">
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#f3f3f7",
              color: "#171717",
            }}
            color="#797E82"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};

export default Sidenav;
