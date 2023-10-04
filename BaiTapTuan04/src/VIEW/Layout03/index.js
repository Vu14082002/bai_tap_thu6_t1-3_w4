import { LinearGradient } from "expo-linear-gradient";
import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";
import { Button } from "react-native-web";

export const Layout03 = function () {
      return (
            <LinearGradient
                  style={styles.container}
                  colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
            >
                  <View style={[styles.flex1, styles.imgView]}>
                        <Image
                              style={{ width: 105, height: 117 }}
                              source={require("../../../assets/Layout03.png")}
                        />
                  </View>
                  <View style={[styles.flex1, styles.textContentView]}>
                        <Text style={styles.forgetPassword}>
                              FORGET PASSWORD
                        </Text>
                        <Text style={styles.content}>
                              Provide your account’s email for which you want to
                              reset your password
                        </Text>
                  </View>
                  <View style={[styles.flex1, { alignItems: "center" }]}>
                        <View
                              style={{
                                    flexDirection: "row",
                                    width: "80%",
                                    position: "relative",
                              }}
                        >
                              <Image
                                    style={styles.image}
                                    source={require("../../../assets/email.png")}
                              />
                              <TextInput
                                    placeholder="Email:"
                                    style={styles.inputEmail}
                              />
                        </View>
                        <Pressable style={styles.btn}>
                              <Text
                                    style={{
                                          fontSize: 18,
                                          fontWeight: 700,
                                          textAlign: "center",
                                    }}
                              >
                                    NEXT
                              </Text>
                        </Pressable>
                  </View>
            </LinearGradient>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            fontFamily: "Roboto",
      },
      flex1: {
            flex: 1,
      },
      imgView: {
            justifyContent: "flex-end",
            alignItems: "center",
      },
      textContentView: {
            justifyContent: "space-evenly",
            alignItems: "center",
      },
      forgetPassword: {
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 29,
            letterSpacing: "0em",
            textAlign: "center",
            width: "50%",
      },
      content: {
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 18,
            textAlign: "center",
            width: "80%",
      },
      image: {
            width: 48,
            height: 45,
            borderColor: "#C4C4C4",
            position: "absolute",
      },
      inputEmail: {
            flex: 1,
            height: 45,
            backgroundColor: "#C4C4C4",
            borderColor: "#C4C4C4",
            borderWidth: 0,
            paddingLeft: 50,
      },
      btn: {
            width: "80%",
            backgroundColor: "#E3C000",
            padding: 10,
            height: 45,
            marginTop: 40,
      },
});
