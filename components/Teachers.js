import React, { useState } from "react";
import { motion } from "framer-motion";

const Teacher = () => {
  const [teachers, setTeachers] = useState([
    {
      name: "Christian Howard",
      country: "Italy",
      image: "/assets/t1.svg",
      subject: "Italian teacher",
    },
    {
      name: "Sandra Wilson",
      country: "Spain",
      image: "/assets/t2.svg",
      subject: "Spanish teacher",
    },
    {
      name: "Jimmy Cooper",
      country: "UK",
      image: "/assets/t3.svg",
      subject: "English teacher",
    },
  ]);

  return (
    <div className="container mx-auto py-20" id="teacher">
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
        {teachers.map((teacher, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-5"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={teacher.image} alt={teacher.name} />
            <p className="text-2xl font-semibold">{teacher.name}</p>
            <div className="flex items-center gap-2">
              <img
                src={`/assets/${teacher.country.toLowerCase()}.svg`}
                alt={teacher.country}
              />
              <p className="text-gray-500">{teacher.subject}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Teacher;
