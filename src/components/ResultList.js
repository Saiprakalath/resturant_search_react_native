import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ReslutDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {

    if(!reslut?.length){
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(reslut) => reslut.id}
        renderItem={({ item }) => {
          return(<TouchableOpacity onPress={()=>navigation.navigate("ResultShow",{id:item.id})}>
              <ResultDetails reslut={item} />
          </TouchableOpacity>);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultList);
