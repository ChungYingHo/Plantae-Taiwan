import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import logo from '../../static/img/logo-main.png'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img src={logo} className={styles.logo} />
        <div style={{
          fontSize: '1.5rem',
          '@media (maxWidth: 960px)': {
            fontSize: '0.5rem'
          }
        }}>
          {siteConfig.tagline}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      description="獻給您，來自大自然的贈禮">
      <HomepageHeader />
    </Layout>
  );
}