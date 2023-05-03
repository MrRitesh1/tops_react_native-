import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainBody: { flex: 1 },
  shado: {
    shadowColor: "#2B1B17",
    elevation: 30,
  },
  componetBody: { flex: 1 },
  componet_a: {
    flex: 0.5,
    // height: "100%",
    // width: "100%",
    backgroundColor: "#98AFC7",
  },
  componet_b: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10%",
    bottom: "60%",
    marginLeft: "4%",
  },
  componet_C: { flex: 1.5 },
  componet_b_body: {
    // flex: 1,
    height: "80%",
    width: 370,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: "4%",
    borderRadius: 30,
  },
  componet_b_Text_body: {
    flexDirection: "row",
    height: 30,
  },
  componet_b_Text: {
    borderWidth: 1,
    margin: "1%",
    borderRadius: 20,
    padding: "1%",
    color: "blue",
    backgroundColor: "#E5E4E2",
    textAlign: "center",
  },
  searchBar: {
    borderWidth: 1,
    width: "90%",
    height: "30%",
    margin: "5%",
    borderRadius: 20,
    textAlign: "center",
  },
  componet_C_body_A: {
    marginTop: "30%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // borderBottomWidth: 0.2,

    paddingBottom: "3%",
  },
  // shados: {
  //   // shadowColor: "#2B1B17",
  //   elevation: 5,
  // },

  componet_C_Carcal: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#ff8000",
    marginLeft: "6%",
    marginTop: "6%",
  },
  componet_C_Carcal_text: {
    marginLeft: "4%",
  },
  componet_C_body_B: {
    margin: "4%",
  },
  componet_C_body_B_I: { flex: 1, flexDirection: "row" },
  componet_C_body_B_Images: {
    height: 200,
    width: 150,
    borderRadius: 20,
    margin: "1%",
  },
  componet_C_body_B_Text: {
    flex: 1,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: "90%",
  },
});
