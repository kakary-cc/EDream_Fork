import React, { useState } from "react";
import { supabase } from "../api/supabase";

import {
  Alert,
  StyleSheet,
  Button,
  View,
  // SafeAreaView,
  ScrollView,
  // Text,
  // Alert,
} from "react-native";
import { Text } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../components/TabNavigation";

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

  // return (
  //   <ScrollView style={styles.container}>
  //     {/* Header */}
  //     <View style={styles.header}>
  //       <Text style={styles.logoText}>EDream Learning System</Text>
  //     </View>

  //     {/* Hero Section */}
  //     <View style={styles.heroSection}>
  //       <Text style={styles.heroText}>
  //         Transform Your Commute into a Journey of Learning
  //       </Text>
  //       <Button
  //         title="Start Learning"
  //         onPress={() => console.log("Navigate to lessons")}
  //       />
  //     </View>

  //     {/* How It Works */}
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>How It Works</Text>
  //       {/* Placeholder for steps */}
  //     </View>

  //     {/* Explore Interests */}
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Explore Interests</Text>
  //       {/* Placeholder for interests categories */}
  //     </View>

  //     {/* Community Highlights */}
  //     <View style={styles.section}>
  //       <Text style={styles.sectionTitle}>Community Highlights</Text>
  //       {/* Placeholder for testimonials */}
  //     </View>
  //   </ScrollView>
  // );

  return (
    <View>
      <Text style={styles.header}>Debug Page.</Text>
      <Button title="Debug" onPress={() => retrieveContent()} />
      <Text>{titles}</Text>

      {/* <Button
        title="Jump to Profile"
        onPress={() => navigation.navigate("Profile", { name: "ExampleUser" })}
      /> */}
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
      <Button
        title="Pathway Page"
        onPress={() => navigation.navigate("Pathway", {})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  heroSection: {
    alignItems: "center",
    padding: 20,
  },
  heroText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;
