import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="Internation University of East Africa (2015 - 2018)"
            result="4.56/5"
            des="The training provided by universities in order to prepare people to work as a professional information technology specialist."
          />
          <ResumeCard
            title="Diploma in Information Technology and Communication"
            subTitle="Informatics Academy (2014 - 2015)"
            result="4.7/5"
            des="International diploma in tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Government Secondary School, Tudun-wada, Abuja (2008 -2013)"
            result="9 Credits"
            des="Secondary education or post-primary education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Information Technology Officer (2024 - till present)"
            subTitle="041 CIS Depot, Nigerian Air Force"
            result="Nigeria"
            des="Information Technology officer responsible for maintenance of communication tools and equipment including hardware and software, data management and software development."
          />
          <ResumeCard
            title="IT Support"
            subTitle="MetroSource Ltd - (2022 - 2024)"
            result="Nigeria"
            des="Software development and maintenance of hardware and software tools, online presence and data management."
          />
          <ResumeCard
            title="IT Support"
            subTitle="Niger Delta Power Holding Company - (2019 - 2020)"
            result="Nigeria"
            des="Development of Web application for Staff Complaint System."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
