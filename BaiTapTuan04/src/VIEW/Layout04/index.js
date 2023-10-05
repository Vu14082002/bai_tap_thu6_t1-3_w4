import { LinearGradient } from "expo-linear-gradient";
import {
      Image,
      Pressable,
      StyleSheet,
      Text,
      TextInput,
      View,
} from "react-native";

export const Layout04 = function () {
      return (
            <LinearGradient
                  style={styles.container}
                  colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
            >
                  <View style={[styles.flex3, styles.header]}>
                        <Text style={styles.headerContent}>CODE</Text>
                  </View>
                  <View style={styles.flex3}>
                        <Text style={styles.bodyContent}>VERIFICATION</Text>
                        <Text style={styles.bodyContent1}>
                              Enter ontime password sent on ++849092605798
                        </Text>
                        <View
                              style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                              }}
                        >
                              {Array.from({ length: 6 }).map((_, index) => {
                                    return <View style={styles.box}></View>;
                              })}
                        </View>
                  </View>
                  <View style={styles.flex2}>
                        <Pressable style={styles.btn}>
                              <Text style={styles.footerContent}>
                                    VERIFY CODE
                              </Text>
                        </Pressable>
                  </View>
            </LinearGradient>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
      },
      flex3: {
            flex: 3,
            justifyContent: "space-around",
            alignItems: "center",
      },
      flex2: {
            flex: 2,
            alignItems: "center",
      },
      // header
      header: {
            justifyContent: "center",
            alignItems: "center",
      },
      headerContent: {
            fontSize: 60,
            fontWeight: 700,
            linHeight: 70,
      },
      // body
      bodyContent: {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 23,
            textAlign: "center",
      },
      bodyContent1: {
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 18,
            textAlign: "center",
            width: "80%",
      },
      box: {
            width: 50,
            height: 50,
            border: "1px solid black",
      },
      // footer
      footerContent: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 21,
            textAlign: "center",
      },
      btn: {
            backgroundColor: "#E3C000",
            justifyContent: "center",
            width: "95%",
            height: 50,
      },
});
