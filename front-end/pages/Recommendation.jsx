import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../api/supabase";

const interests = [
  // "technology",
  // "design",
  // "marketing",
  // "photography_and_videology",
  // "language",
  "cooking_and_baking",
  // "fitness_and_nutrition",
  // "finance_and_investing",
  "art",
  // "history",
];

const Recommendation = () => {
  const navigation = useNavigation();

  const [contents, setContents] = useState({});

  const navigateToContentDetail = (contentId) => {
    navigation.navigate("ArticleView", { contentId });
  };

  useEffect(() => {
    async function fetchArticles(interest) {
      let { data: query } = await supabase
        .from("Content_Tags")
        .select(`Content(*)`)
        .eq("tag", interest);
      // Only serve two articles for each interests
      query = query?.slice(-2);

      setContents({
        ...contents,
        [interest]: query.map((entry) => {
          console.log(interest, ":", entry.Content.title);
          return entry.Content;
        }),
      });
    }
    interests.forEach((interest) => {
      fetchArticles(interest);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {interests.map((interest) => (
        <View key={interest} style={styles.section}>
          <Text style={styles.sectionTitle}>
            Because you are interested in {interest.replace(/[#_]/g, " ")}:
          </Text>
          {contents[interest]?.map((content) => (
            <TouchableOpacity
              key={content.uuid}
              style={styles.contentItem}
              onPress={() => navigateToContentDetail(content.uuid)}
            >
              <Text style={styles.title}>{content.title}</Text>
              <Text style={styles.description}>
                {content.description.length <= 200
                  ? content.description
                  : content.description.slice(0, 200) + "..."}
              </Text>
              {/* https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786 */}
              {/* <Text style={styles.length}>{content.length} words</Text> */}
              <Text style={styles.length}>
                {Math.floor(content.length / 238)} minutes
              </Text>
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
