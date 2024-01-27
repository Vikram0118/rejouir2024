"use client"

import React, { createContext, useContext, useState } from "react";
import { IPaymentDetails, IStudentDetails, InitialValuesType } from "@/interfaces";

const initialValues = {
  studentDetails: {
    name: "",
    gender: "",
    eventName: "",
    college: "",
    mailId: "",
    phone: ""
  },
  paymentDetails: {
    nameInUpi: "",
    transactionId: "",
  }
};

// context
const DataContext = createContext<{
  state: InitialValuesType;
  payTab: boolean;
  setPayTab : (value: boolean) => void;

  setStudentDetails: (FormData:IStudentDetails) => void;
  setPaymentDetails: (FormData:IPaymentDetails) => void;

  activeTab : "student" | "payment";
  setActiveTab :(tab: "student" | "payment") => void;
} | null>(null);

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // state of all two forms
  const [state, setState] = useState(initialValues);

  // states responsible for unlocking locked tabs
  const [payTab, setPayTab] = useState(false);

  // state used for next and previous buttons
  const [activeTab, setActiveTab] = useState("student");

  // modifiying the global state of student details
  const setStudentDetails = (formData: IStudentDetails) => {
    setState((prevState) => ({
      ...prevState,
      studentDetails: formData,
    }));
  };

  // modifiying the global state of payment details
  const setPaymentDetails = (formData: IPaymentDetails) => {
    setState((prevState) => ({
      ...prevState,
      paymentDetails: formData,
    }));
  };

  return (
    <DataContext.Provider 
      value={{ 
        state,
        payTab,
        setPayTab,
        setStudentDetails,
        setPaymentDetails,
        activeTab : activeTab as "student" | "payment", 
        setActiveTab ,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
