import React from 'react'
import ReactView from './react'


export default ({ hideTitle = false }) => <div class={`                     
        flex         
        justify-center
        `}>
    <div class={`                        
          md:max-w-2xl
          max-w-sm
          px-2            
        `}>
      <h2 className='text-4xl'>{`Quick start 🚀`}</h2>
      <p className={`text-lg italic`}>
            Let's build a notifiles project.
      </p>
      <ReactView />
    </div>
  </div>