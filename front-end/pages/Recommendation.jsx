import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Mock data for user interests and recommended content
// Adding more details to each content item
const userInterests = ["Art", "Technology"];
const recommendedContent = {
  Art: [
    {
      title: "Impressionism",
      description: "Explore the world of light and color with Impressionism.",
      time: "15 min read",
      id: "art1",
    },
    {
      title: "Modernism",
      description:
        "Dive into the disruptive and influential movements of Modern Art.",
      time: "20 min read",
      id: "art2",
    },
    // More items...
  ],
  Technology: [
    {
      title: "AI Innovations",
      description: "Discover how AI is changing the world.",
      time: "10 min read",
      id: "tech1",
    },
    // More items...
  ],
  // More categories...
};

const Recommendation = () => {
  const navigation = useNavigation();

  const navigateToContentDetail = (contentId) => {
    // Navigate to the Detail Screen, passing the content ID as a parameter
    navigation.navigate("ArticleView", { contentId });
  };

  return (
    <ScrollView style={styles.container}>
      {userInterests.map((interest) => (
        <View key={interest} style={styles.section}>
          <Text style={styles.sectionTitle}>
            Because you said you are interested in {interest}
          </Text>
          {recommendedContent[interest].map((content) => (
            <TouchableOpacity
              key={content.id}
              style={styles.contentItem}
              onPress={() => navigateToContentDetail(content.id)}
            >
              <Text style={styles.title}>{content.title}</Text>
              <Text style={styles.description}>{content.description}</Text>
              <Text style={styles.time}>{content.time}</Text>
            </TouchableOpacity>
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
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
});

export default Recommendation;
