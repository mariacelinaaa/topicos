import React from 'react'

const Button = ({ onClick, type = 'button', children, className }) => {

    const estiloPadrao = 'bg-primary text-white px-4 py-2 rounded-lg'

    return (
        <button onClick={onClick} type={type} className={`${estiloPadrao} ${className}`}>
            {children}
        </button>
    )
}

export default Button