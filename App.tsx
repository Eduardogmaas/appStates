// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//https://reactnative.dev/docs/getting-started documentação do react, precisa utilizar pq n vai dar pra gente ver todo o conteudo
import React, {Component} from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

// type AppProps = { };
// type AppState = {nome: string};

class App extends Component<AppProps, AppState>{
 state: AppState = {nome: ''};

  // mudar = (event?: GestureResponderEvent) => {
  //   this.setState ({
  //     nome: 'Tecnologia em Analise e Desenvolvimento de Sistemas'
  //   });
  //   this.mudar = this.mudar.bind(this);
  // }

  // entrarComNome = (nome: string) =>{
  //   this.setState({nome});
  // }

  render(){
    return(
      // <View style = {{marginTop: 20}}>
      //   <Button title="Mudar State" onPress={() => this.entrarComNome('TADS2')}></Button>
      //   <Text style={{fontSize: 23, color: 'green', textAlign: 'center'}}>
      //     {this.state.nome}
      //   </Text>
      // </View>
      <View style={styles.area}>
      <Text style={styles.textoPrincipal}> Texto 01 </Text>
      <Text style={styles.alinhaTexto}> Texto 02 </Text>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}> Texto 03 </Text>
      <Text> Texto 04 </Text>
      <Text> Texto 05 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40
  },
  textoPrincipal:{
    fontSize: 25,
    color: 'red'
  },
  alinhaTexto:{
    textAlign: 'center'
  }
})
export default App;