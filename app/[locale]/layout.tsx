import "@/styles/globals.css";

import { VercelAnalytics } from "@repo/analytics/vercel";
import { DesignSystemProvider } from "@repo/design-system";
import { ReactScan } from "@repo/design-system/components/ui/react-scan";
import {
  SidebarInset,
  SidebarProvider,
} from "@repo/design-system/components/ui/sidebar";
import { Toaster } from "@repo/design-system/components/ui/sonner";
import { TailwindIndicator } from "@repo/design-system/components/ui/tailwind-indicator";
import { fonts } from "@repo/design-system/lib/fonts";
import { routing } from "@repo/internationalization/src/routing";
import { EducationalOrgJsonLd } from "@repo/seo/json-ld/educational-org";
import { OrganizationJsonLd } from "@repo/seo/json-ld/organization";
import { WebsiteJsonLd } from "@repo/seo/json-ld/website";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AiSheet } from "@/components/ai/sheet";
import { AppProviders } from "@/components/providers";
import { SearchCommand } from "@/components/shared/search-command";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Header } from "@/components/sidebar/header";

export async function generateMetadata({
  params,
}: {
  params: LayoutProps<"/[locale]">["params"];
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("Metadata");

  return {
    title: {
      template: `%s - ${t("title")}`,
      default: t("title"),
    },
    description: t("description"),
    applicationName: "CS50xTurkiye",
    authors: [
      {
        name: "Muhammet Anil Yagiz",
        url: "https://github.com/anilyagiz",
      },
    ],
    creator: "Muhammet Anil Yagiz",
    publisher: "CS50xTurkiye",
    referrer: "origin-when-cross-origin",
    metadataBase: new URL("https://cs50xturkiye.com"),
    classification: t("classification"),
    generator: "Next.js",
    alternates: {
      canonical: "https://cs50xturkiye.com",
      languages: {
        tr: "https://cs50xturkiye.com/tr",
        en: "https://cs50xturkiye.com/en",
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
        { url: "/logo.svg", type: "image/svg+xml" },
        new URL("/favicon.ico", "https://cs50xturkiye.com"),
      ],
      shortcut: [
        { url: "/favicon.ico" },
        new URL("/favicon.ico", "https://cs50xturkiye.com"),
      ],
      apple: [{ url: "/logo.svg" }, new URL("/logo.svg", "https://cs50xturkiye.com")],
      other: [
        { rel: "manifest", url: "/manifest.webmanifest" },
        { rel: "apple-touch-icon", url: "/logo.svg" },
      ],
    },
    manifest: "https://cs50xturkiye.com/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "education",
    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og.png",
          alt: t("title"),
          width: 1200,
          height: 630,
        },
      ],
      creator: "@cs50xturkiye",
      site: "@cs50xturkiye",
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("title"),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://cs50xturkiye.com",
      siteName: "CS50xTurkiye",
      locale,
      type: "website",
      images: [
        {
          url: "/og.png",
          alt: t("title"),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { children, params } = props;
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className={fonts} lang={locale} suppressHydrationWarning>
      <NextIntlClientProvider>
        <head>
          <ReactScan />
          {/* Add JSON-LD structured data using the JsonLd component */}
          <EducationalOrgJsonLd />
          <OrganizationJsonLd />
          <WebsiteJsonLd locale={locale} />
        </head>
        <body>
          <AppProviders>
            <DesignSystemProvider>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <Header />
                  <SearchCommand />
                  <AiSheet />
                  <div className="relative" data-pagefind-body>
                    {children}
                  </div>
                </SidebarInset>
              </SidebarProvider>
              <Toaster />
            </DesignSystemProvider>
          </AppProviders>

          <VercelAnalytics />
          <TailwindIndicator />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
