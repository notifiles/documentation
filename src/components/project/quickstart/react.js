import React from 'react'
import BashTabs from '@site/src/components/generic/bashTabs'
import CodeBlock from '@theme/CodeBlock'
export default ({ }) => <div class={`                     
        `}>
  <p className={`text-lg font-bold`}>
    1. Install notifiles and a component library
  </p>
  <BashTabs npm={`npm install -g notifiles`} />

  <p className={`text-lg font-bold`}>
    2. Create a project
  </p>
  <CodeBlock language="bash">
    {`notifiles new`}
  </CodeBlock>

  <p className={`text-lg font-bold`}>
    3. Add a platform (optional)
  </p>

  <CodeBlock language="bash">
    {`notifiles platform add`}
  </CodeBlock>
  
  <p className={`text-lg font-bold mb-2`}>
    4. Create an article
  </p>
  The post is written in markdown, you can add images and tables.
  <CodeBlock language="bash">
    {`notifiles post new`}
  </CodeBlock>
  
  
  <p className={`text-lg font-bold`}>
    5. Sync the project
  </p>
  <CodeBlock language="bash">
    {`notifiles sync`}
  </CodeBlock>
 
</div>