import { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>

      <Button
        title={`Contador de clicks: ${count}`}
        onPress={() => setCount(count + 1)}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#5C6AC4',
    fontSize: 24,
    marginBottom: 20,
  },
})
