import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";
import colors from '../config/colors'

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
   [switchText, setSwitchText] = useState('Enable Two Hour On Shift Reminders');

  const toggleSwitch=() =>
   { 
     setIsEnabled((previousState) => !previousState);
    if (isEnabled){
      console.log("enable")
      setSwitchText(switchText = "Enable Two Hour On Shift Reminders");
    }
    else if (!isEnabled){
      console.log("Disable")
      setSwitchText(switchText = "Disable Two Hour On Shift Reminders");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
  <Text> {switchText}</Text>
      </View>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: colors.gray, true: colors.green}}
          thumbColor={isEnabled ? colors.white : colors.green}
          ios_backgroundColor= {colors.white}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: 'flex-end',

    padding: 50,
  },
  text: {
    alignItems: "flex-start",
  },
  switch: {
    alignItems: "flex-end",
  },
});
