import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Layout01 } from "./src/VIEW/Layout01";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Layout02 } from "./src/VIEW/Layout02";
import { Layout03 } from "./src/VIEW/Layout03";
import { Layout04 } from "./src/VIEW/Layout04";

export default function App() {
      return <Layout04 />;
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
