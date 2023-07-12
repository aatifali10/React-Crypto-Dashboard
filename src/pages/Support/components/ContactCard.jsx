import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
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
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send Message</Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
