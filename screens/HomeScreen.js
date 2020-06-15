import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
  ImageBackground,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          __DEV__
            ? require("../assets/images/KICKFLIP.jpg")
            : require("../assets/images/robot-prod.png")
        }
        style={styles.image}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.container}>
            <Text style={styles.paragraph}>Choose your Board width.</Text>
            <View style={styles.btnDeckSize}>
              <Button
                title="7.75"
                onPress={() => Alert.alert("You need 135mm size trucks")}
              />
              <Button
                title="8.00"
                onPress={() => Alert.alert("You need 140mm size trucks")}
              />
              <Button
                title="8.12"
                onPress={() => Alert.alert("You need 142mm size trucks")}
              />
              <Button
                title="8.25"
                onPress={() => Alert.alert("You need 144mm size trucks")}
              />
              <Button
                title="8.38"
                onPress={() => Alert.alert("You need 146mm size trucks")}
              />
              <Button
                title="8.50"
                onPress={() => Alert.alert("You need 149mm size trucks")}
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            Looking for the nearest skatepark to you.
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://kickflip.co.nz/skateparks/")
              }
            >
              Park Finder
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 24,
    color: "black",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  btnDeckSize: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
