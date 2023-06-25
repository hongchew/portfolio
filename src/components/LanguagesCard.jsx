import React from 'react';

const LangaugesCard = ({ languages }) => {
	return (
		<div className='m-4 flex flex-row justify-center flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<div className='flex flex-col justify-between p-7 leading-normal'>
				<h5 className='mb-2 text-2xl self-center font-extrabold tracking-tight text-gray-800 dark:text-white'>
					Languages
				</h5>

				<div className='flex flex-wrap justify-around  fmb-3 font-normal text-gray-700 dark:text-gray-400'>
					{' '}
					{languages.map((lang) => (
						<div className=''>
							<h5
								key={lang.id}
								className='mx-4 m-2 text-xl text-center font-bold  text-gray-600'
							>
								{lang.name}
							</h5>
                            <div className='m-2'>
                                <p><span className='font-bold text-center'>Spoken: </span> {lang.spoken}</p>
                                <p><span className='font-bold text-center'>Read/Write: </span> {lang.read_write}</p>
                            </div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LangaugesCard;
