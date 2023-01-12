import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './ContentInputModal.sytle';
import Button from '../../Button';
import Modal from 'react-native-modal';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText('');
  }

  return (
    <Modal
      style={styles.modal}
      swipeDirection="down"
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            multiline
            placeholder="Yaz bişiler"
            onChangeText={setText}></TextInput>
        </View>
        <Button
          text="Gönder"
          onPress={handleSend}
          onChangeText={handleSend}></Button>
      </View>
    </Modal>
  );
};

export default ContentInputModal;
