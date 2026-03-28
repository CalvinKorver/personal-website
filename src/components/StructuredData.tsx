export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Calvin Korver",
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Roblox"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
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
      "Trust & Safety",
      "Web Development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js"
    ],
    "description": "Senior Software Engineer in Trust & Safety at Roblox. Living and working in San Francisco."
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