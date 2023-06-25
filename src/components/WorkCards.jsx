import React from 'react';

const WorkCards = ({ work }) => {
	return (
		<div className='m-4 flex flex-row justify-center flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<img
				class='w-40 h-40 p-1 m-3 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
				src={work.image}
				alt='Bordered avatar'
			/>
			<div className='flex flex-col justify-between p-7 leading-normal'>
				<h5 className='mb-2 text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white'>
					{work.position}
				</h5>
				<p>
					<span className='font-bold text-xl text-gray-700'>{work.company}</span> in{' '}
					<span className='italic text-lg'>{work.location}</span>
				</p>
				<p className='italic'>
					{' '}
					{work.start} to {work.end}{' '}
				</p>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					<ul className='list-disc list-outside'>
						{' '}
						{work.description.map((desc) => (
							<li className='mx-4 m-2'>{desc}</li>
						))}
					</ul>
				</p>
			</div>
		</div>
	);
};

export default WorkCards;
