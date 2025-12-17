import { useEffect, useRef } from 'react';

interface AdBannerProps {
    type?: 'google' | 'kakao';
    className?: string;
}

export default function AdBanner({ type = 'kakao', className = '' }: AdBannerProps) {
    const kakaoAdRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (type === 'google') {
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdSense error", e);
            }
        } else if (type === 'kakao') {
            // Kakao ad script is loaded from index.html
            // The ad will automatically initialize when the ins element is rendered
        }
    }, [type]);

    if (type === 'google') {
        return (
            <div className={`w-full my-6 flex justify-center bg-slate-100 rounded-lg overflow-hidden min-h-[100px] ${className}`}>
                <ins className="adsbygoogle"
                    style={{ display: 'block', width: '100%' }}
                    data-ad-client="ca-pub-7450925051429508"
                    data-ad-slot="XXXXXXXXXX"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
            </div>
        );
    }

    // Kakao Ad
    return (
        <div ref={kakaoAdRef} className={`w-full my-6 flex justify-center ${className}`}>
            <ins className="kakao_ad_area"
                style={{ display: 'none' }}
                data-ad-unit="DAN-ZGitMcM7nvJEnGDG"
                data-ad-width="300"
                data-ad-height="250">
            </ins>
        </div>
    );
}
