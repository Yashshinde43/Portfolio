'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench, Zap, Layers, Cpu, Settings
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, JavaScriptLogo, HTML5Logo, JavaLogo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Programming Languages',
		icon: <Code2 className="w-6 h-6" />,
		items: [
			{ name: 'Java', icon: <JavaLogo /> },
			{ name: 'C++', icon: <CppLogo /> },
			{ name: 'JavaScript', icon: <JavaScriptLogo /> },
			{ name: 'TypeScript', icon: <TypeScriptLogo /> }
		] 
	},
	{
		category: 'Front-End Development',
		icon: <Layout className="w-6 h-6" />,
		items: [
			{ name: 'HTML5', icon: <HTML5Logo /> },
			{ name: 'CSS3', icon: <CSSLogo /> },
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'Tailwind', icon: <TailwindLogo /> },
		]
	},
	{
		category: 'Back-End Development',
		icon: <Server className="w-6 h-6" />,
		items: [
			{ name: 'Node.js', icon: <NodeLogo /> },
			{ name: 'Express.js', icon: <Server className="w-4 h-4" /> },
			{ name: 'Next.js', icon: <NextjsLogo /> },
		]
	},
	{
		category: 'Databases & Cloud Storage',
		icon: <Database className="w-6 h-6" />,
		items: [
			{ name: 'MySQL', icon: <MySQLLogo /> },
			{ name: 'MongoDB', icon: <MongoDBLogo /> },
			{ name: 'Supabase', icon: <Database className="w-4 h-4" /> },
		]
	},
	{
		category: 'Version Control & DevOps',
		icon: <GitLogo />,
		items: [
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> },
			{ name: 'Vercel', icon: <VercelLogo /> },
			{ name: 'CI/CD', icon: <Code2 /> }
		]
	}
];

const Skills = () => {
	// Custom Skills Logo Component
	const SkillsLogo = () => (
		<motion.div
			className="relative"
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="relative w-12 h-12">
				{/* Main gear */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
					animate={{ rotate: 360 }}
					transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
						<Cpu className="w-6 h-6 text-white" />
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
					<Zap className="w-3 h-3 text-white m-0.5" />
				</motion.div>
				
				<motion.div
					className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
					animate={{ 
						y: [0, 8, 0],
						scale: [1, 1.2, 1]
					}}
					transition={{ duration: 2, repeat: Infinity, delay: 1 }}
				>
					<Layers className="w-3 h-3 text-white m-0.5" />
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
						<span className="text-sm font-medium text-gray-300">Technical Expertise</span>
					</motion.div>
					<motion.div
						className="flex items-center justify-center gap-4 mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<SkillsLogo />
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">Skills</h2>
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
					A comprehensive overview of my technical expertise and tools I work with to build modern, scalable applications
				</motion.p>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{skills.map((skillGroup, index) => (
					<ScrollAnimation key={skillGroup.category}>
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
								<div className="p-8">
									{/* Header */}
									<motion.div 
										className="flex items-center gap-4 mb-8"
										whileHover={{ scale: 1.02 }}
									>
										<motion.div 
											className="p-3 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											{skillGroup.icon}
										</motion.div>
										<h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
									</motion.div>

									{/* Skills Grid */}
									<div className="grid grid-cols-2 gap-4">
										{skillGroup.items.map((skill, skillIndex) => (
											<motion.div
												key={skill.name}
												className="relative group/skill"
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ 
													duration: 0.5, 
													delay: (index * 0.2) + (skillIndex * 0.1),
													type: "spring",
													stiffness: 200
												}}
												whileHover={{ 
													y: -4, 
													scale: 1.05,
													transition: { duration: 0.2 }
												}}
												whileTap={{ scale: 0.95 }}
											>
												<div className="relative p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
													{/* Skill Icon */}
													<motion.div 
														className="flex items-center justify-center mb-3"
														whileHover={{ rotate: 360 }}
														transition={{ duration: 0.6 }}
													>
														<div className="group-hover/skill:scale-110 transition-transform duration-300">
															{skill.icon}
														</div>
													</motion.div>
													
													{/* Skill Name */}
													<motion.p 
														className="text-center text-sm font-semibold text-gray-400 group-hover/skill:text-white transition-colors"
														whileHover={{ scale: 1.1 }}
													>
														{skill.name}
													</motion.p>

													{/* Hover Effect Overlay */}
													<motion.div
														className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
														initial={{ opacity: 0 }}
														whileHover={{ opacity: 1 }}
													/>
												</div>
											</motion.div>
										))}
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

export default Skills;