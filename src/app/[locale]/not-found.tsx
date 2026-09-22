"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";

export default function NotFoundPage() {
  const t = useTranslations("notFound");
  const params = useParams();
  const raw = typeof params?.locale === "string" ? params.locale : "";
  // Resolve the locale from the current route so the CTA stays inside the
  // language the reader is in. Falls back to the default locale.
  const locale = routing.locales.some((item) => item === raw) ? raw : routing.defaultLocale;

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t("title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("description")}</p>
        <Button asChild className="mt-6"><Link href={`/${locale}/guide`}>{t("cta")}</Link></Button>
      </div>
    </main>
  );
}
