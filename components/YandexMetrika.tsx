"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const COUNTER_ID = 113551177;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

function RoutePageViews() {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current === null) {
      previousPath.current = pathname;
      return;
    }

    if (previousPath.current === pathname) return;

    window.ym?.(COUNTER_ID, "hit", `${window.location.origin}${pathname}`);
    previousPath.current = pathname;
  }, [pathname]);

  return null;
}

export function YandexMetrika() {
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
        })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}','ym');
        ym(${COUNTER_ID},'init',{
          ssr:true,
          clickmap:false,
          trackLinks:false,
          accurateTrackBounce:false,
          url:location.origin+location.pathname
        });`}
      </Script>
      <RoutePageViews />
    </>
  );
}
