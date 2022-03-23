import { Box, Button, HStack, Input, Text } from 'native-base';
import React from 'react';

const Details = () => {
    return (
        <Box w="100%">
            <Text
            fontSize="md"
            color="muted.500"
            >Type of Instance</Text>
            <HStack my="5" justifyContent="space-between">
                <Button
                w="45%"
                borderRadius="50"
                bg="#1483d2"
                _text={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
                >
                   Third party
                </Button>
                <Button
                w="45%"
                borderRadius="50"
                bg="#1483d2"
                _text={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
                >
                   Third party
                </Button>
            </HStack>
            <Text
            fontSize="md"
            color="muted.500"
            >Type of Use</Text>
            <HStack my="5" justifyContent="space-between">
                <Button
                w="45%"
                borderRadius="50"
                bg="#1483d2"
                _text={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
                >
                  Commercial
                </Button>
                <Button
                w="45%"
                borderRadius="50"
                bg="#1483d2"
                _text={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}
                >
                 Private
                </Button>
            </HStack>
            <Text
            my="2"
            fontSize="md"
            color="muted.500"
            >Value</Text>
            <Input placeholder="Value" />
            <Text
              my="2"
            fontSize="md"
            color="muted.500"
            >Full Name</Text>
            <Input placeholder="Full Name" />
            <Text
              my="2"
            fontSize="md"
            color="muted.500"
            >Email Address</Text>
            <Input placeholder="Email" />
            <Text
              my="2"
            fontSize="md"
            color="muted.500"
            >Phone Number</Text>
            <Input placeholder="Enter Phone Number" />
        </Box>
    );
}

export default Details;