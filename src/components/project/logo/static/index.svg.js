import React from "react"

export default (props) => {
    const { size, isDarkTheme } = props
    const Svg = require('@site/static/img/icon.svg').default
    return <Svg
        fill={`${isDarkTheme ? 'white' : 'black'}`
        }
        className={`          
    w-[1828px]
    h-[140px]`}
        role="img" />
}