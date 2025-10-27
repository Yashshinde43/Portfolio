'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, School, BookOpenCheck, Star, Sparkles } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const Education = () => {
	// Custom Education Logo Component
	const EducationLogo = () => (
		<motion.div
			className="relative"
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
		>
			<div className="relative w-12 h-12">
				{/* Main graduation cap */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
					animate={{ rotate: 360 }}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				>
					<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
						<GraduationCap className="w-6 h-6 text-white" />
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
					<BookOpenCheck className="w-3 h-3 text-white m-0.5" />
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

	const educationData = [
		{
			school: "Shri Shankaracharya Institute of Professional Management and Technology",
			location: "Raipur, Chhattisgarh, India",
			duration: "2021 - 2025",
			degree: "B.Tech (Computer Science and Engineering)",
			grade: "CGPA: 7.6",
			image: "/education_img/college.jpg",
			resultUrl: "/files/education_pdf/B Tech.pdf",
			coursework: [
				"Java",
				"C",
				"C++",
				"Python",
				"DSA",
				"OOPs",
				"DBMS",
				"AI",
				"ML",
				"OS",
				"Networking",
			],
			description: "During my time at SSIPMT, Raipur. I have built a strong foundation in computer science, focusing on software development, problem-solving, and real-world applications. Engaging in hands-on projects, internships, and coding challenges has helped me enhance my technical and analytical skills. This experience prepares me for a future in software development, equipping me with the ability to create scalable and efficient solutions."
		},
		{
			school: "Davara International School",
			location: "Raipur, India",
			duration: "2020 - 2021",
			degree: "Higher Secondary (CBSE)",
			grade: "Percentage: 90.2%",
			image: "/education_img/dis-school.jpg",
			resultUrl: "/files/education_pdf/HS MARK SHEET.pdf",
			subjects: [
				"Physics",
				"Chemistry",
				"Mathematics",
			],
			description: "My higher secondary education laid the foundation for my technical journey, strengthening my analytical thinking and problem-solving abilities. The strong emphasis on mathematics and computer science has been instrumental in shaping my passion for software development, enabling me to approach complex technical challenges with confidence."
		},
		{
			school: "Montfort English School",
			location: "Ambikapur, Chhattisgarh, India",
			duration: "2018 - 2020",
			degree: "Secondary Education (CBSE)",
			grade: "Percentage: 84.2%",
			image: "/education_img/montfort-school.jpg",
			resultUrl: "/files/education_pdf/HS MARK SHEET.pdf",
			subjects: [
				"Mathematics",
				"Science",
				"English",
				"Social Studies",
				"Hindi",
			],
			description: "My secondary education at Montfort English School provided me with a strong academic foundation and instilled in me the values of discipline, hard work, and continuous learning. The comprehensive curriculum helped develop my analytical skills and critical thinking abilities, which later became essential for my journey in computer science."
		}
	];

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
						<span className="text-sm font-medium text-gray-300">Academic Journey</span>
					</motion.div>
					<motion.div
						className="flex items-center justify-center gap-4 mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<EducationLogo />
						<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text">Education</h2>
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
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
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
								<div className="grid lg:grid-cols-[400px,1fr] gap-0">
									{/* Left Column - Image */}
									<div className="relative h-80 lg:h-96">
										<Image
											src={edu.image}
											alt={edu.school}
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 400px"
											priority
											quality={90}
										/>
									</div>

									{/* Right Column - Content */}
									<div className="p-8 lg:p-10">
										<div className="space-y-6">
											{/* Duration */}
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<Calendar className="w-5 h-5 text-white" />
												</div>
												<span className="text-gray-300 font-medium">{edu.duration}</span>
											</div>

											{/* School Name */}
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<School className="w-6 h-6 text-white" />
												</div>
												<h3 className="text-2xl font-bold text-white">{edu.school}</h3>
											</div>

											{/* Location */}
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<MapPin className="w-5 h-5 text-white" />
												</div>
												<span className="text-gray-300 font-medium">{edu.location}</span>
											</div>

											{/* Degree Information */}
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<BookOpen className="w-6 h-6 text-white" />
												</div>
												<h4 className="text-xl font-bold text-white">{edu.degree}</h4>
											</div>

											{/* Grade */}
											<div className="flex items-center gap-3">
												<div className="p-2 bg-white/10 rounded-xl">
													<Award className="w-5 h-5 text-white" />
												</div>
												<span className="text-gray-300 font-medium">{edu.grade}</span>
											</div>

											{/* Description */}
											<div className="space-y-3">
												<div className="flex items-start gap-3">
													<div className="p-2 bg-white/10 rounded-xl mt-1">
														<FileText className="w-5 h-5 text-gray-300" />
													</div>
													<p className="text-gray-300 leading-relaxed text-base">{edu.description}</p>
												</div>
											</div>

											{/* Coursework/Subjects */}
											{(edu.coursework || edu.subjects) && (
												<div className="space-y-3">
													<div className="flex items-center gap-3">
														<div className="p-2 bg-white/10 rounded-xl">
															<BookOpen className="w-5 h-5 text-white" />
														</div>
														<h5 className="text-lg font-semibold text-white">
															{edu.coursework ? 'Key Coursework' : 'Subjects Studied'}
														</h5>
													</div>
													<div className="flex flex-wrap gap-3">
														{(edu.coursework || edu.subjects)?.map((item) => (
															<motion.span
																key={item}
																className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
																whileHover={{ scale: 1.05 }}
																whileTap={{ scale: 0.95 }}
															>
																{item}
															</motion.span>
														))}
													</div>
												</div>
											)}

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

export default Education;