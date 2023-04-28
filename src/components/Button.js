import React from 'react';


const Button = ({ children, noBackground, ...props }) => {
    const backgroundClass = noBackground ? 'btn-no-background' : 'btn'
    return (
        <button className={backgroundClass} {...props}>
            {children}
        </button>
    )
}
export default Button