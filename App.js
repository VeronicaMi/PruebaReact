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
  Dimensions, 
  ScrollView, 
  WebView
} from 'react-native';


const intructions = Platform.select({
  ios: 'Press cmd+R to reload, \n' + 'cmd+D or shale for dev menu',
  android: 'Double tab R on your keyboard to reload, \n' + 'Shake or press menu button for dev menu' 
});

export default class App extends Component<{}>{

  constructor( props, env){
    super (props, env);

    this.state = {
      colorFondo: 'blue',
      direccion: 'http://google.com'
    }
  }

  cambiaColor(){

    this.setState({colorFondo: this.state.text})
    /*if(this.state.colorFondo == 'yellow'){
      this.setState({colorFondo: 'blue'});
    }else if(this.state.colorFondo == 'blue'){
      this.setState({colorFondo: 'yellow'});
    }*/
  }

  cambiarPagina(){
    this.setState({direccion: this.state.text})
  }

  render(){
    return (
      <ScrollView>
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: this.state.colorFondo, }}> 

        <Image style = {{width: 700, height:700}}
                source = {{uri: 'https://cdn.oem.com.mx/elesto/2019/02/2.jpg'}}
                />

          <Text style = {styles.Hello}> 
            Hola mundo
          </Text>
          <Text style = {styles.intructions}> 
            Intrucciones para crear react
          </Text>

          <WebView
            source={{uri: this.state.direccion}}
            style={{width: Dimensions.get('window').width, height: 500, backgroundColor: 'white'}}
          />

          <TextInput style = {{height: 40,
                                  borderColor: 'gray',
                                  borderWidth: 1,
                                  width: (Dimensions.get('window').width * 80 / 100),
                                  margin: 15 }}
                      onChangeText = {(text) => this.setState({text})}
                      value = {this.state.text} />

          <TouchableOpacity style={styles.botonVerde} onPress={this.cambiarPagina.bind(this)}>
            <Text style={styles.textoBoton}>cambiar pagina</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress = {this.cambiaColor.bind(this)}>
            <Text style = {styles.textoBoton}>
                Cambia el color
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 30,
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
    alignItems: 'center',
    flexDirection: 'row'
  },
    
    botonVerde: {
    backgroundColor: 'green',
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  
  textoBoton:{
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    flex: 1
  },

  
});