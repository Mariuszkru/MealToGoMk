import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";


export default function App() {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.searchBox}>
          <Searchbar />
        </View>

        <View style={styles.listBox}>
          <Text>list</Text>
        </View>
      </SafeAreaView>

      <ExpoStatusBar style="auto" />
    </>
  );
}

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
