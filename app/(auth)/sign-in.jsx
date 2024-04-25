import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [from, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setisLoading] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 220,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-28 h-8"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="Email"
            value={from.email}
            handleChangeText={(e) => setForm({ ...from, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={from.password}
            handleChangeText={(e) => setForm({ ...from, password: e })}
            otherStyles="mt-3"
            keyboardType="password"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isLoading}
            containerStyles="mt-7"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-secondary font-psemibold">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
