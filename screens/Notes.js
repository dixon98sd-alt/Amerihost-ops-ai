import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Notes() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Staff Notes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter note..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Add Note" onPress={addNote} color="navy" />
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.note}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "white" },
  title: { fontSize: 20, fontWeight: "bold", color: "navy", marginBottom: 10 },
  input: { borderWidth: 1, borderColor: "gray", padding: 8, marginBottom: 10 },
  note: { fontSize: 16, padding: 5, borderBottomWidth: 1, borderBottomColor: "#eee" },
});
