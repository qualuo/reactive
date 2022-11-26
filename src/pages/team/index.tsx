import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function ReactPage() {
  return (
    <Layout>
      <iframe className={styles.iframe} src="https://qualuo.github.io/"></iframe>
    </Layout>
  );
}