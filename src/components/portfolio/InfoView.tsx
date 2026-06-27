import type { ReactNode } from "react";
import TiltedCard from "#/components/TiltedCard";
import type {
	InfoExperienceItem,
	InfoFocusItem,
	InfoStoryBlock,
} from "#/lib/portfolio-content";
import {
	infoDesktopStoryBlocks,
	infoExperiences,
	infoFocusItems,
	infoHero,
	infoMobileStoryBlocks,
	infoSectionLabels,
} from "#/lib/portfolio-content";

export function InfoView() {
	return (
		<>
			<section className="relative z-10 flex flex-col items-center bg-[radial-gradient(circle_closest-corner_at_50%_0,rgba(242,242,242,.15),transparent)] px-4 pt-36 pb-16 md:px-6 md:pt-43 md:pb-30 lg:px-0 min-[1440px]:pt-45 min-[1920px]:pt-50">
				<div className="flex w-full max-w-220.5 flex-col gap-16 md:gap-20 min-[1440px]:max-w-261 min-[1440px]:gap-22 min-[1920px]:max-w-360">
					<div className="flex max-w-220.5 flex-col gap-6 min-[1440px]:max-w-261">
						<Overline>{infoHero.overline}</Overline>
						<h1
							className="text-4xl font-medium leading-[.9] tracking-tight text-[#f2f2f2] md:text-5xl min-[1440px]:text-6xl min-[1920px]:text-8xl"
							style={{ textShadow: infoHero.textShadow }}
						>
							{infoHero.headlineLead}{" "}
							<span
								className="inline-block bg-linear-to-b from-[#f2f2f2] from-50% to-[#f2f2f220] to-95% bg-clip-text pr-3 font-['Gloock',serif] font-normal text-transparent italic pb-2"
								style={{ textShadow: infoHero.serifShadow }}
							>
								{infoHero.headlineAccent}
							</span>
						</h1>
					</div>

					<div className="flex flex-col gap-20 md:hidden">
						{infoMobileStoryBlocks.map((block) => (
							<MobileStoryCard
								key={block.title}
								block={block}
								showClosing={block.hasClosing === true}
							/>
						))}
					</div>

					<div className="hidden items-start gap-y-20 md:grid md:grid-cols-2 md:gap-x-12 min-[1440px]:gap-x-14 min-[1920px]:gap-x-16">
						{infoDesktopStoryBlocks.map((block) => (
							<StoryCard
								key={block.title}
								block={block}
								showClosing={block.hasClosing === true}
							/>
						))}
					</div>
				</div>
			</section>

			<SectionDivider />

			<section className="relative z-10 flex justify-center px-4 py-16 md:px-6 md:py-18 lg:px-0">
				<div className="flex w-full max-w-220.5 flex-col gap-12 md:gap-14 min-[1440px]:max-w-261 min-[1920px]:max-w-360">
					<Overline>{infoSectionLabels.experience}</Overline>
					<div className="flex flex-col gap-12 md:gap-16 min-[1440px]:gap-18">
						{infoExperiences.map((experience) => (
							<ExperienceRow
								key={`${experience.company}-${experience.period}`}
								experience={experience}
							/>
						))}
					</div>
				</div>
			</section>

			<SectionDivider />

			<section className="relative z-10 flex justify-center px-4 pt-16 pb-22 md:px-6 md:pt-16 md:pb-24 lg:px-0">
				<div className="flex w-full max-w-220.5 flex-col gap-10 md:gap-14 min-[1440px]:max-w-261 min-[1920px]:max-w-360">
					<Overline>{infoSectionLabels.focus}</Overline>
					<div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-y-18">
						{infoFocusItems.map((item) => (
							<FocusBlock key={item.name} item={item} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}

function StoryCard({
	block,
	showClosing = false,
}: {
	block: InfoStoryBlock;
	showClosing?: boolean;
}) {
	const media = <WindowImage alt={block.imageAlt} src={block.image} />;
	const text = (
		<StoryText
			copy={block.copy}
			showClosing={showClosing}
			title={block.title}
		/>
	);

	return (
		<article
			className={`flex flex-col gap-10 md:gap-16 ${
				block.offset ? "md:pt-12" : ""
			}`}
		>
			{block.imageFirst ? (
				<>
					{media}
					{text}
				</>
			) : (
				<>
					{text}
					{media}
				</>
			)}
		</article>
	);
}

function MobileStoryCard({
	block,
	showClosing = false,
}: {
	block: InfoStoryBlock;
	showClosing?: boolean;
}) {
	return (
		<article className="flex flex-col gap-10">
			<WindowImage alt={block.imageAlt} src={block.image} />
			<StoryText
				copy={block.copy}
				showClosing={showClosing}
				title={block.title}
			/>
		</article>
	);
}

function WindowImage({ alt, src }: { alt: string; src: string }) {
	return (
		<div className="relative z-10">
			<TiltedCard
				className="touch-pan-y"
				containerHeight="auto"
				containerWidth="100%"
				imageHeight="auto"
				imageWidth="100%"
				rotateAmplitude={15}
				scaleOnHover={1.1}
				showMobileWarning={false}
				showTooltip={false}
			>
				<div className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_farthest-side_at_50%_0,rgba(242,242,242,.2),transparent)] p-2 shadow-[inset_0_0_8px_rgba(0,0,0,.4),0_0_60px_rgba(0,0,0,.2),0_30px_80px_rgba(0,0,0,.5)] outline-1 -outline-offset-1 outline-white/15 min-[1920px]:rounded-[36px] min-[1920px]:p-3">
					<img
						alt={alt}
						className="aspect-3/4 h-auto w-full rounded-2xl border border-white/30 bg-[#101010]/70 object-cover shadow-[inset_0_0_10px_rgba(0,0,0,.1),0_0_12px_rgba(0,0,0,.4)] min-[1920px]:rounded-3xl"
						loading="lazy"
						src={src}
					/>
				</div>
			</TiltedCard>
		</div>
	);
}

function StoryText({
	copy,
	showClosing = false,
	title,
}: {
	copy: string[];
	showClosing?: boolean;
	title: string;
}) {
	return (
		<div className="px-6 text-[15px] leading-normal font-light text-[#f2f2f2]/60 md:text-base min-[1440px]:px-8 min-[1440px]:text-lg">
			<p className="mb-4 text-lg font-medium text-[#f2f2f2]/90 min-[1440px]:text-xl">
				{title}
			</p>
			{copy.map((paragraph) => (
				<p key={paragraph} className="mt-4 first:mt-0">
					{paragraph}
				</p>
			))}
			{showClosing ? (
				<div className="mt-8 flex flex-col items-start gap-5 min-[1440px]:mt-10 min-[1440px]:gap-6">
					<p className="text-lg font-medium text-[#f2f2f2]/90 min-[1440px]:text-xl">
						Thanks for stopping by!
					</p>
					<LogoMark className="h-20 w-20 text-[#f2f2f2] md:h-24 md:w-24 min-[1440px]:h-28 min-[1440px]:w-28" />
				</div>
			) : null}
		</div>
	);
}

function ExperienceRow({ experience }: { experience: InfoExperienceItem }) {
	return (
		<div className="grid items-baseline gap-4 md:grid-cols-2 md:gap-x-12 min-[1440px]:gap-x-14">
			<h2 className="text-[32px] leading-10 font-medium text-[#f2f2f2] md:text-[40px] md:leading-tight">
				{experience.company}
			</h2>
			<div className="flex flex-col gap-4 md:gap-5 min-[1440px]:gap-6">
				<div className="flex flex-col gap-1 md:gap-2">
					<h3 className="text-2xl leading-tight font-medium text-[#f2f2f2]">
						{experience.role}
					</h3>
					<p className="text-[15px] leading-tight text-[#f2f2f2]/40 md:text-base min-[1440px]:text-lg">
						{experience.period}
					</p>
				</div>
				<p className="text-[15px] leading-tight font-light text-[#f2f2f2]/60 md:text-base min-[1440px]:text-lg">
					{experience.description}
				</p>
			</div>
		</div>
	);
}

function FocusBlock({ item }: { item: InfoFocusItem }) {
	return (
		<div className="flex flex-col items-start gap-3">
			<div className="flex flex-col gap-1.5">
				<h3 className="text-2xl leading-tight font-medium text-[#f2f2f2]">
					{item.name}
				</h3>
				<p className="text-[15px] leading-tight font-light text-[#f2f2f2]/40 md:text-base min-[1440px]:text-lg">
					{item.meta}
				</p>
			</div>
			<p className="text-[15px] leading-normal font-light text-[#f2f2f2]/56 md:text-base min-[1440px]:text-lg">
				{item.detail}
			</p>
		</div>
	);
}

function LogoMark({ className }: { className?: string }) {
	return (
		<svg
			aria-label="Fethi Sedjai logo"
			className={className}
			role="img"
			viewBox="0 0 1254 1254"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="translate(94.05 1159.95) scale(0.085 -0.085)">
				<path
					d="M11070 10215 c0 -22 -96 -252 -137 -325 -117 -214 -319 -408 -541 -519 -73 -37 -205 -82 -312 -107 -69 -16 -185 -18 -1465 -23 -1279 -6 -1393 -7 -1433 -23 -108 -44 -189 -125 -251 -254 -33 -68 -235 -515 -258 -571 -4 -10 220 -13 1102 -13 l1106 0 -7 -22 c-15 -48 -103 -228 -153 -313 -97 -163 -190 -272 -316 -369 -177 -136 -302 -196 -535 -254 l-105 -26 -1885 -6 -1885 -5 -56 -23 c-163 -65 -259 -180 -295 -352 -34 -161 29 -338 153 -431 115 -87 196 -109 416 -109 125 0 157 -3 157 -14 0 -7 -21 -58 -46 -112 -26 -54 -123 -268 -216 -474 -93 -206 -174 -378 -181 -382 -7 -5 -39 -6 -72 -2 -232 23 -482 115 -674 247 -102 70 -249 213 -326 316 -120 159 -222 388 -261 586 -22 112 -30 365 -15 462 91 577 466 1020 1020 1203 224 74 212 73 1109 79 l803 6 56 125 c362 811 444 964 619 1164 257 294 674 507 1066 545 46 5 923 9 1951 10 1635 1 1867 -1 1867 -14z m-4920 -3024 c0 -5 -68 -161 -151 -347 -83 -187 -153 -347 -156 -356 -5 -15 27 -17 419 -20 421 -4 423 -4 521 -31 239 -64 455 -191 646 -379 250 -246 387 -541 421 -904 30 -307 -45 -641 -201 -903 -231 -388 -640 -664 -1052 -710 -102 -12 -1732 -16 -1761 -5 -26 10 -19 34 50 185 36 79 79 173 94 209 16 36 82 180 148 320 l118 255 575 5 c607 6 602 6 699 55 223 114 325 426 214 653 -36 74 -131 172 -202 210 -114 61 -128 62 -657 62 l-481 0 -43 -97 c-88 -199 -569 -1273 -646 -1443 -364 -803 -359 -793 -433 -910 -128 -203 -359 -409 -584 -524 -211 -107 -413 -156 -676 -163 l-172 -6 19 44 c24 57 195 438 228 509 26 56 243 538 269 598 l14 32 -949 0 -950 0 25 68 c126 339 351 591 671 751 167 84 321 128 525 150 56 6 313 11 602 11 l504 0 15 38 c8 20 51 116 95 212 222 486 293 642 327 715 21 44 49 105 62 135 76 170 309 659 353 740 164 308 488 590 840 730 128 52 338 102 475 113 87 8 185 7 185 -2z"
					fill="currentColor"
				/>
			</g>
		</svg>
	);
}

function Overline({ children }: { children: ReactNode }) {
	return (
		<div className="flex items-center gap-2">
			<span className="size-2.5 rounded-full bg-[#f2f2f2] shadow-[0_0_16px_rgba(255,255,255,.55)]" />
			<p className="text-xs leading-tight font-semibold tracking-widest text-[#f2f2f2]/70">
				{children}
			</p>
		</div>
	);
}

function SectionDivider() {
	return (
		<div className="relative z-10 flex justify-center px-4 md:px-6 lg:px-0">
			<div className="h-px w-full max-w-220.5 bg-linear-to-r from-transparent via-[#f2f2f2]/70 to-transparent min-[1440px]:max-w-261 min-[1920px]:max-w-360" />
		</div>
	);
}
