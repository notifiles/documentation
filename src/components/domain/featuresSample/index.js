import React from "react"
import FeatureWidget from '@site/src/components/domain/widgets/feature.js'
import EngineWidget from '@site/src/components/domain/widgets/engine.js'

export default props => {
  const { } = props

  return <div className={`             
        `}>
    <div class={`
        
        px-6
        md:px-6      
        pt-6
        `}>
      <div class={`
          text-right
          flex
          justify-center
          align-middle
          h-full
        `}>
        {/* <LogoAnimated /> */}
        {/* <Svg
          fill={`${isDarkTheme ? 'white' : 'black'}`}
          className={`          
          w-[180px]
          h-[180px]`}
          role="img" /> */}
      </div>
      <div class={`                
          flex
          justify-center                 
        `}>
        <div class={`
          justify-center
          text-center
          pt-8     
          max-w-4xl
        `}>
          <h2 className='text-4xl'>
            {`Community features 🐝 🍯`} <i></i>
          </h2>
          <p className={`text-lg `}>
            Notifiles was built from the ground up to use features in all ways possible. The <b>Notifiles app</b> itself is a feature (app feature). The Notifiles server uses core features like <i>manualable</i>, <i>disposableorphans</i> and more.
          </p>
          <div className="
            mb-6 
            flex
            space-x-5 
            px-4    
            justify-center
          ">
            <FeatureWidget id={'@notifiles-community/framable'} mode="minimal" />
            <FeatureWidget id={'@notifiles-community/framable'} mode="minimal" />
            <EngineWidget id={'@notifiles/parse-server-engine'} mode="minimal" />

          </div>
        </div>
      </div>
    </div>
  </div>
}