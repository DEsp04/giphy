import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import axios from "axios";
import { useEffect, useState } from "react";



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




const Search = ({ navigation }) => { 
  
  const [term, setTerm] = useState("");
  const [giphy, setGiphy] = useState([]);




  const url = `https://api.giphy.com/v1/gifs/search?api_key=MDuQj0zAyRfJSPKdV0VMNVBe6VAJE81q&${term}`

  const fetchSearch = async () => { 
    const response = await axios.get(url).then((res) => {
      console.log(res)
      setGiphy(res.data);
    })

    return response
  }



  useEffect(() => { 
    fetchSearch()
  },[])




  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <Button
        title="Go To Giphy Page"
        onPress={() => navigation.navigate('Home')}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1
        }}
        placeholder="Search Giphy"
        onChangeText={ ((val) => setTerm(val))}
      />
      <Button
        title="Get giphy"
        onPress={ () => navigation.navigate("Home")}
      />
    </View>
  )
}

