import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});



const FetchRandomGif = ({ gif }) => { 

  return (
    <View style={styles.container}>
     {gif? 
                <View>
                    <Text>{gif.title ? gif.title : "No Title"}</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: gif.image_url,
          }}
          />
          <Text>{"\n"}By: {gif.username}</Text>
                </View>
                :
                <Text>Loading...</Text>
            }
    </View>
  )
}


export default FetchRandomGif;