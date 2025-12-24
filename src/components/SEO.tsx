import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    jsonLd?: Record<string, any>[];
}

export default function SEO({
    title,
    description,
    keywords = "주휴수당, 주휴수당 계산기, 알바비 계산기, 3.3% 계산, 세금 환급, 급여 계산기",
    image = "/og-image.png",
    url = "https://pay-detect.web.app",
    type = "website",
    jsonLd
}: SEOProps) {
    const fullTitle = `${title} | 주휴탐정`;
    const canonicalUrl = url.split('?')[0]; // Remove query params for canonical

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}

            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
}
