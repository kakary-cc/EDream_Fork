import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserProfileScreen from "../pages/UserProfileScreen";
import Pathway from "../pages/Pathway";
import Recommendations from "../pages/Recommendations";
// import DebugPage from "../pages/Debug";

// import Stack from "./NativeStackNavigator";

// import { createStackNavigator } from "@react-navigation/stack";
import WikipediaArticle from "../pages/WikipediaArticle";
// import RecommendationsStackNavigator from "./RecommendationsStackNavigator";

// const RecommendationsStack = createStackNavigator();

// function Screen1() {
//   return (
//     <RecommendationsStack.Navigator>
//       <RecommendationsStack.Screen
//         name="Recommendations"
//         component={Recommendations}
//       />
//       <RecommendationsStack.Screen
//         name="ContentDetailScreen"
//         component={WikipediaArticle}
//       />
//     </RecommendationsStack.Navigator>
//   );
// }

function Screen1() {
  return (
    // <RecommendationsStackNavigator/>
    <Recommendations />
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>Recommendation</Text>
    // </View>
  );
}

function Screen2() {
  return <Pathway />;
}

function Screen3() {
  return <UserProfileScreen />;
}

function Screen0() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Debug Page</Text>
    </View>
  );
  // return (
  //   // <NavigationContainer independent={true}>
  //   // <View children={() => <StackNavigator independent={true} />} />
  //   // <StackNavigator independent={true} />
  //   // {/* <DebugPage /> */}
  //   // {/* </NavigationContainer> */}
  // );
}

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Personal Profile":
              iconName = focused ? "account" : "account-outline";
              break;
            case "Recommendation":
              iconName = focused ? "school" : "school-outline";
              break;
            case "Learning Pathway":
              iconName = focused ? "map" : "map-outline";
              break;
            default:
              iconName = "progress-question";
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false, // hides the label
      })}
    >
      <Tab.Screen name="Recommendation" component={Screen1} />
      <Tab.Screen name="Learning Pathway" component={Screen2} />
      <Tab.Screen name="Personal Profile" component={Screen3} />
      {/* Comment the following line out to hide the debug page */}
      <Tab.Screen name="Debug" component={Screen0} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
