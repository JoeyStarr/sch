import React,{useEffect,useState} from "react";
import {View,Text, Pressable, TextInput} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';

const ClassPage = () => {
    const [lib,setLib] = useState("")
    const [niv,setNiveau] = useState("")

    console.log(lib,niv)
    const send = () => {
        let data = {
          libelle: lib,
          niveau: niv
        };
      
        Axios.post('http://192.168.1.14:8000/add/', data, {
          headers: {'Content-Type': 'application/json'}
        })
          .then(res => {
            console.log(res.data);
            setDada(res.data);
          })
          .catch(err => {
            console.log("error :", err);
            console.log("data :", data);
          });
      }
      
      const cleanup = () => {
        setLib("");
        setNiveau("");
      }
      
      const recording = () => { 
        if (lib !== "" && niv !== "") {
          send();
          cleanup();
        }
      }
      

    return (
        <View style={styles.containere}>
            <View style={styles.formulaire}>
                <TextInput style={styles.input} value={lib} onChangeText={setLib} placeholder="Libellé "/>
                <TextInput style={styles.input} value={niv} onChangeText={setNiveau} placeholder="Niveau"/>
                <Pressable style={styles.validation} onPress={recording}>
                    <Text>Valider</Text>
                 </Pressable>
            </View>
        </View>
    )
}

export default ClassPage;