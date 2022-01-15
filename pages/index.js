import Container from "../components/Container";
import { Heading, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Container>
        <Heading as="h1" size="3xl">
          Hello, I'm Asrul Cahyadi
        </Heading>
        <Text fontSize="2xl" my={4}>
          A fullstack developer
        </Text>
        <Button colorScheme="cyan" size="lg">
          Hire Me !
        </Button>
      </Container>
    </>
  );
}
