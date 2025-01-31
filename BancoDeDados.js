class BancoDeDados {
  constructor() {
    // Inicializa o objeto de tabelas (cada chave será uma tabela com os dados correspondentes)
    this.tabelas = {};
  }

  // Método para criar ou substituir uma tabela (entidade)
  CriaEntidade(nomeTabela, dados) {
    if (!Array.isArray(dados)) {
      throw new Error(`Os dados para '${nomeTabela}' devem ser um array.`);
    }

    if (!this.tabelas[nomeTabela]) {
      this.tabelas[nomeTabela] = []; // Inicializa como array
    }
    
    this.tabelas[nomeTabela] = this.tabelas[nomeTabela].concat(dados); // Adiciona os novos registros
    return dados;
  }

  // Método para criar um relacionamento entre master e detail
  CriaRelacionamento(master, detail, dados) {
    if (!Array.isArray(dados) || dados.length === 0) {
      throw new Error(`Os dados para a entidade '${detail}' estão vazios ou mal formatados.`);
    }

    if (!this.tabelas[master]) {
      throw new Error(`A entidade master '${master}' não existe.`);
    }

    // Garante que a entidade master é um array
    const masterEntidade = this.tabelas[master];
    const masterIds = masterEntidade.map(item => item.id);

    dados.forEach(item => {
      if (!item.masterId) {
        throw new Error(`Cada item de '${detail}' deve ter um 'masterId'.`);
      }

      if (masterIds.includes(item.masterId)) {
        if (!this.tabelas[detail]) this.tabelas[detail] = [];
        this.tabelas[detail].push(item);
      }
    });

    return dados;
  }

  // Método para buscar todos os dados de uma tabela
  BuscarEntidade(nomeTabela) {
    return this.tabelas[nomeTabela] || [];
  }

  // Método para buscar um dado específico por ID
  BuscarPorId(nomeTabela, id) {
    const tabela = this.tabelas[nomeTabela] || [];
    return tabela.find(item => item.id === id);
  }

  // Método para buscar dados com base em um filtro (exemplo simples de filtro)
  BuscarComFiltro(nomeTabela, filtro) {
    const tabela = this.tabelas[nomeTabela] || [];
    return tabela.filter(item => {
      return Object.keys(filtro).every(key => item[key] === filtro[key]);
    });
  }
  //interpola os grupos
  GerarItensDisparo(disparos, grupos, pecas) {
    let itensDisparo = [];
    let id = 1; // ID autoincrementável (ajuste conforme necessário)
  
    disparos.forEach(disparo => {
      grupos.forEach(grupo => {
        pecas.forEach(peca => {
          itensDisparo.push({
            //id: id++,
            id_disparo: disparo.id,
            id_grupo: grupo.id,
            id_peca_publicitaria: peca.id
          });
        });
      });
    });
  
    return itensDisparo;
  }

}


module.exports = BancoDeDados;

/* Exemplo de uso do Banco de Dados */
/*
async function executar() {
  const db = new BancoDeDados();

  // Criando as entidades principais (master)
  const pecasCriadas = [
    { id: 1, nome_criativo: 'Abajur' },
    { id: 2, nome_criativo: 'Ventilador' }
  ];

  const campanhasCriadas = [
    { id: 1, nome: 'Campanha de Verão' },
    { id: 2, nome: 'Campanha de Inverno' }
  ];

  // Criação de tabelas (entidades master)
  db.CriaEntidade('pecas', pecasCriadas);
  db.CriaEntidade('campanhas', campanhasCriadas);

  // Criando os itens de peças (entidade detail)
  const itensCriados = [
    { id: 101, descricao: "Peça 1", masterId: 1 },
    { id: 102, descricao: "Peça 2", masterId: 1 },
    { id: 103, descricao: "Peça 3", masterId: 2 },
    { id: 104, descricao: "Peça 4", masterId: 2 }
  ];

  const itensCampanhaCriados = [
    { id: 201, descricao: "Item 1 da Campanha", masterId: 1 },
    { id: 202, descricao: "Item 2 da Campanha", masterId: 1 },
    { id: 203, descricao: "Item 3 da Campanha", masterId: 2 }
  ];

  // Criação dos itens (entidades detail)
  db.CriaRelacionamento('pecas', 'itensPecas', itensCriados);
  db.CriaRelacionamento('campanhas', 'itensCampanha', itensCampanhaCriados);

  // Exemplo de busca
  console.log('📌 Busca por todas as peças:', db.BuscarEntidade('pecas'));
  console.log('📌 Busca por todas as campanhas:', db.BuscarEntidade('campanhas'));

  // Exemplo de busca por ID
  console.log('🔍 Busca por ID de peça 1:', db.BuscarPorId('pecas', 1));

  // Exemplo de busca com filtro
  console.log('🔎 Busca de itens de campanha relacionados à Campanha 1:', db.BuscarComFiltro('itensCampanha', { masterId: 1 }));
}

executar();
*/
