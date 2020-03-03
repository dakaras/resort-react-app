import React from 'react'
//props.children for layout
export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}
Hero.defaultProps = {
    hero: 'defaultHero'
}