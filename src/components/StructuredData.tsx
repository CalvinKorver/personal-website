export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Calvin Korver",
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "CLEAR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "url": "https://calvinkorver.com",
    "sameAs": [
      "https://github.com/calvinkorver",
      "https://linkedin.com/in/calvinkorver"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    },
    "knowsAbout": [
      "Software Engineering",
      "Payments Technology", 
      "Web Development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js"
    ],
    "description": "Senior Software Engineer building modern payments platform at CLEAR. Living and working in NYC."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}