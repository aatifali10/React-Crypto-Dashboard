import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMdMail} boxSize={6} color="p.purple" />
        <Text fontWeight="mediym" as="h1" textStyle="h1">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="6" borderRadius="1rem">
        <HStack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack mt="6">
            <FormControl>
              <Stack>
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder="Enter your name..." />
              </Stack>
            </FormControl>
            <FormControl>
              <Stack>
                <FormLabel>Surname</FormLabel>
                <Input type="name" placeholder="Enter your surname.." />
              </Stack>
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="abc@gmail.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea type="text" placeholder="Message" />
          </FormControl>
          <Checkbox defaultChecked>
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Checkbox>
          <Stack>
            <Button>Send Message</Button>
            <Button colorScheme="gray">Book a Meeting</Button>
          </Stack>
        </HStack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
