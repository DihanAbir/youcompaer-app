import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.des}>Services we provide</Text>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: "#FC9825",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 39,
    textAlign: "left",
    marginTop:20
  },
  des: {
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 25,

    color: "rgba(68, 68, 68, 0.6)",
  },
});
