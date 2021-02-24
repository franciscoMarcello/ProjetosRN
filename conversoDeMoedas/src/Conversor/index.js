import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import api from '../Conversor/services/api';

///convert?q=USD_PHP&compact=ultra&apiKey=8d25a374006e263d6f22
class  Conversor extends Component{

    constructor(props){
        super(props);
        this.state = {
            moedaA:props.moedaA,
            moedaB:props.moedaB,
            moedaB_valor:0,
            valorConvertido:0

        };
        this.converter = this.converter.bind(this);
    }
    async converter(){
        const response = await api.get('convert?q=USD_PHP&compact=ultra&apiKey=8d25a374006e263d6f22');
        console.log(response.data);
    }
  render(){
    const { moedaA, moedaB} = this.props;
    return(
        
      <View style={styles.container}>
          <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
        
        <TextInput
        placeholder='Valor a ser convertido'
        style={styles.areaIpult}
        onChangeText={(moedaB_valor) => this.setState({moedaB_valor})}
        keyboardType='numeric'
        />

        <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
            <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valorConvertido}>
            {this.state.valorConvertido}
        </Text>
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
    titulo:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000'
    },
    areaIpult:{
        width:280,
        height:45,
        backgroundColor:'#ccc',
        textAlign:'center',
        marginTop:15,
        fontSize:20,
        color:'#000',
        borderRadius:5
    },
    botaoArea:{
        backgroundColor:"#ff0000",
        borderRadius:5,
        marginTop:15,
        height:45,
        width:150,
        justifyContent:'center',
        alignItems:'center'
    },
    botaoTexto:{
        fontSize:17,
        fontWeight:'bold',
        color:'#fff',
    },
    valorConvertido:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000',
        marginTop:15

    },
});
export default Conversor;
