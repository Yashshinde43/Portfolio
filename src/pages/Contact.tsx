'use client';

import { motion, useAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, MessageSquare, MapIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState<'email' | 'phone' | 'location' | null>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	// Custom Contact Logo Component
	const ContactLogo = () => {
		if (!isClient) {
			return (
				<div className="relative w-12 h-12">
					<div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg">
						<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
							<MessageSquare className="w-6 h-6 text-white" />
						</div>
					</div>
					<div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full">
						<Mail className="w-3 h-3 text-white m-0.5" />
					</div>
					<div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full">
						<Phone className="w-3 h-3 text-white m-0.5" />
					</div>
					<div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full">
						<MapIcon className="w-3 h-3 text-white m-0.5" />
					</div>
				</div>
			);
		}

		return (
			<motion.div
				className="relative"
				initial={{ scale: 0, rotate: -180 }}
				animate={{ scale: 1, rotate: 0 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
			>
				<div className="relative w-12 h-12">
					{/* Main envelope */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg"
						animate={{ rotate: 360 }}
						transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
					>
						<div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-md flex items-center justify-center">
							<MessageSquare className="w-6 h-6 text-white" />
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
						<Mail className="w-3 h-3 text-white m-0.5" />
					</motion.div>
					
					<motion.div
						className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
						animate={{ 
							y: [0, 8, 0],
							scale: [1, 1.2, 1]
						}}
						transition={{ duration: 2, repeat: Infinity, delay: 1 }}
					>
						<Phone className="w-3 h-3 text-white m-0.5" />
					</motion.div>
					
					<motion.div
						className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-br from-white/20 to-white/30 rounded-full"
						animate={{ 
							x: [0, 8, 0],
							scale: [1, 1.2, 1]
						}}
						transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
					>
						<MapIcon className="w-3 h-3 text-white m-0.5" />
					</motion.div>
				</div>
			</motion.div>
		);
	};

	const handleModalOpen = (type: 'email' | 'phone' | 'location') => {
		setModalType(type);
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
		setModalType(null);
	};

	const contactCards = [
		{
			icon: <Mail className="w-8 h-8" />,
			title: 'Email Me',
			description: 'Send me an email directly',
			action: 'email',
			color: 'from-gray-600 to-gray-800',
			hoverColor: 'hover:from-gray-700 hover:to-gray-900'
		},
		{
			icon: <Phone className="w-8 h-8" />,
			title: 'Call Me',
			description: 'Get in touch via phone',
			action: 'phone',
			color: 'from-gray-600 to-gray-800',
			hoverColor: 'hover:from-gray-700 hover:to-gray-900'
		},
		{
			icon: <MapPin className="w-8 h-8" />,
			title: 'Location',
			description: 'Find me on the map',
			action: 'location',
			color: 'from-gray-600 to-gray-800',
			hoverColor: 'hover:from-gray-700 hover:to-gray-900'
		}
	];

	const socialLinks = [
		{
			icon: <Github className="w-6 h-6" />,
			label: 'GitHub',
			link: 'https://github.com/Yashshinde43',
			color: 'hover:bg-gray-800'
		},
		{
			icon: <Linkedin className="w-6 h-6" />,
			label: 'LinkedIn',
			link: 'https://in.linkedin.com/in/yash-shinde-a3127028a',
			color: 'hover:bg-blue-600'
		},
		{
			icon: <MessageCircle className="w-6 h-6" />,
			label: 'WhatsApp',
			link: 'https://wa.me/+918602446498',
			color: 'hover:bg-green-600'
		}
	];

	return (
		<div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20">
			{/* Hero Section */}
			<div className="text-center mb-16">
				<motion.div
					className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className="text-sm font-medium text-gray-300">Get In Touch</span>
				</motion.div>
				<motion.div
					className="flex items-center justify-center gap-4 mb-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<ContactLogo />
					<h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">Contact</h2>
				</motion.div>
				<motion.div
					className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				/>
				<motion.p
					className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Ready to start a conversation? Choose your preferred way to reach out.
				</motion.p>
			</div>

			{/* Contact Cards */}
			<div className="grid md:grid-cols-3 gap-8 mb-16">
				{contactCards.map((card, index) => (
					<motion.div
						key={card.title}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 * index }}
						whileHover={{ y: -5 }}
						className="group cursor-pointer"
						onClick={() => handleModalOpen(card.action as 'email' | 'phone' | 'location')}
					>
						<div className="bg-gray-800/50 border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-white/20 backdrop-blur-sm">
							<div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
								<div className="text-white">
									{card.icon}
								</div>
							</div>
							<h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
							<p className="text-gray-300 mb-4">{card.description}</p>
							<div className="flex items-center text-gray-400 group-hover:text-white transition-colors">
								<span className="text-sm font-medium">Click to connect</span>
								<motion.div
									className="ml-2"
									animate={{ x: [0, 4, 0] }}
									transition={{ duration: 1.5, repeat: Infinity }}
								>
									→
								</motion.div>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			{/* Social Links */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
				className="text-center"
			>
				<h3 className="text-2xl font-bold text-white mb-8">Follow Me</h3>
				<div className="flex justify-center gap-6">
					{socialLinks.map((social, index) => (
						<motion.a
							key={social.label}
							href={social.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className={`w-12 h-12 bg-gray-800/50 ${social.color} rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-white/10`}
						>
							{social.icon}
						</motion.a>
					))}
				</div>
			</motion.div>

			{/* Modal */}
			{isModalOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
					onClick={handleModalClose}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						className="bg-gray-800 border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl backdrop-blur-sm"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex items-center justify-between mb-6">
							<h3 className="text-2xl font-bold text-white">
								{modalType === 'email' && 'Send Email'}
								{modalType === 'phone' && 'Call Me'}
								{modalType === 'location' && 'Location Info'}
							</h3>
							<button
								onClick={handleModalClose}
								className="text-gray-400 hover:text-white transition-colors"
							>
								×
							</button>
						</div>

						{modalType === 'email' && (
							<div className="text-center space-y-6">
								<div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
									<Mail className="w-10 h-10 text-blue-400" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-2">Email Address</h4>
									<p className="text-xl font-bold text-gray-300">yashshinde4343@gmail.com</p>
								</div>
								<a
									href="mailto:yashshinde4343@gmail.com"
									className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
								>
									Send Email
								</a>
							</div>
						)}

						{modalType === 'phone' && (
							<div className="text-center space-y-6">
								<div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
									<Phone className="w-10 h-10 text-green-400" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-2">Phone Number</h4>
									<p className="text-2xl font-bold text-gray-300">+91 8602446498</p>
								</div>
								<div className="flex gap-4">
									<a
										href="tel:+918602446498"
										className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
									>
										Call Now
									</a>
									<a
										href="https://wa.me/+918602446498"
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors text-center"
									>
										WhatsApp
									</a>
								</div>
							</div>
						)}

						{modalType === 'location' && (
							<div className="text-center space-y-6">
								<div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
									<MapPin className="w-10 h-10 text-purple-400" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white mb-2">Location</h4>
									<p className="text-gray-300">Hyderabad, Telangana, India</p>
									<p className="text-sm text-gray-400 mt-1">IST (UTC+5:30)</p>
								</div>
								<a
									href="https://maps.google.com/?q=Hyderabad,Telangana,India"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center block"
								>
									View on Map
								</a>
							</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</div>
	);
};

export default Contact;