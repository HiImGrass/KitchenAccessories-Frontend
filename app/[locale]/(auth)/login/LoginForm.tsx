"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/dummyjson";
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations("auth");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    // DummyJSON sử dụng trường username thay vì email, tuy nhiên form của bạn
    // đang cho nhập email (hoặc bạn có thể dùng tài khoản test mẫu như 'emilys').
    // Ở đây chúng ta gán giá trị ô input email vào trường username cho khớp với DummyJSON.
    const username = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const data = await loginUser({ username, password });

      // Lưu trữ token và thông tin user vào localStorage
      localStorage.setItem("user", JSON.stringify(data));

      // Đăng nhập thành công, chuyển hướng về trang chủ
      router.push("/");
      router.refresh();
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : t("signInFailed"),
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg">
      {/* Hiển thị lỗi nếu có */}
      {error && (
        <div className="rounded-md bg-error-container/40 p-space-sm font-body text-sm text-error border border-error/30">
          {error}
        </div>
      )}

      {/* Email / Username */}
      <div className="flex flex-col gap-space-sm">
        <label
          htmlFor="email"
          className="font-body text-sm font-medium text-on-surface">
          {t("emailOrUsername")}
        </label>

        <input
          id="email"
          name="email"
          type="text"
          className="w-full rounded-md border border-outline-variant bg-surface-container-lowest px-space-md py-space-sm font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder={t("emailOrUsernamePlaceholder")}
          autoComplete="username"
          required
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="font-body text-sm font-medium text-on-surface">
            {t("password")}
          </label>

          <a
            href="#"
            className="font-body text-xs font-medium text-terracotta underline-offset-4 hover:underline">
            {t("forgotPassword")}
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
            aria-label={showPassword ? t("hidePassword") : t("showPassword")}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sage transition-colors hover:text-on-surface">
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
          {t("rememberMe")}
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-space-sm rounded-lg bg-primary px-space-lg py-space-md font-body text-base font-semibold text-on-primary transition-colors hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 cursor-pointer">
        <span>{loading ? t("signingIn") : t("signInToAccount")}</span>
        {!loading && <span aria-hidden="true">→</span>}
      </button>
    </form>
  );
}
