import { StyleSheet ,Dimensions} from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:"#64b5f6",
        margin:5,
        padding:12,
        justifyContent:"space-between",
        borderRadius:18,
        width:deviceSize.width-10,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 5 ,
        shadowOffset : { width: 1, height: 3},
        
    },
    header_container:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        justifyContent:"flex-start",
        color:"white",
        fontWeight:"bold",
        marginTop:6,
    },
    date:{
        justifyContent:"flex-end",
        color:"grey",
        fontStyle:"italic",
        fontSize:12,
    },
    name:{
        color:"white",
    }
})