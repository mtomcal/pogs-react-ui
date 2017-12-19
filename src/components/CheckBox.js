import React, { Component } from 'react';

export class CheckBox extends Component {
  render() {
    const {
      label,
      field, // { name, value, onChange, onBlur }
      form: { touched, errors },
    } = this.props;
    return (
      <div className="checkbox">
        <label className="control-label">
          <input
            name={field.name}
            type="checkbox"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
          <span className="checkbox-material">
            <span className="check" />
          </span>
          {label}
        </label>
        {errors[field.name] &&
          touched[field.name] && (
            <span className="text-danger">{errors[field.name]}</span>
          )}
      </div>
    );
  }
}

export default CheckBox;
