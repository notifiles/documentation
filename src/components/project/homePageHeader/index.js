import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import LogoStatic from '../logo/static/index.svg'

export default () => {
  const { siteConfig } = useDocusaurusContext()
  return  <div class={`
        mt-4
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
          <h1 className='text-8xl font-bold text-[#00ABAC] dark:text-gray-400'>            
            {`${siteConfig.title}`}
            <br /> 
            <i className='text-3xl 
            leading-tight 
            text-gray-600 
            dark:text-gray-400'>
              
            </i>
          </h1>
          <p className={`text-lg `}>
            Open source, <b>local-first</b>, <b>git-based</b> message templating made right.
            An open source library for writing platform agnostic <b>email</b>, <b>text message</b> and <b>push notifications</b> templates.
            Every template is consolidated, <b>self contained</b> and can be published to 
            numerous online platforms including <b>Minio</b> and <b>Bunny.net</b>.
            Take control of your templates without concessions.            
            <br />
            ✍️
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