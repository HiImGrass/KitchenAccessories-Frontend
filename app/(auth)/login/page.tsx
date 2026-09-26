import Link from "next/link";

import { LoginForm } from "./LoginForm";

export default function LoginPage() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-surface px-gutter-mobile py-margin-mobile md:px-gutter md:py-margin">
			<div className="w-full max-w-md rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">
				{/* Brand */}
				<header className="text-center">
					<Link
						href="/"
						className="inline-flex items-center gap-space-sm font-display text-lg font-semibold text-on-surface"
					>
						<span
							aria-hidden="true"
							className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-on-primary"
						>
							L
						</span>
						<span>Ladle &amp; Co.</span>
					</Link>

					<div className="mt-space-lg">
						<h1 className="font-display text-3xl font-semibold tracking-tight text-on-surface">
							Welcome back to the kitchen
						</h1>

						<p className="mt-space-sm font-body text-base leading-relaxed text-on-surface-variant">
							Sign in to access your saved recipes, artisan orders,
							and curated wishlist.
						</p>
					</div>
				</header>

				{/* Social Auth */}
				<div className="mt-space-xl flex flex-col gap-space-sm">
					<button
						type="button"
						className="inline-flex w-full items-center justify-center gap-space-sm rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
					>
						<span aria-hidden="true">G</span>
						<span>Continue with Google</span>
					</button>

					<button
						type="button"
						className="inline-flex w-full items-center justify-center gap-space-sm rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-low"
					>
						<span aria-hidden="true"></span>
						<span>Continue with Apple</span>
					</button>
				</div>

				{/* Divider */}
				<div className="my-space-lg flex items-center gap-space-md">
					<span className="h-px flex-1 bg-outline-variant" />
					<span className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
						or
					</span>
					<span className="h-px flex-1 bg-outline-variant" />
				</div>

				<LoginForm />

				<p className="mt-space-lg text-center font-body text-base text-on-surface">
					New to Ladle &amp; Co.?{" "}
					<Link
						href="/sign-up"
						className="font-medium text-terracotta underline-offset-4 hover:underline"
					>
						Create an account
					</Link>
				</p>

				<footer className="mt-space-xl text-center">
					<p className="font-body text-xs text-on-surface-variant">
						Artisan kitchenware thoughtfully crafted for everyday rituals.
					</p>

					<nav
						aria-label="Legal links"
						className="mt-space-sm flex items-center justify-center gap-space-sm"
					>
						<Link
							href="/privacy"
							className="font-body text-xs text-on-surface-variant transition-colors hover:text-on-surface"
						>
							Privacy
						</Link>

						<span aria-hidden="true" className="text-outline-variant">
							•
						</span>

						<Link
							href="/terms"
							className="font-body text-xs text-on-surface-variant transition-colors hover:text-on-surface"
						>
							Terms
						</Link>

						<span aria-hidden="true" className="text-outline-variant">
							•
						</span>

						<Link
							href="/help"
							className="font-body text-xs text-on-surface-variant transition-colors hover:text-on-surface"
						>
							Help
						</Link>
					</nav>
				</footer>
			</div>
		</main>
	);
}