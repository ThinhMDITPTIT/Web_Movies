import { useEffect, useState } from 'react';

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia('(min-width: 992px)').matches
  );

  useEffect(() => {
    const handler = (e) => {
      console.log(e.matches);
      setIsDesktop(e.matches);
    };
    window.matchMedia('(min-width: 992px)').addEventListener('change', handler);
  }, []);

  return isDesktop;
}
