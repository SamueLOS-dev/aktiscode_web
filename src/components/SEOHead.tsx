import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  serviceSchema?: any;
  breadcrumbs?: Array<{
    name: string;
    item: string;
  }>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Vývoj softvéru na mieru | Softvérové riešenia pre firmy – AktisCode",
  description = "AktisCode – vývoj softvéru na mieru. Softvérové riešenia pre firmy: weby, aplikácie a AI automatizácie. Požiadajte o demo zdarma už dnes.",
  keywords = "vývoj softvéru na mieru, softvérové riešenia pre firmy, tvorba webov a aplikácií, ai automatizácie",
  canonical = "https://www.aktiscode.sk/",
  ogImage = "https://www.aktiscode.sk/og-image.webp",
  serviceSchema,
  breadcrumbs
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AktisCode",
    "url": "https://www.aktiscode.sk",
    "logo": "https://www.aktiscode.sk/logo.png",
    "description": "Profesionálna programátorská firma špecializujúca sa na vývoj softvéru na mieru, web development a AI riešenia",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Farská 1342/50",
      "addressLocality": "Nitra",
      "postalCode": "949 01",
      "addressCountry": "SK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+421-948-480-654",
      "email": "contact@aktiscode.com",
      "contactType": "customer service",
      "availableLanguage": ["Slovak", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/aktiscode"
    ],
    "areaServed": "SK",
    "serviceType": [
      "Vývoj softvéru na mieru",
      "Web development",
      "AI automatizácie",
      "Mobilné aplikácie",
      "E-shop riešenia"
    ]
  };

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  } : {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domov",
        "item": "https://www.aktiscode.sk/"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AktisCode",
    "url": "https://www.aktiscode.sk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aktiscode.sk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AktisCode" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Language */}
      <html lang="sk" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Font preload */}
      <link 
        rel="preload" 
        as="font" 
        type="font/woff2" 
        href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Service Schema (if provided) */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            ...serviceSchema
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;