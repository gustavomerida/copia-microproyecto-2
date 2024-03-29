/* eslint-disable no-unused-vars */
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    } from 'firebase/auth';
import {auth} from '../firebase';

export async function loginWithCredentials(email, password){
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user;
    }catch (e){
        console.error(e);
        return null;
    }
}

export async function registerWithCredentials(email, password){
    try{
        console.log(email, password)
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    }catch (e){
        console.error(e);
        return null;
    }
}

export async function logOut(){
     await signOut(auth);
        console.log('Sesión cerrada')
}
