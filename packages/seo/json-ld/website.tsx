import { type Locale, useTranslations } from "next-intl";
import type { WebSite, WithContext } from "schema-dts";
import { JsonLd } from ".";

type Props = {
  locale: Locale;
};

export function WebsiteJsonLd({ locale }: Props) {
  const t = useTranslations("Metadata");

  const websiteJsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cs50xturkiye.com/#website",
    url: "https://cs50xturkiye.com",
    name: t("title"),
    description: t("description"),
    publisher: {
      "@type": "Organization",
      name: "CS50XTurkiye",
      logo: "https://cs50xturkiye.com/logo.svg",
      url: "https://cs50xturkiye.com",
    },
    maintainer: {
      "@type": "Organization",
      name: "CS50XTurkiye",
      logo: "https://cs50xturkiye.com/logo.svg",
      url: "https://cs50xturkiye.com",
    },
    inLanguage: locale,
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://cs50xturkiye.com/search?q={search_term_string}",
        },
      },
    ],
  };

  return <JsonLd jsonLd={websiteJsonLd} />;
}
