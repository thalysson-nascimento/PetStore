import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase';
firebase.initializeApp(firebaseConfig);

export const createUser = (email, password) => {
    try {
        if (password < 6) {
            alert("Por favor, entre com no mínimo 6 caracteres");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password);
        
        setTimeout(() => {
            userLogin(email, password);
        }, 1000);
    } catch (error) {
        console.log(error);
    }
}

export const userLogin = (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).
        then((user) =>{
            user = firebase.auth().currentUser;
            if (user != null) {
                // function(user){
                    // console.log("===========================================")
                    // console.log("Email:")
                    // console.log(user.email);
                    // console.log("Nome de usuário")
                    // console.log(user.displayName);
                    // console.log("===========================================")
                    // console.log(user);

                    // alert(user.email)
                }
        }, (error) => {
            alert("Erro de autenticação. Email ou password inválidos")
        })
    } catch (error) {
        // console.log(error);
        alert(error);
    }
}

export const logout = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
}