import React from "react";

const sizeMap = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function LoadingSpinner({
  size = "md",
  label = "Loading...",
  className = "",
  variant = "ring",
}) {
  const numericStyle =
    typeof size === "number" ? { width: size, height: size } : undefined;
  const sizeClass = typeof size === "number" ? "" : sizeMap[size];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`inline-flex items-center justify-center gap-3 ${className}`}
    >
      {variant === "ring" ? (
        <svg
          className={`${sizeClass} animate-spin`}
          style={numericStyle}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        <div
          className={`flex items-center gap-2 ${sizeClass}`}
          style={numericStyle}
          aria-hidden="true"
        >
          <span
            className="inline-block w-2 h-2 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="inline-block w-2 h-2 rounded-full animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <span
            className="inline-block w-2 h-2 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      )}

      <span className="sr-only">{label}</span>
    </div>
  );
}
