import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import * as yup from "yup";

export default function ReviewForm({ addReview }) {
  const reviewSchema = yup.object({
    title: yup
      .string()
      .required("Required")
      .min(4, "Must be at least 4 characters"),
    body: yup
      .string()
      .required("Required")
      .min(8, "Must be at least 8 characters"),
    rating: yup
      .string()
      .required("Required")
      .test("is-num-1-5", "Must be 1 - 5", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
        validationSchema={reviewSchema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={handleChange("title")}
                value={values.title}
                onBlur={handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {touched.title && errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Review details"
                onChangeText={handleChange("body")}
                value={values.body}
                onBlur={handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {touched.body && errors.body}
              </Text>

              <TextInput
                style={globalStyles.input}
                keyboardType="numeric"
                placeholder="Rating (1-5)"
                onChangeText={handleChange("rating")}
                value={values.rating}
                onBlur={handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {touched.rating && errors.rating}
              </Text>

              <Button color={"maroon"} title="Submit" onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
