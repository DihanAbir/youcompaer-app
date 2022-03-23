import { Box, Button, FlatList, Image, Input, Text } from "native-base";
import React from "react";

const data = [
  {
    id: 1,

    image: require("../assets/truck/DAF.png"),
    model: "DAF",
  },
  {
    id: 2,
    image: require("../assets/truck/ford.png"),
    model: "FORD",
  },
  {
    id: 3,

    image: require("../assets/truck/honda.png"),
    model: "HONDA",
  },
  {
    id: 4,

    image: require("../assets/truck/Iveco-logo.png"),
    model: "IVECO",
  },
  {
    id: 5,

    image: require("../assets/truck/man.jpg"),
    model: "MAN",
  },
  {
    id: 6,

    image: require("../assets/truck/Mercedes-Benz.png"),
    model: "MERCDES BENZ",
  },
  {
    id: 7,

    image: require("../assets/truck/Renault-logo.png"),
    model: "RENAULT",
  },
  {
    id: 8,

    image: require("../assets/truck/Scania-logo.png"),
    model: "SCANIA",
  },
  {
    id: 9,

    image: require("../assets/truck/Volvo.png"),
    model: "VOLVO",
  },
];

const BandSelection = () => {
  return (
    <Box w="100%" my="3">
      <Text my="1" color="muted.500" fontSize="md">
        Select Brand
      </Text>
      <Input placeholder="Brand Name" />
      <Text my="1" color="muted.500" fontSize="md">
        Enter Name Plate
      </Text>
      <Input placeholder="Brand Name" />
      <FlatList
        data={data}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => (
            <Button
            variant="outline"
                w="45%"
                m="2"
                alignItems="center"
                borderRadius="lg"
                borderWidth="1px"
                borderColor="gray.200"
                onPress={() => console.log(item.id)}
            >
                <Image
                    source={item.image}
                    size="md"
                    resizeMode="contain"
                    alt="image"
                />
                </Button>
        )}
        keyExtractor={(item) => item.id.toString()}
        />

    </Box>
  );
};

export default BandSelection;
