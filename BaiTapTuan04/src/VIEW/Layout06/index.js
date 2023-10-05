import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";
import { RadioButton } from "react-native-paper";

export const Layout06 = function () {
      return (
            <View style={styles.container}>
                  <View style={[styles.flex2, styles.registerForm]}>
                        <Text style={styles.register}>REGISTER</Text>
                  </View>
                  <View style={[styles.flex6]}>
                        <TextInput placeholder="Name" style={styles.txtInput} />
                        <TextInput
                              placeholder="Phone"
                              style={styles.txtInput}
                        />
                        <TextInput
                              placeholder="Email"
                              style={styles.txtInput}
                        />
                        <View
                              style={{
                                    flexDirection: "row",
                                    width: "95%",
                              }}
                        >
                              <Image
                                    source={require("../../../assets/eye.png")}
                                    style={{
                                          width: 36,
                                          height: 36,
                                          position: "absolute",
                                          top: 10,
                                          right: 15,
                                    }}
                              />
                              <TextInput
                                    placeholder="Password"
                                    style={styles.password}
                              />
                        </View>
                        <TextInput
                              placeholder="Birthday"
                              style={styles.txtInput}
                        />
                        <View
                              style={{
                                    flexDirection: "row",
                                    width: "100%",
                                    paddingLeft: "30px",
                              }}
                        >
                              <View
                                    style={{
                                          flexDirection: "row",
                                    }}
                              >
                                    <RadioButton
                                          value="Male"
                                          style={styles.btnRadio}
                                    />
                                    <Text style={styles.textRadio}>Male</Text>
                              </View>

                              <View style={styles.formRadio}>
                                    <RadioButton
                                          value="Female"
                                          style={styles.btnRadio}
                                    />
                                    <Text style={styles.textRadio}>Female</Text>
                              </View>
                        </View>
                  </View>
                  <View style={[styles.flex2]}>
                        <Pressable style={styles.btn}>
                              <Text style={styles.btnText}>REGISTER</Text>
                        </Pressable>
                        <Text style={styles.textContent}>
                              When you agree to terms and conditions
                        </Text>
                  </View>
            </View>
      );
};
const styles = StyleSheet.create({
      container: {
            backgroundColor: "#31AA5230",
            fontFamily: "roboto",
            flex: 1,
      },
      flex2: {
            flex: 2,
            alignItems: "center",
      },
      flex6: {
            flex: 6,
            alignItems: "center",
            justifyContent: "space-around",
      },
      // REGISTER
      registerForm: {
            justifyContent: "center",
            alignItems: "center",
      },
      register: {
            fontSize: 25,
            fontWeight: "700",
            lineHeight: 29,
            textAlign: "center",
      },
      // form
      txtInput: {
            width: "95%",
            backgroundColor: "#C4C4C44D",
            height: 54,
            paddingLeft: 20,
            borderRadius: 1,
      },
      password: {
            flex: 1,
            backgroundColor: "#C4C4C44D",
            height: 54,
            paddingLeft: 20,
            borderRadius: 1,
      },
      btn: {
            backgroundColor: "#E53935",
            height: 45,
            width: "95%",
            borderRadius: 1,
      },
      btnText: {
            textAlign: "center",
            fontWeight: "700",
            fontSize: 20,
            lineHeight: 45,
            color: "#ffff",
      },
      textContent: {
            marginTop: 15,
            fontWeight: 400,
            fontSize: 14,
      },
      btnRadio: {
            width: 23,
            height: 23,
            marginLeft: 40,
      },
      textRadio: {
            height: 23,
            paddingTop: 7,
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 21,
            textAlign: "center",
            marginRight: 30,
      },
      formRadio: {
            flex: 0,
            flexDirection: "row",
            justifyContent: "flex-start",
      },
});
