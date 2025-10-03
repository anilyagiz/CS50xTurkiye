import { useTranslations } from "next-intl";
import type { Organization, WithContext } from "schema-dts";
import { JsonLd } from ".";

export function OrganizationJsonLd() {
  const t = useTranslations("Metadata");

  const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("title"),
    logo: "https://cs50xturkiye.com/logo.svg",
    url: "https://cs50xturkiye.com",
    sameAs: [
      "https://twitter.com/cs50xturkiye",
      "https://www.linkedin.com/company/cs50xturkiye",
      "https://www.instagram.com/cs50xturkiye/",
    ],
  };

  return <JsonLd jsonLd={organizationJsonLd} />;
}
