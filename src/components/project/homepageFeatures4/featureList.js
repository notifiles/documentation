import React from 'react';

export default [
  {
    title: 'Automatic schema computation',
    Svg: require('@site/static/img/noun-snakeflow-schema-5160494.svg').default,
    description: (
      <>
        Notifiles automatically merges the user defined app schema with the features' schema.
      </>
    ),
  },
  {
    title: 'Automatic schema migration per feature',
    Svg: require('@site/static/img/noun-steps-5903715.svg').default,
    description: (
      <>
        Schemas are automatically migrated based on a desired version. No need for custom scripts or complex data management. Dedicated <i>up</i> and <i>down</i> allow for granular entry manipulation.
      </>
    ),
  },

  {
    title: 'Advanced schema staging for verification',
    Svg: require('@site/static/img/noun-release-5004142.svg').default,
    description: (
      <>
        Notifiles proposes a rolling deployment using an arbiter so that you don't mistakenly put undesired schema in production. When using this mode, both a /notifiles and a /ovidestaging endpoints are exposed with separate databases for testing.
      </>
    ),
  },

]
