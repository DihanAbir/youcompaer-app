import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const portfolioData = [
  {
    name: "Web Designing",
    img: "https://images.unsplash.com/photo-1601956409343-a61004fff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Web Designing",
    img: "https://images.unsplash.com/photo-1601956409343-a61004fff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Web Designing",
    img: "https://images.unsplash.com/photo-1601956409343-a61004fff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Web Designing",
    img: "https://images.unsplash.com/photo-1601956409343-a61004fff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Web Designing",
    img: "https://images.unsplash.com/photo-1601956409343-a61004fff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

const Portfolio = ({ navigation }) => {
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
            navigation.navigate("PortfolioItem", { name: "Dihan abir" });
          }}
          style={[
            styles.button,
            selectedValue === value.name && styles.selected,
          ]}
        >
          <Image
            style={styles.feature}
            source={{
              uri: "https://images.unsplash.com/photo-1640622842523-4825918c4716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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

export default Portfolio;
