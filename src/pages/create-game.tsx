import { View, Text } from "react-native";
import type { CreateGameProps } from "../../App";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { StepOne, Step2, Step3 } from "../widgets/create-game";

type CreateGameStackParamList = {
  StepOne: undefined;
  Step2: undefined;
  Step3: undefined;
};

const Stack = createNativeStackNavigator<CreateGameStackParamList>();

export function CreateGame() {
  return (
    <Stack.Navigator initialRouteName="StepOne">
      <Stack.Screen name="StepOne" component={StepOne} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
    </Stack.Navigator>
  );
}
