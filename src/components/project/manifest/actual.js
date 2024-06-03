import React from 'react'
// import LogoAnimated from '../logo/animated'
import Link from '@docusaurus/Link'

export default ({
  noLink = false,
  align = 'center' }) => <div class={`
flex
justify-center
`}><div class={`
          ${align === 'center' ? 'justify-center text-center' : ''}          
          pt-8     
          max-w-4xl
        `}>
      <h2 className='text-4xl'>
        {`What do we want? `} <i></i>
      </h2>
      <p className='text-lg'>
        Ok, what would the perfect CLI generator look like ?
      </p>
      <ul className={`
            ${align === 'center' ? 'list-none' : 'list-decimal'}          
            text-lg 
            space-y-2
            `}>
        <li className=''>Write whenever I want</li>
        <li className=''>Publish wherever I wish</li>
        <li className=''>Keep my stories</li>        
      </ul>
      {!noLink && <p>
        <Link
          className="button button--secondary button--md"
          to="/docs/concepts/philosophy">
          Read more about Notifiles philosophy
        </Link>
      </p>}
    </div>
  </div>
