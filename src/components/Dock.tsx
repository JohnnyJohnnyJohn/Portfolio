"use client";

import {
	AnimatePresence,
	type MotionValue,
	motion,
	type SpringOptions,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";
import type React from "react";
import type { ReactElement } from "react";
import {
	Children,
	cloneElement,
	isValidElement,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import GlassSurface from "#/components/GlassSurface";

export type DockItemData = {
	id?: string;
	active?: boolean;
	icon: React.ReactNode;
	label: React.ReactNode;
	onClick: () => void;
	className?: string;
};

export type DockProps = {
	items: DockItemData[];
	className?: string;
	distance?: number;
	panelHeight?: number;
	baseItemSize?: number;
	dockHeight?: number;
	magnification?: number;
	spring?: SpringOptions;
};

type DockItemProps = {
	active?: boolean;
	className?: string;
	children: React.ReactNode;
	label?: string;
	onClick?: () => void;
	mouseX: MotionValue<number>;
	spring: SpringOptions;
	distance: number;
	baseItemSize: number;
	magnification: number;
};

function DockItem({
	active = false,
	children,
	className = "",
	label,
	onClick,
	mouseX,
	spring,
	distance,
	magnification,
	baseItemSize,
}: DockItemProps) {
	const ref = useRef<HTMLButtonElement>(null);
	const isHovered = useMotionValue(0);

	const mouseDistance = useTransform(mouseX, (val) => {
		const rect = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: baseItemSize,
		};
		return val - rect.x - baseItemSize / 2;
	});

	const targetSize = useTransform(
		mouseDistance,
		[-distance, 0, distance],
		[baseItemSize, magnification, baseItemSize],
	);
	const size = useSpring(targetSize, spring);
	const stateClasses = active
		? "bg-white text-black"
		: "bg-black/20 text-white";

	return (
		<motion.button
			type="button"
			aria-label={label}
			ref={ref}
			style={{
				width: size,
				height: size,
			}}
			onHoverStart={() => isHovered.set(1)}
			onHoverEnd={() => isHovered.set(0)}
			onFocus={() => isHovered.set(1)}
			onBlur={() => isHovered.set(0)}
			onClick={onClick}
			className={`relative inline-flex cursor-pointer items-center justify-center rounded-full border-0 p-0 shadow-2xl backdrop-blur-3xl outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white/45 ${stateClasses} ${className}`}
			aria-current={active ? "page" : undefined}
		>
			{Children.map(children, (child) =>
				isValidElement(child)
					? cloneElement(
							child as ReactElement<{ isHovered?: MotionValue<number> }>,
							{ isHovered },
						)
					: child,
			)}
		</motion.button>
	);
}

type DockLabelProps = {
	className?: string;
	children: React.ReactNode;
	isHovered?: MotionValue<number>;
};

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isHovered) return;
		const unsubscribe = isHovered.on("change", (latest) => {
			setIsVisible(latest === 1);
		});
		return () => unsubscribe();
	}, [isHovered]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: -10 }}
					exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 0.2 }}
					className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-full border border-white/15 bg-brand-ink/70 px-2 py-0.5 text-xs text-white backdrop-blur-md`}
					role="tooltip"
					style={{ x: "-50%" }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

type DockIconProps = {
	className?: string;
	children: React.ReactNode;
	isHovered?: MotionValue<number>;
};

function DockIcon({ children, className = "" }: DockIconProps) {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			{children}
		</div>
	);
}

export default function Dock({
	items,
	className = "",
	spring = { mass: 0.1, stiffness: 150, damping: 12 },
	magnification = 70,
	distance = 200,
	panelHeight = 64,
	dockHeight = 256,
	baseItemSize = 50,
}: DockProps) {
	const mouseX = useMotionValue(Infinity);
	const isHovered = useMotionValue(0);

	const maxHeight = useMemo(
		() => Math.max(dockHeight, magnification + magnification / 2 + 4),
		[dockHeight, magnification],
	);
	const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
	const height = useSpring(heightRow, spring);
	const panelWidth = `min(92vw, ${
		items.length * baseItemSize +
		Math.max(magnification, 96) +
		Math.max(items.length - 1, 0) * 16
	}px)`;

	return (
		<motion.div
			style={{ height, scrollbarWidth: "none" }}
			className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex max-w-full items-end justify-center px-4"
		>
			<div
				className={`${className} pointer-events-auto relative`}
				style={{ width: panelWidth, height: panelHeight }}
			>
				<GlassSurface
					width="100%"
					height="100%"
					borderRadius={50}
					className="pointer-events-none absolute inset-0"
				/>

				<motion.div
					onMouseMove={({ clientX }) => {
						isHovered.set(1);
						mouseX.set(clientX);
					}}
					onMouseLeave={() => {
						isHovered.set(0);
						mouseX.set(Infinity);
					}}
					className="absolute inset-0 z-10 flex items-end justify-center gap-4 px-4 pb-2"
					role="toolbar"
					aria-label="Application dock"
				>
					{items.map((item) => (
						<DockItem
							key={item.id ?? String(item.label)}
							active={item.active}
							label={typeof item.label === "string" ? item.label : undefined}
							onClick={item.onClick}
							className={item.className}
							mouseX={mouseX}
							spring={spring}
							distance={distance}
							magnification={magnification}
							baseItemSize={baseItemSize}
						>
							<DockIcon>{item.icon}</DockIcon>
							<DockLabel>{item.label}</DockLabel>
						</DockItem>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
