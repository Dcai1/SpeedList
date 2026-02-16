"use client";

import { motion } from "motion/react";

type PageButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  variant: "add" | "remove" | "clear" | "copy" | "reset" | "update";
};

export default function PageButton({
  onClick,
  label,
  disabled = false,
  variant,
}: PageButtonProps) {
  const variantColor = {
    add: "hover:bg-green-300",
    remove: "hover:bg-red-300",
    clear: "hover:bg-yellow-400",
    copy: "hover:bg-gray-400",
    reset: "hover:bg-red-600",
    update: "hover:bg-green-500",
  };

  const hoverClass = variantColor[variant];

  return (
    <motion.div
      // Animation Values
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ duration: 0.2, type: "spring" }}
      whileTap={{ scale: 0.9, rotate: 0 }}
      className="w-fit"
    >
      <button
        onClick={onClick}
        className={`p-3 m-3 text-lg font-bold text-center text-black bg-gray-300 outline-4 rounded-2xl sm:text-xl ${
          disabled ? "grayscale opacity-25 cursor-not-allowed" : `${hoverClass}`
        }`}
      >
        {label}
      </button>
    </motion.div>
  );
}
