import React from "react";

const Input = ({
  name,
  type,
  className,
  id,
  label,
  classLabel,
  idLabel,
  labelBefore = true,
  placeholder,
  value,
  handleChange,
  ariaLabel,
  readOnly,
  onClick
}) => {
  return (
    <React.Fragment>
      {label && labelBefore && (
        <label htmlFor={id} id={idLabel} className={classLabel}>
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        aria-label={ariaLabel}
        onChange={handleChange}
        readOnly={readOnly}
        onClick={onClick}
      />
      {label && !labelBefore && (
        <label htmlFor={id} id={idLabel} className={classLabel}>
          {label}
        </label>
      )}
    </React.Fragment>
  );
};

export default Input;
