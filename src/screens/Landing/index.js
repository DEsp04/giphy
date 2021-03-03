import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const LandingScreen = ({navigation}) => { 
  return (
    <View style={styles.container}>
      <Text>Giphy Landing Page</Text>
      <Button
        title="Go To Giphy Page"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go To Search Giphy"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  )
}



export default LandingScreen;