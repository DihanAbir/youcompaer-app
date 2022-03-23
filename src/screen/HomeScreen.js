import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  FlatList,
  Button,
  View,
  ScrollView,
} from "native-base";

import { Dimensions, StyleSheet, Image } from "react-native";
import AppScreen from "../component/AppScreen";
import InsuranceCard from "../component/InsuranceCard";
import ServicesSlider from "../component/ServicesSlider";
import insuranceData from "../data/data";
import ReviewSlider from "../component/ReviewSlider";
import Feather from "react-native-vector-icons/Feather";
import MyCarousel from "../About";
import AboutUs from "../component/AboutUs";
import Footer from "../component/Footer";
import LogoSlider from "../component/LogoSlider";

const HomeScreen = ({ navigation }) => {
  return (
    <AppScreen>
      {/* header  */}
      <View style={styles.headerview}>
        <Feather
          name="align-left"
          color="#000"
          size={20}
          onPress={() => navigation.openDrawer()}
        />
        <Image style={styles.logo} source={require("../assets/Bus.png")} />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        data={insuranceData}
        ListHeaderComponent={() => <HeaderComponent navigation={navigation} />}
        ListFooterComponent={() => <FooterComponent />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <InsuranceCard data={item} />}
      />
      {/* <LogoSlider /> */}
    </AppScreen>
  );
};

export default HomeScreen;

const HeaderComponent = ({ navigation }) => {
  return (
    <VStack>
      <SliderComponent navigation={navigation} />
      {/* <CustomeSlider/> */}

      <Box>
        <VStack maxW="100%" mx="10px" alignItems="center">
          <Heading w="100%" textAlign="center" fontSize="2xl" my="1">
            We team of experience It Specialties.
          </Heading>
          <Button onPress={() => navigation.navigate("Register")}>Quote</Button>
          <Text
            w="100%"
            padding="5"
            textAlign="center"
            fontSize="md"
            color="muted.400"
          >
            2 years+ serving as a leading software company. A unique workflow
            and high-quality services are what sets us apart from competitors.
            We understand customers' challenges and pain points. You can count
            on us for assistance. Simple Steps of growth
          </Text>
        </VStack>
      </Box>
      {/* <MyCarousel /> */}
      <Heading w="100%" textAlign="center" fontSize="2xl" mt="1">
        Services
      </Heading>
    </VStack>
  );
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const images = [
  "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
  "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
];

const SliderComponent = ({ navigation }) => {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {};

  return (
    <VStack>
      <View style={styles.wrap}>
        {/* <ServicesSlider /> */}
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <View key={index}>
              <Image
                style={styles.wrapImage}
                key={index}
                resizeMode="stretch"
                source={{ uri: image }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </VStack>
  );
};

// const ReviewSlider = ({ navigation }) => {
//   const [imgActive, setImgActive] = useState(0);

//   const onChange = (nativeEvent) => {};

//   return (
//     <VStack m="5">
//       <View style={styles.wrap}>
//         {/* <ServicesSlider /> */}
//         <ScrollView
//           onScroll={({ nativeEvent }) => onChange(nativeEvent)}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           horizontal
//           style={styles.wrap}
//         >
//           {images.map((image, index) => (
//             <View key={index}>
//               <Image
//                 style={styles.wrap}
//                 key={index}
//                 resizeMode="stretch"
//                 source={{ uri: image }}
//               />
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </VStack>
//   );
// };

const FooterComponent = () => {
  return (
    <VStack mt="5" maxW="100%">
      <ReviewSlider />
      <AboutUs />
      <Footer />
    </VStack>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    marginHorizontal: 10,
  },
  wrapImage: {
    width: WIDTH - 30,
    height: HEIGHT * 0.25,
    marginEnd: 16,
    borderRadius: 10,
  },
  headerview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  location: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,

    fontSize: 16,
    lineHeight: 14,
    fontWeight: "bold",
    color: "rgba(27, 32, 40, 0.8)",
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginVertical: 15,
  },
});
