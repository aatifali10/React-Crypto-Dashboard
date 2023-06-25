import { HStack, Icon, Stack } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: RxDashboard,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <>
      <Stack>
        {navLinks.map((nav) => (
          <HStack>
            <Icon as={nav.icon} />
            <Text>{nav.text}</Text>
          </HStack>
        ))}
      </Stack>
    </>
  );
};

export default Sidenav;
