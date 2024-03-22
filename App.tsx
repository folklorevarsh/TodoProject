import React, { useState } from 'react';
import { Alert, StyleSheet, Keyboard, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import Header from './components/mainHeader';
import TodoItem from './components/addAnItem';
import AddTodo from './components/addTask';

export default function App() {
  const [todoItems, setTodoItem] = useState([
    { text: 'Call Mom', key: '1' },
    { text: 'Finish Javascript Assignment', key: '2' },
    { text: 'Buy groceries on the way home', key: '3' },
  ]);

  const pressItem = (key: string) => {
    setTodoItem(oldTodoItem => {
      return oldTodoItem.filter(todoItems => todoItems.key !== key);
    });
  };

  const submitItem = (text: string) => {
    if(text.length > 5){
      setText('');
      setTodoItem(oldTodoItem => {
        return [
          { text, key: Math.random().toString() },
          ...oldTodoItem
        ];
      });
    } else {
      Alert.alert('A little hiccup!', 'Your Todo must be over 5 characters long. Please try again', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitItem={submitItem} />
          <View style={styles.list}>
            <FlatList
              data={todoItems}
              renderItem={({ item }) => (
                <TodoItem item={item} pressItem={pressItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7C3E4', // change the background color to a dark color
  },
  content: {
    padding: 50,
  },

});