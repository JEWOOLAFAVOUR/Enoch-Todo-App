import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inputData } from './database';

const todo = () => {
  const RenderHeader = () => {
    return (
      <View>
        {/* Greetings */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginVertical: 20 }}>
          <Text style={styles.greeting_text}>Good morning, Jacob</Text>
          <Icon name="trash" size={25} color="#FF6B6B" />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.page_container}>
      {/* Todos */}
      <View style={styles.todo_list_container}>
        <FlatList
          data={inputData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={RenderHeader}
          renderItem={({ item }) => {
            return (
              <View style={styles.todo_container}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: '#333333', fontSize: 16, marginLeft: 20, flex: 1 }}>{item.Todo}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 20 }}>
                    <TouchableOpacity style={{ paddingRight: 30 }}><Icon name="square-o" size={22} color="#B7B7B7" /></TouchableOpacity>
                    <TouchableOpacity><Image source={require('../assets/icons/trash.png')} style={{ width: 25, height: 25 }} /></TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      {/* Add tasks */}
      <View style={styles.input_container}>
        <View style={styles.input_field}>
          <TextInput placeholder="Enter a new To-do" placeholderTextColor={'#B7B7B7'} style={{ paddingLeft: 20 }} />
        </View>
        <TouchableOpacity style={styles.plus_icon}>
          <Image source={require('../assets/icons/plus.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default todo;

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

  greeting_text: {
    fontSize: 25,
    fontWeight: '500',
    color: '#4A90E2',
    flex: 1,
  },

  todo_list_container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 50
  },

  todo_container: {
    height: 50,
    justifyContent: 'center',
    borderColor: '#D1D1D1',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
  },

  input_container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#D1D1D1',
  },

  input_field: {
    height: 45,
    flex: 1,
    borderColor: '#D1D1D1',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
  },

  plus_icon: {
    height: 45,
    width: 45,
    borderColor: '#D1D1D1',
    borderWidth: 2,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
