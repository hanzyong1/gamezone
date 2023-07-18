import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values }) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={handleChange("title")}
                value={values.title}
              />
              <TextInput
                style={globalStyles.input}
                placeholder="Review details"
                onChangeText={handleChange("body")}
                value={values.body}
              />
              <TextInput
                style={globalStyles.input}
                keyboardType="numeric"
                placeholder="Rating (1-5)"
                onChangeText={handleChange("rating")}
                value={values.rating}
              />
              <Button color={"maroon"} title="Submit" onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
