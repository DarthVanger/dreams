import AsyncStorage from '@react-native-community/async-storage';

export const saveDreams = async () => {
  try {
    await AsyncStorage.setItem(
      '@MySuperStore:key',
      'I like to save it.'
    );
  } catch (error) {
    // Error saving data
  }
}

export const loadDreams = async () => {
  return [
    'test',
    'shmest asdf asdd',
    'e3',
    '4444',
  ];

  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
