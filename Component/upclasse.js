import React,{useEffect,useState} from "react";
import {View,Text, Pressable, TextInput} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import Axios from 'axios';


const UpClasse = ({navigation}) => {
    const [niv,setNiveau] = useState("")


    const send = () => {
        let data = {
            label:niv,
            value:niv.toLocaleLowerCase()
        };

        Axios.post('http://192.168.1.13:8000/add/',data, {
            headers: {'Content-Type': 'application/json'}
          }) 
            .then(res => {
                console.log(res.data)
                setDada(res.data)
            })
            .catch(err => {
                console.log("error :",err)
                console.log("data :",data)
            })
    }

    const cleanup = () => {
        setNiveau("");
      }
      
      const recording = () => { 
        if (niv !== "") {
            send()
            cleanup();
        }
        navigation.goBack()
      }

    return (
        <View style={styles.contain}>
            <Pressable onPress={() =>navigation.goBack()} style={{marginTop:80}}>
                <Ionicons name="arrow-back-outline" size={32} color="black" />
            </Pressable>
            <View style={styles.formulaire}>
                <TextInput style={styles.input} value={niv} onChangeText={setNiveau} placeholder="Niveau"/>
            </View>
            <Pressable style={styles.validation} onPress={recording}>
                    <Text>Valider</Text>
            </Pressable>
        </View>
    )
}


export default UpClasse;