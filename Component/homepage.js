import React,{useEffect,useState} from "react";
import {View, Text, Pressable, FlatList, Image, Modal, TouchableOpacity, TextInput} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import UpDelete from "./updelpage";
import Axios from 'axios';

  const Item = ({navigation,id,nom,prenom,moyem,moyin,niveau}) => {
  
    const [show1,setShow1] = useState(false);
    console.log(niveau)
    const mod1 = () => setShow1(c => !c)
    return (
      <Pressable style={styles.card} onPress={() => navigation.navigate('Update',{
        id:id,nom:nom,prenom:prenom,moyem:moyem,moyin:moyin,niveau:niveau
      })} >
          <View>
            <Text style={{fontSize:20}}>{nom} {prenom}</Text>
          </View>
            <Text style={{fontSize:18,fontWeight:700}}>{niveau}</Text>
      </Pressable>
    )
  }
  


const HomePage = ({navigation}) => {
    const [dada,setDada] = useState([])
    const [left,setUp] = useState()

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (text) => {
      setSearchTerm(text);
      const results = dada.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
    };

    console.log(searchResults)

    const getDada = () => {
    Axios.get('http://192.168.1.13:8000/stud/') 
      .then(res => {
        console.log(res.data)
        setSearchResults(res.data)
        setDada(res.data)
      })
      .catch(err => {
        console.log("error :",err)
      })
    }
    

    useEffect(() =>{
      getDada()
    },[])

    console.log(left)
  
    return (
        <View style={styles.containere}>
            <View style={styles.conteneur}>
                <TextInput
                    placeholder="Rechercher un nom"
                    onChangeText={handleSearch}
                    value={searchTerm}
                    style={styles.kard}
                />
                <FlatList 
                    style={{width:"90%",height:"100%",backgroundColor:"#E3DFFD"}}
                    horizontal={false}
                    data={searchResults}
                    renderItem={({item}) => <Item navigation={navigation} id={item.id} nom={item.name} prenom={item.prename} niveau={item.classe.value} moyem={item.moyenmath} moyin={item.moyeninfo} />}
                    keyExtractor={item => item.id}
                />
            </View>
            <TouchableOpacity style={styles.add} onPress={getDada}>
                <Ionicons name="refresh-circle-outline" size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default HomePage;