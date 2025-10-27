'use client';

import Link from 'next/link';
import { Code2, Mail, Phone, Github, Linkedin, Twitter, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const pageLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Education', path: '/education' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	];

	const socialLinks = [
		{ name: 'GitHub', href: 'https://github.com/Yashshinde43', icon: Github },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-shinde-330935293/', icon: Linkedin },
		{ name: 'Email', href: 'mailto:yashshinde4343@gmail.com', icon: Mail }
	];

	return (
		<footer className="relative mt-24">
			{/* Monochrome Background */}
			<div className="absolute inset-0 bg-black" />
			<div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="py-16">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
						{/* Branding Section */}
						<div className="lg:col-span-1 space-y-6">
							<Link href="/" className="flex items-center space-x-3 group">
								<div className="relative p-2 bg-white rounded-lg group-hover:scale-110 transition-transform duration-300">
									<div className="w-6 h-6 relative">
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
											<div className="absolute w-4 h-4 border-2 border-black rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
											<div className="absolute w-6 h-6 border border-black/30 rounded-full animate-ping"></div>
										</div>
									</div>
								</div>
								<span className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
									Yash Shinde
								</span>
							</Link>
							
							<p className="text-gray-300 leading-relaxed max-w-sm">
								Passionate Software Developer crafting digital experiences with modern technologies. 
								Based in Hyderabad, India.
							</p>

							{/* Location & Availability */}
							<div className="space-y-3">
								<div className="flex items-center gap-3 text-gray-300">
									<MapPin className="w-4 h-4 text-white" />
									<span className="text-sm">Hyderabad, Telangana, India</span>
								</div>
								<div className="flex items-center gap-3 text-gray-300">
									<Calendar className="w-4 h-4 text-white" />
									<span className="text-sm">Available for opportunities</span>
								</div>
							</div>
						</div>

						{/* Navigation Links */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
							<div className="grid grid-cols-2 gap-3">
								{pageLinks.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm py-1"
									>
										{link.name}
									</Link>
								))}
							</div>
						</div>

						{/* Contact & Social */}
						<div className="space-y-6">
							<h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
							
							{/* Contact Info */}
							<div className="space-y-4">
								<a 
									href="mailto:yashshinde4343@gmail.com" 
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
										<Mail className="w-4 h-4 text-white" />
									</div>
									<span className="text-sm">yashshinde4343@gmail.com</span>
								</a>
								
								<a 
									href="tel:+91 8602446498"
									className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
								>
									<div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
										<Phone className="w-4 h-4 text-white" />
									</div>
									<span className="text-sm">+91 8602446498</span>
								</a>
							</div>

							{/* Social Links */}
							<div className="space-y-3">
								<h4 className="text-sm font-medium text-gray-400">Follow Me</h4>
								<div className="flex gap-3">
									{socialLinks.map(social => (
										<a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
												className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110 group"
											aria-label={social.name}
										>
												<social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;