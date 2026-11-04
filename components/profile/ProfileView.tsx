"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { ProfileBreadcrumb } from "@/components/profile/ProfileBreadcrumb";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileInfoCard } from "@/components/profile/ProfileInfoCard";
import { ProfileActionsCard } from "@/components/profile/ProfileActionsCard";
import { ProfileCartCard } from "@/components/profile/ProfileCartCard";
import { fetchProfile, getStoredUser } from "@/lib/profileUser";
import type { UserProfile } from "@/types/profile";
import { updateMockUser } from "@/lib/dummyjson";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const ProfileView: React.FC = () => {
  const t = useTranslations("profile");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [activeDialog, setActiveDialog] = useState<
    "profile" | "password" | null
  >(null);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  // Lấy user mà DummyJSON đã trả về lúc đăng nhập (lưu ở localStorage "user")
  useEffect(() => {
    const stored = getStoredUser();
    if (!stored) {
      router.replace("/login");
      return;
    }

    let cancelled = false;
    fetchProfile(stored)
      .then((profile) => {
        if (!cancelled) setUser(profile);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingUser(false);
      });

    return () => {
      cancelled = true;
    };
  }, [router]);

  const handleEditProfile = () => setActiveDialog("profile");
  const handleChangePassword = () => setActiveDialog("password");

  const handleProfileSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const [firstName, ...lastNameParts] = name.split(/\s+/);
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const shippingAddress = String(form.get("shippingAddress") || "").trim();

    if (!firstName || !email || !phone || !shippingAddress) {
      toast.error(t("completeProfileFields"));
      return;
    }

    setIsSaving(true);
    try {
      await updateMockUser(user.id, {
        firstName,
        lastName: lastNameParts.join(" "),
        email,
        phone,
        address: { address: shippingAddress },
      });
      setUser((current) =>
        current ? { ...current, name, email, phone, shippingAddress } : current,
      );
      setActiveDialog(null);
      toast.success(t("profileUpdated"));
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : t("profileUpdateFailed"),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");

    if (password.length < 8) {
      toast.error(t("passwordMinimum"));
      return;
    }
    if (password !== confirmPassword) {
      toast.error(t("passwordMismatch"));
      return;
    }

    setIsSaving(true);
    try {
      await updateMockUser(user.id, { password });
      setActiveDialog(null);
      toast.success(t("passwordUpdated"));
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : t("passwordUpdateFailed"),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("ladle_cart_items");
    console.log("Sign out clicked, Removed Tokens");
    router.push("/login");
  };

  if (isLoadingUser || !user) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ProfileBreadcrumb />
        <div className="h-64 animate-pulse rounded-2xl bg-surface-container-low" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <ProfileBreadcrumb />

      {/* Page Header */}
      <ProfileHeader memberSince={user.memberSince} />

      {/* Main Content Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Info & Actions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <ProfileInfoCard user={user} />
          <ProfileActionsCard
            onEditProfile={handleEditProfile}
            onChangePassword={handleChangePassword}
            onSignOut={handleSignOut}
          />
        </div>

        {/* Right Column: Order History (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Giỏ hàng: lấy từ CartContext nên thêm sản phẩm ở đâu cũng cập nhật ngay */}
          <ProfileCartCard />
        </div>
      </div>

      {activeDialog === "profile" && (
        <ProfileDialog
          title={t("editProfile")}
          onClose={() => setActiveDialog(null)}>
          <form className="space-y-4" onSubmit={handleProfileSave}>
            <ProfileField
              label={t("fullName")}
              name="name"
              defaultValue={user.name}
            />
            <ProfileField
              label={t("emailAddress")}
              name="email"
              type="email"
              defaultValue={user.email}
            />
            <ProfileField
              label={t("phoneNumber")}
              name="phone"
              type="tel"
              defaultValue={user.phone}
            />
            <ProfileField
              label={t("shippingAddressField")}
              name="shippingAddress"
              defaultValue={user.shippingAddress}
            />
            <DialogActions isSaving={isSaving} label={t("saveProfile")} savingLabel={t("saving")} />
          </form>
        </ProfileDialog>
      )}

      {activeDialog === "password" && (
        <ProfileDialog
          title={t("changePassword")}
          onClose={() => setActiveDialog(null)}>
          <form className="space-y-4" onSubmit={handlePasswordSave}>
            <p className="text-sm text-olive-gray">
              {t("passwordDialogDescription")}
            </p>
            <ProfileField
              label={t("newPassword")}
              name="password"
              type="password"
              autoComplete="new-password"
            />
            <ProfileField
              label={t("confirmNewPassword")}
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
            />
            <DialogActions isSaving={isSaving} label={t("updatePassword")} savingLabel={t("saving")} />
          </form>
        </ProfileDialog>
      )}
    </div>
  );
};

function ProfileDialog({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const t = useTranslations("profile");

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-on-surface/35 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-dialog-title">
      <div className="w-full max-w-lg rounded-2xl bg-surface-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2
            id="profile-dialog-title"
            className="text-xl font-semibold text-on-surface">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-olive-gray hover:bg-canvas-cream"
            aria-label={t("closeDialog")}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ProfileField({
  label,
  name,
  type = "text",
  defaultValue,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  autoComplete?: string;
}) {
  const id = `profile-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-on-surface">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        required
        className="w-full rounded-xl border border-outline-variant/50 bg-canvas-cream px-3 py-2.5 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function DialogActions({
  isSaving,
  label,
  savingLabel,
}: {
  isSaving: boolean;
  label: string;
  savingLabel: string;
}) {
  return (
    <button
      type="submit"
      disabled={isSaving}
      className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary transition hover:bg-primary-container disabled:cursor-wait disabled:opacity-70">
      {isSaving ? savingLabel : label}
    </button>
  );
}
