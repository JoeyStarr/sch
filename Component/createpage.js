import React,{useEffect,useState} from "react";
import {View, Text, TextInput, Pressable, Modal, TouchableOpacity} from "react-native";
import styles from "../jstyle";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm from 'react-native-simple-radio-button'; 
import Axios from 'axios';

const CreatePage = () => {
    const [name,setName] = useState("")
    const [pre,setPre] = useState("")
    const [moym,setMoym] = useState(0)
    const [moyi,setMoyi] = useState(0)
    const [newclass,setNew] = useState({})
    const [genre,setGenre] = useState()
    const [category,setCategory] = useState("heuu");

    ///////////
    const [upper,setUp] = useState([])

    const getLeft = () => {
        Axios.get('http://192.168.1.13:8000/') 
          .then(res => {
            console.log("dshhdiq",res.data)
            setUp(res.data)
          })
          .catch(err => {
            console.log("error :",err)
          })
    }

    const getDet = () => {
        Axios.get(`http://192.168.1.13:8000/det/${genre}`) 
          .then(res => {
            setNew(res.data)
            console.log(newclass.id)
          })
          .catch(err => {
            console.log("error :",err)
          })
    }

    console.log(upper)

    useEffect(() =>{
        getLeft()
    },[])

    console.log(name,pre,moym,moyi,genre)


    const send = () => {
        let data = {
            name:name,
            prename:pre,
            moyenmath:moym,
            moyeninfo:moyi,
            classe:newclass.id
        };

        Axios.post('http://192.168.1.13:8000/addstud/',data, {
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
        setName("")
        setMoyi(null)
        setMoym(null)
        setPre("")
    }

    const validation = () => {
        if(name !== "" && pre !== ""){
            send()
            cleanup()
        }
    }

    

    return (
        <View style={styles.containere}>
            <View style={styles.formulaire}>
                <TextInput  style={styles.input} value={name} onChangeText={setName} placeholder="Nom"/>
                <TextInput  style={styles.input} value={pre} onChangeText={setPre} placeholder="Prenom"/>
                <TextInput  style={styles.input} value={moym} onChangeText={setMoym} placeholder="Moyenne Math" keyboardType = 'numeric'/>
                <TextInput  style={styles.input} value={moyi} onChangeText={setMoyi} placeholder="Moyenne Info" keyboardType = 'numeric'/>
                <View style={styles.input}>
                    <RadioForm
                        style={styles.radio}
                        radio_props={upper}
                        initial={0} //initial value of this group
                        onPress={(value) => {
                        setGenre(value);
                        getDet()
                        }} //if the user changes options, set the new value
                    />
                </View>
                <Pressable style={styles.validation} onPress={validation}>
                    <Text style={{color:'white'}}>Valider</Text>
                </Pressable>
            </View>
                <TouchableOpacity style={styles.add3}  onPress={getLeft}>
                    <Ionicons name="refresh-circle-outline" size={32} color="black" />
                </TouchableOpacity>
        </View>
    )
}

export default CreatePage;