// import React from "react";

// const Student = () => {
//   return (
//     <div className="container mx-auto ">
//       <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
//         Top Studying
//       </p>
//       <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
//         Our students say
//       </p>
//       <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
//         <img src="/assets/student.svg" alt="" />
//         <div className="flex flex-col gap-5 items-start">
//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
//             Martin Watson
//           </p>
//           <div className="flex items-center gap-2">
//             <img src="/assets/uk.svg" alt="itersfgjds" />
//             <p className="text-gray-500">English teacher</p>
//           </div>
//           <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
//             There is no way I could have made the same <br /> progress learning
//             Spanish without using Lingua. <br /> The best part is now learning
//             Spanish has <br />
//             become one of my biggest hobbies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Student;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Student = () => {
  const students = [
    {
      name: "Martin Watson",
      country: "English teacher",
      image: "/assets/student.svg",
      testimonial:
        "There is no way I could have made the same progress learning English without Deodata. The best part is now learning English has become one of my biggest hobbies.",
    },
    {
      name: "Alice Smith",
      country: "USA",
      image: "/assets/student.svg",
      testimonial:
        "Deodata has been a game-changer for me. The personalized approach to learning has helped me improve my English skills significantly. I highly recommend it!",
    },
    {
      name: "John Doe",
      country: "Canada",
      image: "/assets/student.svg",
      testimonial:
        "I've tried many language learning platforms, but none have been as effective as Deodata. The interactive lessons and supportive community have made learning English enjoyable and effective.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container mx-auto">
      <div className="text-left">
        <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
          Top Studying
        </p>
        <p className="text-3xl lg:text-5xl font-semibold text-gray-500 mt-3">
          Our students say
        </p>
      </div>
      <Slider {...settings}>
        {students.map((student, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center gap-5 py-10 lg:py-20"
          >
            <img
              className="w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full"
              src={student.image}
              alt={student.name}
            />
            <div className="flex flex-col items-center lg:items-start lg:gap-5">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ">
                {student.name}
              </p>
              <div className="flex items-center gap-2">
                <img src="/assets/uk.svg" alt="flag" />
                <p className="text-gray-500">{student.country}</p>
              </div>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-center lg:text-left text-gray-500">
                {student.testimonial}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Student;
