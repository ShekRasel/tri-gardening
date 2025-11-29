"use client";
import AddProductModal from "@/app/(Dashboard)/admin/dashboard/_components/add.product-modal";
import React, { useState } from "react";

const Products = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="h-screen relative">
      <button
        className="bg-light-green px-2 text-white py-1 rounded-md cursor-pointer hover:shadow-md"
        onClick={() => setModal(true)}
      >
        Add Product
      </button>

      {/* modal for add products */}
      <AddProductModal setModal={setModal} modal={modal} />
    </div>
  );
};

export default Products;
