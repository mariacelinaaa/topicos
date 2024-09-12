import React from 'react';

const Select = ({ id, name, value, onChange, label, opcoes }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className='font-bold'>{label}</label>
            <select className="border rounded-lg p-2" id={id} name={name} value={value} onChange={onChange}>
                <option value="">Selecione</option>
                {opcoes.map((opcao => (
                    <option key={opcao.nome} value={opcao.nome}>{opcao.nome}</option>
                )))
                }
            </select>
        </div>
    );
};

export default Select;
