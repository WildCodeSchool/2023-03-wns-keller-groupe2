import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./customForm.scss";

interface Field {
  type: string;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
  options?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CustomFormProps {
  onSubmit: (e: React.FormEvent) => void;
  secondOnSubmit?: (e: React.MouseEvent) => void;
  title: string;
  fields: Field[];
  buttonText: string;
  secondButtonText?: string;
  buttonType?: "button" | "submit";
}

const CustomForm = React.forwardRef<HTMLFormElement, CustomFormProps>(
  (
    {
      onSubmit,
      secondOnSubmit,
      title,
      fields,
      buttonText,
      secondButtonText,
      buttonType,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    return (
      <form ref={ref} onSubmit={onSubmit} className="style-form">
        <h1 className="form-title">{title}</h1>
        {fields.map((field, index) => {
          if (field.type === "textarea") {
            return (
              <textarea
                key={index}
                className="form-input"
                placeholder={field.placeholder}
              />
            );
          } else if (field.isPassword) {
            return (
              <div key={index} className="input-wrapper">
                <input
                  placeholder={field.placeholder}
                  type={showPassword ? "text" : "password"}
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="icon">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
            );
          }
          return (
            <div key={index}>
              {field.label && <label>{field.label}</label>}
              <input
                className="form-input"
                placeholder={field.placeholder}
                type={field.type}
                onChange={field.onChange}
              />
            </div>
          );
        })}
        <div className="form-button-container">
          <button type="submit" className="form-button-first">
            {buttonText}
          </button>
          {secondButtonText && (
            <button
              type="button"
              className="form-button-second"
              onClick={(e) => secondOnSubmit && secondOnSubmit(e)}>
              {secondButtonText}
            </button>
          )}
        </div>
      </form>
    );
  }
);

export default CustomForm;
