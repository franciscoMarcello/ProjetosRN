import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Conversor from './src/Conversor';
//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=8d25a374006e263d6f22
class  App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA='USD' moedaB='BRL'/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
export default App;
