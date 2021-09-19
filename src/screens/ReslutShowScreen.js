import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import axios from "../api/base";

const ResultShowScreen = ({ navigation }) => {
  const [reslut, setReslut] = useState(null);
  const id = navigation.getParam("id");
  console.log(reslut);
  const getResult = async (id) => {
    const response = await axios.get(`${id}`);
    setReslut(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!reslut) {
    return null;
  }

  return (
    <View>
      <Text>{reslut.name}</Text>
      <FlatList
        data={reslut.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: { height: 200, width: 300 },
});

export default ResultShowScreen;
