import React from 'react'

const Tabela = ({ produtos, handleDeletarProduto, handleEditarProduto }) => {
    return (
        <div className="flex flex-col w-full gap-4 relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className='text-center font-bold text-2xl'>Listagem de produtos</h2>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Produto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qtd.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Preço
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ação
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.length > 0 ?
                        produtos.map(produto => (
                            <tr className="bg-white border-b hover:bg-gray-50" key={produto.id}>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {produto.nome}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    {produto.estoque}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900">
                                    R${produto.preco}
                                </td>
                                <td className="flex flex-col items-start gap-2 px-6 py-4">
                                    <button onClick={() => handleEditarProduto(produto)}
                                        className="font-medium text-green-600 hover:underline">Editar</button>
                                    <button onClick={() => handleDeletarProduto(produto)}
                                        className="font-medium text-red-600 hover:underline">Excluir</button>
                                </td>
                            </tr>
                        )) :
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-semibold text-gray-900">
                                Sem registros.
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabela