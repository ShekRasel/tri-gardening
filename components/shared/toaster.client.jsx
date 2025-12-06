"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: { background: "#363636", color: "#fff" },
        success: {
          duration: 3000,
          theme: { primary: "green", secondary: "black" },
        },
      }}
    />
  );
}
