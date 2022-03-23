import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <View>
      <Text style={styles.title}>About Us</Text>
      <View>
        <Text style={styles.des}>
          Opedia Technologies Limited is a growing software and IT solutions
          company. We create value for your business by providing professional
          IT services through interaction and integration.
        </Text>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#FC9825",
  },
  des: {
    padding: 20,
    margin: 20,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 30,

    textAlign: "center",
    color: "#3EA3DC",
    backgroundColor: "#EBECED",
    borderRadius: 10,
  },
});
