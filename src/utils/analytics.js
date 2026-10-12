export const trackPageView=path=>{ if(import.meta.env.DEV) return; const id=import.meta.env.VITE_GA_MEASUREMENT_ID; if(!id) return; window.gtag?.('config',id,{page_path:path}); };
