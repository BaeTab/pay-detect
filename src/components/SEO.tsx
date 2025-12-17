import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description,
    keywords = "주휴수당, 주휴수당 계산기, 알바비 계산기, 3.3% 계산, 세금 환급, 급여 계산기",
    image = "/og-image.png", // We'll need a placeholder or real OG image
    url = "https://pay-detect.web.app"
}: SEOProps) {
    const fullTitle = `${title} | 주휴탐정`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
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

            {/* Naver / Search Engine Verification Placeholders */}
            {/* <meta name="naver-site-verification" content="YOUR_NAVER_KEY" /> */}
            {/* <meta name="google-site-verification" content="YOUR_GOOGLE_KEY" /> */}

            <link rel="canonical" href={url} />
        </Helmet>
    );
}
