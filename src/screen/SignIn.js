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
import { Image, Platform, StyleSheet, View } from "react-native";
import AppScreen from "../component/AppScreen";
import { Entypo } from "@expo/vector-icons";
const SignIn = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#2a374a" }}>
          Opedia LOGO
        </Text>
        <Image
          style={{ borderRadius: "50%", marginTop: 10 }}
          source={{ uri: "https://picsum.photos/200", width: 200, height: 200 }}
        />
      </View>
      <View style={[styles.footer]}>
        <Text style={[styles.title]}>
          Welcome to Opedia Technologies Limited
        </Text>
        <View style={[styles.buttons]}>
          <Button
            w="80%"
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
            Home
          </Button>
        </View>
      </View>
    </View>

    // <KeyboardAvoidingView
    //   h={{
    //     base: "400px",
    //     lg: "auto",
    //   }}
    //   flex="1"
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    // >
    //   <AppScreen>
    //     <VStack>

    //     </VStack>
    //   </AppScreen>
    // </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76CBA1",
    width: "100%",
  },

  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    // paddingHorizontal: 30,
  },
  buttons: {
    marginTop: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  primary: {
    backgroundColor: "#2e89d1",
  },
  main: {
    backgroundColor: "#2e89d1",
  },
  mainButton: {
    // cursor: "pointer",
    backgroundColor: "salmon",
    color: "white",
    borderRadius: 5,
    margin: 5,
    // padding: "5px ",
    // border: "1px solid grey",
  },
  primary: {
    backgroundColor: "white",
    borderRadius: 5,
    margin: 5,
    // padding: "5px ",
    // border: "1px solid black",
  },
  title: {
    color: "#05375a",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    color: "grey",
  },
});
