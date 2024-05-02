import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import LogoStatic from '../logo/static/index.svg'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return  <div class={`
        md:mt-16
        md:mb-2
        px-6
        md:px-6      
        py-4`}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        <LogoStatic size={'s'} />
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-md
        `}>
          <h1 className='text-6xl'>
            <i className='text-gray-600 dark:text-gray-400'></i>  {`${siteConfig.title}`}
            <br /> <i className='text-5xl text-gray-600 dark:text-gray-400'>Local-first blog management</i>
          </h1>
          <p className={`text-lg `}>
            An open source library for writing platform agnostic blog posts.
            Every article is self contained and can be published to numerous online platforms like Medium or Dev.To.
            
            <br />
            🍨
          </p>
          <div className={`
            grid 
            grid-cols-2 
            space-x-6
          `}>
            <Link
              className={`
                button 
                button--primary 
                button--lg`}
              to="/docs/quickStart">
              Quick start 🚀
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/concepts/philosophy">
              Guides
            </Link>
          </div>
        </div>
      </div>
    
  </div>
}