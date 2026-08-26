import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // LOGIN
  container: {
    flex: 1,
    backgroundColor: "#6eebaf",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    marginBottom: 6,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 13,
    marginBottom: 18,
  },

  forgotPassword: {
    color: "#2563eb",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    height: 48,
    backgroundColor: "#28915e",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  // EXPLORER
  imageButton: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  fullImage: {
    width: "100%",
    height: "100%",
  },
});