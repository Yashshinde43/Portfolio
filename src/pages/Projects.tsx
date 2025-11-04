'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderOpen, Code, Zap, Layers } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
	{
		title: 'Trackify',
		description: [
			"Full-Stack E-commerce product scraping site of Amazon with automated monitoring capabilities.",
			"Implemented cron jobs for scheduled notifications and real-time price tracking.",
			"Utilized MongoDB for robust data management and efficient data storage.",
			"Integrated email functionality to send notifications on stock changes or price drops.",
		],
		image: '/projects_img/trackify.png',
		github: 'https://github.com/Yashshinde43/Trackify',
		live: 'https://trackify-henna.vercel.app',
		tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "NodeMailer"]
	},
	{
		title: 'AI Virtual Assistant',
		description: [
			"A modern, voice-enabled virtual assistant built with MERN-Stack that responds to voice commands and performs various tasks like web searches, opening applications, and providing information.",
			"Implemented JWT-based authentication, bcrypt hashing, and REST APIs for secure user management.",
			"Used Web Speech API for real-time speech recognition and interaction.",
		],
		image: '/projects_img/virtualai.png',
		github: 'https://github.com/Yashshinde43/Virtual-Assistant',
		live: 'https://ai-virtual-assistant-d4aw.onrender.com',
		tags: ["MERN-Stack", "Gemini AI", "Tailwind CSS"]
	},
	{
		title: 'Music School',
		description: [
			"A beautifully frontend designed music school platform that offers interactive lessons. Features a stunning UI to enhance user engagement and learning experience.",
		],
		image: '/projects_img/music-school.png',
		github: 'https://github.com/Yashshinde43/musical-school-nextjs',
		live: 'https://musical-school-nextjs.vercel.app',
		tags: ["Next.js", "Aceternity UI","Tailwind CSS", "ShadCN"]
	},
	{
		title: 'Dropbox',
		description: [
			"A modern, cloud-based file storage and sharing platform that allows users to store, share files with ease.",
			"Implemented Firebase and Clerk for storage and secure authenticatiom",
		],
		image: '/projects_img/dropbox.png',
		github: 'https://github.com/Yashshinde43/dropbox',
		live: 'https://dropbox-wine.vercel.app/',
		tags: ["Next.js", "Firebase", "Clerk", "Tailwind CSS"]
	},
	
];

const Projects = () => {
	// Custom Projects Logo Component
	const ProjectsLogo = () => (
		<motion.div
			className="relative"
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="relative w-12 h-12">
				{/* Main folder */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
					animate={{ rotate: 360 }}
					transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
						<FolderOpen className="w-6 h-6 text-white" />
					</div>
				</motion.div>

				{/* Floating elements */}
				<motion.div
					className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
					animate={{
						y: [0, -8, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
				>
					<Code className="w-3 h-3 text-white m-0.5" />
				</motion.div>

				<motion.div
					className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
					animate={{
						y: [0, 8, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
				>
					<Zap className="w-3 h-3 text-white m-0.5" />
				</motion.div>
			</div>
		</motion.div>
	);

	return (
		<div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
			{/* Hero Section */}
			<ScrollAnimation>
				<div className="text-center mb-16">
					<motion.div
						className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-sm font-medium text-gray-300">Portfolio Showcase</span>
					</motion.div>
					<motion.div
						className="flex items-center justify-center gap-4 mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<ProjectsLogo />
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">Projects</h2>
					</motion.div>
					<motion.div
						className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					></motion.div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<motion.p
					className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto text-center leading-relaxed"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					A collection of innovative projects showcasing modern web development technologies and creative solutions
				</motion.p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
				{projects.map((project, index) => (
					<ScrollAnimation key={project.title}>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative group h-full"
						>
							{/* Background Effects */}
							<div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-xl"></div>

							{/* Main Card */}
							<div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
								{/* Project Image */}
								<div className="relative h-56 sm:h-64 md:h-72">
									<motion.img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-contain transition-transform duration-700"
										whileHover={{ scale: 1.02 }}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								</div>

								{/* Project Information */}
								<div className="p-6 flex flex-col flex-grow">
									{/* Header Section */}
									<div className="flex items-center gap-4 mb-4">
										<div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
											<FolderOpen className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="text-xl font-bold text-white">{project.title}</h3>
										</div>
									</div>

									{/* Project Description */}
									<div className="space-y-3 mb-6 flex-grow">
										{project.description.map((item, i) => (
											<motion.div
												key={i}
												className="flex items-start gap-3"
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												transition={{ duration: 0.5, delay: i * 0.1 }}
											>
												<div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-400 rounded-full mt-2 flex-shrink-0"></div>
												<p className="text-gray-300 leading-relaxed text-sm">{item}</p>
											</motion.div>
										))}
									</div>

									{/* Technologies */}
									<div className="space-y-3 mb-6">
										<h4 className="text-sm font-semibold text-white flex items-center gap-2">
											<div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
											Technologies
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<motion.span
													key={tag}
													className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.3, delay: (index * 0.2) + (tagIndex * 0.1) }}
													whileHover={{ scale: 1.05 }}
												>
													{tag}
												</motion.span>
											))}
										</div>
									</div>

									{/* Action Buttons */}
									<div className="flex items-center gap-3 mt-auto">
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 flex-1 justify-center"
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.98 }}
										>
											<Github className="w-4 h-4" />
											<span>Code</span>
										</motion.a>
										<motion.a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl text-sm font-medium text-white hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 flex-1 justify-center"
											whileHover={{ y: -2 }}
											whileTap={{ scale: 0.98 }}
										>
											<ExternalLink className="w-4 h-4" />
											<span>Live</span>
										</motion.a>
									</div>
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Projects;