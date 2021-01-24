import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onPress = () => {
    if (user) {
    } else {
      console.warn('Please enter username and password!!!');
    }
  };

  return (
    // <View style={styles.container}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={[styles.subcontainer, styles.shadoweffect]}>
        <Text style={styles.title}>Simple Login Form</Text>
        <Entypo name="user" size={55} style={styles.imageStyle} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputfield}
            onChangeText={(text) => setUser(text)}
            value={user}
            placeholder="Enter your username"
            key
          />
          <TextInput
            style={styles.inputfield}
            onChangeText={(text) => setPass(text)}
            value={pass}
            placeholder="Enter your password"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    // </View>
  );
}
