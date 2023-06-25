import React from 'react';
import TopNav from '../components/TopNav';
import workData from '../data/workData';
import WorkCards from '../components/WorkCards';

const WorkPage = () => {
	let works = workData;

	return (
		<>
			<TopNav currPage={'Work'} />
			<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply h-screen overflow-auto">
				<h1 class=' text-center pt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>
					Work Experiences
				</h1>
				<div className='flex justify-center'>
					<ul className='flex flex-col'>
						{works.map((work) => (
							<li key={work.id}>
                                <WorkCards work={work}/>
                            </li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default WorkPage;
