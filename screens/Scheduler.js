import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function Scheduler() {
  const [shifts, setShifts] = useState([
    { id: 1, name: "Alice", shift: "Morning" },
    { id: 2, name: "Bob", shift: "Evening" },
  ]);

  const toggleShift = (id) => {
    setShifts((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, shift: s.shift === "Morning" ? "Evening" : "Morning" } : s
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shift Scheduler</Text>
      <FlatList
        data={shifts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.shiftRow}>
            <Text style={styles.shiftText}>{item.name} - {item.shift}</Text>
            <Button title="Toggle" onPress={() => toggleShift(item.id)} color="navy" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold", color: "navy", marginBottom: 10 },
  shiftRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  shiftText: { fontSize: 16 },
});
