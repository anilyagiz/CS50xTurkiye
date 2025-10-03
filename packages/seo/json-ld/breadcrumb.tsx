import { type Locale, useTranslations } from "next-intl";
import type { BreadcrumbList, WithContext } from "schema-dts";
import { JsonLd } from ".";

type Props = {
  locale: Locale;
  breadcrumbItems: BreadcrumbList["itemListElement"];
  name?: string;
  description?: string;
};

export function BreadcrumbJsonLd({
  locale,
  breadcrumbItems,
  name,
  description,
}: Props) {
  const t = useTranslations("Metadata");

  const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://cs50xturkiye.com/${locale}#breadcrumb`,
    url: `https://cs50xturkiye.com/${locale}`,
    name: name ?? t("title"),
    description: description ?? t("description"),
    potentialAction: [
      {
        "@type": "SearchAction",
        "@id": `https://cs50xturkiye.com/${locale}/search`,
        target: `https://cs50xturkiye.com/${locale}/search?q={search_term_string}`,
        query: "search_term_string",
      },
    ],
    itemListElement: breadcrumbItems,
  };

  return <JsonLd jsonLd={breadcrumbJsonLd} />;
}
