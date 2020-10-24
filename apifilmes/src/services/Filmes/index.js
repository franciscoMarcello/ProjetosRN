import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Image, StyleSheet, Modal,Button} from 'react-native';

class Filmes extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible:false
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this)
    }
    entrar(){
        this.setState({modalVisible:true});
    }
    sair(visible){
        this.setState({modalVisible:visible});

    }
    render(){
        const{nome,sinopse, foto} = this.props.data;
        return(
            <View style={styles.viweCard}>
                <View style={styles.card}>
                  <Text style={styles.titulo}>{nome}</Text>
                  <Image 
                  source={{uri: foto}}
                  style={styles.capa}
                  />
                    
                  
                    
                <View style={styles.Areabotao}>
                 <TouchableOpacity style={styles.botao} onPress={ this.entrar}>
                    <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                 </TouchableOpacity>
                </View>
                   
                    <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
                      <View style={styles.sinopsia}>
                         
                            <Text style={styles.textoSinopsia}>{sinopse}</Text>
                            <TouchableOpacity style={styles.btnSair}  onPress={()=> this.sair(false)}>
                                <Text style={styles.btnTexto}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                   
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
card:{
    shadowColor:"#000",
    backgroundColor:"#333",
    shadowOffset:{width:0, height:1},
    shadowOpacity: 0.8,
    margin:15,
    shadowRadius:5,
    borderRadius:5,
    elevation:3,      
},
titulo:{
    fontSize:20,
    fontWeight:'bold',
    padding:15,
    color:'#fff'
},
capa:{
    height:250,
    zIndex:2
},
Areabotao:{
    alignItems:'flex-end',
    marginTop:-40,
    zIndex: 9,
},
botao:{
    width:100,
    backgroundColor:"indigo",
    opacity:1,
    padding:8,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
},
botaoTexto:{
    textAlign:"center",
    color:"#fff"
},
sinopsia:{
    margin:15,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#333",
    borderRadius:15,
    
    

},
textoSinopsia:{
    fontSize:25,
    paddingTop:15,
    color:'#fff'

},
btnSair:{
    width:50,
    backgroundColor:"indigo",
    borderRadius:10,
    marginTop:40
    
},
btnTexto:{
    fontSize:25,
    textAlign:'center',
    color:'#fff',
    
}

});
export default Filmes;