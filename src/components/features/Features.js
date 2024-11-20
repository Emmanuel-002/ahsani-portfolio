import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaHtml5, FaNode, FaCode, FaDatabase } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiMysql } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
          title="Coding"
          des="I am a programmer who designs, writes, tests, and maintains software code for various applications, systems,
          and platforms. I creating functional, efficient, and reliable software solutions."
          icon={<FaCode />}
        />
        <Card
          title="Frontend Web Deveopment"
          des="I use HTML 5, CSS 3, JavaScript and React to design and build a visual and interactive aspects of website application.
          The primary focus is to create a user-friendly, intuitive and aesthetically pleasing interface that users interact 
          with directly."
          icon={<FaHtml5 />}
        />
        <Card
          title="Backend "
          des="I am a server-side developer. I use Node JS, PHP and Python to build, and maintain server-side logic, 
          database integration, and API connectivity for web applications. The focus is on creating a scalable, efficient,
          and secure backend infrastructure."
          icon={<FaNode />}
        />
        <Card
          title="Database Architect"
          des="I am an SQL and MongoDb database architect who designs, implements, and maintains databases to store and manage
          data efficiently. The primary focus is to ensure data integrity, security, and performance."
          icon={<FaDatabase />}
        />
        <Card
          title="DevOps"
          des="I bridge the gap between software development (Dev) and operations (Ops) teams, ensuring smooth 
          collaboration, efficient workflows, and high-quality software delivery to users. I am familiar hostinger, 
          GoDaddy, NameChip and Render hosting sites."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features