import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupPage() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-surface px-gutter-mobile py-margin-mobile md:px-gutter md:py-margin">
			<div className="w-full max-w-md rounded-xl bg-surface-container-lowest p-space-xl shadow-sm">
				{/* Brand */}
				<div className="text-center">
					<Link
						href="/"
						className="inline-flex items-center gap-space-sm font-display text-lg font-semibold text-on-surface"
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-on-primary">
							L
						</span>
						<span>Ladle &amp; Co.</span>
					</Link>
				</div>

				{/* Heading */}
				<div className="mt-space-lg text-center">
					<h1 className="font-display text-3xl font-semibold tracking-tight text-on-surface">
						Join the Culinary Table
					</h1>

					<p className="mt-space-sm font-body text-base leading-relaxed text-on-surface-variant">
						Create an account to track orders, save curated pairings,
						and receive artisan workshop notes.
					</p>
				</div>

				<div className="mt-space-xl">
					<SignupForm />
				</div>

				{/* Switch to Login */}
				<div className="mt-space-lg text-center">
					<p className="font-body text-base text-on-surface">
						Already part of our community?{" "}
						<Link
							href="/login"
							className="font-medium text-terracotta underline-offset-4 hover:underline"
						>
							Sign in here
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
}