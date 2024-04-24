import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";

const MoreInfoModal = () => {
  const info = [
    {
      title: "How the first lesson with teacher will be?",
      des: "By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.",
    },
    {
      title: "What materials do I need for the course?",
      des: "You will need a computer or mobile device with internet access. Some courses may require specific software or materials, which will be outlined in the course description.",
    },
    {
      title: "How long does it take to complete a course?",
      des: "The duration of a course varies depending on the course content and your learning pace. Most courses are designed to be completed within a few weeks to a few months.",
    },
    {
      title: "Is there a certificate upon completion?",
      des: "Yes, upon successful completion of a course, you will receive a certificate of completion that you can download and share.",
    },
    {
      title: "Are there any prerequisites for the course?",
      des: "Prerequisites vary depending on the course. Some courses may require prior knowledge or experience in a specific area, while others may be suitable for beginners.",
    },
    {
      title: "Can I get a refund if I'm not satisfied?",
      des: "Yes, we offer a satisfaction guarantee. If you're not satisfied with your course, you can request a full refund within the specified refund period.",
    },
  ];

  return (
    <div className="container mx-auto py-20" id="careers">
      <p className="text-gray-500 text-2xl font-medium uppercase my-3">
        MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div className="group">
                <Disclosure.Button className="flex justify-between w-full rounded-lg border border-gray-200 px-8 py-6 text-left text-sm font-medium focus:outline-none bg-gray-200">
                  <span>{inf.title}</span>
                  {open ? (
                    <BsFillDashCircleFill className="text-[#524fd5] text-2xl" />
                  ) : (
                    <BsFillPlusCircleFill className="text-[#524fd5] text-2xl" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  as="div"
                  className="px-4 pt-2 pb-4 text-sm text-gray-500 transition-all duration-300 ease-in-out"
                >
                  {inf.des}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default MoreInfoModal;
