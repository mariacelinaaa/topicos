import React from "react";

const Input = ({ id, label, name, value = '', onChange, type = 'text', placeholder, ehObrigatorio = true }) => {

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className='font-bold' htmlFor={id}>{label}</label>
            <input className='p-2 border outline-primary rounded-lg' required={ehObrigatorio}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input