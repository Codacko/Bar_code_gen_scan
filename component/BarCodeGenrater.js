import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import Scanner from "./Scanner";
import {Surface, Shape} from '@react-native-community/art';

import Barcode from "react-native-barcode-builder";


export default function BarCodeGenrater() {

  const navigation = useNavigation();
 
  const [qrCode, setQrCode] = useState(null);
  let base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        numberOfLines={4}
        placeholder="Please Enter Data ...."
      />
      <Button
        title="Submit"
        onPress={() => {
          console.log(text);
        }}
      />
      <Text style={{ fontSize: 25 }}>This is QR Code Of Above data</Text>
      <Text></Text>
      <TouchableOpacity onPress={()=>{console.log("QR Code")}}>
        {text ? (
          <QRCode
            style={{ width: 100, height: 100 }}
            value={text}
            id='123456'
            // logo={{ uri: base64Logo }}
            size={300}
            logoBackgroundColor="transparent"
          />
        ) : null}
      </TouchableOpacity>
      <Text></Text>
      {/* <Barcode value="Hello World"  /> */}
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
