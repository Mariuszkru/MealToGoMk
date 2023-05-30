import React from "react";

import { Searchbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.main}>
    <View style={styles.searchBox}>
      <Searchbar />
    </View>

    <View style={styles.listBox}>
      <Text>list</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBox: {
    padding: 25,
    flex: 0,
  },
  listBox: {
    backgroundColor: "blue",
    padding: 25,
    flex: 1,
  },
});
