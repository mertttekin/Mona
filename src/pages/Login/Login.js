import React, {useState} from 'react';
import styles from './Login.style';
import {Text, View, SafeAreaView, Image} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../utils/authErrorMessageParser';

function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    navigation.navigate('SingUp');
  };
  const handleRecords = () => {
    navigation.navigate('Records');
  };
  async function handleFormSubmit(formValues) {
    console.log('Giriş Denendi');
    console.log(formValues);
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: "Giriş Başarılı",
        type: 'success',
      });
      setLoading(false);
      console.log('Giriş Yapıldı');
      navigation.navigate('Records');
    } catch (error) {
      console.log(error);
      setLoading(false);
      showMessage({
        // error display
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }

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
              <Button
                onPress={handleSubmit}
                text="Sign in"
                loading={loading}></Button>
            </View>
          )}
        </Formik>
        <Button onPress={handleRecords} text="Records"></Button>
      </View>
      <View style={styles.bottom_container}>
        <Text>
          {' '}
          if you dont have an account{' '}
          <Text style={styles.signup} onPress={handleSignIn}>
            Sign Up{' '}
          </Text>
        </Text>
      </View>
      {/* <Button title="Sing Up" onPress={() => navigation.navigate('Kayıt')} /> */}
    </SafeAreaView>
  );
}

export default Login;
