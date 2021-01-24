import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Signup() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const onPress = () => {
    if (user) {
    } else {
      console.warn('Please enter username and password!!!');
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={[styles.subcontainer, styles.shadoweffect]}>
          <Text style={styles.title}>Simple Signup Form</Text>
          <Entypo name="user" size={55} style={styles.imageStyle} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputfield}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Enter your name"
              key
            />
            <TextInput
              style={styles.inputfield}
              onChangeText={(text) => setUser(text)}
              value={user}
              placeholder="Choose your username"
              key
            />
            <TextInput
              style={styles.inputfield}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Enter your email address"
              key
            />
            <TextInput
              style={styles.inputfield}
              onChangeText={(text) => setPass(text)}
              value={pass}
              placeholder="Enter your password"
            />
            <TextInput
              style={styles.inputfield}
              onChangeText={(text) => setConfirm(text)}
              value={confirm}
              placeholder="Confirm your password"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
