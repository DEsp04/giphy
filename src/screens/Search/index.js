import React from "react";
import { View, Text, Button, StyleSheet, TextInput, Image, ScrollView } from 'react-native';
import axios from "axios";
import { useEffect, useState } from "react";



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 180,
    width: 180,
  }
  
});




const Search = ({ navigation }) => { 
  
  const [term, setTerm] = useState("");
  const [giphy, setGiphy] = useState([]);



  const fetchSearch = async () => {
    const apikey = "MDuQj0zAyRfJSPKdV0VMNVBe6VAJE81q";
    const url = "http://api.giphy.com/v1/gifs/search"

    const response = axios.get(`${url}?api_key=${apikey}&q=${term}`).then((res) => {
      setGiphy(res.data.data);
    });

    return response;
  };


  const handleSearch = () => { 
    fetchSearch();
  }

  useEffect(() => { 
    handleSearch()
  },[])

  console.log(giphy)
  // console.log(term);


  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Search</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 10,
        }}
        placeholder="Search..."
        onChangeText={((val) => setTerm(val))}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
      <Button
        title="Go to giphy Page"
        onPress={ () => navigation.navigate("Home")}
      />
      <View>
        {giphy.map((item, index) => {
            // console.log(item.images.original.url)
            return (
              <View key={index}>
                <Image
                  style={styles.img}
                  source={{ uri: `${item.images.original.url}` }}
                />
              </View>
            );
          })}
      </View>
      </ScrollView>
    </View>
  )
}



export default Search