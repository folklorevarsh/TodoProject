import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({ pressItem, item }) {
  return (
    <TouchableOpacity onPress={() => pressItem(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 18,
    borderColor: '#E572BA',
    borderWidth: 3,
    borderStyle: "solid", // Change border style to "solid"
    borderRadius: 10,
  }
});



