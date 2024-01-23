"use client"

import { Button, Flex, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useData } from "../store/DataProvider";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormInput from "./FormInput";
import { InitialValuesType, IPaymentDetails } from "@/interfaces";
import { redirect } from "next/navigation";


const PaymentForm: React.FC = () => {
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
  } = useFormik<IPaymentDetails>({
    initialValues: {
      nameInUpi: "",
      transactionId: "",
    },
    validationSchema: Yup.object().shape({
      nameInUpi: Yup.string().required("UPI ID is required"),
      transactionId: Yup.string().required("Transaction Id is required"),
    }),
    onSubmit: (values : IPaymentDetails) => {
        console.log(values)
        setPaymentDetails(values);
        alert("Registered Succesfully")
        
    },
    enableReinitialize :true
  });

  const { state, setPaymentDetails } = useData() as { state : InitialValuesType, setPaymentDetails : (FormData:IPaymentDetails) => void};
  
  useEffect (() => {
    setValues(state.paymentDetails);
  }, [])

  return (
    <Box width="100%" as="form" onSubmit={handleSubmit as any}>
      <Box width="100%">
        
        <FormInput
          label="Name as per UPI"
          placeholder="Enter name as per UPI"
          name="nameInUpi"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.nameInUpi}
          error={errors?.nameInUpi}
          touched={touched?.nameInUpi}
        />
        <FormInput
          label="Transaction ID"
          placeholder="Transaction ID"
          name="transactionId"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.transactionId}
          error={errors?.transactionId}
          touched={touched?.transactionId}
        />
        
        <Flex w="100%" justify="flex-end" mt="4rem">
          <Button colorScheme="red" type="submit">
            Submit
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default PaymentForm;
