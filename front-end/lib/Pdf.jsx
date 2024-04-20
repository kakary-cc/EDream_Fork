import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const ReadPdf = () => {
  const PdfResource = {
    uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    cache: true,
  };

  return (
    <View>
      <Text>Read PDF</Text>
      <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={styles.container}
        onLoadComplete={(numberOfPages, filePath) => {}}
      />
      <Text>Proceed to Quiz</Text>
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
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default ReadPdf;
