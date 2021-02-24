import React, {useState} from 'react';
import { View,Text,Platform } from 'react-native';
import { Background, Container, Logo, Input,AreaInput, SubmitButton, SubmitText ,Link,LinkText } from './styles';
import {useNavigation} from '@react-navigation/native'



export default function Signln() {
  const Navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


 
 return (
   <Background>
     <Container
     behavior={Platform.os == 'ios' ? 'padding' :''}
     >
       <Logo source={require('../../assets/Logo.png')}/>
       <AreaInput>
       <Input
       placeholder="Email"
       autoCorrect={false}
       autoCapitalize="none"
       defaultvalue={Email}
       onchangeText={(text)=> setEmail(text)}
       />
       </AreaInput>

       <AreaInput>
       <Input
       placeholder="Senha"
       autoCorrect={false}
       autoCapitalize="none"
       defaultvalue={senha}
       onchangeText={(text)=> setSenha(text)}
       />
       </AreaInput>

       

       <SubmitButton>
         <SubmitText>Acessar</SubmitText>
       </SubmitButton>

       <Link onPress={()=> Navigation.navigate('SignUp')}>
        <LinkText>Criar uma conta!</LinkText>
       </Link>

      </Container>
   </Background>
  );
}