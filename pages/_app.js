import '../styles.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  console.log(metric);
  // switch (metric.name) {
  //   case 'FCP':
  //     break;
  //   case 'LCP':
  //     break;
  //   case 'CLS':
  //     break;
  //   case 'FID':
  //     break;
  //   case 'TTFB':
  //     break;
  //   case 'Next.js-hydration':
  //     break;
  //   case 'Next.js-route-change-to-render':
  //     break;
  //   case 'Next.js-render':
  //     break;
  //   default:
  //     break;
  // }
}
