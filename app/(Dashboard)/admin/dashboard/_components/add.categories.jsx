import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import SelectInput from "@/components/shared/input/text.select-input";
import { APP_URL, createSlug } from "@/helpers/helper";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddCategories = ({ control, watch }) => {
  const [cat, setCat] = useState([]);
  const [newInput, setNewInput] = useState(false);
  const handleShowInput = () => {
    setNewInput(true);
  };

  const handleHideInput = () => setNewInput(false);

  const createCategory = async () => {
    const category_Name = watch("new-category");
    if (!category_Name) return;
    const slug = createSlug(category_Name);
    const categoryData = { name: category_Name, slug };

    try {
      const res = await fetch("/api/category/create", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify(categoryData),
      });

      const resData = await res.json();
      console.log(resData.data.name);
      setCat((prev) => [...prev, resData.data.name]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await fetch(`/api/category/all`);
        const resData = await res.json();
        const catData = resData.data;

        setCat(catData.map((cat) => cat.name));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="border border-light-gray p-2 md:p-4 rounded-xl space-y-4">
      <h1 className="text-sm font-semibold">Categorization</h1>
      <div className="flex justify-between items-start">
        {cat.length > 0 && (
          <SelectInput
            control={control}
            name="category"
            label={"Select Category"}
            values={cat}
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
              <Button type="button" callback={createCategory}>
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
