import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#151414",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    textAlign: "right",
    marginBottom: 10,
  },
  input: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    backgroundColor: "#1F1E25",
    height: 56,
    width: 300,
    marginRight: 7,
    borderRadius: 5,
    padding: 10,
    "::placeholder": {
      color: "white",
      fontSize: 20,
      fontWeight: "100",
    },
  },

  inputText: {
    color: "#FFF",
    fontSize: 20,
  },
  button: {
    backgroundColor: "green",
    height: 56,
    width: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  participantsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  participantsList: {
    width: "100%",
    flexDirection: "column",
    padding: 5,
  },
  emptyList: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },
});
