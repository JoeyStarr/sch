import React,{useEffect,useState} from "react";
import {View,Text, Pressable, TextInput,TouchableOpacity, FlatList,Alert} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';


const Item = ({id,label,value}) => {
  
  const [show1,setShow1] = useState(false);
  const num = id

  const del = () => {
    Axios.delete(`http://192.168.1.13:8000/del/${num}`) 
    .then(res => {
            console.log(res.data)
            setDada(res.data)
    })
    .catch(err => {
            console.log("error :",err)
    })
}

  const alsys = (id) => {
    Alert.alert('Supprimer', 'Voulez vous effacez cette classe', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => del()},
    ]);
    }

  return (
    <Pressable style={styles.card} onPress={alsys}>
        <View>
          <Text style={{fontSize:20}}>{label}</Text>
        </View>
          <Text style={{fontSize:18,fontWeight:700}}>{value}</Text>
    </Pressable>
  )
}

const ClassPage = ({navigation}) => {
    const [dada,setDada] = useState([])
    const [lib,setLib] = useState("")

    const getDada = () => {
      Axios.get('http://192.168.1.13:8000/') 
        .then(res => {
          console.log(res.data)
          setDada(res.data)
        })
        .catch(err => {
          console.log("error :",err)
        })
      }
      
  
      useEffect(() =>{
        getDada()
      },[])
      

    return (
        <View style={styles.containere}>
                <FlatList 
                    style={{width:"80%",height:"100%",backgroundColor:"#E3DFFD"}}
                    horizontal={false}
                    data={dada}
                    renderItem={({item}) => <Item id={item.id} label={item.label} value={item.value} />}
                    keyExtractor={item => item.id}
                />
            <TouchableOpacity style={styles.add}  onPress={getDada}>
                <Ionicons name="refresh-circle-outline" size={32} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.add2} onPress={() => navigation.navigate('UpdateClasse')}>
                <Ionicons name="add-outline" size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default ClassPage;