import React,{useEffect,useState} from "react";
import {View,Text, Pressable, TextInput} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import Axios from 'axios';

const UpDelete = ({navigation,route}) => {
    const {id,nom,prenom,moyem,moyin,niveau} = route.params
    const [name,setName] = useState(nom)
    const [pre,setPre] = useState(prenom)
    const [moym,setMoym] = useState(moyem)
    const [moyi,setMoyi] = useState(moyin)
    const [genre,setGenre] = useState(niveau)
    const [newclass,setNew] = useState({})
    const [upper,setUp] = useState()

    const getLeft = () => {
        Axios.get('http://192.168.1.13:8000/') 
          .then(res => {
            setUp(res.data)
          })
          .catch(err => {
            console.log("error :",err)
          })
    }

    useEffect(() =>{
        getLeft()
    },[])



    const getDet = () => {
        Axios.get(`http://192.168.1.13:8000/det/${genre}`) 
          .then(res => {
            setNew(res.data)
            console.log(newclass)
          })
          .catch(err => {
            console.log("error :",err)
          })
    }


    const del = () => {
        Axios.delete(`http://192.168.1.13:8000/delstud/${id}`) 
        .then(res => {
                console.log(res.data)
                setDada(res.data)
        })
        .catch(err => {
                console.log("error :",err)
        })
    }

    const upd = () => {
        let data = {
            name:name,
            prename:pre,
            moyenmath:moym,
            moyeninfo:moyi,
            classe:newclass.id
        };
        Axios.post(`http://192.168.1.13:8000/updstud/${id}/`,data, {
            headers: {'Content-Type': 'application/json'}
        }) 
        .then(res => {
                console.log(res.data)
        })
        .catch(err => {
                console.log("error :",err)
        })
    }

    const funcUpd = () => { 
        navigation.goBack()
        upd()
    }

    const funcDel = () => { 
        navigation.goBack()
        del()
    }


    return (
        <View style={styles.contain}>
            <Pressable onPress={() =>navigation.goBack()} style={{marginTop:60}}>
                <Ionicons name="arrow-back-outline" size={32} color="black" />
            </Pressable>
            <View  style={styles.formulaire}>
                <TextInput  style={styles.input} value={name} onChangeText={setName} placeholder="Nom"/>
                <TextInput  style={styles.input} value={pre} onChangeText={setPre} placeholder="Prenom"/>
                <TextInput  style={styles.input} value={moym} onChangeText={setMoym} placeholder="Moyenne Math"/>
                <TextInput  style={styles.input} value={moyi} onChangeText={setMoyi} placeholder="Moyenne Info"/>
                <View style={styles.input}>
                    <RadioForm
                        style={styles.radio}
                        radio_props={upper}
                        initial={niveau} //initial value of this group
                        onPress={(value) => {
                            setGenre(value);
                            getDet(value)
                        }} //if the user changes options, set the new value
                    />
                </View>
                <Pressable style={styles.validation} onPress={funcUpd}>
                    <Text style={{color:"white"}}>Mettre à jour</Text>
                </Pressable>
                <Pressable style={styles.suppression} onPress={funcDel}>
                    <Text style={{color:"white"}}>Supprimer</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default UpDelete;