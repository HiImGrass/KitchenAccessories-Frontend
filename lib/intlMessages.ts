import { getMessages } from "next-intl/server";

const sharedNamespaces = ["common", "navigation", "footer"] as const;
const cartContextKeys = [
  "itemAdded",
  "maximumStock",
  "itemRemoved",
  "giftWrapAdded",
  "giftWrapRemoved",
  "invalidVoucher",
  "promoAppliedToast",
  "invalidOrExpiredVoucher",
  "voucherRemoved",
  "secureCheckoutStarted",
  "checkoutTotal",
  "item",
  "items",
] as const;

type Messages = Record<string, Record<string, unknown>>;

export async function getScopedMessages(
  namespaces: string | string[] = [],
): Promise<Messages> {
  const messages = (await getMessages()) as Messages;
  const scoped: Messages = {};

  for (const key of sharedNamespaces) {
    scoped[key] = messages[key];
  }

  scoped.cart = Object.fromEntries(
    cartContextKeys
      .filter((key) => messages.cart?.[key] !== undefined)
      .map((key) => [key, messages.cart[key]]),
  );

  const requestedNamespaces =
    typeof namespaces === "string" ? [namespaces] : namespaces;

  for (const namespace of requestedNamespaces) {
    if (messages[namespace]) {
      scoped[namespace] = messages[namespace];
    }
  }

  return scoped;
}
