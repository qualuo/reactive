import React from 'react';
import Layout from '@theme/Layout';

import './particles.css';

import Particles from '../../components/tsparticles';

export default function ReactPage() {
  return (
    <Layout>
      <div className="particles"><Particles/></div>
    </Layout>
  );
}

