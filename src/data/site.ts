export const site = {
	name: 'Portfolio',
	description: 'A personal portfolio of work, skills, and ideas.',
	intro: {
		heading: "Hi, I'm Jonathan",
		paragraphs: [
			'Add a short introduction about yourself, the work you do, and what you care about.',
		],
	},
	about: {
		description: 'Learn more about my background, interests, and approach to work.',
		sections: [
			{
				heading: 'A little about me',
				paragraphs: [
					'Write a longer introduction here: where you are coming from, the work you enjoy, and what motivates you.',
					'You can include a few personal details that help visitors get to know the person behind the projects.',
				],
			},
			{
				heading: 'What I care about',
				paragraphs: [
					'Describe the problems, ideas, or communities that matter to you. Include what you are curious about right now.',
				],
			},
			{
				heading: 'How I work',
				paragraphs: [
					'Share how you approach collaboration, learning, and building thoughtful software. Keep what feels true to you and replace the rest.',
				],
			},
			{
				heading: 'Education',
				paragraphs: [
					'Add relevant schools, programs, certifications, or other learning experiences here. Include dates or focus areas if they help tell your story.',
				],
			},
		],
	},
	contact: {
		description: 'Want to get in touch? Find me here:',
		links: [
			{
				label: 'GitHub',
				href: 'https://github.com/JT2M0L3Y',
				icon: 'github',
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/jonathansmoley',
				icon: 'linkedin',
			},
		] as const,
	},
};

export const skillGroups = [
	{
		category: 'Languages & frameworks',
		skills: ['TypeScript', 'Astro', 'Svelte'],
	},
	{
		category: 'Styling & UI',
		skills: ['HTML', 'CSS', 'Tailwind CSS'],
	},
	{
		category: 'Tools & platform',
		skills: ['Git', 'GitHub Actions', 'Cloudflare'],
	},
];
