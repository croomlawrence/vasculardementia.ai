import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function MarketingPixels() {
  const googleId = GA_ID || GOOGLE_ADS_ID;

  return (
    <>
      {googleId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`} strategy="afterInteractive" />
          <Script id="vascumind-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}', { send_page_view: true });` : ""}
              ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {GTM_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {META_PIXEL_ID && (
        <>
          <Script id="vascumind-meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" />
          </noscript>
        </>
      )}

      {LINKEDIN_PARTNER_ID && (
        <>
          <Script id="vascumind-linkedin" strategy="afterInteractive">
            {`
              _linkedin_partner_id = '${LINKEDIN_PARTNER_ID}';
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]}
              var s = document.getElementsByTagName('script')[0]; var b = document.createElement('script');
              b.type = 'text/javascript'; b.async = true; b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
        </>
      )}
    </>
  );
}
