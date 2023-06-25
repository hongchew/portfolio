import React from 'react';
import TopNav from '../components/TopNav';
import projectData from '../data/projectData';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
    let projects = projectData;
	return (
		<>
			<TopNav currPage={'Projects'} />
			<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply h-screen overflow-auto">
            <h1 className=' text-center pt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>
					Projects
				</h1>
				<div className='flex flex-wrap justify-center'>
					<ul className=''>
						{projects.map((proj) => (
							<li key={proj.id}>
                                <ProjectCard project={proj}/>
                            </li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default ProjectsPage;
