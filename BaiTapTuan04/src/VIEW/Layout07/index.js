import { LinearGradient } from "expo-linear-gradient";
import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";

export const Layout07 = function () {
      return (
            <LinearGradient
                  style={styles.container}
                  colors={["#FBCB00", "#BF9A00"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
            >
                  <View style={[styles.flex1, styles.header]}>
                        <Text style={styles.lblLogin}>LOGIN</Text>
                  </View>
                  <View style={[styles.flex1, styles.form]}>
                        <View style={[styles.inputLayout]}>
                              <Image
                                    source={require("../../../assets/user.png")}
                                    style={{
                                          width: 36,
                                          height: 36,
                                          position: "absolute",
                                          top: 10,
                                          left: 20,
                                    }}
                              />
                              <TextInput
                                    style={styles.input}
                                    placeholder="Name"
                              />
                        </View>
                        <View style={[styles.inputLayout]}>
                              <Image
                                    source={require("../../../assets/lock.png")}
                                    style={{
                                          width: 36,
                                          height: 36,
                                          position: "absolute",
                                          top: 10,
                                          left: 20,
                                    }}
                              />
                              <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                              />
                              <Image
                                    source={require("../../../assets/eye.png")}
                                    style={{
                                          width: 36,
                                          height: 36,
                                          position: "absolute",
                                          top: 10,
                                          right: 40,
                                    }}
                              />
                        </View>
                        <Pressable style={styles.btn}>
                              <Text style={styles.login}>LOGIN</Text>
                        </Pressable>
                  </View>
                  <View style={[styles.flex1]}>
                        <Text style={styles.footerText}>CREATE ACCOUNT</Text>
                  </View>
            </LinearGradient>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            fontFamily: "roboto",
      },
      flex1: {
            flex: 1,
      },
      header: {
            justifyContent: "center",
      },
      lblLogin: {
            fontSize: 30,
            fontWeight: "700",
            lineHeight: 35,
            marginLeft: 30,
      },
      // INPUT
      form: { justifyContent: "space-between", alignItems: "center" },
      inputLayout: {
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
      },
      input: {
            width: "95%",
            backgroundColor: "#ddbe3b",
            height: 54,
            border: "1px solid #F2F2F2",
            borderRadius: 1,
            placeholderTextColor: "black",
            fontSize: 18,
            fontWeight: "400",
            lineHeight: "21px",
            paddingLeft: "55px",
      },
      btn: {
            width: "95%",
            backgroundColor: "#060000",
            height: 45,
      },
      login: {
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "45px",
            textAlign: "center",
            color: "#ffff",
            margin: "auto",
      },
      // FOOTER
      footerText: {
            marginTop: "40px",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "23px",
            textAlign: "center",
      },
});
