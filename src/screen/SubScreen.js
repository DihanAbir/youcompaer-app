import {
  Box,
  Button,
  FlatList,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React from "react";
import AppScreen from "../component/AppScreen";
import { Ionicons } from "@expo/vector-icons";
import SubCard from "../component/SubCard";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SubScreen = ({ route }) => {
  const { data } = route.params;
  // console.log({data});
  return (
    <AppScreen>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data.subPart}
        ListHeaderComponent={() => <HeaderComponent data={data} />}
        ListFooterComponent={() => <FooterComponent />}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => <SubCard data={item} />}
      />
    </AppScreen>
  );
};

export default SubScreen;

const HeaderComponent = ({ data }) => {
  const navigation = useNavigation();
  return (
    <VStack m="1" w="100%" mb="2">
      <HStack width="100%" alignItems="center">
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <Ionicons name="ios-chevron-back-outline" size={24} color="gray" />
        </Pressable>
        <Text ml="2" textAlign="center" fontSize="lg" color="muted.500">
          {data.title}
        </Text>
      </HStack>
      <Box w="100%" alignItems="center" mt="5">
        <Heading fontSize="2xl" my="1" textAlign="center">
          {data.title}
        </Heading>
        <Text fontSize="md" color="muted.400" textAlign="center" w="80%">
          {data.description}
        </Text>
        <Image source={data.image} size="xl" resizeMode="contain" alt="image" />
      </Box>
    </VStack>
  );
};
const FooterComponent = () => {
  return <VStack></VStack>;
};
