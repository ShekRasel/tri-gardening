import React from "react";
import { useController } from "react-hook-form";

const TextInput = ({
  className,
  label,
  placeholder,
  type = "text",
  name,
  control,
  rules,
  defaultValue = "",
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: {
      required: rules,
    },
  });

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium text-sm">{label}</label>}
      <input
        type={type}
        className={`${className} border border-light-gray rounded-md outline-none px-2 py-1 text-sm w-full`}
        placeholder={placeholder}
        {...field}
      />
      {fieldState.error && (
        <p className="text-red-500 text-sm">{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default TextInput;
