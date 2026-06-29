import type { SpringOptions } from "motion/react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type {
	ComponentProps,
	CSSProperties,
	MouseEvent,
	ReactNode,
} from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "#/lib/utils";

interface TiltedCardProps {
	imageSrc?: ComponentProps<"img">["src"];
	altText?: string;
	captionText?: string;
	containerHeight?: CSSProperties["height"];
	containerWidth?: CSSProperties["width"];
	imageHeight?: CSSProperties["height"];
	imageWidth?: CSSProperties["width"];
	scaleOnHover?: number;
	rotateAmplitude?: number;
	showMobileWarning?: boolean;
	showTooltip?: boolean;
	overlayContent?: ReactNode;
	displayOverlayContent?: boolean;
	className?: string;
	imageClassName?: string;
	children?: ReactNode;
}

const springValues: SpringOptions = {
	damping: 30,
	stiffness: 100,
	mass: 2,
};

export default function TiltedCard({
	imageSrc,
	altText = "Tilted card image",
	captionText = "",
	containerHeight = "300px",
	containerWidth = "100%",
	imageHeight = "300px",
	imageWidth = "300px",
	scaleOnHover = 1.1,
	rotateAmplitude = 14,
	showMobileWarning = true,
	showTooltip = true,
	overlayContent = null,
	displayOverlayContent = false,
	className,
	imageClassName,
	children,
}: TiltedCardProps) {
	const ref = useRef<HTMLElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useMotionValue(0), springValues);
	const rotateY = useSpring(useMotionValue(0), springValues);
	const scale = useSpring(1, springValues);
	const opacity = useSpring(0);
	const rotateFigcaption = useSpring(0, {
		stiffness: 350,
		damping: 30,
		mass: 1,
	});

	const [lastY, setLastY] = useState(0);
	const [canHover, setCanHover] = useState(false);

	const resetMotion = useCallback(() => {
		opacity.set(0);
		scale.set(1);
		rotateX.set(0);
		rotateY.set(0);
		rotateFigcaption.set(0);
		setLastY(0);
	}, [opacity, rotateFigcaption, rotateX, rotateY, scale]);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const media = window.matchMedia("(hover: hover) and (pointer: fine)");
		const syncHoverCapability = () => {
			setCanHover(media.matches);
			if (!media.matches) resetMotion();
		};

		syncHoverCapability();
		media.addEventListener("change", syncHoverCapability);
		return () => media.removeEventListener("change", syncHoverCapability);
	}, [resetMotion]);

	function handleMouse(e: MouseEvent<HTMLElement>) {
		if (!canHover || !ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;

		const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
		const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

		rotateX.set(rotationX);
		rotateY.set(rotationY);

		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);

		const velocityY = offsetY - lastY;
		rotateFigcaption.set(-velocityY * 0.6);
		setLastY(offsetY);
	}

	function handleMouseEnter() {
		if (!canHover) return;
		scale.set(scaleOnHover);
		opacity.set(1);
	}

	function handleMouseLeave() {
		if (!canHover) return;
		resetMotion();
	}

	return (
		<figure
			ref={ref}
			className={cn(
				"relative flex h-full w-full flex-col items-center justify-center perspective-midrange",
				className,
			)}
			style={{
				height: containerHeight,
				width: containerWidth,
			}}
			onMouseMove={handleMouse}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{showMobileWarning && (
				<div className="absolute top-4 block text-center text-sm sm:hidden">
					This effect is not optimized for mobile. Check on desktop.
				</div>
			)}

			<motion.div
				className="relative transform-3d"
				style={{
					width: imageWidth,
					height: imageHeight,
					rotateX,
					rotateY,
					scale,
				}}
			>
				{children ??
					(imageSrc ? (
						<motion.img
							alt={altText}
							className={cn(
								"absolute top-0 left-0 rounded-[15px] object-cover will-change-transform transform-[translateZ(0)]",
								imageClassName,
							)}
							src={imageSrc}
							style={{
								width: imageWidth,
								height: imageHeight,
							}}
						/>
					) : null)}

				{displayOverlayContent && overlayContent && (
					<motion.div className="absolute top-0 left-0 z-2 will-change-transform transform-[translateZ(30px)]">
						{overlayContent}
					</motion.div>
				)}
			</motion.div>

			{showTooltip && (
				<motion.figcaption
					className="pointer-events-none absolute top-0 left-0 z-3 hidden rounded-lg bg-white px-2.5 py-1 text-[10px] text-[#2d2d2d] opacity-0 sm:block"
					style={{
						x,
						y,
						opacity,
						rotate: rotateFigcaption,
					}}
				>
					{captionText}
				</motion.figcaption>
			)}
		</figure>
	);
}
