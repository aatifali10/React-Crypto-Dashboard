import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";

const TopNav = () => {
  return (
    <Box>
      <HStack maxW="80rem" h="16" justify="space-between" px="32" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">
          Dashboard
        </Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="24px" fontWeight="medium" as={BiUserCircle} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
