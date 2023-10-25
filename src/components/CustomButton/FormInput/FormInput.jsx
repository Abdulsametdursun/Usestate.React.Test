import React, { useState } from "react";
const FormInput = ({
  label,
  onChange,
  type,
  showPassword,
  isShow,
  isIcon,
  value,
}) => {
  return (
    <div className="inputBar">
      <label htmlFor="">{label}</label>
      <br />
      <input
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
      />
      <br />

      {isIcon === true && (
        <button type="button" className="show" onClick={showPassword}>
          {isShow === true ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </button>
      )}
    </div>
  );
};

export default FormInput;
