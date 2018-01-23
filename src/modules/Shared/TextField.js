import React from 'react';

export default function TextField({
  label,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
}) {
  return (
    <div className={`form-group`}>
      <label className="control-label" htmlFor={field.name}>
        {label}
      </label>
      <input type="text" className={`form-control`} {...field} />
      {errors[field.name] && (
        <span className="text-danger">{errors[field.name]}</span>
      )}
    </div>
  );
}
