import React, {Component} from 'react';
import{
  //para saber si esta en ios o android
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableOpacity,
  TextInput, 
  Dimensions
} from 'react-native';


const intructions = Platform.select({
  ios: 'Press cmd+R to reload, \n' + 'cmd+D or shale for dev menu',
  android: 'Double tab R on your keyboard to reload, \n' + 'Shake or press menu button for dev menu' 
});

export default class App extends Component{

  constructor( props, env){
    super (props, env);

    this.state = {
      colorFondo: 'blue'
    }
  }

  cambiaColor(){
    this.setState({colorFondo: 'yellow'})
  }

  render(){
    return (
      <View style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: this.state.colorFondo}}> 
        <Text style = {styles.Hello}> 
          Hola mundo
        </Text>
        <Text style = {styles.intructions}> 
          Intrucciones para crear react
        </Text>

        <TextInput style = {{height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: (Dimensions.get('window').width * 80 / 100),
                                margin: 15 }}
                    onChangeText = {(Text) => this.state({text})}
                    value = {this.state.text} />

        <TouchableOpacity style = {styles.boton} onPress = {this.cambiaColor.bind(this)}>
           <Text style = {styles.textoBoton}>
              Cambia el color
           </Text>
        </TouchableOpacity>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  Hello:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },

  intructions:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

  boton: {
    backgroundColor: 'pink',
    width: 200,
    height: 50,
    borderRadius: 15,
    flexDirection: 'row'
  },

  textoBoton:{
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    flex: 1
  },

  
});