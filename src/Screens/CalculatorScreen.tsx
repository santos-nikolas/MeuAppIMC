import React, { useState } from 'react';
import { Button, Text, TextInput, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { CalculatorScreenNavigationProp } from '../types/navigation';
import { styles } from './HomeScreen';

const Calculator =  function(){
    const navigation = useNavigation<CalculatorScreenNavigationProp>();
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);
    const [textoResultado, setTextoResultado] = useState<string>('');
    const num1Convertido = parseFloat(num1);
    const num2Convertido = parseFloat(num2);

    function somar() {
        setResultado(num1Convertido+num2Convertido)
        setTextoResultado('Soma')
    };
    function subtrair() {
        setResultado(num1Convertido-num2Convertido)
        setTextoResultado('Subtração')
    };
    function multiplicar() {
        setResultado(num1Convertido*num2Convertido)
        setTextoResultado('Multiplicação')
    };
    function dividir() {
        setResultado(num1Convertido/num2Convertido)
        setTextoResultado('Divisão')
    };
    return(
        <ScrollView
              style={styles.scrollView}
              // Aplica os estilos de layout ao container de conteúdo
              contentContainerStyle={styles.contentContainer}
              // Opcional: garante que a rolagem funcione mesmo se o conteúdo couber na tela
              alwaysBounceVertical={false}>
                    <Text style={styles.text}>Calculadora</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderWidth: 1, marginBottom: 10, paddingHorizontal: 5 }}
                        onChangeText={setNum1}
                        value={num1}
                        placeholder="Digite o primeiro número"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={{ height: 40, width: 200, borderWidth: 1, marginBottom: 10, paddingHorizontal: 5 }}
                        onChangeText={setNum2}
                        value={num2}
                        placeholder="Digite o segundo número"
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Soma" onPress={somar} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Subtração" onPress={subtrair} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Multiplicação" onPress={multiplicar} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Divisão" onPress={dividir} />
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title='Go to Home' onPress={() => navigation.goBack()}></Button>
                    </View>
                    
                    {resultado !== null && <Text style={{ marginTop: 20, fontSize: 18 }}>{textoResultado}: {resultado.toFixed(2)}</Text>}
                </ScrollView>
    );
}

export default Calculator;