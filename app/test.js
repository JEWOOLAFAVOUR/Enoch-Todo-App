import { Alert, StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inputData } from './database';
import { StatusBar } from 'expo-status-bar';


const todo = () => {

    // const food = 'eggbuns';
    // let mercyFavourite = food;

    const [todos, setTodos] = useState(inputData);
    let [name, setName] = useState('')

    console.log('todos datas ', todos)

    const handleDeleteAll = () => {
        console.log('ok')
        Alert.alert('Delete Todos', 'Are you sure?', [
            {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'Yes', onPress: () => {
                    setTodos([])
                }
            },
        ]);
        // setTodos([])
    };

    const addData = () => {
        if (name.length < 2) {
            ToastAndroid.show('enter name', ToastAndroid.SHORT)
        } else {
            let newTodo = {
                id: Math.random(),
                todo: name,
                isChecked: false,
            };
            setTodos([...todos, newTodo])
            setName('')
        }
    };

    const deleteTodo = (jacob) => {
        console.log(jacob)

        const newTodo = todos.filter((item) => {
            return item.id !== jacob
        });

        setTodos(newTodo)

    }

    return (
        <View style={styles.page_container}>
            {/* HEADER  */}
            <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold', flex: 1 }}>Hi Jacob,</Text>
                <TouchableOpacity onPress={() => handleDeleteAll()} >
                    <Icon name="trash" size={25} color="#FF6B6B" />
                </TouchableOpacity>
            </View>
            {/* Todos */}
            <StatusBar />
            <View >
                <FlatList
                    data={todos}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.todo_container}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: '#333333', fontSize: 16, marginLeft: 20,
                                        flex: 1, textDecorationLine: item.isChecked ? 'line-through' : 'none'
                                    }}>{item.todo}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                                        <TouchableOpacity >
                                            <Image
                                                source={item.isChecked
                                                    ? require('../assets/icons/check2.png')
                                                    : require('../assets/icons/check.png')
                                                }
                                                style={{ height: 22, width: 22, marginRight: 10 }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                                            <Image source={require('../assets/icons/trash.png')} style={{ width: 22, height: 22 }} />
                                        </TouchableOpacity>
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
                    <TextInput
                        placeholder="Enter a new To-do"
                        placeholderTextColor={'#B7B7B7'}
                        style={{ paddingLeft: 20 }}
                        value={name}
                        onChangeText={(v) => setName(v)}
                    />
                </View>
                <TouchableOpacity onPress={() => addData()} style={styles.plus_icon}>
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
        paddingTop: 50,
        paddingHorizontal: 20,
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
