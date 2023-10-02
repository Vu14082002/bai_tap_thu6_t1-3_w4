import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      container: {
            backgroundColor: "#00CCF9",
            fontFamily: "Roboto",
            flex: 1,

            paddingBottom: 40,
      },
      top: {
            flex: 1,
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
      },
      bottom: {
            flex: 1,
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginLeft: 30,
            marginRight: 30,
            flexWrap: "wrap",
      },
      header: {
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 29.3,
            textAlign: "center",
      },
      content: {
            marginTop: 75,
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 17.58,
            textAlign: "center",
      },
      button: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            color: "black",
      },
      btn: {
            width: 119,
            height: 48,
            backgroundColor: "#E3C000",
            justifyContent: "center",
      },
      btnText: {
            fontSize: 20,
            lineHeight: 23.44,
            textAlign: "center",
            fontWeight: 700,
      },
      work: {
            fontSize: 18,
            lineHeight: 21.09,
            textAlign: "center",
            fontWeight: 700,
      },
});
