import React from 'react';

export default ({ input, label, placeholder, type, meta: { touched, error, warning } }) => {
  const errorClass = touched && error ? "error" : "";
  return (
    <div>
      <div>
        <input {...input} className={`validate ${errorClass}`} type={type}/>
        <label data-error={error} htmlFor={input.name}>{label}</label>
      </div>
    </div>
  );
}