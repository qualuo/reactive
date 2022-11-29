import React from 'react';
import Layout from '@theme/Layout';

import styles from './team.module.css';

export default function ReactPage() {
  return (
    <Layout>
      <div className={styles.background}>
        <iframe className={styles.iframe} src="https://qualuo.github.io/"></iframe>
      </div>
    </Layout>
  );
}