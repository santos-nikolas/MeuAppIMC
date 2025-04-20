import { Button, Text, TextInput, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Aqui você pode adicionar a lógica de login, como autenticação com API
    //console.log("Login button pressed");
    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo, verificar se o email e a senha estão corretos
        if (email === "" && password === "123456") {
            Alert.alert("Login bem-sucedido!");       
        }
        else {
            Alert.alert("Email ou senha incorretos.");
        }
    }

    return(
      <ScrollView>
          <Text>User:</Text>
          <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 8,
              }}
          />
          <Text>Password:</Text>
          <TextInput
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 8,
              }}
          />
          <Button title="Login" onPress={handleLogin} />
      </ScrollView>
    )
};
export default Login;