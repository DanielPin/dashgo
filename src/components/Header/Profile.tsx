import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Pinheiro do Nascimento</Text>
          <Text color="gray.300" fontSize="small">
            daniel.pin@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Daniel Pinheiro do Nascimento"
        src="https://github.com/DanielPin.png"
      />
    </Flex>
  );
}
