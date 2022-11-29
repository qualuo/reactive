import React from 'react';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function ReactPage() {
  return (
    <Layout>

    <div className={styles.background}>

      <iframe className={styles.iframe} src="https://www.youtube.com/embed/9MpO8lw_Rj4" title="Coldplay - Viva La Vida" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    
    </div>
    </Layout>
  );
}