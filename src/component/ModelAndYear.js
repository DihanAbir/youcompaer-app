import { Box, Text } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const ModelAndYear = () => {
  const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
  const data = [
    { label: "XF 460", value: "XF 460" },
    { label: "XF460 FAR", value: "XF460 FAR" },
    {
      label: " 26-460 + Zestaw przejazdowy",
      value: "26-460 + Zestaw przejazdowy",
    },
    { label: "CF 440", value: "CF 440" },
    {
      label: " XF 510-SSC-RETARDER-KLIMA POSTOJOWA-HYDRAULIKA-SPROWADZONY",
      value: " XF 510-SSC-RETARDER-KLIMA POSTOJOWA-HYDRAULIKA-SPROWADZONY",
    },
  ];
const yearData = [
    { label: "2010", value: "2010" },
    { label: "2011", value: "2011" },
    { label: "2012", value: "2012" },
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },

]
  return (
    <Box w="100%" mt="3">
      <Text fontSize="md" color="muted.500">
        Select Model
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={model}
        onChange={(item) => {
            setModel(item.value);
        }}
      />
       <Text my="2" fontSize="md" color="muted.500">
        Select Year
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={yearData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={year}
        onChange={(item) => {
            setYear(item.value);
        }}
      />
    </Box>
  );
};

export default ModelAndYear;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
