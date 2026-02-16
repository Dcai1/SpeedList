"use client";

import { ChangeEvent } from "react";
import { motion } from "motion/react";

type InputBarProps = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export default function InputBar({
  type,
  placeholder,
  value,
  onChange,
  label,
}: InputBarProps) {
  return (
    <motion.div
      // Animation Values
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.01, rotate: 2 }}
      transition={{ duration: 0.2, type: "spring" }}
    >
      <h3>{label}</h3>
      <motion.input
        whileFocus={{ scale: 1.05, rotate: 0 }}
        // Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-3 mb-5 focus:outline-green-500 text-lg sm:text-xl font-bold text-black duration-300 shadow-xl sm:min-w-[20vh] min-w-auto rounded-xl outline-2 focus:shadow-green-300`}
      />
    </motion.div>
  );
}
