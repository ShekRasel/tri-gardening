import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import GeneralInfo from "@/app/(Dashboard)/admin/dashboard/_components/add.general-info";
import AddVariants from "@/app/(Dashboard)/admin/dashboard/_components/add.variants";
import AddCategories from "@/app/(Dashboard)/admin/dashboard/_components/add.categories";
import ProductType from "@/app/(Dashboard)/admin/dashboard/_components/add.product-types";
import { useState } from "react";
import { createSlug } from "@/helpers/helper";
import Button from "@/components/shared/buttons/button";
import { createProduct } from "@/app/(Dashboard)/admin/dashboard/server-actions/product.action";

const AddProductModal = ({ setModal, modal }) => {
  const { handleSubmit, control, watch, reset } = useForm();
  const [variantsImages, setVariantImages] = useState([]);

  const onSubmit = async (data) => {
    const name = data.product_name;
    const slug = createSlug(data.product_name);
    const rating = Number(data.rating);
    const description = data.description;
    const popular = data.Popular === "yes";
    const variants = data.variants || [];
    const category = data.category;
    const images = variantsImages.flatMap((variant) =>
      (variant || []).map((img) => img?.link).filter(Boolean)
    );

    console.log(images);

    const payload = {
      name,
      slug,
      rating,
      description,
      popular,
      variants,
      images,
      category,
    };

    const { message } = await createProduct(payload);
    console.log("here");
    reset();
    setVariantImages([]);
    alert(message);
  };

  return (
    <div
      className={`shadow-lg w-full absolute top-0 rounded-md p-4 bg-white transition-all duration-500 ${
        modal ? "opacity-100 scale-100" : "scale-0 opacity-0"
      }`}
    >
      {/* header part */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Add Product</h1>
        <button
          onClick={() => setModal(false)}
          className="text-primary cursor-pointer"
        >
          <RxCross2 size={22} />
        </button>
      </div>

      {/* add product form */}
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">
          <div className="w-full lg:w-1/2 space-y-4">
            {/* general info */}
            <GeneralInfo control={control} />
            {/* add category and others info */}
            <AddCategories control={control} watch={watch} />
            {/* types */}
            <ProductType control={control} />
          </div>
          {/* adding variants */}
          <AddVariants
            control={control}
            variantsImages={variantsImages}
            setVariantImages={setVariantImages}
          />
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default AddProductModal;
