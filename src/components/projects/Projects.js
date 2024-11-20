import React from 'react'
import Title from '../layouts/Title'
import { metrosource, compressor, hoproc } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="METROSOURCE LTD Website"
          des="A constructor company responsible for archictural designs and construction, renovation of civil and structural building."
          src={metrosource}
          link={'https://metrosourceltd.com/'}
        />
        <ProjectsCard
          title="Image Compressor"
          des="A Web application used to compress the size of image to maximize storage capacity. The app was build using JavaScript, HTML 5 and CSS 3."
          src={compressor}
          link={'https://myimgcompressor.netlify.app/'}
        />
        <ProjectsCard
          title="HOPROC GROUP Website"
          des="A group of company involve in charity, agriculture, health and Non-governmental projects."
          src={hoproc}
          link={'https://hoprocgroup.com/'}
        />
      </div>
    </section>
  );
}

export default Projects