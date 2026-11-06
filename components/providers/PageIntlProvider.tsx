import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

interface PageIntlProviderProps {
  messages: Record<string, Record<string, unknown>>;
  children: React.ReactNode;
}

export async function PageIntlProvider({
  messages,
  children,
}: PageIntlProviderProps) {
  const locale = await getLocale();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
