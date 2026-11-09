<script lang="ts">
	import { tick } from 'svelte';
	import { CONSENT_TEXT, CONSENT_VERSION } from '#lib/consent';

	// Signups are stored by the Opello signup service (Postgres-backed).
	const ENDPOINT = 'https://webbie-at-blubridge-cvqap.skydive.app/opello/api/subscribe';
	const DEFAULT_NOTE = '';
	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

	type State = 'idle' | 'sending' | 'error' | 'done';

	let email = $state('');
	let status: State = $state('idle');
	let note = $state(DEFAULT_NOTE);
	let input: HTMLInputElement | undefined = $state();
	let thanks: HTMLDivElement | undefined = $state();

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const value = email.trim();
		if (!EMAIL_RE.test(value)) {
			status = 'error';
			note = 'That email address does not look right.';
			input?.focus();
			return;
		}

		status = 'sending';
		note = 'Sending…';
		try {
			const res = await fetch(ENDPOINT, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email: value, source: 'coming-soon', consent: CONSENT_VERSION })
			});
			if (!res.ok) throw new Error(String(res.status));
			status = 'done';
			await tick();
			thanks?.focus({ preventScroll: true });
		} catch {
			status = 'error';
			note = 'Something went wrong. Try again in a moment.';
		}
	}

	function onInput() {
		if (status === 'error') {
			status = 'idle';
			note = DEFAULT_NOTE;
		}
	}
</script>

{#if status !== 'done'}
	<form class="signup" onsubmit={submit} novalidate>
		<label class="label" for="email">Sign up for updates</label>
		<div class="field">
			<input
				id="email"
				name="email"
				type="email"
				inputmode="email"
				autocomplete="email"
				placeholder="you@example.com"
				required
				aria-describedby="signup-note"
				aria-invalid={status === 'error'}
				bind:value={email}
				bind:this={input}
				oninput={onInput}
			/>
			<button type="submit" disabled={status === 'sending'}>
				<span>Notify me</span>
				<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
					<path
						d="M4 10h11M10.5 5l5 5-5 5"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
		<p class="note" id="signup-note" role="status" aria-live="polite" data-state={status}>{note}</p>
		<p class="consent">
			{CONSENT_TEXT}
		</p>
	</form>
{:else}
	<div class="thanks" tabindex="-1" bind:this={thanks}>
		<p class="thanks-title">Thank you for registering your interest.</p>
		<p class="thanks-note">Look out for updates via email.</p>
	</div>
{/if}

<style>
	.signup,
	.thanks {
		margin-top: clamp(30px, 4.5vh, 46px);
		max-width: 30rem;
	}

	.label {
		display: block;
		font-size: 11px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--muted);
		margin-bottom: 12px;
	}

	.field {
		display: flex;
		align-items: center;
		gap: 10px;
		border-bottom: 1px solid var(--rule);
		padding-bottom: 8px;
		transition: border-color 200ms var(--ease);
	}
	.field:focus-within {
		border-color: var(--peach);
	}

	input {
		flex: 1;
		min-width: 0;
		background: transparent;
		border: 0;
		color: var(--clay);
		font: inherit;
		font-size: 1rem;
		padding: 10px 0;
		outline: none;
	}
	input::placeholder {
		color: rgba(233, 228, 224, 0.34);
	}

	button {
		flex: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: transparent;
		border: 0;
		color: var(--peach);
		font: inherit;
		font-size: 13px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		padding: 10px 2px 10px 12px;
		cursor: pointer;
		transition: opacity 180ms var(--ease);
	}
	button:hover {
		opacity: 0.72;
	}
	button:disabled {
		opacity: 0.45;
		cursor: default;
	}
	button svg {
		width: 17px;
		height: 17px;
		transition: transform 200ms var(--ease);
	}
	button:hover svg {
		transform: translateX(2px);
	}

	.note {
		margin: 12px 0 0;
		font-size: 12.5px;
		line-height: 1.5;
		color: rgba(233, 228, 224, 0.5);
		min-height: 1.5em;
	}
	.consent {
		margin: 2px 0 0;
		font-size: 12px;
		line-height: 1.5;
		color: rgba(233, 228, 224, 0.5);
	}
	.consent a {
		white-space: nowrap;
		color: rgba(233, 228, 224, 0.78);
		text-underline-offset: 3px;
		text-decoration-color: rgba(245, 136, 81, 0.6);
	}
	.consent a:hover {
		color: var(--peach);
	}
	.note:empty {
		display: none;
	}
	.note:empty + .consent {
		margin-top: 12px;
	}
	.note-unused {
		visibility: hidden;
	}
	.note[data-state='error'] {
		color: #f3a183;
	}

	.thanks {
		border-left: 2px solid var(--peach);
		padding-left: 18px;
		outline: none;
		animation: rise 520ms var(--ease) both;
	}
	.thanks-title {
		margin: 0;
		font-size: clamp(1.25rem, 1.7vw, 1.5rem);
		line-height: 1.25;
		letter-spacing: -0.01em;
	}
	.thanks-note {
		margin: 8px 0 0;
		font-size: 0.95rem;
		color: var(--muted);
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.thanks {
			animation: none;
		}
	}
</style>
