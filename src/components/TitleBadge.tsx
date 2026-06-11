import GlassSurface from "#/components/GlassSurface";
import ShinyText from "#/components/ShinyText";

export default function TitleBadge() {
	return (
		<div className="fixed inset-x-0 top-8 z-50 px-8">
			<GlassSurface height={56} borderRadius={50}>
				<ShinyText text="Fethi Sedjai" className="text-2xl font-bold" />
			</GlassSurface>
		</div>
	);
}
