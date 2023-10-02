import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { LinearGradient } from "expo-linear-gradient";
export const Layout02 = function () {
      return (
            <LinearGradient
                  style={[styles.container]}
                  colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
            >
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
                        <View>
                              <Text style={styles.work}>HOW WE WORK?</Text>
                        </View>
                  </View>
            </LinearGradient>
      );
};
