'use client';

import { motion } from 'framer-motion';
import { User, Heart, Star, Sparkles } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
	// Custom About Logo Component
	const AboutLogo = () => (
		<motion.div
			className="relative"
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="relative w-12 h-12">
				{/* Main user icon */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
					animate={{ rotate: 360 }}
					transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
						<User className="w-6 h-6 text-white" />
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
					<Heart className="w-3 h-3 text-white m-0.5" />
				</motion.div>

				<motion.div
					className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
					animate={{
						y: [0, 8, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
				>
					<Star className="w-3 h-3 text-white m-0.5" />
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
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			{/* Hero Section */}
			<ScrollAnimation>
				<div className="text-center mb-16">
					<motion.div
						className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
							<span className="text-sm font-medium text-gray-300 ">Get to know me</span>
					</motion.div>
					<motion.div
						className="flex items-center justify-center gap-4 mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<AboutLogo />
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">About Me</h2>
					</motion.div>
					<motion.div
						className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					></motion.div>
				</div>
			</ScrollAnimation>

			{/* Profile Section */}
			<ScrollAnimation>
				<div className="text-center mb-16">
					<div className="relative inline-block group">
						<div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-xl"></div>
						<div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[20rem] mx-auto overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
						<img
							src="/profile/profilepic.jpg"
							alt="Yash Shinde"
							className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
						/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						</div>
						
					</div>
					<motion.div
						className="mt-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h3 className="text-2xl font-bold text-white mb-2">Yash Shinde</h3>
						<p className="text-lg text-gray-300 mb-4">Full-Stack Developer</p>
						<div className="flex justify-center gap-4 text-sm text-gray-400">
							<span className="flex items-center gap-2">
								<div className="w-2 h-2 bg-white/60 rounded-full"></div>
								Available for work
							</span>
							<span>•</span>
							<span>Hyderabad, India</span>
						</div>
					</motion.div>
				</div>
			</ScrollAnimation>

			<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">

				{/* About Content */}
				<ScrollAnimation className="lg:col-span-2">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl"></div>
						<div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
							<div className="space-y-6">
								<div className="flex items-center gap-3 mb-6">
									<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
										<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bold text-white">About Me</h3>
								</div>
								<motion.p 
									className="text-lg text-gray-300 leading-relaxed"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
								>
									Hi! I'm a passionate full-stack developer with expertise in building modern web applications. My journey in tech started during my college years, where I discovered my love for creating innovative solutions through code.
								</motion.p>
								<motion.p 
									className="text-lg text-gray-300 leading-relaxed"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.1 }}
								>
									I completed my B.Tech in Computer Science Engineering in 2025, maintaining a strong academic record while actively engaging in real-world projects and internships. This blend of theoretical knowledge and practical experience has shaped my approach to problem-solving and software development.
								</motion.p>
								<motion.p 
									className="text-lg text-gray-300 leading-relaxed"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
								>
									I specialize in Java, MERN-Stack, Next.js, and modern web technologies, with a keen interest in creating performant and user-friendly applications that make a real impact.
								</motion.p>
							</div>
						</div>
					</div>
				</ScrollAnimation>

				{/* Quick Facts */}
				<ScrollAnimation>
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl"></div>
						<div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 className="text-xl font-bold text-white">Quick Facts</h3>
							</div>
							<div className="space-y-4">
								{[
									{ icon: "📍", text: "Hyderabad, Telangana, India" },
									{ icon: "🎓", text: "B.Tech in Computer Science Engineering" },
									{ icon: "📊", text: "CGPA: 7.6" },
									{ icon: "💼", text: "Available for opportunities" }
								].map((fact, index) => (
									<motion.div
										key={fact.text}
										className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 group cursor-pointer"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										whileHover={{ x: 4, scale: 1.02 }}
									>
										<span className="text-2xl">{fact.icon}</span>
										<span className="text-gray-300 font-medium group-hover:text-white transition-colors">{fact.text}</span>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</ScrollAnimation>
			</div>

			{/* Skills Preview */}
			<ScrollAnimation>
				<div className="mt-16">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl"></div>
						<div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
							<div className="flex items-center gap-3 mb-8">
								<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
									<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</div>
								<h3 className="text-2xl font-bold text-white">Tech Stack</h3>
							</div>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{[
									"Java", "React", "Next.js", "Node.js", 
									"MongoDB", "TypeScript", "Tailwind", "Git"
								].map((skill, index) => (
									<motion.div
										key={skill}
										className="group cursor-pointer"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										whileHover={{ y: -2 }}
									>
										<div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 group-hover:border-white/20">
											<p className="text-white font-semibold text-center group-hover:text-white transition-colors">{skill}</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</ScrollAnimation>

		</div>
	);
};

export default About;