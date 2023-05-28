import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.main}> 
        <View style={styles.searchBox}>
          <Text>Search</Text>
        </View>
        <View style={styles.listBox}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  searchBox: {
    backgroundColor: 'green',
    padding: 25,
    flex:0
  },
  listBox: {
    backgroundColor: 'blue',
    padding: 25,
    flex:1

  },
});
