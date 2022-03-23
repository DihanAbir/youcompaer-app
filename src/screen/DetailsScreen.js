import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AppScreen from "../component/AppScreen";
import {
  Button,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import BandSelection from "../component/BandSelection";
import ModelAndYear from "../component/ModelAndYear";
import Details from "../component/Details";
import Compare from "./Compare";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const status = [
  "Archetucture Selection",
  "Planning",
  "Design pattern  ",
  "Deployment",
];
const activeColor = "#444";

const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;
  // console.log({ data });
  const [activeIndex, setActive] = useState(0);
  const [active, setActiveState] = useState(status[0]);
  const setActiveIndex = (val) => {
    LayoutAnimation.easeInEaseOut();
    setActive(val);
    // console.log({ val });

    setActiveState(status[val]);
  };
  // console.log({ active });
  const marginLeft = (100 / (status.length - 1)) * activeIndex - 100 + "%";
  return (
    <ScrollView flex="1">
      <AppScreen>
        <Box w="100%" mx="2">
          <HStack width="100%" alignItems="center">
            <Pressable onPress={() => navigation.navigate("HomeScreen")}>
              <Ionicons
                name="ios-chevron-back-outline"
                size={24}
                color="gray"
              />
            </Pressable>
            <Text ml="2" textAlign="center" fontSize="lg" color="muted.500">
              {data.title}
            </Text>
          </HStack>
          <Box w="100%" alignItems="center" mt="3" mb="2">
            <Heading textAlign="center">{data.title}</Heading>
            <Text
              my="2"
              textAlign="center"
              w="80%"
              fontSize="md"
              color="muted.500"
            >
              {data.description}
            </Text>
            <Image
              source={data.image}
              size="2xl"
              resizeMode="contain"
              alt="image"
            />
          </Box>
        </Box>
        <Center>
          <View style={styles.container}>
            <View style={styles.statusContainer}>
              <View style={styles.line}>
                <View style={[styles.activeLine, { marginLeft }]} />
              </View>
              {status.map((status, index) => (
                <View style={[styles.dot]} key={status}>
                  <View
                    style={[
                      index <= activeIndex
                        ? { height: "100%", width: "95%" }
                        : { height: "40%", width: "40%" },
                      { backgroundColor: activeColor, borderRadius: 20 },
                    ]}
                  />
                </View>
              ))}
              <View style={styles.labelContainer}>
                {status.map((status, index) => (
                  <Text
                    key={index}
                    numberOfLines={1}
                    style={[
                      index % 2 == 0 ? { top: 20 } : { top: -20 },
                      styles.label,
                    ]}
                  >
                    {status}
                  </Text>
                ))}
              </View>
            </View>
            <>
              {/* {(() => {
            switch (active) {
              case "Band Selection":
                return <BandSelection />;
              case "Model And Year":
                return <ModelAndYear />;
              case "Details":
                return <Details />;
              case "Compare":
                return <Compare />;
              default:
                return <BandSelection />;
            }
          })()} */}
            </>
            <View style={styles.btns}>
              <Button
                title="Back"
                onPress={() => setActiveIndex(activeIndex - 1)}
                disabled={activeIndex <= 0}
              />
              <Button
                title="Next"
                onPress={() => setActiveIndex(activeIndex + 1)}
                disabled={activeIndex >= status.length - 1}
              />
            </View>
          </View>
        </Center>
      </AppScreen>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "92%",
    margin: 2,
    elevation: 2,
    padding: 20,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: 70,
    justifyContent: "space-between",
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: "#ccc",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 5,
    width: "95%",
    backgroundColor: "#ccc",
    position: "absolute",
    borderRadius: 5,
    overflow: "hidden",
  },
  activeLine: {
    height: "100%",
    width: "100%",
    backgroundColor: activeColor,
    borderRadius: 5,
  },
  btns: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  labelContainer: {
    width: "95%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 12,
  },
  prop: {
    marginBottom: 20,
    width: 100,
    textAlign: "center",
  },
});
