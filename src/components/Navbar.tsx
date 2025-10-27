'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Home, User, GraduationCap, Briefcase, Cpu, FolderOpen, MessageSquare } from 'lucide-react';
import SearchDialog from './SearchDialog';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen]);

	const navLinks = [
		{ path: '/', label: 'Home', icon: Home },
		{ path: '/about', label: 'About', icon: User },
		{ path: '/education', label: 'Education', icon: GraduationCap },
		{ path: '/experience', label: 'Experience', icon: Briefcase },
		{ path: '/skills', label: 'Skills', icon: Cpu },
		{ path: '/projects', label: 'Projects', icon: FolderOpen },
		{ path: '/contact', label: 'Contact', icon: MessageSquare },
	];

	return (
		<>
			<motion.nav
				className="fixed top-0 w-full z-50"
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="relative">
					<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

					<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							{/* Logo */}
							<Link href="/" className="flex items-center space-x-3 group">
								<motion.div
									className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									<Code2 className="w-6 h-6 text-white" />
								</motion.div>
								<span className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">Yash Shinde</span>
							</Link>

							{/* Desktop Navigation */}
							<div className="hidden md:flex items-center space-x-6">
								<SearchDialog />
								{navLinks.map(link => {
									const IconComponent = link.icon;
									const isActive = pathname === link.path;
									return (
										<Link
											key={link.path}
											href={link.path}
											className={`nav-link flex items-center space-x-2 ${isActive ? 'bg-white/15 backdrop-blur-sm text-white' : ''}`}
										>
											<IconComponent className="w-4 h-4" />
											<span>{link.label}</span>
										</Link>
									);
								})}
							</div>

							{/* Mobile header right section */}
							<div className="flex md:hidden items-center space-x-2">
								<SearchDialog />
								<motion.button
									className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
									onClick={() => setIsMenuOpen(!isMenuOpen)}
									whileTap={{ scale: 0.95 }}
								>
									<motion.div
										animate={{ rotate: isMenuOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}
									>
										{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
									</motion.div>
								</motion.button>
							</div>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Side Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={() => setIsMenuOpen(false)}
						/>

						{/* Side Menu */}
						<motion.div
							className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ 
								type: 'spring', 
								damping: 25, 
								stiffness: 200,
								duration: 0.4 
							}}
						>
							{/* Menu Header */}
							<div className="flex items-center justify-between p-6 border-b border-white/10">
								<div className="flex items-center space-x-3">
									<span className="text-lg font-bold text-white">Menu</span>
								</div>
								<motion.button
									className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
									onClick={() => setIsMenuOpen(false)}
									whileTap={{ scale: 0.95 }}
								>
									<X className="w-6 h-6" />
								</motion.button>
							</div>

							{/* Menu Content */}
							<div className="p-6 space-y-2">
								{navLinks.map((link, index) => {
									const IconComponent = link.icon;
									const isActive = pathname === link.path;
									return (
										<motion.div
											key={link.path}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											<Link
												href={link.path}
												className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
													isActive 
														? 'bg-white/15 text-white border border-white/20' 
														: 'text-gray-400 hover:text-white hover:bg-white/10'
												}`}
												onClick={() => setIsMenuOpen(false)}
											>
												<motion.div
													className={`p-2 rounded-lg transition-colors ${
														isActive 
															? 'bg-white/20' 
															: 'bg-white/10 group-hover:bg-white/20'
													}`}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.95 }}
												>
													<IconComponent className="w-5 h-5" />
												</motion.div>
												<span className="font-medium">{link.label}</span>
												{isActive && (
													<motion.div
														className="ml-auto w-2 h-2 bg-white rounded-full"
														initial={{ scale: 0 }}
														animate={{ scale: 1 }}
														transition={{ delay: 0.2 }}
													/>
												)}
											</Link>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;