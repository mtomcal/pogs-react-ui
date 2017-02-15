import React from "react";

export const states = {
  PRISTINE: 'PRISTINE',
  TOUCHED: 'TOUCHED',
  INVALID: 'INVALID'
};

function inferState(touched, error) {
  if (touched) {
    if (error) {
      return states.INVALID;
    }
    return states.TOUCHED;
  }
  return states.PRISTINE;
}

export default ({input, label, type, meta: {touched, error}}) => {
  let errorMessageJsx = <span></span>;
  let invalidClass = '';

  switch (inferState(touched, error)) {
    case states.INVALID:
      invalidClass = ' invalid';
      errorMessageJsx = <span>{error}</span>;
      break;
    default:
      errorMessageJsx = <span></span>;
      break;
  }

  return (
    <div>
      <input {...input} className={`validate${invalidClass}`} type={type}/>
      <label htmlFor={input.name}>{label}</label>
      {errorMessageJsx}
    </div>
  );
}