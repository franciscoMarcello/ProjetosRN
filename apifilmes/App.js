import React, { Component } from 'react';
import {
  
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList
} from 'react-native';
import api from './src/services/api';
import Filmes from './src/services/Filmes';
class App extends Component{
constructor(props){
  super(props);
  this.state = {
    filmes:[],
    loading:true
  };
}
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes:response.data,
      loading:false
    })
  }
  render(){

    if(this.state.loading){
      return(
        <View style={{alignContent:"center", justifyContent:'center',flex:1}}>
          <ActivityIndicator color="#09a6ff" size={40}/>
        </View>
      )
    }else{

    }
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item=> item.id.toString()}
        renderItem={({item})=> <Filmes data={item}/>}
        />


      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#333'
    
    
  }

});

export default App;
