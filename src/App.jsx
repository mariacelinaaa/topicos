import React, { useEffect, useState } from 'react';
import Button from "./componentes/button";
import Input from "./componentes/input";
import Navbar from "./componentes/navbar";
import Select from "./componentes/select";
import Tabela from './componentes/tabela';
import { atualizarProduto, buscarProduto, criarProduto, deletarProduto } from './api';

function App() {
  const [editarProduto, setEditarProduto] = useState(null)
  const [produto, setProduto] = useState(editarProduto || {
    nome: '',
    marca: '',
    categoria: '',
    preco: 0,
    estoque: 0,
  });

  const lista_marcas = [{ nome: 'Petit Jolie' }, { nome: 'Boca Rosa' }]
  const lista_categorias = [{ nome: 'Maquiagem' }, { nome: 'Vestuário' }]
  const [listaProdutos, setListaProdutos] = useState([])

  const fetchProdutos = async () => {
    const produtos = await buscarProduto();
    setListaProdutos(produtos);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editarProduto) {
      // Atualiza o produto existente
      await atualizarProduto(produto.id, produto);
    } else {
      // Cria um novo produto
      await criarProduto(produto);
    }
    setProduto({
      nome: '',
      marca: '',
      categoria: '',
      preco: 0,
      estoque: 0,
    });
    setEditarProduto(null); // Reseta o estado de edição
    fetchProdutos(); // Atualiza a lista de produtos
  };

  const handleDeletarProduto = async (produto) => {
    const res = await deletarProduto(produto.id)
    window.alert(res)
    fetchProdutos()
  }

  const handleEditarProduto = (produto) => {
    setProduto(produto);
    setEditarProduto(produto)
  }

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-screen items-center justify-center bg-white">
      <Navbar />
      <main className="flex flex-col items-center px-10 mx-auto max-w-xl gap-12">
        <form className="flex flex-col gap-4 pt-10 w-full" onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-2xl">Cadastro de produtos</h1>
          <Input id='nome' name='nome' onChange={handleChange}
            placeholder='Digite o nome do produto' label='Nome' value={produto.nome} >
          </Input>
          <div className="flex justify-between gap-4">
            <Select id='marca' name='marca' label='Marca'
              onChange={handleChange} opcoes={lista_marcas}
              value={produto.marca}></Select>
            <Select id='categoria' name='categoria' label='Categoria'
              onChange={handleChange} opcoes={lista_categorias}
              value={produto.categoria}></Select>
          </div>
          <div className="flex justify-between gap-4">
            <Input id='preco' name='preco' onChange={handleChange}
              placeholder='Preço do produto' label='Preço' value={produto.preco} type="number">
            </Input>
            <Input id='estoque' name='estoque' onChange={handleChange}
              placeholder='Estoque do produto' label='Estoque' value={produto.estoque} type="number">
            </Input>
          </div>
          <Button onClick={handleSubmit}>{editarProduto ? 'Editar produto' : 'Salvar'}</Button>
        </form>

        <Tabela produtos={listaProdutos} handleDeletarProduto={handleDeletarProduto} handleEditarProduto={handleEditarProduto} />
      </main>
    </div>
  );
}

export default App;
