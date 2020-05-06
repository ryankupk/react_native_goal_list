import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
    //initialize enteredGoal as empty string, create function to set goal
    const [enteredGoal, setEnteredGoal] = useState('');

    //function to set entered goal based on text entered by user
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course goal" 
                style={styles.input}
                onChangeText={goalInputHandler}
                value={props.title}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)}/>
         </View>

    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center"
      },
      input: { 
        width: "80%", 
        borderColor: "black", 
        borderWidth: 1, 
        padding: 10
      }
});


export default GoalInput;