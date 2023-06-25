import React from "react";

const CertificateCard = ({certificates}) => {

    return (
		<div className='m-4 flex flex-row justify-center flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<div className='flex flex-col justify-between p-7 leading-normal'>
				<h5 className='mb-2 text-2xl self-center font-extrabold tracking-tight text-gray-800 dark:text-white'>
					Certificates
				</h5>

				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					<ul className=' list-outside text-center'>
						{' '}
						{certificates.map((cert) => (
							<li key={cert.id} className='mx-4 m-2 '><a className="text-sky-600 hover:text-indigo-600" href={cert.url}>{cert.name} ({cert.date})</a></li>
						))}
					</ul>
				</p>
			</div>
		</div>
    )

}

export default CertificateCard;