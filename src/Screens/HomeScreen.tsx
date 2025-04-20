import React from "react";

import { Button, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <Button title="Go to IMC" onPress={() => navigation.navigate("IMC")} />
    </ScrollView>
  );
}
export default Home;
const navigation = useNavigation();