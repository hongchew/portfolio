import React from 'react';

const ProgrammingCard = ({ skillsData }) => {
	return (
		<div className='m-4 flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<div className='flex flex-col justify-between p-7 leading-normal'>
				<h5 className='mb-2 text-2xl font-extrabold self-center tracking-tight text-gray-800 dark:text-white'>
					Programming
				</h5>

				<div className='flex flex-col justify-center  fmb-3 font-normal text-gray-700 dark:text-gray-400'>
					{' '}
					{skillsData.map((skill) => (
						<div className='flex flex-row m-2'>
							<h5
								key={skill.id}
								className='mx-4 m-2 text-xl text-left font-bold grow shrink basis-0  text-gray-600 '
							>
								{skill.category}:
							</h5>
							<div className='m-2 grow shrink basis-0 self-end'>
                                {skill.skills.map(sk => <p>{sk}</p>)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProgrammingCard;
