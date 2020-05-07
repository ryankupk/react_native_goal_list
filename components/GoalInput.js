import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    //initialize enteredGoal as empty string, create function to set goal
    const [enteredGoal, setEnteredGoal] = useState('');


    //function to set entered goal based on text entered by user
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    //on addition of goal, call add goal function with entered goal, clear goal text
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={props.title}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color={"red"} onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>

    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        //column to be explicit
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center"
      },
      input: { 
        width: "80%", 
        borderColor: "black", 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%"
      },
      button: {
          width: "40%"
      }
});


export default GoalInput;