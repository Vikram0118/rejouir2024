"use client"

import { Button, Flex, Box, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useData } from "../store/DataProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { genderOptions, eventsOptions } from "../../constants";
import { IStudentDetails, InitialValuesType } from "@/interfaces";


const EventForm: React.FC = () => {
  const {
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    values,
    setFieldTouched,
    setFieldValue,
    setValues
  } = useFormik<IStudentDetails>({
    initialValues: {
      name: "",
      gender: "",
      eventName: "",
      college: "",
      mailId: "",
      phone: ""
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      gender: Yup.string().required("Gender is required"),
      eventName: Yup.string().required("Event Name is required"),
      college: Yup.string().required("College is required"),
      phone: Yup.string().required("Phone No. is required"),
      mailId: Yup.string()
        .typeError("Enter a valid Email")
        .required("Email is required")
    }),
    onSubmit: (values : IStudentDetails) => {
      setPayTab(true)
      setActiveTab("payment")
      setStudentDetails(values)
    },
    enableReinitialize :true
  });

  const { state, setPayTab, setStudentDetails, setActiveTab } = useData() as { state : InitialValuesType, setPayTab : (value: boolean) => void, setStudentDetails : (FormData:IStudentDetails) => void, setActiveTab :(tab: "student" | "payment") => void};

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        <FormInput
            label="Name of the Student"
            placeholder="Enter student name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.name}
            error={errors?.name}
            touched={touched?.name}
          />
          <FormSelect
            label="Events"
            name="eventName"
            placeholder="Select event"
            options={eventsOptions}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.eventName}
            touched={touched.eventName}
            value={values.eventName}
          />
          <FormInput
            label="Name of the College"
            placeholder="Enter college name"
            name="college"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.college}
            error={errors?.college}
            touched={touched?.college}
          />
          <FormInput
            label="Email ID"
            placeholder="Enter email id"
            name="mailId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.mailId}
            error={errors?.mailId}
            touched={touched?.mailId}
          />
          <FormSelect
            label="Gender"
            name="gender"
            placeholder="Select gender"
            options={genderOptions}
            onChange={setFieldValue}
            onBlur={setFieldTouched}
            error={errors.gender}
            touched={touched.gender}
            value={values.gender}
          />
          <FormInput
            label="Phone"
            placeholder="Enter phone number"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.phone}
            error={errors?.phone}
            touched={touched?.phone}
          />
        <Flex w="100%" justify="flex-end" mt="4rem">
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventForm;
