import { useState, useEffect } from 'react';
import { loadDreams } from './storage';
import { StyleSheet, Text, View } from 'react-native';
import { Dream } from './Dream';

export const Dreams = ({ dreams, onDreamChange }) => {
  const DreamsList = () => dreams?.map(dream => (
    <Dream
      dream={dream}
      key={dream.id}
      onChange={onDreamChange}
    />
  ));

  return (
    <View style={styles.container}>
      <DreamsList />
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
