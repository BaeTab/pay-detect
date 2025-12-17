import { useEffect } from 'react';

export default function AdBanner() {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    return (
        <div className="w-full my-6 flex justify-center bg-slate-100 rounded-lg overflow-hidden min-h-[100px]">
            {/* Replace with your actual AdSense client ID and slot */}
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
            <div className="text-xs text-slate-400 p-4 flex items-center justify-center">
                광고 영역 (AdSense)
            </div>
        </div>
    );
}
