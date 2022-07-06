import { StatusBar } from "expo-status-bar";
// import { Block, theme } from "galio-framework";
import React, {useState, useEffect } from "react";
// import RNQRGenerator from "rn-qr-generator";
import QRCode from "react-native-qrcode-svg";
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
  DrawerLayoutAndroid,
  ScrollView,
  AppRegistry,
  Component,
  Linking
} from "react-native";


import { BarCodeScanner } from 'expo-barcode-scanner';
import BarCodeGenrater from './BarCodeGenrater';
import { useNavigation } from "@react-navigation/native";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  const navigation = useNavigation();

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
     <Button title="Genrate" onPress={() => navigation.navigate("BarCodeGenrater")} />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text></Text>
      <Text></Text>
      {scanned && <Button  title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    barCodeScanner:{
        width:100,
        height:100,
        justifyContent:'center'
    }
  });
  