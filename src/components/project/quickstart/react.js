import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export default ({ }) => <div class={`                     
        `}>
  <p className={`text-lg font-bold`}>
    1. Create a project
  </p>
  <CodeBlock language="bash">
    {`npx notifiles app new`}
  </CodeBlock>

  <p className={`text-lg font-bold`}>
    2. Add a cloud storage (minio)
  </p>

  <CodeBlock language="bash">
    {`npx notifiles cloud add --cloudType minio`}
  </CodeBlock>
  
  <p className={`text-lg font-bold mb-2`}>
    4. Create a template
  </p>
  <CodeBlock language="bash">
    {`npx notifiles template new`}
  </CodeBlock>
  
  
  <p className={`text-lg font-bold`}>
    5. Build and sync the project to minio
  </p>
  <CodeBlock language="bash">
    {`npx notifiles sync`}
  </CodeBlock>
</div>