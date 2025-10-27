'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);
	const [cursorVariant, setCursorVariant] = useState('default');

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseDown = () => setIsClicking(true);
		const handleMouseUp = () => setIsClicking(false);

		// Add event listeners for interactive elements
		const addHoverListeners = () => {
			const interactiveElements = document.querySelectorAll(
				'a, button, [role="button"], input, textarea, select, .cursor-pointer, .nav-link'
			);

			interactiveElements.forEach((element) => {
				element.addEventListener('mouseenter', () => {
					setIsHovering(true);
					if (element.tagName === 'A' || element.classList.contains('nav-link')) {
						setCursorVariant('link');
					} else if (element.tagName === 'BUTTON' || element.classList.contains('cursor-pointer')) {
						setCursorVariant('button');
					}
				});

				element.addEventListener('mouseleave', () => {
					setIsHovering(false);
					setCursorVariant('default');
				});
			});
		};

		window.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);

		// Add hover listeners after a short delay to ensure DOM is ready
		const timeoutId = setTimeout(addHoverListeners, 100);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			clearTimeout(timeoutId);
		};
	}, []);

	const cursorVariants = {
		default: {
			width: 20,
			height: 20,
			x: -10,
			y: -10,
			backgroundColor: 'rgba(255, 255, 255, 0.8)',
			border: '1px solid rgba(255, 255, 255, 0.3)',
			backdropFilter: 'blur(4px)',
		},
		link: {
			width: 40,
			height: 40,
			x: -20,
			y: -20,
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			border: '1px solid rgba(255, 255, 255, 0.4)',
			backdropFilter: 'blur(8px)',
		},
		button: {
			width: 30,
			height: 30,
			x: -15,
			y: -15,
			backgroundColor: 'rgba(255, 255, 255, 0.15)',
			border: '1px solid rgba(255, 255, 255, 0.5)',
			backdropFilter: 'blur(6px)',
		},
	};

	const dotVariants = {
		default: {
			width: 4,
			height: 4,
			x: -2,
			y: -2,
			backgroundColor: 'rgba(255, 255, 255, 0.9)',
		},
		link: {
			width: 6,
			height: 6,
			x: -3,
			y: -3,
			backgroundColor: 'rgba(255, 255, 255, 1)',
		},
		button: {
			width: 5,
			height: 5,
			x: -2.5,
			y: -2.5,
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
		},
	};

	return (
		<>
			{/* Main Cursor */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
				animate={{
					x: mousePosition.x,
					y: mousePosition.y,
					scale: isClicking ? 0.8 : 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 500,
					damping: 28,
					mass: 0.5,
				}}
			>
				<motion.div
					className="rounded-full"
					variants={cursorVariants}
					animate={cursorVariant}
					transition={{
						type: 'spring',
						stiffness: 500,
						damping: 28,
					}}
				/>
			</motion.div>

			{/* Cursor Dot */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999]"
				animate={{
					x: mousePosition.x,
					y: mousePosition.y,
					scale: isClicking ? 0.5 : 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 1000,
					damping: 30,
					mass: 0.1,
				}}
			>
				<motion.div
					className="rounded-full"
					variants={dotVariants}
					animate={cursorVariant}
					transition={{
						type: 'spring',
						stiffness: 1000,
						damping: 30,
					}}
				/>
			</motion.div>

			{/* Cursor Trail Effect */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9998]"
				animate={{
					x: mousePosition.x,
					y: mousePosition.y,
				}}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 25,
					mass: 1,
				}}
			>
				<motion.div
					className="w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-transparent backdrop-blur-sm"
					animate={{
						scale: isHovering ? 1.5 : 1,
						opacity: isHovering ? 0.6 : 0.3,
					}}
					transition={{
						duration: 0.3,
					}}
				/>
			</motion.div>

			{/* Cursor Ring for Links */}
			{cursorVariant === 'link' && (
				<motion.div
					className="fixed top-0 left-0 pointer-events-none z-[9997]"
					animate={{
						x: mousePosition.x,
						y: mousePosition.y,
					}}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 30,
						mass: 0.8,
					}}
				>
					<motion.div
						className="w-16 h-16 rounded-full border border-white/30"
						animate={{
							scale: [1, 1.1, 1],
							opacity: [0.5, 0.8, 0.5],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				</motion.div>
			)}
		</>
	);
};

export default CustomCursor;
