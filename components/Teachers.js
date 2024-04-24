import React from "react";
import { motion } from "framer-motion";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
        Key Person
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500 mt-3">
        Meet our teachers
      </p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col gap-5 "
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/t1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Christian Howard</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">Italian teacher</p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 "
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/t2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Sandra Wilson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">Spanish teacher</p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 "
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">English teacher</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Teacher;
