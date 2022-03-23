import { useNavigation } from "@react-navigation/native";
import { Box, Button, Heading, Image, Text } from "native-base";
import React from "react";

const InsuranceCard = ({ data }) => {
  const navigation = useNavigation();
  // console.log({ data });
  return (
    <Button
      // style={{margin:"10px", border: 'none',background: data.color  }}
      bg={data.color}
      m="2"
      w="45%"
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      onPress={() => navigation.navigate("SubScreen", { data })}
    >
      <Box w="100%" p="2" alignItems="center">
        <Image source={data.image} size="xl" resizeMode="contain" alt="image" />
        {/* <Heading ResponsiveValue="container" textAlign="center" fontSize="lg" bold>
          {data.title}
        </Heading> */}
        {/* <Text> {data.title}</Text> */}
        {/* <Text>  {data.description}</Text> */}
        <Text
          alignItems="center"
          textAlign="center"
          // textAlign="justify"
          fontSize="lg"
          color="black"
          // width="100%"
          my="1"

          // p='1'
        >
          {data.title}
        </Text>
      </Box>
    </Button>
  );
};

export default InsuranceCard;
