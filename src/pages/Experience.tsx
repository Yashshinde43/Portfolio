'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, Star, Sparkles, Zap } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
	{
		title: "Full Stack Developer",
		company: "VRT Management Group, LLC",
		location: "Hyderabad, Telangana, India",
		period: "September 2025 - Present",
		type: "Full Time",
		description: [
			"Architect, develop, and maintain end-to-end full-stack web applicationS.",
			"Engineer secure and optimized RESTful APIs to handle complex data flow in applications.",
			"Implement robust security protocols with cloudflare, to secure user data and protect sensitive API endpoints."
		]
	},
	{
		title: "Frontend Developer Intern",
		company: "Datcrazy LLP",
		location: "Raipur, Chhattisgarh, India",
		period: "October 2024 - January 2025",
		type: "Internship",
		description: [
			"Developed dynamic and reusable frontend components for multiple client project.",
			"Participated in the full SDLC, collaborated closely with cross-functional teams to design and implement data-driven dashboards.",
			"Translated wireframes and UI/UX designs into frontend and improved UI load time by 20%."
		]
	},
	{
		title: "Web Development Trainee",
		company: "Thought Applied Creations",
		location: "Raipur, Chhattisgarh, India",
		period: "September 2023 - October 2023",
		type: "Internship",
		description: [
			"Built interactive and responsive web pages using frontend technologies. Collaborated with backend developers to integrate RESTful APIs",
			"Gained hands-on experience with both NoSQL (MongoDB) and SQL databases, performing basic data management operations."
		]
	},
];

const Experience = () => {
	// Custom Experience Logo Component
	const ExperienceLogo = () => (
		<motion.div
			className="relative"
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="relative w-12 h-12">
				{/* Main briefcase */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
					animate={{ rotate: 360 }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
						<Briefcase className="w-6 h-6 text-white" />
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
					<Star className="w-3 h-3 text-white m-0.5" />
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

				<motion.div
					className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
					animate={{
						x: [0, 4, 0],
						scale: [1, 1.1, 1]
					}}
					transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
				>
					<Sparkles className="w-3 h-3 text-white m-0.5" />
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
						<span className="text-sm font-medium text-gray-300">Career Journey</span>
					</motion.div>
					<motion.div
						className="flex items-center justify-center gap-4 mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<ExperienceLogo />
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">Experience</h2>
					</motion.div>
					<motion.div
						className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					></motion.div>
				</div>
			</ScrollAnimation>

			<div className="space-y-16">
				{experiences.map((exp, index) => (
					<ScrollAnimation key={exp.title}>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative group"
						>
							{/* Background Effects */}
							<div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-xl"></div>
							
							{/* Main Card */}
							<div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500">
								<div className="p-8 lg:p-10">
									<div className="space-y-8">
										{/* Header Section */}
										<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
											<div className="flex items-center gap-4">
												<div className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
													<Building2 className="w-8 h-8 text-white" />
												</div>
												<div>
													<h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{exp.title}</h3>
													<p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
												</div>
											</div>
											
											{/* Type Badge */}
											<div className="flex items-center gap-3">
												<span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-semibold text-gray-300 border border-white/10">
													{exp.type}
												</span>
											</div>
										</div>

										{/* Location and Period */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<MapPin className="w-5 h-5 text-white" />
												</div>
												<div>
													<p className="text-sm text-gray-400 font-medium">Location</p>
													<p className="text-gray-300 font-semibold">{exp.location}</p>
												</div>
											</div>
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<Briefcase className="w-5 h-5 text-white" />
												</div>
												<div>
													<p className="text-sm text-gray-400 font-medium">Duration</p>
													<p className="text-gray-300 font-semibold">{exp.period}</p>
												</div>
											</div>
										</div>

										{/* Description */}
										<div className="space-y-4">
											<h4 className="text-lg font-semibold text-white flex items-center gap-3">
												<div className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full"></div>
												Key Achievements & Responsibilities
											</h4>
											<div className="space-y-4">
												{exp.description.map((item, i) => (
													<motion.div
														key={i}
														className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
														initial={{ opacity: 0, x: -20 }}
														whileInView={{ opacity: 1, x: 0 }}
														transition={{ duration: 0.5, delay: i * 0.1 }}
														whileHover={{ x: 4 }}
													>
														<div className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mt-2 flex-shrink-0"></div>
														<p className="text-gray-300 leading-relaxed text-base">{item}</p>
													</motion.div>
												))}
											</div>
										</div>
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

export default Experience;