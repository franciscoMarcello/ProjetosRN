import React, {useState,useContext} from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, Input,AreaInput, SubmitButton, SubmitText  } from '../Signln/styles';
import { AuthContext } from "../../contexts/auth";


export default function Signln() {
  const [Email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const { signUp } = useContext(AuthContext);

  function handSignUp(){
    signUp(Email,senha,nome);
  }
 return (
   <Background>
     <Container
     behavior={Platform.OS === 'ios' ? 'padding' :''}
     >
       <Logo source={require('../../assets/Logo.png')}/>
       <AreaInput>
       <Input
       placeholder="Nome"
       autoCorrect={false}
       autoCapitalize="none"
       defaultvalue={nome}
       onchangeText={(text)=> setNome(text)}
       />
       </AreaInput>

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

       <SubmitButton onPress={handSignUp}>
         <SubmitText>Cadastrar</SubmitText>
       </SubmitButton>

       

      </Container>
   </Background>
  );
}