import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCUXo9Zp-cFXSR-eVbQSfXS8r4uljFvZSc',
      authDomain: 'let-s-auth-this.firebaseapp.com',
      databaseURL: 'https://let-s-auth-this.firebaseio.com',
      projectId: 'let-s-auth-this',
      storageBucket: 'let-s-auth-this.appspot.com',
      messagingSenderId: '27626409458'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  };
}

export default App;
