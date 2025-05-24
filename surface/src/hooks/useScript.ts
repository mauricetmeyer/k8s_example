import { useEffect, useState } from 'react';

export const useScript = (src: string) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
  };

  useEffect(() => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (script === null)
    {
      script = document.createElement('script');
      script.async = true;
      script.src   = src;

      script.onload  = handleLoad;
      script.onerror = handleError;

      document.body.appendChild(script);

      return () => script?.remove();
    }
  }, [src]);

  return loading;
}