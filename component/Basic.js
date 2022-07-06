import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button,
  Alert,
  DrawerCustomItem,
  Icon,
  DrawerLayoutAndroid,ScrollView
} from "react-native";

class Basic extends Component {
  state = { count: 1 };
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>

        <Text>Open up App.js to start working on your app by!</Text>
        <Text
          onPress={() => {
            this.setState({ count: +this.state.count + 1 });
          }}
        >
          Mohit Gupta****************--:{this.state.count}
        </Text>
        <Image
          source={{
            height: 200,
            width: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
        <Text></Text>
        <TouchableNativeFeedback
          onPress={() => {
            this.setState({ count: +this.state.count + 1 });
          }}
        >
          <View
            style={{ height: 50, width: 300, backgroundColor: "red" }}
          ></View>
        </TouchableNativeFeedback>
        <Text></Text>
        <TouchableNativeFeedback onPress={()=>{
           this.setState({ count: +this.state.count + 1 });
        }}>
          <Image source={require("../assets/lko.jpeg")} />
        </TouchableNativeFeedback>

        <Button
          style={{ height: 50, width: 30, backgroundColor: "red" }}
          title="Submit"
          onPress={() =>
            Alert.alert("My tile", "My Data", [
              {
                text: "YES",
                onPress: () => {
                  console.log("yes");
                },
              },
              {
                text: "NO",
                onPress: () => {
                  console.log("no");
                },
              },
            ])
          }
        />
        <Text></Text>

        <Button
          style={{ height: 50, width: 30, backgroundColor: "red" }}
          title="Increment"
          onPress={() => {
            this.setState({ count: +this.state.count * 2 });
          }}
        />
        <Text></Text>
        <Button
          style={{ height: 50, width: 30, backgroundColor: "red" }}
          title="Decrement"
          onPress={() => {
            this.setState({ count: +this.state.count / 2 });
          }}
        />
        <Text></Text>
        <Button
          style={{ height: 50, width: 30, backgroundColor: "red" }}
          title="Clear"
          onPress={() => {
            this.setState({ count: 1});
          }}
        />
      </View>
    );
  }
}
function abc() {
  this.setState({ count: +this.state.count + 1 });
}
function abc1() {
  this.setState({ count: +this.state.count + 1 });
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingHorizontal: 28,
    justifyContent: "center",
  },
  headerIcon: {
    marginTop: -20,
  },
  logo: {
    height: 40,
    width: 37,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});
export default Basic;
