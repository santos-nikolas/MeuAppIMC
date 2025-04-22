import { Button, Text, TextInput, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import { useNavigation } from '@react-navigation/native';
import type { LoginScreenNavigationProp } from '../types/navigation';

const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo, verificar se o email e a senha estão corretos
        if (email === "example@email.com" && password === "123456") {
            Alert.alert("Login bem-sucedido!");
            navigation.navigate('Home'); // Navega para a tela Home       
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