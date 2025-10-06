import { useTranslations } from "next-intl";
import type { EducationalOrganization, WithContext } from "schema-dts";
import { JsonLd } from ".";

export function EducationalOrgJsonLd() {
  const t = useTranslations("Metadata");

  // Create JSON-LD with schema-dts for type safety
  const educationalOrganizationJsonLd: WithContext<EducationalOrganization> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://cs50xturkiye.com",
    name: t("title"),
    description: t("description"),
    url: "https://cs50xturkiye.com",
    logo: "https://cs50xturkiye.com/logo.svg",
    sameAs: [
      "https://twitter.com/cs50xturkiye",
      "https://www.linkedin.com/company/cs50xturkiye",
      "https://www.instagram.com/cs50xturkiye/",
    ],
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      name: "Nabil Akbarazzima Fatih",
    },
  };

  return <JsonLd jsonLd={educationalOrganizationJsonLd} />;
}
