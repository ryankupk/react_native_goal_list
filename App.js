import React, { useState } from 'react';
import { StyleSheet, View, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  //initialize courseGoals as empty list with setCourseGoals setter function
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //function to add goal to list of goals
  //receives title of goal as parameter
  //returns updated list with new goal appended
  const addGoalHandler = goalTitle => {
  setCourseGoals(() => 
  [...courseGoals, 
      {id: Math.random().toString(), value: goalTitle}
  ]);
  setIsAddMode(false);
  };

  //function to remove goal from list of goals
  //receives ID of goal to be removed
  //returns filtered list of goals without the goal that matches the ID passed to function
  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals => {
      //filter takes function as input that removes the item if true, leaves it if false
      return currentGoals.filter((goal) => goal.id !== goalID);
    });

  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => 
        <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
