import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './Background';
import { ForeGround } from './ForeGround';
import { Dreams } from './Dreams';
import { AddDream } from './AddDream';
import { loadDreams, saveDreams } from './storage';

import { colors } from './theme';

export default function App() {
  const [state, setState] = useState({});
  const [dreams, setDreams] = useState([]);

  useEffect(async () => {
    const savedDreams = await loadDreams();
    setDreams(savedDreams);
  }, []);

  const handleAddButtonPress = () => {
    const newDreams = [...dreams];
    newDreams.push({
      id: dreams.length + 1,
      text: 'New Dream',
      dateCreated: (new Date()).toISOString(),
    });

    setDreams(newDreams);
    saveDreams(newDreams);
  };

  const handleDreamChange = (dream) => {
    const updatedDreams = dreams.map(item => {
      if (item.id === dream.id) {
        return {
          ...item,
          ...dream,
        };
      } else {
        return item;
      }
    });

    setDreams(updatedDreams);
    saveDreams(updatedDreams);
  };

  return (
    <View style={styles.container}>

      <Background />
      <ForeGround>
        <Dreams dreams={dreams} onDreamChange={handleDreamChange} />
        <AddDream onPress={handleAddButtonPress} />
      </ForeGround>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: '1em',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: '2.5em',

  },
});
