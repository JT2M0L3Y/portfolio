export const site = {
	name: 'Jonathan Smoley',
	description:
		'Platform and infrastructure engineer focused on reliability, automation, and distributed systems.',
	intro: {
		heading: 'I build reliable infrastructure and systems.',
		paragraphs: [
			'I focus on reliability, automation, and the platforms behind dependable software. At Expeditors, I supported a 5,000+ node production fleet, built deployment automation, and migrated 100+ databases from Solaris to Linux—cutting cutover downtime by 85%.',
			'I am based in the Greater Seattle Area and open to Platform, Infrastructure, and Reliability Engineering opportunities.',
		],
	},
	about: {
		description:
			'Platform and infrastructure engineering grounded in production operations, automation, and systems work.',
		sections: [
			{
				heading: 'Reliability at scale',
				paragraphs: [
					'At Expeditors, I supported performance, availability, and SOX compliance across a 5,000+ node production fleet, with zero audit findings. I built Python and Bash tooling that saved about five engineering hours per deployment and wrote Ansible playbooks for provisioning, migrations, and TLS installation.',
					'I also rolled out Prometheus and Grafana across 30+ environments, reducing mean time to detect and mean time to recover by 40%. Automated reconciliation across 190+ databases provided 100% auditability for a critical enterprise audit.',
				],
			},
			{
				heading: 'Systems and software',
				paragraphs: [
					'My work spans infrastructure, operating systems, data pipelines, and developer tooling. At Itron, I built a TypeScript React Native diagnostic app that streamed utility telemetry over BLE and visualized RF signals across 80 frequency channels.',
					'Outside production work, I build projects in Go, C++, and Rust, and explore infrastructure through a Proxmox home lab and cloud data projects.',
				],
			},
			{
				heading: 'Current focus',
				paragraphs: [
					'Since August 2026, I have been focused on independent engineering projects and self-directed learning. This is independent work, not client consulting; current projects include my home lab, programming-language tools, and this portfolio.',
				],
			},
		],
	},
	contact: {
		description:
			'I am open to Platform, Infrastructure, and Reliability Engineering opportunities in Greater Seattle and beyond. Connect with me on GitHub or LinkedIn.',
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
		category: 'Professional — Platform & Reliability',
		skills: [
			'Linux',
			'Solaris',
			'Ansible',
			'Python',
			'Bash',
			'Prometheus',
			'Grafana',
			'Git',
			'GitLab CI',
			'GitHub CI',
			'CI/CD',
			'TLS/SSL',
		],
	},
	{
		category: 'Professional — Languages & Data',
		skills: ['TypeScript', 'SQL', 'Perl', 'DB2', 'PostgreSQL', 'MySQL'],
	},
	{
		category: 'Project-level — Systems & Infrastructure',
		skills: [
			'Go',
			'Rust',
			'C++',
			'Docker',
			'Terraform',
			'Cloudflare Workers',
			'GitHub Actions',
			'GCP',
			'Proxmox',
			'Tailscale',
			'Vault',
			'Caddy',
			'AdGuard',
		],
	},
	{
		category: 'Project-level — Application & Data',
		skills: ['React Native', 'REST APIs', 'Ollama'],
	},
];
