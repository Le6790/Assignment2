import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    button: {
      flex:2,
      fontFamily: "monospace",
      backgroundColor: 'lightblue',
      padding: 5,
      margin: 10,
      width: 200,
      borderRadius:50,
      textAlign: "center",
      alignItems: "center"
      


    },
    box1: {
      flex: 4, // try using flex

      backgroundColor: 'blue'
    },
    CounterBox:{
      fontFamily: 'monospace',
      backgroundColor:'#ef553a',
      alignItems: "center",
      textAlign: "center",
      width:400,
      padding:5, 
      borderRadius:10,
      fontSize:50
    },
    
    Titled:{
      fontFamily:'monospace',
      fontSize: 20,
    }
  
});