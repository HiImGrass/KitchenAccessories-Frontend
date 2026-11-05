import Link from "next/link";
import { getTranslations } from "next-intl/server";
import SignupForm from "./SignupForm";
import { PageIntlProvider } from "@/components/providers/PageIntlProvider";
import { getScopedMessages } from "@/lib/intlMessages";

export default async function SignupPage() {
	const t = await getTranslations("auth");
	const messages = await getScopedMessages("auth");
	return (
		<PageIntlProvider messages={messages}>
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
						<span>{t("brand")}</span>
					</Link>
				</div>

				{/* Heading */}
				<div className="mt-space-lg text-center">
					<h1 className="font-display text-3xl font-semibold tracking-tight text-on-surface">
						{t("joinCulinaryTable")}
					</h1>

					<p className="mt-space-sm font-body text-base leading-relaxed text-on-surface-variant">
						{t("signupDescription")}
					</p>
				</div>

				<div className="mt-space-xl">
					<SignupForm />
				</div>

				{/* Switch to Login */}
				<div className="mt-space-lg text-center">
					<p className="font-body text-base text-on-surface">
						{t("alreadyCommunity")}{" "}
						<Link
							href="/login"
							className="font-medium text-terracotta underline-offset-4 hover:underline"
						>
							{t("signInHere")}
						</Link>
					</p>
				</div>
			</div>
		</main>
		</PageIntlProvider>
	);
}