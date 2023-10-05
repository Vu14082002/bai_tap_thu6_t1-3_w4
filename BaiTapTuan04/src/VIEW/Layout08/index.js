import { LinearGradient } from "expo-linear-gradient";
import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";
import { ReactSVG } from "react-svg";

export const Layout08 = function () {
      return (
            <View style={styles.container}>
                  <View style={[styles.eyeBall]}>
                        <Image
                              source={require("../../../assets/eyeball.svg")}
                              style={{ width: "141px", height: "141px" }}
                        />
                  </View>
                  <View style={[styles.flex2, styles.form]}>
                        <View style={styles.txtStyle}>
                              <View
                                    style={{
                                          position: "absolute",
                                          width: "100%",
                                    }}
                              >
                                    <Image
                                          source={require("../../../assets/ellipse.png")}
                                          style={{
                                                width: 18.1,
                                                height: 16.41,
                                                top: 0,
                                                left: 30,
                                          }}
                                    />
                                    <Image
                                          source={require("../../../assets/subtract.png")}
                                          style={{
                                                width: 30,
                                                height: 13.59,
                                                top: 0,
                                                left: 25,
                                          }}
                                    />
                              </View>
                              <TextInput
                                    style={styles.input}
                                    placeholder="Please input user name"
                              />
                        </View>
                        <View style={styles.txtStyle}>
                              <View
                                    style={{
                                          position: "absolute",
                                          width: "100%",
                                    }}
                              >
                                    <Image
                                          source={require("../../../assets/top.png")}
                                          style={{
                                                width: 23,
                                                height: 12,
                                                top: 0,
                                                left: 30,
                                          }}
                                    />

                                    <View>
                                          <Image
                                                source={require("../../../assets/bottom.png")}
                                                style={{
                                                      width: 32,
                                                      height: 19,
                                                      top: 0,
                                                      left: 25,
                                                }}
                                          />
                                          <Image
                                                source={require("../../../assets/center.png")}
                                                style={{
                                                      width: 3,
                                                      height: 7,
                                                      top: 6,
                                                      left: 39,
                                                      position: "absolute",
                                                }}
                                          />
                                    </View>
                              </View>
                              <TextInput
                                    style={styles.input}
                                    placeholder="Please input password"
                              />
                        </View>
                  </View>
                  <View style={[styles.flex2, styles.layoutBtn]}>
                        <Pressable style={styles.btn}>
                              <Text style={styles.textBtn}>LOGIN</Text>
                        </Pressable>
                        <View
                              style={{
                                    width: "80%",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                              }}
                        >
                              <Text style={styles.textContent}>Register</Text>
                              <Text style={styles.textContent}>
                                    Forgot Password
                              </Text>
                        </View>
                  </View>
                  <View style={[styles.flex2, styles.footer]}>
                        <View style={styles.group6}>
                              <Image
                                    source={require("../../../assets/line.png")}
                                    style={{
                                          width: "62px",
                                          height: "1px",
                                          position: "absolute",
                                          top: 11,
                                          left: 40,
                                    }}
                              />
                              <Text style={styles.textGroup6}>
                                    Other Login Methods
                              </Text>
                              <Image
                                    source={require("../../../assets/line.png")}
                                    style={{
                                          width: "62px",
                                          height: "1px",
                                          position: "absolute",
                                          top: 11,
                                          right: 40,
                                    }}
                              />
                        </View>

                        <View style={styles.groupIcon}>
                              <View style={styles.rec1}>
                                    <View>
                                          <Image
                                                style={{
                                                      width: 19,
                                                      height: 19,
                                                      position: "absolute",
                                                      top: -10,
                                                      right: -10,
                                                }}
                                                source={require("../../../assets/plusicon.png")}
                                          />
                                          <Image
                                                style={{
                                                      width: 38,
                                                      height: 42,
                                                }}
                                                source={require("../../../assets/usericonfooter.png")}
                                          />
                                    </View>
                              </View>
                              <View style={styles.rec2}>
                                    <Image
                                          style={{ width: 56, height: 47 }}
                                          source={require("../../../assets/wifi.svg")}
                                    />
                              </View>
                              <View style={styles.rec3}>
                                    <Image
                                          style={{ width: 32, height: 45 }}
                                          source={require("../../../assets/fb.png")}
                                    />
                              </View>
                        </View>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            fontFamily: "roboto",
      },
      flex2: {
            flex: 2,
      },
      eyeBall: {
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
      },
      // FORM
      form: {
            justifyContent: "space-around",
      },
      // username
      txtStyle: {
            flexDirection: "row",
            justifyContent: "center",
      },

      input: {
            width: "90%",
            height: 40,
            border: "1px solid #c4c4c4",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            placeholderTextColor: "#c4c4c4",
            fontSize: 18,
            fontWeight: "400",
            paddingLeft: 50,
      },
      layoutBtn: {
            alignItems: "center",
            justifyContent: "space-around",
      },
      btn: {
            backgroundColor: "#386FFC",
            height: "48px",
            borderRadius: 10,
            width: "80%",
      },
      textBtn: {
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "48px",
            textAlign: "center",
            color: "#ffff",
      },
      textContent: {
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "21px",
      },
      // FOOTER
      footer: {
            justifyContent: "space-around",
      },
      // GROUP 6
      group6: {
            flexDirection: "row",
            justifyContent: "center",
      },
      textGroup6: {
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "21px",
      },
      // GROUP ICON
      groupIcon: {
            flexDirection: "row",
            justifyContent: "space-around",
      },
      rec1: {
            backgroundColor: "#3AB4FF",
            width: 74,
            height: 74,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
      },
      rec2: {
            backgroundColor: "#F4AA47",
            width: 74,
            height: 74,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
      },
      rec3: {
            backgroundColor: "#3a579c",
            width: 74,
            height: 74,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
      },
});
