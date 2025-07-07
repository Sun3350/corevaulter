import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.800" color="gray.200" py={10}>
      <Container maxW="6xl" textAlign="center">
        <Text fontSize="md">
          CoreVault is a mini-banking and digital treasury platform designed to
          help individuals and small businesses structure, monitor, and secure
          their financial assets.
        </Text>
        <Text fontSize="sm" mt={4} color="gray.400">
          © {new Date().getFullYear()} CoreVault. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
