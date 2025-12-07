import Button from "@/components/shared/buttons/button";
import TextInput from "@/components/shared/input/text.input";
import LoadingSpinner from "@/components/shared/loader/loader";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const AddVariants = ({ control, setVariantImages, variantsImages }) => {
  const [variants, setVariants] = useState([]);

  //adding variants
  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), serial: prev.length + 1 },
    ]);

    setVariantImages((prev) => [
      ...prev,
      [
        { link: "", deleteToken: "", loading: false },
        { link: "", deleteToken: "", loading: false },
        { link: "", deleteToken: "", loading: false },
        { link: "", deleteToken: "", loading: false },
      ],
    ]);
  };

  //delete variants
  const deleteVariant = (id) => {
    setVariants((prev) => prev.filter((v) => v.id !== id));

    setVariantImages((prev) => {
      const idx = variants.findIndex((v) => v.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      updated.splice(idx, 1); // remove images of deleted variant
      return updated;
    });
  };

  //remove image
  const removeImage = async (index, imgIndex) => {
    try {
      setVariantImages((prev) => {
        const updated = [...prev];
        updated[index][imgIndex].loading = true;
        return updated;
      });
      const formData = new FormData();
      formData.append("token", variantsImages[index][imgIndex].deleteToken);
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

    setVariantImages((prev) => {
      const updated = [...prev];
      updated[index][imgIndex] = { link: "", deleteToken: "", loading: false };
      return updated;
    });
  };
  return (
    <div className="w-full lg:w-1/2 border border-light-gray py-4 p-2 md:p-4 rounded-xl">
      <div className=" flex items-center justify-between">
        <h1 className="text-sm font-semibold max-w-32 sm:w-auto">
          Product Variant & Images
        </h1>
        <Button callback={addVariant} type="button">
          + Add Variant
        </Button>
      </div>
      {variants.length > 0 && (
        <div className="mt-4 space-y-4">
          {variants.map((variant, index) => (
            <div
              key={variant.id}
              className="text-sm border border-light-green rounded-md p-4"
            >
              <div className="flex justify-between items-center">
                <h1>Variant {variant.serial}</h1>
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteVariant(variant.id, index)}
                >
                  <FaTrash size={14} />
                </button>
              </div>

              <div className="flex flex-col xl:flex-row flex-wrap xl:justify-center gap-4 md:gap-6 mt-4">
                <TextInput
                  name={`variants.${variant.serial - 1}.label`}
                  label="Size"
                  placeholder="25gm / Small"
                  type="text"
                  control={control}
                  rules={"Size is required"}
                />

                <TextInput
                  name={`variants.${variant.serial - 1}.stock`}
                  label="Stock Limit"
                  placeholder="Enter Limit"
                  type="text"
                  control={control}
                  rules={"Limit is required"}
                />

                <TextInput
                  name={`variants.${variant.serial - 1}.price`}
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
                  {variantsImages.length > 0 &&
                    variantsImages[index].map((image, imgIndex) => (
                      <CldUploadWidget
                        key={imgIndex}
                        uploadPreset={
                          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                        }
                        options={{
                          multiple: false,
                          maxFiles: 1,
                          singleUploadAutoDestroy: false,
                          sources: ["local", "camera", "url"],
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

                          setVariantImages((prev) => {
                            const updated = [...prev];
                            const imagesOfVariant = [...updated[index]];
                            imagesOfVariant[imgIndex] = {
                              link: imageURL,
                              deleteToken: deleteTokenFromCloudinary,
                              loading: false,
                            };
                            updated[index] = imagesOfVariant;
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
                                      onClick={() =>
                                        removeImage(index, imgIndex)
                                      }
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
                                type="button"
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
