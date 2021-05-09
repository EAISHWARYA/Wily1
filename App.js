
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransaction from './screens/BookTransactionScreen';
import Search from './screens/Search'
export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
     
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
 
const AppNavigator=createBottomTabNavigator({
  BookTransaction:BookTransaction,
  Search:Search
})

const AppContainer=createAppContainer(AppNavigator)