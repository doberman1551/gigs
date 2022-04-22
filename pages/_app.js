import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import {QueryClientProvider, QueryClient } from 'react-query'
import Footer from '../components/Footer';

const queryClient=new QueryClient
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
  <>
  <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  <Footer/>
  </QueryClientProvider>
  </>
  )}


export default MyApp
