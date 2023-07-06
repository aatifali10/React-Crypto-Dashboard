import { Box, Flex } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Sidenav from "./Sidenav";
import React from "react";

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex>
      <Sidenav />
      <Box flexGrow={1}>
        <TopNav title={title} />
        <Box px="4">{children}</Box>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
