import { AppProps } from 'next/app';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);

  supabase.auth.onAuthStateChange((_, session) => {
    if (session?.user && (pathname === '/sign-in' || pathname === '/sign-up')) {
      push('/');
    } else if (!session?.user && pathname !== '/sign-up') {
      push('/sign-in');
    }
  });

  useEffect(() => {
    (async () => {
      const user = supabase.auth.user();
      if (user && (pathname === '/sign-in' || pathname === '/sign-up')) {
        await push('/');
      } else if (!user && pathname !== '/sign-up') {
        await push('/sign-in');
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <button onClick={() => supabase.auth.signOut()}>ログアウト</button>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
