import React,{useEffect,useState} from "react";
import {View,Text, Pressable, TextInput} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button';
import Axios from 'axios';

const UpDelete = ({navigation,route}) => {
    console.log("route",route.params)
    const {id,nom,prenom,moyem,moyin,classe} = route.params
    const [name,setName] = useState(nom)
    const [pre,setPre] = useState(prenom)
    const [moym,setMoym] = useState(moyem)
    const [moyi,setMoyi] = useState(moyin)
    const [genre,setGenre] = useState(classe)

    const [upper,setUp] = useState()

    console.log(upper)


    const getLeft = () => {
        Axios.get('http://192.168.1.158:8000/') 
          .then(res => {
            console.log(res.data)
            setUp(res.data)
          })
          .catch(err => {
            console.log("error :",err)
          })
    }

    useEffect(() =>{
        getLeft()
    },[])


    const del = () => {
        Axios.delete(`http://192.168.1.158:8000/delstud/${id}`) 
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
            classe:genre
        };
        Axios.post(`http://192.168.1.158:8000/updstud/${id}/`,data, {
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

    const funcUpd = () => { 
        navigation.goBack()
        upd()
    }

    const funcDel = () => { 
        navigation.goBack()
        del()
    }

    const options = [
        { label: 'ING3', value: 1 },
        { label: 'ING2', value:2 },
        { label: 'ING1', value: 3 },
    ];

    return (
        <View style={styles.contain}>
            <Pressable onPress={() =>navigation.goBack()} style={{margin:10}}>
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
                        radio_props={options}
                        initial={classe -1} //initial value of this group
                        onPress={(value) => {
                        setGenre(value);
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