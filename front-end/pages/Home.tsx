import React, { useState } from "react";
import { supabase } from "../api/supabase";

import {
  Alert,
  // StyleSheet,
  Button,
  View,
  // SafeAreaView,
  // Text,
  // Alert,
} from "react-native";
import { Text } from "react-native-elements";

const HomeScreen = ({ navigation }: any) => {

  // const [titles, setTitles] = useState<string[]>([]);
  const [titles, setTitles] = useState("placeholder");

  async function retrieveContent() {
    let data = await supabase.from("Content").select();
    // console.log("Titles", data);
    // data = data.data;
    try {
      data = data["data"][0]["title"];
    } catch (error) {
      console.log("Error", error);
    }
    setTitles(data);
  }

  return (
    <View>
      <Button title="Debug" onPress={() => retrieveContent()} />
      <Text>{titles}</Text>

      <Button
        title="Jump to Profile"
        onPress={() => navigation.navigate("Profile", { name: "ExampleUser" })}
      />
      <Button
        title="Login Form"
        onPress={() => navigation.navigate("Login", {})}
      />
      <Button title="Quiz" onPress={() => navigation.navigate("Quiz", {})} />
      <Button
        title="Quiz Result"
        onPress={() => navigation.navigate("QuizResult", {})}
      />
      <Button
        title="WikipediaArticle"
        onPress={() => navigation.navigate("WikipediaArticle", {})}
      />
      <Button
        title="Landing Page"
        onPress={() => navigation.navigate("Landing Page", {})}
      />
    </View>
  );
};

export default HomeScreen;
