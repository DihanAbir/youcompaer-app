import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const portfolioData = [
  {
    name: "50th Language Day",
    img: "https://images.unsplash.com/photo-1647649730503-ac24825bf814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Annual Ceremony ‘21",
    img: "https://images.unsplash.com/photo-1647629825421-2f7441004492?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Game Show",
    img: "https://images.unsplash.com/photo-1647695095872-3bcf1b53659a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Hackathon",
    img: "https://images.unsplash.com/photo-1596889159456-65a9d8514c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    name: "Game Show 2.0",
    img: "https://images.unsplash.com/photo-1644968521285-9bff43ead78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    name: "Annual Ceremony ‘21",
    img: "https://images.unsplash.com/photo-1640310718620-8bf8c15c79cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Game Show",
    img: "https://images.unsplash.com/photo-1647694420044-6e42df6ca610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Game Show 2.0",
    img: "https://images.unsplash.com/photo-1644968521285-9bff43ead78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
];

const Gallery = ({ navigation }) => {
  const [justifyContent, setJustifyContent] = useState("flex-start");

  return (
    <PreviewLayout
      navigation={navigation}
      label="justifyContent"
      selectedValue={justifyContent}
      values={portfolioData}
      setSelectedValue={setJustifyContent}
    />
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  navigation,
}) => (
  <View style={{ padding: 10, flex: 1, backgroundColor: "#fff" }}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.description}>
      230+ clients are already growing their businesses. With our quality
      service.
    </Text>
    <View style={styles.row}>
      {values.map((value, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            // setSelectedValue(value.name);
            navigation.navigate("Galleryitem", { name: "Dihan Gallery Item" });
          }}
          style={[
            styles.button,
            selectedValue === value.name && styles.selected,
          ]}
        >
          <Image
            style={styles.feature}
            source={{
              uri: value.img,
            }}
          />
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value.name && styles.selectedLabel,
            ]}
          >
            {value.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "white",
  },
  feature: {
    height: 100,
    // width: 500,
    borderRadius: 5,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "white",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 16,
    minWidth: "48%",
    textAlign: "center",
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 8,
  },
  selected: {
    backgroundColor: "red",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
    textAlign: "center",
    padding: 10,
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    marginBottom: 10,
    fontSize: 24,
    color: "#FFDA76",
  },
});

export default Gallery;
