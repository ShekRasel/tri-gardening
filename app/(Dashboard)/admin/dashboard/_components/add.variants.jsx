import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import LoadingSpinner from "@/components/shared/loader/loader";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const AddVariants = ({ control }) => {
  const [variants, setVariants] = useState([]);
  const [imagesLink, setImagesLink] = useState([
    { link: "", deleteToken: "", loading: false },
    { link: "", deleteToken: "", loading: false },
    { link: "", deleteToken: "", loading: false },
    { link: "", deleteToken: "", loading: false },
  ]);

  //adding variants
  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      { id: Date.now(), serial: prev.length + 1 },
    ]);
  };

  //delete variants
  const deleteVariant = (id) => {
    setVariants(variants.filter((variant) => variant.id !== id));
  };

  //remove image
  const removeImage = async (index) => {
    try {
      setImagesLink((prev) => {
        const updated = [...prev];
        updated[index].loading = true;
        return updated;
      });
      const formData = new FormData();
      formData.append("token", imagesLink[index].deleteToken);
      await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/delete_by_token`,
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.log(error);
      alert("Something wrong");
    }

    setImagesLink((prev) => {
      const updated = [...prev];
      updated[index] = { link: "", deleteToken: "", loading: false };
      return updated;
    });
  };
  return (
    <div className="w-full lg:w-1/2 border border-light-gray py-4 p-2 md:p-4 rounded-xl">
      <div className=" flex items-center justify-between">
        <h1 className="text-sm font-semibold">Product Variant & Images</h1>
        <Button callback={addVariant} type="button">
          + Add Variant
        </Button>
      </div>
      {variants.length > 0 && (
        <div className="mt-4 space-y-4">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className="text-sm border border-light-green rounded-md p-4"
            >
              <div className="flex justify-between items-center">
                <h1>Variant {variant.serial}</h1>
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteVariant(variant.id)}
                >
                  <FaTrash size={14} />
                </button>
              </div>

              <div className="flex flex-col xl:flex-row flex-wrap xl:justify-center gap-4 md:gap-6 mt-4">
                <TextInput
                  name="size"
                  label="Size"
                  placeholder="25gm / Small"
                  type="text"
                  control={control}
                  rules={"Size is required"}
                />

                <TextInput
                  name="stock"
                  label="Stock Limit"
                  placeholder="Enter Limit"
                  type="text"
                  control={control}
                  rules={"Limit is required"}
                />

                <TextInput
                  name="price"
                  label="MRP Price"
                  placeholder="Enter MRP Price"
                  type="text"
                  control={control}
                  rules={"Price is required"}
                />
              </div>

              <div className="mt-5 text-sm space-y-2">
                <h1>Images</h1>
                <div className="flex justify-evenly flex-wrap">
                  {imagesLink.map((image, index) => (
                    <CldUploadWidget
                      key={index}
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                      }
                      options={{
                        multiple: false,
                        maxFiles: 1,
                        singleUploadAutoDestroy: false,
                        sources: ["local", "camera"],
                        uploadSignature: undefined,
                        clientAllowedFormats: [
                          "jpg",
                          "jpeg",
                          "png",
                          "webp",
                          "avif",
                        ],
                        resource_type: "image",
                      }}
                      onSuccess={(result) => {
                        const imageURL = result.info.secure_url;
                        const deleteTokenFromCloudinary =
                          result.info.delete_token;

                        setImagesLink((prev) => {
                          const updated = [...prev];
                          updated[index] = {
                            link: imageURL,
                            deleteToken: deleteTokenFromCloudinary,
                            loading: false,
                          };
                          return updated;
                        });
                      }}
                    >
                      {({ open }) => (
                        <div>
                          {image.link ? (
                            <div className="relative h-24 w-22">
                              <Image
                                src={image.link}
                                fill
                                alt="uploaded-image"
                                className="rounded-md object-cover"
                              />

                              <div className="absolute -top-2 -right-2">
                                {image.loading ? (
                                  <LoadingSpinner size="sm" />
                                ) : (
                                  <button
                                    onClick={() => removeImage(index)}
                                    className=" bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer"
                                    type="button"
                                  >
                                    X
                                  </button>
                                )}
                              </div>
                            </div>
                          ) : (
                            <button
                              className="border border-dashed p-8 rounded-xl text-xl cursor-pointer"
                              onClick={() => open()}
                            >
                              +
                            </button>
                          )}
                        </div>
                      )}
                    </CldUploadWidget>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddVariants;
