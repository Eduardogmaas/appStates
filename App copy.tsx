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
import {View, Text, Button, GestureResponderEvent} from 'react-native';

type AppProps = { };
type AppState = {nome: string};

class App extends Component<AppProps, AppState>{
  constructor(props: AppProps){
    super(props);
    this.state = {
      nome: 'TADS'
    }
  }

  mudar = (event?: GestureResponderEvent) => {
    this.setState ({
      nome: 'Tecnologia em Analise e Desenvolvimento de Sistemas'
    });
    this.mudar = this.mudar.bind(this);
  }

  render(){
    return(
      <View style = {{marginTop: 20}}>
        <Button title="Mudar State" onPress={this.mudar}></Button>
        <Text style={{fontSize: 23, color: 'green', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}

export default App;