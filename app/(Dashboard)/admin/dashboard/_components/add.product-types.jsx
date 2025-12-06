import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ProductType = ({ control }) => {
  const [type, setType] = useState(false);

  const handleShowTypesInput = () => {
    setType(true);
  };

  const handleHideTypesInput = () => {
    setType(false);
  };
  return (
    <div className="border border-light-gray p-2 md:p-4 rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">Have any types</h1>
        {!type && (
          <Button type="button" callback={handleShowTypesInput}>
            Add Types
          </Button>
        )}
      </div>
      {type && (
        <div className="flex justify-between items-start">
          <TextInput
            name="types"
            label="Enter Types"
            placeholder="Enter types"
            type="text"
            control={control}
          />

          <Button type="button" callback={handleHideTypesInput}>
            <RxCross2 size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductType;
