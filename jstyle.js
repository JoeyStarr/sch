import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
console.log('statusBarHeight: ', StatusBar.currentHeight);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containere: {
      flex: 1,
      backgroundColor: '#E3DFFD',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mod:{
        width:"100%",
        marginTop:20,
        height:"90%",
        backgroundColor:"white"
    },

    conteneur:{
        backgroundColor:"#E3DFFD",
        width:"100%",
        height:"100%",
        alignItems:"center"
    },

    contain:{
        width:windowWidth,
        height:"100%",
        backgroundColor:"#ECF2FF",
        position:"absolute",
        bottom:0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:"center"
    },

    card:{
        width:"100%",
        height:'auto',
        backgroundColor:"#ECF2FF",
        marginVertical:10,
        borderRadius:10,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        shadowColor: "#B799FF",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 25,

    },

    radio:{
        flexDirection:"row",
        flexWrap:"wrap"
    },

    add:{
        backgroundColor:"#ACBCFF",
        padding:15,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",

        position:"absolute",
        bottom:50,
        right:30,

        shadowColor: "#B799FF",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 25,
    },

    formulaire:{
        width:"80%",
        height:'auto',
        paddingHorizontal:5,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',

        shadowColor: "#ACBCFF",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 25,
    },

    input:{
        width:"100%",
        height:'auto',
        marginVertical:10,
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius:10,
        borderColor:"#ACBCFF",
        borderWidth:2,
    },

    validation:{
        width:"80%",
        height:'auto',
        marginTop:20,
        paddingVertical:15,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#ACBCFF',
        borderRadius:10,
    },

    suppression:{
        width:"80%",
        height:'auto',
        marginTop:20,
        paddingVertical:15,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#D21312',
        borderRadius:10,
    },
});

export default styles;