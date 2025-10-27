'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Home = () => {
	const whatsappNumber = '+91 8602446498';

	const { data: githubData } = useSWR('https://github.com/Yashshinde43', fetcher);

	return (
		<div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16">
			<div className="text-center relative z-10 max-w-6xl mx-auto">
				{/* Hero Section */}
				<div className="mb-16">
					<motion.div
						className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<span className="text-sm font-medium text-gray-300">Welcome to my portfolio</span>
					</motion.div>

					<motion.h1
						className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 relative tracking-tighter"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
							Yash Shinde
						</span>
					</motion.h1>
					
					<motion.div
						className="relative mb-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
					>
						<h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 mb-2">
							Full Stack Developer
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"></div>
					</motion.div>

					<motion.p
						className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto px-4 leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Specializing in Full Stack Development with expertise in Java, Next.js, Node.js and modern Web Technologies.
					</motion.p>
				</div>

				{/* Call to Action Section */}
				<motion.div
					className="flex flex-col items-center gap-8 mb-16"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
						<motion.a
							href="/files/cv_pdf/Yash_fullstack_developer.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="group px-8 py-4 bg-white text-black rounded-2xl text-base font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<FileDown className="w-5 h-5 group-hover:animate-bounce" />
							Download CV
						</motion.a>
						<motion.div
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Link
								href="/about"
								className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl text-base font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 border border-white/20 hover:border-white/40"
							>
								<User className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
								About Me
							</Link>
						</motion.div>
					</div>
				</motion.div>

				{/* Social Stats Section */}
				<motion.div
					className="relative"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-xl"></div>
					<div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							<motion.a
								href="https://github.com/Yashshinde43"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
								whileHover={{ y: -4, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
									<Github className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
								</div>
								<motion.div
									className="text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}
								>
									<div className="text-2xl font-bold text-white mb-1">20+</div>
									<div className="text-sm text-gray-400 font-medium">GitHub Projects</div>
								</motion.div>
							</motion.a>

							<motion.a
								href="https://in.linkedin.com/in/yash-shinde-a3127028a"
								target="_blank"
								rel="noopener noreferrer"
								className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
								whileHover={{ y: -4, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
									<Linkedin className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
								</div>
								<motion.div
									className="text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}
								>
									<div className="text-2xl font-bold text-white mb-1">500+</div>
									<div className="text-sm text-gray-400 font-medium">LinkedIn Followers</div>
								</motion.div>
							</motion.a>

							<motion.a
								href={`https://wa.me/${whatsappNumber}`}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex flex-col items-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
								whileHover={{ y: -4, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors mb-4">
									<MessageCircle className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
								</div>
								<motion.div
									className="text-center"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}
								>
									<div className="text-2xl font-bold text-white mb-1">24x7</div>
									<div className="text-sm text-gray-400 font-medium">WhatsApp Me</div>
								</motion.div>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;