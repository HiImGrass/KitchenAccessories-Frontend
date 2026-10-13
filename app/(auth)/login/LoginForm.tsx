"use client";

import { SubmitEvent, useState } from "react";

export function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		// TODO:
		// Connect this form to DummyJSON authentication later.
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
			{/* Email */}
			<div className="flex flex-col gap-space-sm">
				<label
					htmlFor="email"
					className="font-body text-sm font-medium text-on-surface"
				>
					Email Address
				</label>

				<input
					id="email"
					name="email"
					type="email"
					className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					placeholder="chef@kitchenpantry.com"
					autoComplete="email"
					required
				/>
			</div>

			{/* Password */}
			<div className="flex flex-col gap-space-sm">
				<div className="flex items-center justify-between">
					<label
						htmlFor="password"
						className="font-body text-sm font-medium text-on-surface"
					>
						Password
					</label>

					<a
						href="#"
						className="font-body text-xs font-medium text-terracotta underline-offset-4 hover:underline"
					>
						Forgot password?
					</a>
				</div>

				<div className="relative">
					<input
						id="password"
						name="password"
						type={showPassword ? "text" : "password"}
						className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm pr-12 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						placeholder="••••••••••••"
						autoComplete="current-password"
						required
					/>

					<button
						type="button"
						aria-label={
							showPassword ? "Hide password" : "Show password"
						}
						aria-pressed={showPassword}
						onClick={() => setShowPassword((current) => !current)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-sage transition-colors hover:text-on-surface"
					>
						{showPassword ? "◉" : "◌"}
					</button>
				</div>
			</div>

			{/* Remember me */}
			<label className="flex cursor-pointer items-start gap-space-sm">
				<input
					type="checkbox"
					name="remember"
					className="mt-1 h-4 w-4 rounded-sm border-outline-variant accent-terracotta"
				/>

				<span className="font-body text-sm text-on-surface-variant">
					Keep me signed in on this kitchen device
				</span>
			</label>

			{/* Submit */}
			<button
				type="submit"
				className="inline-flex w-full items-center justify-center gap-space-sm rounded-lg bg-primary px-space-lg py-space-md font-body text-base font-semibold text-on-primary transition-colors hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary/40"
			>
				<span>Sign In to Your Account</span>
				<span aria-hidden="true">→</span>
			</button>
		</form>
	);
}