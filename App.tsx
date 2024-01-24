import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Home, CreateGame } from "./src/pages";

type RootStackParamList = {
  Home: undefined;
  CreateGame: undefined;
};

export type CreateGameProps = NativeStackScreenProps<
  RootStackParamList,
  "CreateGame"
>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Games" }}
        />
        <RootStack.Screen name="CreateGame" component={CreateGame} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
