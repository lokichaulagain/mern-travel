import React from "react";

const TextInputField = ({ name, value, onChange, type, placeholder, label }: any) => {
  return (
    <>
      <label htmlFor="title" className="form-label mb-1">
        {label}
      </label>
      <input name={name} value={value} onChange={onChange} type={type} className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0" id="fullName" placeholder={placeholder} />
    </>
  );
};

export default TextInputField;
