
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BookTransaction extends React.Component{
    render(){
  return (
    <View style={styles.container}>
      <Text>Transaction screen</Text>
     
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
