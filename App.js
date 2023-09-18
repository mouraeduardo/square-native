import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.quadradoOne}>
        <Text style={styles.textoQuadrado}>Mensagem no Quadrado</Text>
      </View>
      <View style={styles.quadradoTwo}>
        <Text style={styles.textoQuadrado}>Mensagem no Quadrado</Text>
      </View>
      <View style={styles.quadradoThree}>
        <Text style={styles.textoQuadrado}>Mensagem no Quadrado</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },   
  quadradoOne: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  quadradoTwo: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    textAlign: 'center',
    
  },
  quadradoThree: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textoQuadrado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
