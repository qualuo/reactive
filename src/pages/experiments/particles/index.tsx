import React from 'react';
import Layout from '@theme/Layout';

import styles from './particles.module.css';

import Particles from '../../../components/tsparticles';

export default function ReactPage() {
  return (
    <Layout>
      <div className={styles.particles}><Particles/></div>
    </Layout>
  );
}

