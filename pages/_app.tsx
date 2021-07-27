import "../styles/global.css";
import {AppProps} from 'next/app';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Component {...pageProps} />)
  </div>
  );
}
