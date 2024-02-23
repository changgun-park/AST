import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Title, Headline } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

interface StepOneFormState {
  courtName: string;
  courtNumber: string;
  date: Date | undefined;
  time: Date | undefined;
}

export const StepOne: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [formState, setFormState] = useState<StepOneFormState>({
    courtName: "",
    courtNumber: "",
    date: undefined,
    time: undefined,
  });

  // Date Picker States
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  // Date Picker Handlers
  const onDismissDatePicker = () => setDatePickerVisible(false);
  const onConfirmDatePicker = ({ date }: { date: Date }) => {
    setFormState({ ...formState, date });
    setDatePickerVisible(false);
  };

  // Time Picker Handlers
  const onDismissTimePicker = () => setTimePickerVisible(false);
  const onConfirmTimePicker = ({
    hours,
    minutes,
  }: {
    hours: number;
    minutes: number;
  }) => {
    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);
    setFormState({ ...formState, time });
    setTimePickerVisible(false);
  };

  const onTimeChange = (event: any, selectedTime: Date | undefined) => {
    const currentTime = selectedTime || formState.time;
    // setTimePickerVisible(Platform.OS === "ios");
    setFormState({ ...formState, time: currentTime });
  };

  const goToNextStep = () => {
    // Validate form data
    // Navigate to the next step
    navigation.navigate("Step2", { formState }); // Pass formState as params if needed
  };

  return (
    <View style={styles.container}>
      <Headline>테니스장을 선택해 주세요</Headline>
      <TextInput
        label="테니스장"
        value={formState.courtName}
        onChangeText={(courtName) => setFormState({ ...formState, courtName })}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="코트 번호"
        value={formState.courtNumber}
        onChangeText={(courtNumber) =>
          setFormState({ ...formState, courtNumber })
        }
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="outlined"
        onPress={() => setDatePickerVisible(true)}
        style={styles.button}
      >
        {formState.date ? formState.date.toDateString() : "날짜 선택"}
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => setTimePickerVisible(true)}
        style={styles.button}
      >
        {formState.time ? formState.time.toLocaleTimeString() : "Pick a Time"}
      </Button> */}
      <Button mode="contained" onPress={goToNextStep} style={styles.button}>
        Next
      </Button>

      {isTimePickerVisible && (
        <DateTimePicker
          value={formState.time || new Date()}
          mode="time"
          display="default"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});
