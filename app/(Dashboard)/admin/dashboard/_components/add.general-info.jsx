import TextAreaInput from "@/components/shared/input/text.area-input";
import TextInput from "@/components/shared/input/text.input";
import React from "react";

const GeneralInfo = ({ control }) => {
  return (
    <div className="border border-light-gray p-2 md:p-4 rounded-xl space-y-4">
      <h2 className="text-sm font-semibold">General Information</h2>
      <TextInput
        name="product_name"
        label="Product Name"
        placeholder="Enter your product name"
        type="text"
        control={control}
        rules={"Name is required"}
      />
      <TextAreaInput
        name="description"
        label="Description"
        placeholder="Enter description"
        control={control}
        rules={"Descripion is required"}
        rows={4}
      />
    </div>
  );
};

export default GeneralInfo;
