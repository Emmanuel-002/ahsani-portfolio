import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="041 CIS Depot, Nigerian Air Force"
            subTitle="Website Development"
            result="Success"
            des="Conceptualization, design and develpoment of software code. Maintenance of hardware and software tools."
          />
          <ResumeCard
            title="MetroSource Ltd"
            subTitle="Website Development"
            result="Success"
            des="Design and develpoment of software code."
          />
          <ResumeCard
            title="Image Compressor"
            subTitle="Website Development"
            result="Success"
            des="A web application design to compress images for optimization of system resources"
          />
          <ResumeCard
            title="HOPROC"
            subTitle="Website Development"
            result="Success"
            des="Design and develpoment of software code."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Information Technology Officer (2024 - till present)"
            subTitle="041 CIS Depot, Nigerian Air Force"
            result="NIGERIA"
            des="Information Technology officer responsible for maintenance of communication tools and equipment including hardware and software, data management and software development."
          />
          <ResumeCard
            title="IT Support"
            subTitle="MetroSource Ltd - (2022 - 2024)"
            result="NIGERIA"
            des="Software development and maintenance of hardware and software tools, online presence and data management."
          />
          <ResumeCard
            title="IT Support"
            subTitle="Niger Delta Power Holding Company - (2019 - 2020)"
            result="NiGERIA"
            des="Development of Web application for Staff Complaint System."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
