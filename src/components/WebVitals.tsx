import { useEffect } from 'react';
import { getCLS } from 'web-vitals/dist/getCLS';
import { getFID } from 'web-vitals/dist/getFID';
import { getFCP } from 'web-vitals/dist/getFCP';
import { getLCP } from 'web-vitals/dist/getLCP';
import { getTTFB } from 'web-vitals/dist/getTTFB';
import type { Metric } from 'web-vitals';

const WebVitals = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: Metric) => {
      // In production, send to your analytics endpoint
      console.log('Web Vital:', metric);
      
      // Example: Send to Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getFCP(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }, []);

  return null;
};

export default WebVitals;