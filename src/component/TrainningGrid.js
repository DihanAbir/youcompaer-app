import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

const images = [
  {
    title: "Digital Marketing with Career Guideline",
    outlet: [
      {
        title: "Course",
        value: "Digital Marketing with Career Guideline",
      },
      {
        title: "Duration",
        value: "72 Hours",
      },
      {
        title: "Classes",
        value: "15",
      },
      {
        title: "Classes",
        value: "i3, 8GB RAM, 240GB SSD,1TB HDD ",
      },
      {
        title: "Course Fee Online",
        value: " 10,000/=",
      },
      {
        title: "Course Fee Offline ",
        value: "15,000/= ",
      },
      {
        title: "Pre-Requirement ",
        value:
          "Computer Basic, Office Applications, Basic of Social Media & Email ",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80",
  },

  {
    title: "Web Development",
    outlet: [
      {
        title: "Course",
        value: "Web Design Advance",
      },
      {
        title: "Duration",
        value: "72 Hours",
      },
      {
        title: "Classes",
        value: "36",
      },
      {
        title: "Classes",
        value: "i3, 8GB RAM, 240GB SSD, 1TB HDD",
      },
      {
        title: "Course Fee Online",
        value: " 10,000/=",
      },
      {
        title: "Course Fee Offline ",
        value: "15,000/= ",
      },
      {
        title: "Pre-Requirement ",
        value:
          "Computer Basic, Office Applications, Basic of Social Media & Email ",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  },

  {
    title: "Motion Graphics",
    outlet: [
      {
        title: "Course",
        value: "Motion Graphics with Freelancing",
      },
      {
        title: "Duration",
        value: "72 Hours",
      },
      {
        title: "Classes",
        value: "36",
      },
      {
        title: "Classes",
        value: "Desktop, i5 8th Generation, 16GB Ram, 240GB SSD, 1TB HDD",
      },
      {
        title: "Course Fee Online",
        value: "15,000/=",
      },
      {
        title: "Course Fee Offline ",
        value: "20,000/=",
      },
      {
        title: "Pre-Requirement ",
        value:
          "Graphics Design, Office Applications, Basic of Social Media & Email",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  },

  {
    title: "Graphic Design",
    outlet: [
      {
        title: "Course",
        value: "Graphic Design with Freelancing",
      },
      {
        title: "Duration",
        value: "72 Hours",
      },
      {
        title: "Classes",
        value: "15",
      },
      {
        title: "Classes",
        value: "i5 7th Generation",
      },
      {
        title: "Course Fee Online",
        value: " 10,000/=",
      },
      {
        title: "Course Fee Offline ",
        value: "15,000/= ",
      },
      {
        title: "Pre-Requirement ",
        value:
          "Computer Basic, Office Applications, Basic of Social Media & Email",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
];

const TrainningGrid = ({ navigation }) => {
  // console.log("navigation", navigation);
  return (
    <ScrollView>
      {images.map((value) => (
        <TouchableOpacity
          style={styles.selected}
          onPress={() => {
            navigation.navigate("trainingItem", { data: value });
          }}
        >
          <View style={styles.viewContainer}>
            <ImageBackground
              source={{ uri: value.image }}
              imageStyle={{ borderRadius: 10 }}
              style={{
                width: "100%",
                height: 150,
              }}
            >
              <Text style={styles.buttonLabel}>Dihan abir</Text>
            </ImageBackground>
            <Text style={styles.trainingLabel}>{value.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selected: {
    padding: 15,
    borderColor: "#666",
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
    height: 100,
    padding: 10,
  },
  trainingLabel: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 22,

    color: "#F6851F",
  },
});

export default TrainningGrid;
