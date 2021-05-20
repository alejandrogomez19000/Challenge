import React, { useState, useCallback, memo, useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Animated } from "react-native";
import colors from "../../utils/colors";
import Icon from "../../components/Icon";
import fontSizes from "../../utils/fontSizes";

const TextInputComponent = ({
  value,
  placeholder,
  error,
  setFieldValue,
  name,
  iconName,
}) => {
  const [isFocused, setIsFocused] = useState(value ? true : false);
  const [isTouched, setIsTouched] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const placeholderPosition = useRef(new Animated.Value(20)).current;
  const plaholderFontSize = useRef(
    new Animated.Value(fontSizes.default)
  ).current;

  const placeholderActive = useCallback(() => {
    Animated.timing(placeholderPosition, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(plaholderFontSize, {
      toValue: fontSizes.small,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [placeholderPosition, plaholderFontSize]);

  const placeholderDisabled = useCallback(() => {
    Animated.timing(placeholderPosition, {
      toValue: 20,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(plaholderFontSize, {
      toValue: fontSizes.default,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [placeholderPosition, plaholderFontSize]);

  useEffect(() => {
    if (isFilled) {
      placeholderActive();
    } else {
      placeholderDisabled();
    }
  }, [isFilled, placeholderDisabled, placeholderActive]);

  const handleOnChange = useCallback((text) => {
    setIsFilled(text.length > 0);
  }, []);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleEndEditing = (e) => {
    setIsFocused(false);
    setIsTouched(true);
    setFieldValue(name, e.nativeEvent.text);
  };

  return (
    <View style={styles.inputContainer}>
      <Animated.Text
        style={{
          position: "absolute",
          left: 35,
          lineHeight: fontSizes.medium,
          justifyContent: "center",
          fontWeight: "bold",
          color: colors.gray,
          fontSize: plaholderFontSize,
          top: placeholderPosition,
        }}
      >
        {placeholder}
      </Animated.Text>
      <Icon customStyles={styles.icon} name={iconName} />

      <TextInput
        name={name}
        style={[
          styles.inputStyles,
          isFocused && styles.inputFocused,
          error && isTouched && styles.errorInput,
        ]}
        onEndEditing={handleEndEditing}
        onFocus={handleInputFocus}
        defaultValue={value}
        onChangeText={handleOnChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  inputStyles: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    fontSize: fontSizes.default,
    lineHeight: fontSizes.medium,
    paddingLeft: 35,
    color: colors.bluewhite,
    fontWeight: "bold",
    width: "100%",
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 0,
    bottom: 15,
  },
  inputFocused: {
    borderBottomColor: colors.aquamarine,
  },
  placeholder: {
    position: "absolute",
    left: 35,
    fontSize: fontSizes.default,
    lineHeight: fontSizes.medium,
    justifyContent: "center",
    fontWeight: "bold",
    color: colors.gray,
  },
  errorInput: {
    borderBottomColor: colors.error,
  },
  keyBoardAvoidingContainer: {
    flex: 1,
  },
});

export default memo(TextInputComponent);
