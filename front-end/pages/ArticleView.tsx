import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, Text, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ReadPdf from "../components/PDF";

const ArticleView = ({ articleContent }) => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null); // Create a ref for ScrollView
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEnd =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;
    setReachedEnd(isEnd);
  };

  const handleTakeQuiz = () => {
    navigation.navigate("TakeQuiz");
  };

  const handleContinueReading = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll to top
    }
  };

  return (
    <View>
      <ReadPdf />
      <Text>Finished with the content?</Text>
      <Text>Test your knowledge with a short quiz!</Text>
      <Button
        title="Take Quiz"
        onPress={() => navigation.navigate("TakeQuiz", {})}
      />
    </View>
    // <View style={{ flex: 1 }}>
    //   <ScrollView
    //     ref={scrollViewRef} // Assign the ref to ScrollView
    //     style={{ flex: 1 }}
    //     onScroll={handleScroll}
    //     scrollEventThrottle={16}
    //   >
    //     <Text>{articleContent}</Text>
    //   </ScrollView>
    //   {reachedEnd && (
    //     <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
    //       <Button title="Take Quiz" onPress={handleTakeQuiz} />
    //       <Button title="Reread Article" onPress={handleContinueReading} />
    //     </View>
    //   )}
    // </View>
  );
};

export default ArticleView;
