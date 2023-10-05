import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";

export const Layout05 = function () {
      return (
            <View style={styles.container}>
                  <View style={[styles.flex2, styles.loginText]}>LOGIN</View>
                  <View style={[styles.flex3, styles.form]}>
                        <TextInput
                              placeholder="Email"
                              style={styles.inputForm}
                        />

                        <View>
                              <Image
                                    source={require("../../../assets/eye.png")}
                                    style={styles.eye}
                              />
                              <TextInput
                                    placeholder="Password"
                                    style={[styles.inputForm]}
                              />
                        </View>
                        <Pressable style={styles.btn}>
                              <Text style={styles.textLogin}>LOGIN</Text>
                        </Pressable>
                  </View>
                  <View style={[styles.flex1, styles.textContent]}>
                        <Text styles={styles.text}>
                              When you agree to terms and conditions
                        </Text>
                        <Text style={[styles.textLink, styles.text]}>
                              For got your password?
                        </Text>
                        <Text styles={styles.text}>Or login with</Text>
                  </View>
                  <View style={[styles.flex2, styles.footer]}>
                        <View style={[styles.box, styles.rec1]}>
                              <Image
                                    source={require("../../../assets/fbicon.png")}
                                    style={{ width: 36, height: 36 }}
                              />
                        </View>
                        <View style={[styles.box, styles.rec2]}>
                              <Image
                                    source={require("../../../assets/icozalo.png")}
                                    style={{ width: "36px", height: "36px" }}
                              />
                        </View>
                        <View style={[styles.box, styles.rec3]}>
                              <Image
                                    source={require("../../../assets/ggicon.png")}
                                    style={{ width: 35, height: 35 }}
                              />
                        </View>
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
      flex1: {
            flex: 1,
      },
      flex2: {
            flex: 2,
      },
      flex3: {
            flex: 3,
      },
      // LOGIN
      loginText: {
            fontSize: 25,
            fontWeight: "700",
            lineHeight: 29,
            textAlign: "center",
            justifyContent: "center",
      },
      // Form
      form: {
            justifyContent: "space-between",
            padding: 10,
      },
      inputForm: {
            height: 54,
            backgroundColor: "#C4C4C44D",
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 21,
            paddingLeft: 20,
      },
      eye: {
            width: 36,
            height: 36,
            position: "absolute",
            top: 10,
            right: 20,
      },
      btn: {
            backgroundColor: "#E53935",
            height: 45,
            borderRadius: 2,
      },
      textLogin: {
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 29,
            textAlign: "center",
            lineHeight: 45,
            color: "#ffff",
      },
      // text content
      textContent: {
            alignItems: "center",
            justifyContent: "space-between",
      },
      text: {
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 16,
      },
      textLink: {
            color: "#5D25FA",
      },
      box: {
            height: 45,
            width: "31%",
      },
      footer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
      },
      rec1: {
            borderRadius: 1,
            backgroundColor: "#25479B",
            justifyContent: "center",
            alignItems: "center",
      },
      rec2: {
            borderRadius: 2,
            backgroundColor: "#0F8EE0",
            justifyContent: "center",
            alignItems: "center",
      },
      rec3: {
            borderRadius: 1,
            border: "1px solid #25479B",
            justifyContent: "center",
            alignItems: "center",
      },
});
