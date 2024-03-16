import { FormControlProps, InputProps } from "@chakra-ui/react";
import { FormikErrors, FormikTouched } from "formik";
import { JSXElementConstructor, ReactElement } from "react"

export interface IFormInputProps {
  name: string;
  label?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?:
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[]
  | undefined;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  inputProps?: InputProps;
  wrapperProps?: FormControlProps;
  children?: React.ReactNode;
  helperText?: React.ReactNode;
}

// export type ISelectOption = {
//   label: string;
//   value: any;
// } | null;

export interface IStudentDetails  {
  name: string,
  gender: string,
  eventName: string,
  college: string,
  mailId: string,
  phone: string
};

export interface IPaymentDetails {
  nameInUpi: string,
  transactionId: string,
}

export interface InitialValuesType  {
  studentDetails: {
    name: string,
    gender: string,
    eventName: string,
    college: string,
    mailId: string,
    phone: string
  },
  paymentDetails: {
    nameInUpi: string,
    transactionId: string,
  }
};

export interface Meta {
  id: string,
  title: string,
  description: string,
  date: string,
  tags: string[],
  read: string
}

export interface BlogPost {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}