import { createCategory } from "@/app/(Dashboard)/admin/dashboard/server-actions/categories.action";
import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import SelectInput from "@/components/shared/input/text.select-input";
import { getCategories } from "@/global-server-actions/categories.action";
import { createSlug } from "@/helpers/helper";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddCategories = ({ control, watch }) => {
  const [categories, setCategories] = useState([]);
  const [newInput, setNewInput] = useState(false);

  const handleShowInput = () => {
    setNewInput(true);
  };

  const handleHideInput = () => setNewInput(false);

  const handleCreateCategory = async () => {
    const category_Name = watch("new-category");
    if (!category_Name) return;
    const slug = createSlug(category_Name);
    const categoryData = { name: category_Name, slug };

    const { data: category, message } = await createCategory(categoryData);

    category && setCategories((prev) => [...prev, category.name]);

    alert(message);
  };

  useEffect(() => {
    (async () => {
      const { data: allCategories } = await getCategories();
      allCategories && setCategories(allCategories.map((cat) => cat.name));
    })();
  }, []);

  return (
    <div className="border border-light-gray p-2 md:p-4 rounded-xl space-y-4">
      <h1 className="text-sm font-semibold">Categorization</h1>
      <div className="flex justify-between items-start">
        {categories.length > 0 && (
          <SelectInput
            control={control}
            name="category"
            label={"Select Category"}
            values={categories}
            rules={"Choose category"}
          />
        )}

        {newInput ? (
          <div className="flex flex-col space-y-2">
            <TextInput
              name="new-category"
              label="Add new Category"
              placeholder="Enter category"
              type="text"
              control={control}
              rules={"Category is required"}
            />

            <div className="flex items-center gap-2">
              <Button type="button" callback={handleCreateCategory}>
                Add
              </Button>
              <Button type="button" callback={handleHideInput}>
                <RxCross2 size={20} />
              </Button>
            </div>
          </div>
        ) : (
          <Button type={"button"} callback={handleShowInput}>
            New Category
          </Button>
        )}
      </div>
      <SelectInput
        control={control}
        name="Popular"
        label={"Popular "}
        values={["yes", "no"]}
        rules={"Choose popular"}
        className={"min-w-24"}
      />
      <SelectInput
        control={control}
        name="special"
        label={"Special-feature!"}
        values={["yes", "no"]}
        className={"min-w-24"}
      />
      <TextInput
        name="rating"
        label="Rating"
        placeholder="Enter product rating"
        type="text"
        control={control}
        rules={"Rating is required"}
      />
    </div>
  );
};

export default AddCategories;
