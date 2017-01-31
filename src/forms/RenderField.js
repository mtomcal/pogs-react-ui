import React from 'react';

export default ({ input, label, type, meta: { touched, error, warning } }) => {
  const validClass = touched && !error ? 'valid' : '';
  const invalidClass = touched && error ? 'invalid' : '';
  return (
    <div>
      <input {...input} className={`validate ${validClass} ${invalidClass}`} type={type}/>
      <label data-error={error} htmlFor={input.name}>{label}</label>
    </div>
  );
}