import { useNavigation } from "@react-navigation/native";
import { Button, Center, Image, Text } from "native-base";
import React from "react";

const SubCard = ({ data }) => {
//   console.log({ data });
  const navigation = useNavigation();

  const handlePress = () => {
    data.title === "Commercial Vehicle"
    ? navigation.navigate("SubScreen", { data })
    :navigation.navigate("DetailsScreen", { data });
    console.log("Pressed");
  };
  return (
    <Button
      onPress={ handlePress}
      w="46%"
      borderWidth="1"
      borderColor="muted.300"
      borderRadius="10px"
      m="2"
    >
      <Center>
        <Text fontSize="lg" textAlign="center" color="white" my="2">
          {data.title}
        </Text>
        <Image source={data.image} size="xl" resizeMode="contain" alt="image" />
      </Center>
    </Button>
  );
};

export default SubCard;
