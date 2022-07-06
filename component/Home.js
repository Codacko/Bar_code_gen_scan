import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default  function Home () {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text></Text>
      <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// export default Home;
