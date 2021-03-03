import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FetchRandomGif from '../../component/FetchRandomGif';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

const HomeScreen = () => { 

  const [gif, setGif] = useState({});

  const url = `https://api.giphy.com/v1/gifs/random?api_key=MDuQj0zAyRfJSPKdV0VMNVBe6VAJE81q`;


  const fetchRandomGif = async () => { 
    const response = await axios.get(url);
    setGif(response.data.data);
  }

  useEffect(() => {
    fetchRandomGif()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Welcome to React Giphy</Text>
      <FetchRandomGif gif={gif} />
      <Button
        title="Display gif!"
        onPress={fetchRandomGif}
      />
    </View>
  )
}

export default HomeScreen