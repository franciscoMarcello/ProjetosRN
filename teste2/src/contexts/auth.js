import React,{useState,createContext} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null);

    async function signUp(Email, senha, nome){
        await firebase.auth().createUserWithEmailAndPassword(Email,senha)
        .then(async(value)=>{
            let uid = value.user.uid
            await firebase.database().ref('users').child(uid).set({
                saldo:0,
                nome: nome
            })
            .then(()=>{
                let data={
                    uid: uid,
                    nome: nome,
                    Email:value.user.Email,
                };
                setUser(data);
            })
        })
    }
    return(
        <AuthContext.Provider value={{signed: !!user ,user, signUp}}>
            {children}

        </AuthContext.Provider>

    );
}
export default AuthProvider;