import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useReslut from "../hooks/useReslut";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useReslut();

  const filterReslutsByPrice = (price) => {
    return results.filter((reslut) => {
      return reslut.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {!results?.length && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultList
          results={filterReslutsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          results={filterReslutsByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultList
          results={filterReslutsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
