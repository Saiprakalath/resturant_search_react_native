import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetails = ({ reslut }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: reslut.image_url }} />
      <Text>{reslut.name}</Text>
      <Text>
        {reslut.rating} Stars, {reslut.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  nameStyle: { fontSize: 16, fontWeight: "bold" },
});

export default ResultDetails;
