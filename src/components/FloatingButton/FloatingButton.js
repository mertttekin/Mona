import React from "react";
import { TouchableOpacity ,Text} from "react-native";
import styles from "./FloatingButton.style";

const Button = ({onPress}) =>{
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}> + </Text>
        </TouchableOpacity>
    );
};

export default Button;