import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Banner from "../../components/Banner";
import TextInput from "../../components/Inputs/TextInput";
import ViewButton from "../../components/Inputs/ViewButton";
import LoadingScreen from "../../components/LoadingScreen";

import styles from "./styles";

import { routeNames } from "../../navigation/routes";

import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { logInAction } from "../../redux/actions/authActions";

import { fakeLogin } from "../../utils/helper";

const Schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(4),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
});

const CreateAccount = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const submitForm = async (values) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const { user } = await fakeLogin(values);
      setIsLoading(false);
      dispatch(logInAction(user));
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  const navigateTermOfServices = () => {
    navigation.navigate(routeNames.TERMS_OF_SERVICES);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Banner
          title="Create Your Account"
          subtitle="You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!"
        />

        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={Schema}
          validateOnMount={true}
        >
          {({ handleSubmit, values, errors, setFieldValue, isValid }) => (
            <KeyboardAvoidingView
              style={styles.container}
              behavior={Platform.OS === "ios" && "padding"}
            >
              <View style={styles.formikContent}>
                <View style={styles.inputsContainer}>
                  <TextInput
                    value={values.firstName}
                    placeholder="First Name"
                    error={errors["firstName"]}
                    setFieldValue={setFieldValue}
                    name="firstName"
                    iconName="user"
                  />
                  <TextInput
                    value={values.lastName}
                    placeholder="Last Name"
                    error={errors["lastName"]}
                    setFieldValue={setFieldValue}
                    name="lastName"
                    iconName="user"
                  />
                  <TextInput
                    value={values.email}
                    placeholder="Email Address"
                    error={errors["email"]}
                    setFieldValue={setFieldValue}
                    name="email"
                    iconName="email"
                  />
                  <TextInput
                    value={values.password}
                    placeholder="Password"
                    error={errors["password"]}
                    setFieldValue={setFieldValue}
                    name="password"
                    iconName="password"
                  />
                </View>
                {errorMessage !== "" && (
                  <Text style={styles.errorMessage}>{errorMessage}</Text>
                )}
                <Text style={styles.termOfServiceContainer}>
                  <Text style={styles.termOfServiceText}>
                    By creating this account, I agree that I am a U.S. resident,
                    18 years or older with a valid bank account. I agree to
                    Goalsetter’s
                  </Text>

                  <TouchableOpacity
                    onPress={navigateTermOfServices}
                    style={styles.termOfServiceButton}
                  >
                    <Text style={styles.termOfServiceButtonText}>
                      Terms of Service
                    </Text>
                  </TouchableOpacity>
                </Text>
                <ViewButton
                  onPress={handleSubmit}
                  disabled={!isValid}
                  text="CREATE FREE ACCOUNT"
                />
              </View>
            </KeyboardAvoidingView>
          )}
        </Formik>
      </ScrollView>
      {isLoading && <LoadingScreen />}
    </SafeAreaView>
  );
};

export default CreateAccount;
