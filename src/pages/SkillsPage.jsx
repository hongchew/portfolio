import React from 'react';
import TopNav from '../components/TopNav';
import {
	certificates,
	programmingSkills,
	otherSkills,
	languages,
} from '../data/skillsData';
import ProgrammingCard from '../components/ProgrammingCard';
import CertificateCard from '../components/CertificateCard';
import LanguagesCard from '../components/LanguagesCard';
import SoftSkillsCard from '../components/SoftSkillsCard';

const SkillsPage = () => {
	return (
		<>
			<TopNav currPage={'Skills'} />
			<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply h-screen overflow-auto">
				<h1 class=' text-center pt-20 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>
					Skills
				</h1>
				<div className=''>
					<ul className='flex flex-wrap justify-center'>
						<CertificateCard
							category={'Certificates'}
							certificates={certificates}
						/>
						<LanguagesCard category={'Languages'} languages={languages} />

						<SoftSkillsCard category={'Soft Skills'} skillsData={otherSkills} />

						<ProgrammingCard
							category={'Programming'}
							skillsData={programmingSkills}
						/>
					</ul>
				</div>
			</section>
		</>
	);
};

export default SkillsPage;
