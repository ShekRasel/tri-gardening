import React from "react";
import { useController } from "react-hook-form";

const SelectInput = ({ label, control, name, values, className, rules }) => {
  const defaultValue = values[0] || "";

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules: {
      required: rules,
    },
  });

  return (
    <div className="text-sm flex flex-col space-y-1">
      {label && (
        <label htmlFor="" className="text-">
          {label}
        </label>
      )}

      <select
        name={name}
        {...field}
        className={`${className} outline-none border border-light-gray rounded-sm px-2`}
      >
        {values.map((value, index) => (
          <option value={value} key={index} className="bg-white text-black">
            {value}
          </option>
        ))}
      </select>
      {fieldState.error && (
        <p className="text-red-500 text-sm">{fieldState.error.message}</p>
      )}
    </div>
  );
};

export default SelectInput;
