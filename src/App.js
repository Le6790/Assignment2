/**
 * Assignment 2 
 * Kent Le A01976660
 * 1/25/19
 * 
 * 
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './Components/Button'
import Counter from './Components/Counter'
import styles from './styles/Basic'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      value: 0
    }

    this.nonState = 0;
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Titled}>Assignment 2</Text>
        
        <Counter counter = {this.state.value}></Counter>

        <Button title = 'Increment'
        //passed to the onPressed in Button
        WhenPressed = {this.IncrementValue.bind(this)}> 
        </Button> 

        <Button title = 'Decrement'
        //pass to the onPressed in Button
        WhenPressed = {this.DecrementValue.bind(this)}>
        </Button> 

      </View>
    );
  }

  //Increment the value
  IncrementValue(){
    this.setState((prevStated) => {return {
      
      value: prevStated.value + 1
    }},console.log("Incremented the value"));
  }
  //Decrement the value
  DecrementValue(){
    this.setState((prevState) => {return {
      value: prevState.value - 1
    }}),console.log("Decremented the value");
  }
  
}


