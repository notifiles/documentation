import React from "react"

export default (props) => {
    const { size, isDarkTheme } = props
    const Svg = require('@site/static/img/icon.svg').default
    return <Svg
        fill={`${isDarkTheme ? 'white' : 'black'}`
        }
        className={`          
    w-[260px]
    h-[200px]`}
        role="img" />
}