export type Lang = 'es' | 'en';

export interface Job {
	role: string;
	company: string;
	location: string;
	workMode: string;
	period: string;
	bullets: string[];
}

const es = {
	metaTitle: 'Roberto Illesca — Ingeniero de Software',
	metaDescription:
		'Portafolio de Roberto Illesca, ingeniero de software especializado en soluciones eficientes, escalables y orientadas al usuario.',
	navEdu: 'Educación',
	navSkills: 'Habilidades',
	navExp: 'Experiencia',
	navProjects: 'Proyectos',
	navContact: 'Contacto',
	heroKicker: 'Ingeniero de Software',
	heroBio:
		'Ingeniero de software con experiencia en el ciclo de vida completo de aplicaciones, desde el diseño hasta la implementación. Especialista en soluciones tecnológicas eficientes, escalables y orientadas al usuario, con sólida capacidad para trabajar en equipos dinámicos usando metodologías ágiles como Scrum. Enfocado en la resolución proactiva de problemas, la comunicación efectiva y el aprendizaje continuo.',
	cvButton: 'Descargar CV',
	heroContact: 'Contáctame',
	eduTitle: 'Educación',
	eduDegree: 'Ingeniería Informática',
	skillsTitle: 'Habilidades',
	skillsTech: 'Técnicas',
	skillsMethods: 'Metodologías',
	skillsLang: 'Idiomas',
	spanish: 'Español — Nativo',
	english: 'Inglés — Intermedio (B1)',
	expTitle: 'Experiencia',
	projectsTitle: 'Proyectos',
	projectsEmpty: 'Próximamente',
	projectsEmptySub: 'Esta sección está en construcción.',
	contactTitle: 'Contacto',
	contactBlurb: '¿Tienes un proyecto o una oportunidad en mente? Escríbeme y conversemos.',
	contactCta: 'Enviar correo',
	footerNote: 'Hecho con dedicación desde el sur de Chile',
	themeToggleLabel: 'Cambiar tema',
	menuToggleLabel: 'Abrir menú',
	mailSubject: 'Contacto desde portafolio',
};

const en: typeof es = {
	metaTitle: 'Roberto Illesca — Software Engineer',
	metaDescription:
		'Portfolio of Roberto Illesca, software engineer specialized in efficient, scalable, user-oriented solutions.',
	navEdu: 'Education',
	navSkills: 'Skills',
	navExp: 'Experience',
	navProjects: 'Projects',
	navContact: 'Contact',
	heroKicker: 'Software Engineer',
	heroBio:
		'Software engineer experienced in the full application lifecycle, from design to implementation. Specialist in building efficient, scalable, user-oriented solutions, with strong ability to work in dynamic teams using agile methodologies such as Scrum. Focused on proactive problem solving, effective communication and continuous learning.',
	cvButton: 'Download CV',
	heroContact: 'Get in touch',
	eduTitle: 'Education',
	eduDegree: 'Computer Engineering',
	skillsTitle: 'Skills',
	skillsTech: 'Technical',
	skillsMethods: 'Methodologies',
	skillsLang: 'Languages',
	spanish: 'Spanish — Native',
	english: 'English — Intermediate (B1)',
	expTitle: 'Experience',
	projectsTitle: 'Projects',
	projectsEmpty: 'Coming soon',
	projectsEmptySub: 'This section is under construction.',
	contactTitle: 'Contact',
	contactBlurb: 'Have a project or opportunity in mind? Write me and let’s talk.',
	contactCta: 'Send email',
	footerNote: 'Made with care from southern Chile',
	themeToggleLabel: 'Toggle theme',
	menuToggleLabel: 'Open menu',
	mailSubject: 'Portfolio contact',
};

export type Translations = typeof es;

export const translations: Record<Lang, Translations> = { es, en };

export const jobs: Record<Lang, Job[]> = {
	es: [
		{
			role: 'Desarrollador de Software',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Remoto',
			period: 'Ene 2026 — Actualidad',
			bullets: [
				'Desarrollo frontend, integración y validación de un Sistema de Gestión del Aprendizaje (LMS).',
			],
		},
		{
			role: 'Desarrollador de Software — Práctica profesional',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Híbrido',
			period: 'Ago 2025 — Dic 2025',
			bullets: [
				'Diseño y desarrollo de un LMS orientado a metodologías activas de enseñanza.',
				'Levantamiento y análisis de requerimientos funcionales.',
				'Modelado del sistema y definición de la arquitectura de la solución.',
				'Diseño de experiencia e interfaz de usuario (UX/UI).',
				'Desarrollo del frontend e integración de componentes y servicios.',
			],
		},
		{
			role: 'Desarrollador de Software — Tiempo parcial',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Híbrido',
			period: 'Nov 2024 — Jul 2025',
			bullets: [
				'Diseño y desarrollo de la plataforma AprendIA.',
				'Creación de mockups centrados en optimizar la experiencia de usuario (UX).',
				'Desarrollo e integración de componentes clave con Angular, aplicando buenas prácticas.',
			],
		},
	],
	en: [
		{
			role: 'Software Developer',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Remote',
			period: 'Jan 2026 — Present',
			bullets: [
				'Frontend development, integration and validation of a Learning Management System (LMS).',
			],
		},
		{
			role: 'Software Developer — Internship',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Hybrid',
			period: 'Aug 2025 — Dec 2025',
			bullets: [
				'Design and development of an LMS oriented to active teaching methodologies.',
				'Gathering and analysis of functional requirements.',
				'System modeling and solution architecture definition.',
				'User experience and interface design (UX/UI).',
				'Frontend development and integration of components and services.',
			],
		},
		{
			role: 'Software Developer — Part-time',
			company: 'XpertIA',
			location: 'Temuco, Chile',
			workMode: 'Hybrid',
			period: 'Nov 2024 — Jul 2025',
			bullets: [
				'Design and development of the AprendIA platform.',
				'Creation of mockups focused on optimizing user experience (UX).',
				'Development and integration of key components with Angular, applying best practices.',
			],
		},
	],
};

export const techSkills = [
	'Angular 18+',
	'Next.js',
	'Nest.js',
	'Spring Boot',
	'FastAPI',
	'PostgreSQL',
	'AWS',
	'Git',
];

export const contact = {
	email: 'robertillesca1@gmail.com',
	location: 'La Unión, Los Ríos, Chile',
	linkedin: 'https://www.linkedin.com/in/roberto-illesca-86545a237',
	cvPath: '/assets/CV-Roberto-Illesca.pdf',
};
