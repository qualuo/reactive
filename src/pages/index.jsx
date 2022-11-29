import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './home.module.css';

import Particles from '../components/tsparticles';
import particlesConfig from '../components/particles.json';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            🏗️👷 UNDER CONSTRUCTION 🚧👷‍♀️
          </Link>
        </div>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout title={`Digital Agency`} description="Pro">
        <div onClick={randomizeColors} className={styles.homecontainer}>
          <div className={styles.particles}> 
            <Particles options={particlesConfig}></Particles>
          </div>
          
          <div className={clsx(styles.home, styles.unselectable)}>
            <h1 className={styles.homeh1}>{siteConfig.title}</h1>
            <p className={styles.homeh2}>{siteConfig.tagline}</p>
            <main>
            </main>
          </div>
        </div>
      </Layout>
  );
}

function randomizeColors() {
  let random = Math.floor(Math.random() * 255);
  // TODO: randomize the color of the particles
}