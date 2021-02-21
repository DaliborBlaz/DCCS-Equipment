import React from "react";
import { useField } from "formik";
import { TextField } from "@fluentui/react";

const CustomTextFiled: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const fieldStyle = {
    field: { backgroundColor: "gainsboro", fontSize: "20px" },
  };

  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-xl8 ms-lg8 ms-md12 ms-sm12  ms-xlPush2 ms-lgPush2 form-input">
        <TextField
          styles={fieldStyle}
          {...field}
          {...props}
          errorMessage={meta.error}
          label={label}
        ></TextField>
      </div>
    </div>
  );
};

export default CustomTextFiled;
