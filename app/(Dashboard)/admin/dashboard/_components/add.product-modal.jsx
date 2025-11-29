import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import GeneralInfo from "@/app/(Dashboard)/admin/dashboard/_components/add.general-info";
import AddVariants from "@/app/(Dashboard)/admin/dashboard/_components/add.variants";
import AddCategories from "@/app/(Dashboard)/admin/dashboard/_components/add.categories";

const AddProductModal = ({ setModal, modal }) => {
  const { handleSubmit, control, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          </div>
          {/* adding variants */}
          <AddVariants control={control} />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-md mt-4 text-white bg-light-green"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductModal;
