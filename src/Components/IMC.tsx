import { useState } from "react";
import { Text, TextInput, View } from "react-native";

type IMC = {
  weight: number;
  height: number;
  result: number;
};

const IMC = () => {
  const [imc, setImc] = useState<IMC>();

  const handleInputChange = (field: keyof IMC) => {
    return (text: string) => {
      const numericValue = parseFloat(text) || 0;
      setImc((previous) => ({ ...previous!, [field]: numericValue }));
      calculate();
    };
  };

  const calculate = () => {
    if (!imc?.height || !imc?.weight) {
      return;
    }

    const result = imc.weight / Math.pow(imc.height, 2);
    setImc((previous) => ({ ...previous!, result }));
  };

  return (
    <View>
      <Text>Peso</Text>
      <TextInput
        placeholder="Digite seu peso"
        onChangeText={handleInputChange("weight")}
        keyboardType="numeric"
      />
      <Text>Altura</Text>
      <TextInput
        placeholder="Digite sua altura"
        onChangeText={handleInputChange("height")}
        keyboardType="numeric"
      />
      <Text>Seu IMC é: {imc?.result}</Text>
    </View>
  );
};

export default IMC;
