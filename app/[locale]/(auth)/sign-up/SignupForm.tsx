"use client";

import { SubmitEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function SignupForm() {
	const t = useTranslations("auth");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [password, setPassword] = useState("");

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		// Signup logic will be added later.
	}

	const hasLength = password.length >= 8;
	const hasNumber = /\d/.test(password);
	const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

	let strengthText = t("passwordMinimum");
	let strengthLevel = 0;

	if (password.length > 0) {
		if (hasLength && hasNumber && hasSpecial) {
			strengthText = t("excellentSecurity");
			strengthLevel = 3;
		} else if (hasLength && (hasNumber || hasSpecial)) {
			strengthText = t("moderateSecurity");
			strengthLevel = 2;
		} else {
			strengthText = t("weakSecurity");
			strengthLevel = 1;
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
			{/* Social Registration */}
			<div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
				<button
					type="button"
					className="inline-flex w-full items-center justify-center rounded-md bg-secondary-container px-space-md py-space-sm font-body text-sm font-medium text-on-secondary-container transition-colors hover:bg-secondary/20"
				>
					{t("continueWithGoogle")}
				</button>

				<button
					type="button"
					className="inline-flex w-full items-center justify-center rounded-md bg-secondary-container px-space-md py-space-sm font-body text-sm font-medium text-on-secondary-container transition-colors hover:bg-secondary/20"
				>
					{t("continueWithApple")}
				</button>
			</div>

			{/* Divider */}
			<div className="flex items-center gap-space-md">
				<span className="h-px flex-1 bg-outline-variant" />
				<span className="font-body text-xs uppercase tracking-widest text-on-surface-variant">
					{t("orSignUpWithEmail")}
				</span>
				<span className="h-px flex-1 bg-outline-variant" />
			</div>

			{/* Name */}
			<div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
				<div className="flex flex-col gap-space-sm">
					<label
						className="font-body text-sm font-medium text-on-surface"
						htmlFor="first-name"
					>
						{t("firstName")}
					</label>

					<input
						className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						id="first-name"
						name="firstName"
						type="text"
						placeholder="Elena"
						autoComplete="given-name"
						required
					/>
				</div>

				<div className="flex flex-col gap-space-sm">
					<label
						className="font-body text-sm font-medium text-on-surface"
						htmlFor="last-name"
					>
						{t("lastName")}
					</label>

					<input
						className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						id="last-name"
						name="lastName"
						type="text"
						placeholder="Moreau"
						autoComplete="family-name"
						required
					/>
				</div>
			</div>

			{/* Email */}
			<div className="flex flex-col gap-space-sm">
				<label
					className="font-body text-sm font-medium text-on-surface"
					htmlFor="email"
				>
					{t("email")}
				</label>

				<input
					className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
					id="email"
					name="email"
					type="email"
					placeholder="elena@culinarytable.com"
					autoComplete="email"
					required
				/>
			</div>

			{/* Passwords */}
			<div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
				<div className="flex flex-col gap-space-sm">
					<label
						className="font-body text-sm font-medium text-on-surface"
						htmlFor="password"
					>
						{t("password")}
					</label>

					<div className="relative">
						<input
							className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm pr-16 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
							id="password"
							name="password"
							type={showPassword ? "text" : "password"}
							placeholder="••••••••"
							autoComplete="new-password"
							value={password}
							onChange={(event) =>
								setPassword(event.target.value)
							}
							required
						/>

						<button
							type="button"
							aria-label={
								showPassword
									? t("hidePassword")
									: t("showPassword")
							}
							aria-pressed={showPassword}
							onClick={() =>
								setShowPassword((current) => !current)
							}
							className="absolute right-3 top-1/2 -translate-y-1/2 font-body text-xs font-medium text-sage transition-colors hover:text-on-surface"
						>
							{showPassword ? t("hide") : t("show")}
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-space-sm">
					<label
						className="font-body text-sm font-medium text-on-surface"
						htmlFor="confirm-password"
					>
						{t("confirmPassword")}
					</label>

					<div className="relative">
						<input
							className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm pr-16 font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
							id="confirm-password"
							name="confirmPassword"
							type={
								showConfirmPassword ? "text" : "password"
							}
							placeholder="••••••••"
							autoComplete="new-password"
							required
						/>

						<button
							type="button"
							aria-label={
								showConfirmPassword
									? t("hideConfirmationPassword")
									: t("showConfirmationPassword")
							}
							aria-pressed={showConfirmPassword}
							onClick={() =>
								setShowConfirmPassword(
									(current) => !current
								)
							}
							className="absolute right-3 top-1/2 -translate-y-1/2 font-body text-xs font-medium text-sage transition-colors hover:text-on-surface"
						>
							{showConfirmPassword ? t("hide") : t("show")}
						</button>
					</div>
				</div>
			</div>

			{/* Password Strength */}
			<div className="rounded-md border border-outline-variant bg-surface-container-low p-space-md">
				<div className="flex items-center justify-between">
					<span className="font-body text-xs font-medium text-on-surface">
						{t("passwordRequirements")}
					</span>

					<span className="font-body text-xs text-on-surface-variant">
						{strengthText}
					</span>
				</div>

				<div className="mt-space-sm flex gap-space-xs">
					{[1, 2, 3].map((level) => (
						<div
							key={level}
							className={`h-1.5 flex-1 rounded-full transition-all duration-200 ${level <= strengthLevel
									? "bg-terracotta opacity-100"
									: "bg-warm-sand opacity-40"
								}`}
						/>
					))}
				</div>
			</div>

			{/* Agreements */}
			<div className="flex flex-col gap-space-sm">
				<label className="flex cursor-pointer items-start gap-space-sm">
					<input
						type="checkbox"
						name="newsletter"
						className="mt-1 h-4 w-4 rounded-sm border-outline-variant accent-terracotta"
					/>

					<span className="font-body text-sm text-on-surface-variant">
						{t("newsletterConsent")}
					</span>
				</label>

				<label className="flex cursor-pointer items-start gap-space-sm">
					<input
						type="checkbox"
						name="terms"
						required
						className="mt-1 h-4 w-4 rounded-sm border-outline-variant accent-terracotta"
					/>

					<span className="font-body text-sm text-on-surface-variant">
						{t("agreeTo")}{" "}
						<a
							href="#"
							className="font-medium text-terracotta underline-offset-4 hover:underline"
						>
							{t("terms")}
						</a>{" "}
						{t("and")}{" "}
						<a
							href="#"
							className="font-medium text-terracotta underline-offset-4 hover:underline"
						>
							{t("privacy")}
						</a>
						.
					</span>
				</label>
			</div>

			{/* Submit */}
			<button
				className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-space-lg py-space-md font-body text-base font-semibold text-on-primary transition-colors hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary/40"
				type="submit"
			>
				{t("createYourAccount")}
			</button>
		</form>
	);
}