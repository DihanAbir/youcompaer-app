import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, VStack, View, Heading } from "native-base";

const images = [
  "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80",
  "https://images.unsplash.com/photo-1633094217480-3e38455d55e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=937&q=80",
  "https://images.unsplash.com/photo-1633354089011-48a7f08f3567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80",
  "https://images.unsplash.com/photo-1636565139043-494837ac6070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=602&q=80",
];

export default function ReviewSlider() {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {};

  return (
    <VStack m="5">
      <View style={styles.wrap}>
        {/* <ServicesSlider /> */}
        <Heading ResponsiveValue="container" fontSize="lg" mb="5" bold>
          Review
        </Heading>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          alwaysBounceHorizontal={true}
          scrollEnabled={true}
          style={styles.wrap}
        >
          {images.map((image, index) => (
            <ReviewItem image={image} index={index} />
          ))}
        </ScrollView>
      </View>
    </VStack>
  );
}

function ReviewItem({ image, index }) {
  return (
    <View style={styles.reviewView} key={index}>
      <View style={styles.reviewImage}>
        <Image
          style={styles.image}
          key={index}
          resizeMode="stretch"
          source={{ uri: image }}
        />
      </View>
      <View style={styles.reviewContent}>
        <Text style={styles.wrapText} alignItems="center" textAlign="center">
          lorem on a but not scrollEventThrottle. You will only receive one
          event. Using 16 you don't need as much precision.
        </Text>
        <Text style={styles.nameText} alignItems="flex-start" textAlign="right">
          Dihan abir
        </Text>
        <Text
          style={styles.DesText}
          mb="2"
          alignItems="flex-end"
          textAlign="right"
        >
          Web & Software development
        </Text>
      </View>
    </View>
  );
}

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    //   height: HEIGHT * 0.25,
  },
  reviewView: {
    backgroundColor: "#3EA3DC",
    // background: "linear-gradient(180deg, #3EA3DC 0%, #27348B 100%)",
    margin: 4,
    borderRadius: 10,
    width: "52.8%",
    display: "flex",
    flexDirection: "row",
  },
  reviewImage: {
    alignSelf: "center",
    margin: 10,
  },
  nameText: {
    fontWeight: "bold",
    color: "#fff",
  },
  DesText: {
    fontWeight: "bold",
    color: "#FECA3F",
  },
  reviewContent: {
    width: "10.8%",
  },
  wrapText: {
    padding: 20,
    color: "#fff",
    textAlign: "justify",
  },
  image: {
    alignSelf: "center",

    height: 150,
    width: 150,
    borderRadius: 10,
  },
});
