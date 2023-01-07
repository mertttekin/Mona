import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1 ,
        alignItems:"center",
        justifyContent:"center",
    },
})