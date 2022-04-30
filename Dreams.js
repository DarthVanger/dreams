import { useState, useEffect } from 'react';
import { loadDreams } from './storage';
import { StyleSheet, Text, View } from 'react-native';
import { Dream } from './Dream';

export const Dreams = () => {
  const [dreams, setDreams] = useState();

  useEffect(async () => {
    const dreams = await loadDreams();
    setDreams(dreams);
  }, []);

  console.log('dreams: ', dreams);
  return (
    <View style={styles.container}>
      { dreams?.map(dream => <Dream dream={dream} />) }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    //justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '1em',
  },
});
