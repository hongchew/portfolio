import React from 'react';

const ProjectCard = ({ project }) => {
	if (project.url) {
		return (
			<div className='m-4 flex flex-row justify-center flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
				<a href={project.url}>
					<img
						className='w-40 h-40 p-1 m-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500  hover:border-indigo-500 hover:border-4 '
						src={project.thumbnail}
						alt='Bordered avatar'
					/>
				</a>

				<div className='flex flex-col justify-between p-7 leading-normal'>
					<h5 className='mb-2 text-center text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white'>
						{project.name}
					</h5>
					<p className='italic text-center'> {project.date} </p>
					<div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						<ul className='list-disc list-outside'>
							{' '}
							{project.description.map((desc) => (
								<li className='mx-4 m-2'>{desc}</li>
							))}
						</ul>
					</div>
				</div>
				<div className='flex flex-wrap justify-center'>
					{project.images.map((img) => (
                        <a href={img} target="_blank" className='contents'>
							<img
								className='h-auto max-w-[25%] rounded-lg m-3 object-cover shadow-md  hover:border-indigo-500 hover:border-4'
								src={img}
							/>
                        </a>
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className='m-4 flex flex-row justify-center flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
				<img
					class='w-40 h-40 p-1 m-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
					src={project.thumbnail}
					alt='Bordered avatar'
				/>
				<div className='flex flex-col justify-between p-7 leading-normal'>
					<h5 className='mb-2 text-center text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white'>
						{project.name}
					</h5>
					<p className='italic text-center'> {project.date} </p>
					<div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						<ul className='list-disc list-outside'>
							{' '}
							{project.description.map((desc) => (
								<li className='mx-4 m-2'>{desc}</li>
							))}
						</ul>
					</div>
				</div>
                <div className='flex flex-wrap justify-center'>
					{project.images.map((img) => (
                        <a href={img} target="_blank" className='contents'>
							<img
								className='h-auto max-w-[25%] rounded-lg m-3 object-cover shadow-md  hover:border-indigo-500 hover:border-4'
								src={img}
							/>
                        </a>
					))}
				</div>
			</div>
		);
	}
};

export default ProjectCard;
