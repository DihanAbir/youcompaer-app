import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PortfolioItem = ({ route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text style={styles.header}>PortfolioItem {name}</Text>
      <View>
        <Image
          style={styles.feature}
          source={{
            uri: "https://images.unsplash.com/photo-1640622842523-4825918c4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://images.unsplash.com/photo-1647686909367-e2f58c82ff95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
            }}
          />
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://images.unsplash.com/photo-1647687214141-64500b1f21df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            }}
          />
        </View>
        <View style={styles.right}>
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: "https://images.unsplash.com/photo-1640622842523-4825918c4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PortfolioItem;

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
  },
  container: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    height: 200,
    width: 200,
    margin: 5,
    borderRadius: 15,
  },
  tinyLogo2: {
    height: 410,
    width: 200,
    borderRadius: 15,
  },
  feature: {
    height: 200,
    // width: 500,
    borderRadius: 15,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  right: {},
});
