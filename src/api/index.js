const criarProduto = async (produto) => {
    try {
        const response = await fetch('http://localhost:3001/api/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Produto criado com sucesso:', data);
        } else {
            console.error('Erro ao criar produto:', data.message);
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação de criação:', error);
    }
};

const atualizarProduto = async (id, produtoAtualizado) => {
    try {
        const response = await fetch(`http://localhost:3001/api/produtos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produtoAtualizado)
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Produto atualizado com sucesso:', data);
        } else {
            console.error('Erro ao atualizar produto:', data.message);
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação de atualização:', error);
    }
};

const buscarProduto = async () => {
    try {
        const response = await fetch(`http://localhost:3001/api/produtos/`);
        const data = await response.json();

        if (response.ok) {
            console.log('Produto encontrado:', data);
            return data;
        } else {
            console.error('Produto não encontrado:', data.message);
        }
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
    }
};

const deletarProduto = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/api/produtos/${id}`, {
            method: 'DELETE'
        });

        const data = await response.json();
        if (response.ok) {
            return(`Produto deletado com sucesso`)
        } else {
            return(`Erro ao deletar produto`);
        }
    } catch (error) {
        console.error('Erro ao enviar a solicitação de deleção:', error);
    }
};

export { criarProduto, atualizarProduto, buscarProduto, deletarProduto }