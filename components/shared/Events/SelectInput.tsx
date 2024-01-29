import React from "react";
import { useTheme } from "@chakra-ui/react";
import ReactSelect, { Props } from "react-select";
import { IFormInputProps } from "@/interfaces";

interface IFormSelectProps
  extends Omit<IFormInputProps, "inputProps" | "type" | "onChange" | "onBlur"> {
  options: { label: string; value: string }[] | any;
  selectProps?: Props;
  onChange?: any;
  onBlur?: any;
}

const SelectInput: React.FC<IFormSelectProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  selectProps = {},
  children,
  helperText,
  wrapperProps = {},
  options,
}) => {
  const theme = useTheme();

  const handleChange = (value: any) => {
    onChange && onChange(name, value?.value);
  };
  const handleBlur = () => {
    onBlur && onBlur(name, true);
  };

  const isBrowser = typeof window !== "undefined";

  return (
    <>
      <ReactSelect
        name={name}
        placeholder={placeholder}
        value={options.find((item: { value: string }) => item?.value === value)}
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        // styles
        styles={{
          container: (base) => ({
            ...base,
            // width: "100%",
            minWidth: "none",
            height: "auto",
            maxHeight: "none",
            minHeight: "none",
          }),
          control: (base, { isFocused }) => ({
            ...base,
            width: "100%",
            minWidth: "272px",
            height: "45px",
            marginBottom: 0,
            border: isFocused
              ? `1px solid ${theme.colors.primary}`
              : "1px solid #c0bcd7",
            backgroundColor: "white",
            borderRadius: "2px",
            fontSize: ".875rem",
            fontWeight: "500",
            "&:hover": {
              border: `1px solid ${theme.colors.primary}`,
            },
          }),
          valueContainer: (base) => ({
            ...base,
            paddingLeft: "20px",
          }),
          option: (base, { isFocused }) => ({
            ...base,
            fontSize: ".875rem",
            fontWeight: "500",
          }),

          // not happy with this fix for the select drop down z-index issue
         menu: base => ({
          ...base,
          marginTop: 0,
          Index: isBrowser ? 9999 : undefined, 
        }),
        menuPortal: (base) => ({
          ...base,
          marginTop:0,
          zIndex: isBrowser ? 9999 : undefined, 
        }),
          
        }}
        menuPortalTarget={isBrowser ? document.body : undefined}
        {...selectProps}
      />
      {children}
    </>
  );
};

export default SelectInput;
