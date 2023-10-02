import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Layout01 } from "./src/VIEW/Layout01";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Layout02 } from "./src/VIEW/Layout02";

const Stack = createNativeStackNavigator();
export default function App() {
      return (
            // <NavigationContainer>
            //       <Stack.Navigator>
            //             <Stack.Screen
            //                   name="Layout01"
            //                   component={Layout02}
            //                   options={{ title: "Layout 01" }}
            //             />
            //             <Stack.Screen
            //                   name="Layout02"
            //                   component={Layout02}
            //                   options={{ title: "Layout 02" }}
            //             />
            //       </Stack.Navigator>
            // </NavigationContainer>
            <Layout02 />
      );
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
