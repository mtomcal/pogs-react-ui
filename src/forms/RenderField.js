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

export default React.createClass({
  getInitialState() {
    return {
      classNames: ''
    };
  },
  onFocus(event) {
    this.setState({classNames: ` is-focused`});
  },
  onDefocus(event) {
    this.setState({classNames: ``});
  },
  render() {
    const {input, label, type, meta: {touched, error}} = this.props;
    let errorMessageJsx = <span></span>;
    let invalidClass = '';

    switch (inferState(touched, error)) {
      case states.INVALID:
        invalidClass = ' has-error';
        errorMessageJsx = <span className="text-danger">{error}</span>;
        break;
      default:
        errorMessageJsx = <span></span>;
        break;
    }

    return (
      <div className={`form-group${invalidClass}${this.state.classNames}`} onFocus={this.onFocus} onBlur={this.onDefocus}>
        <label className="control-label" htmlFor={input.name}>{label}</label>
        <input {...input} className={`form-control`} type={type}/>
        {errorMessageJsx}
      </div>
    );
  },
})