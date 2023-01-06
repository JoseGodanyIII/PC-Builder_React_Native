import React from 'react';
import { StyleSheet,View } from 'react-native';
import colors from './components/config/colors';
import HomeScreen from './components/screens/HomeScreen';


const App = () => {
  return (
   <View style={{flex:1, backgroundColor: colors.dark}}>
    <HomeScreen />
   </View>
  );
};

export default App;

const styles = StyleSheet.create({});
