import React from "react";
import "./customForm.scss";

interface Field {
  type: string;
  placeholder: string;
}

interface CustomFormProps {
  onSubmit: (e: React.FormEvent) => void;
  title: string;
  fields: Field[];
  buttonText: string;
}

const CustomForm = React.forwardRef<HTMLFormElement, CustomFormProps>(
  ({ onSubmit, title, fields, buttonText }, ref) => {
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
          }
          return (
            <input
              key={index}
              className="form-input"
              placeholder={field.placeholder}
              type={field.type}
            />
          );
        })}
        <button className="form-button">{buttonText}</button>
      </form>
    );
  }
);

export default CustomForm;
