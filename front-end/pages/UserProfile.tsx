import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/avatar.png")} style={styles.avatar} />
        <Text style={styles.username}>REPLACE WITH USERS USERNAME</Text>
        <Text style={styles.score}>Learning points: FILL IN SCORE</Text>
      </View>

      <View style={styles.interestsContainer}>
        <Text style={styles.interestsText}>
          REPLACE WITH PATH TO USERS INTEREST PARAGRAPH
        </Text>
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("FriendsScreen")}
        >
          <Text>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("ProfileScreen")}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("LearningPathwaysScreen")}
        >
          <Text>Learning Pathways</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleNavigation("SettingsScreen")}
        >
          <Image
            source={require("../assets/settingGear.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  score: {
    fontSize: 18,
    color: "gray",
  },
  interestsContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
  },
  interestsText: {
    fontSize: 16,
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingVertical: 10,
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});

export default UserProfile;
