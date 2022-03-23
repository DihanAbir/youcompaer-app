import React from "react";
import { Linking } from "react-native";
import { HStack, Center, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

// console.log(data);
const TrainingItem = ({ route }) => {
  const { data } = route.params;

  const outlets = data.outlet;

  const value =
    "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80";

  return (
    <View>
      <Text style={styles.header}>Overview</Text>
      <View
        style={{
          margin: 10,
        }}
      >
        <ImageBackground
          source={{ uri: data?.image }}
          imageStyle={{ borderRadius: 10 }}
          style={{
            width: "100%",
            height: 150,
          }}
        ></ImageBackground>
      </View>

      <View
        style={{
          margin: 10,
        }}
      >
        {outlets?.map((item) => (
          <HStack space={3} marginTop={5} justifyContent="flex-start">
            <Center w="30%" bg="#fff" rounded="md" shadow={3}>
              <View
                style={{
                  paddingHorizontal: 10,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 19 }}>{item.title}</Text>
                <Text>: </Text>
              </View>
            </Center>
            <Center w="65%" bg="#fff" rounded="md" shadow={3}>
              <Text style={{ fontSize: 20 }}>{item.value}</Text>
            </Center>
          </HStack>
        ))}
        <Text
          onPress={() => {
            Linking.openURL("tel:01620665499");
          }}
          style={styles.booked}
        >
          Booked Now
        </Text>
      </View>
    </View>
  );
};

export default TrainingItem;

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
  booked: {
    textAlign: "center",
    backgroundColor: "#27348B",
    padding: 10,
    margin: 10,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 5,
  },
});
