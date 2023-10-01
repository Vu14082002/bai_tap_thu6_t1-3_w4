import {
      Button,
      Image,
      Pressable,
      SafeAreaView,
      Text,
      View,
} from "react-native";
import { styles } from "./style";

export const Layout01 = function () {
      return (
            <View style={styles.container}>
                  <View style={styles.top}>
                        <Image
                              style={{ width: 140, height: 140 }}
                              source={require("../../../assets/Ellipse8.png")}
                        />
                  </View>
                  <View style={styles.bottom}>
                        <View>
                              <Text style={styles.header}>GROW </Text>
                              <Text style={styles.header}>YOUR BUSINESS</Text>
                        </View>
                        <Text style={styles.content}>
                              We will help you to grow your business using
                              online server
                        </Text>
                        <View style={styles.button}>
                              <Pressable style={styles.btn}>
                                    <Text style={styles.btnText}>LOGIN</Text>
                              </Pressable>
                              <Pressable style={styles.btn}>
                                    <Text style={styles.btnText}>SIGN UP</Text>
                              </Pressable>
                        </View>
                  </View>
            </View>
      );
};
