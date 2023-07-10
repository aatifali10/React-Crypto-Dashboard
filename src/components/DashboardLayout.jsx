import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Sidenav from "./Sidenav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex ",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container mt="6" maxW="70rem">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
