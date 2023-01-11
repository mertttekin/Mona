import React from 'react';
import styles from './SignUp.style';
import {Text, View, SafeAreaView, Image, Alert} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

function Login({navigation}) {
  const handleSignIn = () => {
    navigation.navigate('SingUp');
  };
  const handleRecords = () => {
    navigation.navigate('Records');
  };
  const handleFormSubmit = formValues => {
    if (formValues.password == formValues.passwordConfirm) {
      auth()
        .createUserWithEmailAndPassword(formValues.email, formValues.password)
        .then(() => {
          console.log('User account created & signed in!');
          Alert.alert('Hesap Oluşturuldu Giriş Yapabilirsiniz');
          showMessage({
            message: 'Giriş Başarılı',
            type: 'success',
          });
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          showMessage({
            message: authErrorMessageParser(error.code),
            type: 'danger',
          });

          console.error(error);
        });
    } else {
      Alert.alert('Password not Match!');
    }
    console.log(formValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}></Image>
      </View>
      <View style={styles.body_container}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
          }}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <Input
                placeholder="Enter Your E-mail"
                value={values.email}
                onType={handleChange('email')}></Input>
              <Input
                placeholder="Enter Your Password"
                value={values.password}
                onType={handleChange('password')}></Input>
              <Input
                placeholder="Enter Your Password Again"
                value={values.passwordConfirm}
                onType={handleChange('passwordConfirm')}></Input>
              <Button onPress={handleSubmit} text="Sign Up"></Button>
            </View>
          )}
        </Formik>
        {/* <Button onPress={handleRecords} text="Records"></Button> */}
      </View>
      <View style={styles.bottom_container}>
        {/* <Text> if you dont have an account <Text style={styles.signup} onPress={handleSignIn} >Sign Up </Text></Text> */}
      </View>
      {/* <Button title="Sing Up" onPress={() => navigation.navigate('Kayıt')} /> */}
    </SafeAreaView>
  );
}

export default Login;
