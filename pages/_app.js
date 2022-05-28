import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import {QueryClientProvider, QueryClient } from 'react-query'
import Footer from '../components/Footer';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import Navbar from '../components/Navbar';

const queryClient=new QueryClient
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
  <>
  <DefaultSeo {...SEO}/>
  <QueryClientProvider client={queryClient}>
  <Navbar/>
  <Component {...pageProps} />
 
  <Footer/>
  </QueryClientProvider>
  </>
  )}


export default MyApp
