import React, {useState} from 'react';
import {Text, FlatList, SafeAreaView} from 'react-native';
import styles from './Record.style';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInput';

import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/card/MessageCard';

const Record = () => {
  const [inputModalVisible, setinputModalVisible] = useState(false);
  const [contentlist, setContentList] = useState([]);

  React.useEffect(() => {
    const reference = firebase
      .app()
      .database(
        'https://mona-53323-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('records/');
      reference.on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData){
            return;
        }
        const parsedData = parseContentData(contentData);
        console.log(parsedData);
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setinputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    console.log(content);
    sendContent(content);
    handleInputToggle();
  }

  function getContent() {}

  function sendContent(content) {
    const reference = firebase
      .app()
      .database(
        'https://mona-53323-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('records/');
    const userMail = auth().currentUser.email;
    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    console.log(contentObject);
    reference.push(contentObject);
  }

  const renderContent = ({item}) => <MessageCard message={item}/>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentlist} renderItem={renderContent}></FlatList>
      <FloatingButton onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};

export default Record;
