import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏨 Amerihost Inn Ops AI</Text>
      <Text style={styles.subtitle}>Internal Operations Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "navy",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 8,
  },
});
