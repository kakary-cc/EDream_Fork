import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

// Mock data for user interests and recommended content
const userInterests = ["Art", "Technology", "Nature"];
const recommendedContent = {
  Art: ["Impressionism", "Modernism", "Sculpture"],
  Technology: ["AI Innovations", "Space Exploration", "Gadget Reviews"],
  Nature: ["Wildlife Photography", "Conservation Efforts", "National Parks"],
};

const Recommendation = () => {
  return (
    <ScrollView style={styles.container}>
      {userInterests.map((interest) => (
        <View key={interest} style={styles.section}>
          <Text style={styles.sectionTitle}>
            Because you said you are interested in {interest}
          </Text>
          {recommendedContent[interest].map((content) => (
            <Text key={content} style={styles.contentItem}>
              {content}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  contentItem: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 5,
  },
});

export default Recommendation;
