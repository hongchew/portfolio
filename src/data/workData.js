export default [
	{	
		id: crypto.randomUUID(),
		company: 'Edison Software Inc.',
		position: 'Software Engineer Intern',
		location: 'Silicon Valley, California, USA',
		start: 2019,
		end: 2020,
		description: [
			'Edison Software is the creator of the multi-award winning mobile email client Edison Mail, as well as Edison Mail Desktop, and Edison Trends.',
			'Worked internationally with a diverse, cross-functional team. Experienced in both on-site and remote work and working with teams across different time zones.',
			'Project Lead in the development of an intern-driven Desktop Calendar project. Responsible for setting and prioritisation of different milestones, assessing technical feasibility given manpower number and abilities, as well as involved in full stack development of the product itself.',
			'Designed and implemented a JavaScript library that searches for the LinkedIn profile of an email contact. This is implemented as the LinkedIn Discovery feature in Edison Mail +, the company’s premium email app subscription.',
		],
		image: '/public/edison.jpg'
	},
	{
		id: crypto.randomUUID(),
		company: 'East Asia Research Private Limited',
		position: 'Events Assistant',
		location: 'Singapore',
		start: 2018,
		end: 2018,
		description: [
			'East Asia Research is an events company that specializes in organizing academic conferences with international speakers in Singapore.',
			'Responsible for the coordination and setting up of various academic conferences',
			'Heavily involved in customer and guest facing communications',
		],
		image:'/public/ear.jpg'
	},
	{
		id: crypto.randomUUID(),
		company: 'Singapore Armed Forces',
		position: 'Human Resources Administrative Assistant',
		location: 'Singapore',
		start: 2015,
		end: 2017,
		description: [
			'The Singapore Armed Forces are the military services of Singapore. I had served in the Army in the Infantry Headquarters as the Human Resources Administrative Assistant',
			'Extensive liaisons and communication between different department in the Armed Forces, experienced in communication across all levels of seniority.',
			'Forecasting of manpower requirement for work year. Interviewing and onboarding new conscripts. Assigning deployment based on skills, interest, and manpower need.',
            'Advising conscripts on SOPs, HR policies such as leaves and benefits, ensure wellbeing in-camp.'
		],
		image:'/public/saf.png'
	},
];
