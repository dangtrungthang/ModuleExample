/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,NativeModules,TouchableOpacity} from 'react-native';

const Contacts=NativeModules.ContactsManager;


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      texto:'NaN',
    };
  }
  saludo=()=>{
  Contacts.saludo("Thắng",(e)=>{
    this.setState({texto:e});
  });
    }
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.saludo}>
        <Text> Click aaaa</Text>
        <Text>{this.state.texto}</Text>
       </TouchableOpacity> 
       
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
