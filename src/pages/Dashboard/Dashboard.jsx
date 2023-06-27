import { Box, Flex } from "@chakra-ui/react";
import TopNav from "../../components/Topnav";
import Sidenav from "../../components/Sidenav";

const Dashboard = () => {
  return (
    <div>
      <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
