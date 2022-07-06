import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
} from "react-native";

// import { BarCodeScanner } from 'expo-barcode-scanner';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
// });

///********************************************************** */
// import BarcodeScanner from 'react-native-scan-barcode';

// class ScanBarcodeApp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       torchMode: 'off',
//       cameraType: 'back',
//     };
//   }

//   barcodeReceived(e) {
//     console.log('Barcode: ' + e.data);
//     console.log('Type: ' + e.type);
//   }

//   render() {
//     return (
//       <BarcodeScanner
//         onBarCodeRead={this.barcodeReceived}
//         style={{ flex: 1 }}
//         torchMode={this.state.torchMode}
//         cameraType={this.state.cameraType}
//       />
//     );
//   }
// }

// AppRegistry.registerComponent('ScanBarcodeApp', () => ScanBarcodeApp);

// import Home from "./component/Home";
import BarCodeGenrater from "./component/BarCodeGenrater";
import Scanner from "./component/Scanner";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// import { DrawerActions } from 'react-navigation';
// this.props.navigation.dispatch(DrawerActions.closeDrawer());
// this.props.navigation.dispatch(DrawerActions.openDrawer());
// function App() {
// const drawer = useRef(null);
// const [drawerPosition, setDrawerPosition] = useState("left");
// const changeDrawerPosition = () => {
//   if (drawerPosition === "left") {
//     setDrawerPosition("right");
//   } else {
//     setDrawerPosition("left");
//   }
// };

// const navigationView = () => (
//   <View style={[styles.container, styles.navigationContainer]}>
//     <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//     <Button
//       title="Close drawer"
//       onPress={() => drawer.current.closeDrawer()}
//     />
//   </View>
// );

// const screens = ["Home", "Components", "Articles", "Profile", "Account"];

// return (
// <NavigationContainer>
// <Stack.Navigator>
//   <Stack.Screen name="Home" component={Home} />
//   <Stack.Screen name="Scanner" component={Scanner} />
// </Stack.Navigator>
// </NavigationContainer>

// <DrawerLayoutAndroid
//   style={styles.container}
//   ref={drawer}
//   drawerWidth={300}
//   drawerPosition={drawerPosition}
//   renderNavigationView={navigationView}
// >
//   <View style={styles.container}>

//     <Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>

//     <Button
//       title="Change Drawer Position"
//       onPress={() => changeDrawerPosition()}
//     />
//     <Text style={styles.paragraph}>
//       Swipe from the side or press button below to see it!
//     </Text>
//     <Button
//       title="Open drawer"
//       onPress={() => drawer.current.openDrawer()}
//     />
//     <Text></Text>
//     <Text></Text>
//      <Basic />
//   </View>

// </DrawerLayoutAndroid>
// );
// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bar Code Genrater" component={BarCodeGenrater} />

        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
