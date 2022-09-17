import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello react native!
      </Text>

      <Button title="content button"/>
      <Button title="content button"/>
      <Button title="content button"/>
      
      <StatusBar style="auto"/>
    </View>
  );
}

interface ButtonProps {
  title: string
}

function Button (props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.textButton}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'green',
    fontSize: 40
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 10,
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
    padding: 10
  }
});
