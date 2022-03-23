import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Follow us on</Text>
      <View style={styles.logosContainer}>
        <View style={styles.logos}>
          <AntDesign name="facebook-square" size={24} color="black" />
          <AntDesign name="instagram" size={24} color="black" />
          <AntDesign name="linkedin-square" size={24} color="black" />
          <Foundation name="web" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18,
    color: "#444444",
    textAlign: "center",
  },
  logosContainer: {
    marginVertical: 20,
    textAlign: "center",

    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logos: {
    marginVertical: 10,
    textAlign: "center",

    display: "flex",
    flexDirection: "row",
    width: "40%",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "auto",
  },
});
