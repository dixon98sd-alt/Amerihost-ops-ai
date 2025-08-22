import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function Rooms() {
  const [rooms, setRooms] = useState([
    { number: 101, status: "Clean" },
    { number: 102, status: "Dirty" },
    { number: 103, status: "Occupied" },
  ]);

  const toggleStatus = (index) => {
    const newRooms = [...rooms];
    newRooms[index].status =
      newRooms[index].status === "Clean" ? "Dirty" : "Clean";
    setRooms(newRooms);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room Status</Text>
      <FlatList
        data={rooms}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.roomRow}>
            <Text style={styles.roomText}>Room {item.number} - {item.status}</Text>
            <Button title="Toggle" onPress={() => toggleStatus(index)} color="navy" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold", color: "navy", marginBottom: 10 },
  roomRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  roomText: { fontSize: 16 },
});
