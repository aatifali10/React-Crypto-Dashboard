import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const PortfolioSecction = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6" spacing={16}>
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2">₹ 112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text textStyle="h2">22.39401000</Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2">22.39401000</Text>
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSecction;
