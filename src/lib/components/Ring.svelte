<!--
  The Opello core graphic ("overlaid"): a peach disc with the locked and
  unlocked lenses crossing through it. One lens alone half-opens the disc;
  where both cross, it opens fully onto whatever is behind.

  Geometry fitted to the brand artwork: lenses are ellipses at ±30°,
  0.895R tall and 0.516R wide. Built as a mask, so the cut-outs show the
  page gradient rather than a flat colour.
-->
<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();

	const R = 500;
	const A = 0.895 * R;
	const B = 0.516 * R;
	const HALF = 0.45; // how much a single lens opens the disc
	const uid = 'opring';
</script>

<svg
	class={className}
	viewBox="-520 -520 1040 1040"
	aria-hidden="true"
	focusable="false"
>
	<defs>
		<linearGradient id="{uid}-fill" gradientUnits="userSpaceOnUse" x1="-260" y1={-R} x2="200" y2={R}>
			<stop offset="0" stop-color="#FF9A66" />
			<stop offset="0.38" stop-color="#F58851" />
			<stop offset="0.72" stop-color="#D9784F" />
			<stop offset="1" stop-color="#A9604E" />
		</linearGradient>
		<clipPath id="{uid}-lockclip" clipPathUnits="userSpaceOnUse">
			<ellipse rx={B} ry={A} transform="rotate(30)" />
		</clipPath>
		<mask id="{uid}-cut" maskUnits="userSpaceOnUse" x="-520" y="-520" width="1040" height="1040">
			<circle r={R} fill="#fff" />
			<ellipse rx={B} ry={A} transform="rotate(30)" fill="#000" fill-opacity={HALF} />
			<ellipse rx={B} ry={A} transform="rotate(-30)" fill="#000" fill-opacity={HALF} />
			<g clip-path="url(#{uid}-lockclip)">
				<ellipse rx={B} ry={A} transform="rotate(-30)" fill="#000" />
			</g>
		</mask>
	</defs>
	<circle r={R} fill="url(#{uid}-fill)" mask="url(#{uid}-cut)" />
</svg>
