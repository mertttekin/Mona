import React from 'react';
import styles from './Login.style';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

function Login({navigation}) {
  const handleSignIn = () => {
    navigation.navigate('Kayıt');
  };
  const handleSubmit = () => {
    formValues => console.log(formValues);
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
          onSubmit={handleSubmit}
          initialValues={{
            email: '',
            password: '',
          }}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <Input
                placeholder="Email Giriniz"
                value={values.email}
                onType={handleChange('email')}></Input>
              <Input
                placeholder="Şifre Giriniz"
                value={values.password}
                onType={handleChange('password')}></Input>
              <Button onPress={handleSubmit} text="Sign in"></Button>
            </View>
          )}
        </Formik>
        <Button onPress={handleSignIn} text="Mesajlar"></Button>
      </View>
      <View style={styles.bottom_container}>
        <Text> if you dont have an account <Text style={styles.signup}>Sign Up </Text></Text>
      </View>
      {/* <Button title="Sing Up" onPress={() => navigation.navigate('Kayıt')} /> */}
    </SafeAreaView>
  );
}

export default Login;
