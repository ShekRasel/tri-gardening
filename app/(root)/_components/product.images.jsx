"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [current, setCurrent] = useState(images?.[0]);

  return (
    <div className="flex flex-col items-center gap-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <Image
            src={
              current || "/images/place-holder/Placeholder_view_vector.svg.png"
            }
            width={400}
            height={300}
            alt="product"
            className="rounded-md object-cover h-[400px]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 flex-wrap">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            width={80}
            height={70}
            alt="thumb"
            onClick={() => setCurrent(img)}
            className={`cursor-pointer rounded-md h-24 object-cover border overflow-hidden
              ${img === current ? "border-primary" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
