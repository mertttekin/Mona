import React from "react";
import { View,Text } from "react-native";
import styles from "./MessageCard.style";
import {formatDistance,parseISO} from "date-fns";
import { tr } from 'date-fns/locale';


const MessageCard = ({message}) =>{

    const formatedDate = formatDistance(parseISO(message.date), new Date(), { addSuffix: true ,locale:tr});
    return(
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.name}>{message.username}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
            </View>
            <Text style={styles.text}>{message.text } </Text>
        </View>
    );
};

export default MessageCard;