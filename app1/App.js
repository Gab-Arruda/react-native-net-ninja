/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import Header from './components/Header.js';
import ToDoItem from './components/ToDoItem.js';
import AddToDo from './components/AddToDo.js';

function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: 1},
    {text: 'create app', key: 2},
    {text: 'play on the switch', key: 3},
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const submitHandler = text => {
    setTodos(prevTodos => {
      return [{text: text, key: Math.random().toString()}, ...prevTodos];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
