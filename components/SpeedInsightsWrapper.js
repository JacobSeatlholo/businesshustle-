import { useRouter } from 'next/router';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function SpeedInsightsWrapper() {
  const router = useRouter();
  
  return <SpeedInsights route={router.pathname} />;
}
