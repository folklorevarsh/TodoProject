import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitItem }) {
  [text, setText] = useState('');

  const changeItem = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Add a New Task'
        onChangeText={changeItem} 
        value={text} 
      />
      <Button color='#E572BA' onPress={() => submitItem(text)} title='Add New ToDo' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderBottomWidth: 3,
    borderBottomColor: '#E572BA',
  },
});




