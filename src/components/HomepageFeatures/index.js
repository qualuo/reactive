import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'For The People',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, nulla mollis mattis lacinia, erat metus fringilla felis, ut consequat nulla tortor ut felis.
      </>
    ),
  },
  {
    title: 'Excellent Service',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, nulla mollis mattis lacinia, erat metus fringilla felis, ut consequat nulla tortor ut felis.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dapibus, nulla mollis mattis lacinia, erat metus fringilla felis, ut consequat nulla tortor ut felis.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding---md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
