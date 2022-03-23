import React from "react";
import {
  Box,
  Heading,
  Input,
  KeyboardAvoidingView,
  Text,
  Button,
  VStack,
  Pressable,
} from "native-base";
import { Platform } from "react-native";
import AppScreen from "../component/AppScreen";
import { Entypo } from "@expo/vector-icons";
const Register = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [confirmShow, setConfirmShow] = React.useState(false);
  return (
    <KeyboardAvoidingView
      h={{
        base: "400px",
        lg: "auto",
      }}
      flex="1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <AppScreen>
        <VStack m="5" flex="1" justifyContent="center" w="100%" maxW="90%">
          <Box mt="2">
            <Heading my="3">Get Quote</Heading>
            <Box mb="20px">
              <Text fontSize="md" color="muted.500" my="1" bold>
                Full Name
              </Text>
              <Input placeholder="John Doe" />
            </Box>
            <Box mb="20px">
              <Text fontSize="md" color="muted.500" my="1" bold>
                Email Address
              </Text>
              <Input placeholder="Email" />
            </Box>
            <Box mb="20px">
              <Text fontSize="md" color="muted.500" my="1" bold>
                Address
              </Text>
              <Input placeholder="Email" />
            </Box>
            <Box mb="20px">
              <Text fontSize="md" color="muted.500" my="1" bold>
                Message
              </Text>
              <Input placeholder="Email" />
            </Box>

            <Box alignItems="center" justifyContent="center">
              <Button
                w="100%"
                h="50px"
                mb="20px"
                bg="#1483d2"
                _text={{
                  color: "white",
                  bold: true,
                  textTransform: "uppercase",
                }}
                fontSize="md"
                fontWeight="bold"
                textAlign="center"
                textTransform="uppercase"
                onPress={() => navigation.navigate("HomeScreen")}
              >
                Get a Quote
              </Button>

              <Box
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                <Pressable onPress={() => navigation.navigate("HomeScreen")}>
                  <Text color="blue.800">Go to Home.</Text>
                </Pressable>
              </Box>
            </Box>
          </Box>
        </VStack>
      </AppScreen>
    </KeyboardAvoidingView>
  );
};

export default Register;
