import React, { useState } from "react";
import { Button, Text, TextInput, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IMC = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(null);
  const navigation = useNavigation();

  const calculateIMC = () => {
    if (weight && height) {
      const imcValue: number = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
      setImc(imcValue.toFixed(2));
    } else {
      alert("Please enter valid weight and height.");
    }
  };

  return (
    <ScrollView>
      <Text>Calculate your IMC</Text>
      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
      />
      <TextInput
        placeholder="Height (m)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
      />
      <Button title="Calculate IMC" onPress={calculateIMC} />
      {imc && <Text>Your IMC is: {imc}</Text>}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </ScrollView>
  );
}

export default IMC;