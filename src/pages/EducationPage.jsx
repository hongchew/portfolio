import React from 'react';
import TopNav from '../components/TopNav';
import eduData from '../data/eduData';
import EduCards from '../components/EduCards';

const EducationPage = () => {
    let education = eduData;

	return (
		<>
			<TopNav currPage={'Education'} />
			<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply h-screen overflow-auto">
            <h1 class=' text-center pt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>
					Education
				</h1>
				<div className='flex justify-center'>
					<ul className='flex flex-col'>
						{education.map((edu) => (
							<li key={edu.id}>
                                <EduCards education={edu}/>
                            </li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default EducationPage;
