import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Conversor from './src/Conversor';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

});