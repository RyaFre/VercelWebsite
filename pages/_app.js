// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css';

// Global styles are already imported in Layout.js
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
