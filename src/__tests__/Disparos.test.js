
const { sequelize, Grupo, ItemGrupo, PecaPublicitaria, ItemPecaPublicitaria, Disparo, ItemDisparo,ItemItemDisparo} = require('../models');
//const { sequelize, Disparo} = require('../models');
const BancoDeDados = require('../../BancoDeDados'); // Ajuste conforme o caminho

const db = new BancoDeDados();

describe.only('Models Associations', () => {
  
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Reseta o banco para cada execução
  });

  // Data e hora: 28/11/2024 às 10:22
  const dataHora = new Date('2024-11-28T10:22:00Z');
  it('Deve Criar o Disparo', async () => {

    // Criação do disparo
    const disparo = await Disparo.create({
      descricao: 'Primeiro Disparo ',
      data: dataHora,
      caixa_saida: '{"saida":"+55991853966"}',
      status: 'pause'
    });
    await db.CriaEntidade('Disparo', [disparo.dataValues]);
    expect(disparo).not.toBeNull();
  });



  // Criação do grupo e Itens do grupo
  it('Cria o Grupo e os Itens', async () => {
    // Criação de um grupo
    const grupo = await Grupo.create({
      descricao: 'Grupo de Teste',
      codigo: 'GRP001',
      imagem: 'grupo-imagem.jpg',
      origem_lista: '{"origem":"Labels"}'
    });
    await db.CriaEntidade('grupo', [grupo.dataValues]);
   
    // Criação de 4 itens associados ao grupo
    const itens = await ItemGrupo.bulkCreate([
      { celular: '+5511999999991', nome: 'João', imagem: 'joao.jpg', id_grupo: grupo.id },
      { celular: '+5511999999992', nome: 'Maria', imagem: 'maria.jpg', id_grupo: grupo.id },
      { celular: '+5511999999993', nome: 'Pedro', imagem: 'pedro.jpg', id_grupo: grupo.id },
      { celular: '+5511999999994', nome: 'Ana', imagem: 'ana.jpg', id_grupo: grupo.id },
    ]);

    
    await db.CriaRelacionamento(
      'grupo',
      'itensgrupo',
      itens.map(item => ({
        ...item.dataValues,
        masterId: item.dataValues.id_grupo // Adiciona 'masterId' baseado em 'id_grupo'
      }))
    );

    expect(grupo).not.toBeNull();
    expect(itens.length).toBe(4);
  });
  


  // Cria a Peca Publicitaria e os Itens da Peca Publicitaria
  it('Cria a Peca Publicitaria e os Itens', async () => {
    const dataHora = new Date('2024-11-28T10:22:00Z');
    const pecas = await PecaPublicitaria.bulkCreate([
      { nome_criativo: 'Peca 1', data_hora:dataHora, cod_emp: 1 }
    ]);

    await db.CriaEntidade('pecas', pecas.map(item => item.dataValues));    

    const mensagens = await ItemPecaPublicitaria.bulkCreate([
      { mensagem: "{ 'texto': 'Mensagem 1' }", ordem: 1, id_peca_publicitaria: pecas[0].id, codEmp: 1 },   
    ]);

    db.CriaRelacionamento(
      'pecas',
      'ItemPecaPublicitaria',
      mensagens.map(item => ({
        ...item.dataValues,
        masterId: item.dataValues.id_peca_publicitaria // Adiciona 'masterId' baseado em 'id_grupo'
      }))
    );

/*
    console.log('------------------------');
    console.log(db.BuscarEntidade('ItemPecaPublicitaria'));
    console.log('------------------------');    
*/

    expect(pecas.length).toBe(1);
    expect(mensagens.length).toBe(1);

  });

  // Cria os Itens de Disparo
  it('Cria os Itens de Disparo', async () => {

  /*
    console.log('Disparo:----------------');
    console.log(await db.BuscarEntidade('Disparo'));
    console.log('------------------------');    
    console.log('Grupo:------------------');
    console.log(await db.BuscarEntidade('grupo'));
    console.log('------------------------');    
    console.log('Peca:----------------');
    console.log(await db.BuscarEntidade('pecas'));
    console.log('------------------------');           
  */
    
    const ItensDisparo = await ItemDisparo.bulkCreate(
   
      await db.GerarItensDisparo(
        await db.BuscarEntidade('Disparo'), 
        await db.BuscarEntidade('grupo'), 
        await db.BuscarEntidade('pecas')
      )
    
    );

    db.CriaRelacionamento(
      'Disparo',
      'ItensDisparo',
      ItensDisparo.map(item => ({
        ...item.dataValues,
        masterId: item.dataValues.id_disparo // Adiciona 'masterId' baseado em 'id_grupo'
      }))
    );

    expect(ItensDisparo.length).toBe(1);
    
  });



  // Cria os Itens dos Itens de Disparo

  it('Cria os Itens dos Itens de Disparo', async () => {

    /*
      console.log('Disparo:----------------');
      console.log(await db.BuscarEntidade('ItensDisparo'));
      console.log('------------------------');    
      console.log('Grupo:------------------');
      console.log(await db.BuscarEntidade('itensgrupo'));
      console.log('------------------------');    
      console.log('Peca:----------------');
      console.log(await db.BuscarEntidade('ItemPecaPublicitaria'));
      console.log('------------------------');           
    */
      
      let itensitensDisparos = [];

      const ItemDisparos = db.BuscarEntidade('ItensDisparo');
      ItemDisparos.forEach(ItemDisparo => {
        const ItemGrupos = db.BuscarEntidade('itensgrupo');
        ItemGrupos.forEach(ItemGrupo => {
          const ItemPecaPublicitarias = db.BuscarEntidade('ItemPecaPublicitaria');
          ItemPecaPublicitarias.forEach(ItemPecaPublicitaria => {
            itensitensDisparos.push({
              //id: id++,
              id_item_disparo: ItemDisparo.id,
              id_item_grupo: ItemGrupo.id,
              id_item_peca_publicitaria: ItemPecaPublicitaria.id,
              mensagem: ItemPecaPublicitaria.mensagem,
              ordem: ItemPecaPublicitaria.ordem,
              data: dataHora,
              enviado:'false' 
            });
          });
        });
      });
      

      const ItensItensDisparo = await ItemItemDisparo.bulkCreate(
        itensitensDisparos
      );
      
      console.log('ItensItensDisparo:----------------');
      console.log('QTD:',ItensItensDisparo.length);
      //console.log(itensitensDisparos);
      expect(ItensItensDisparo.length).toBe(4);
      
    });



    // Criação de 4 itens associados ao grupo
/*
    const itens = await ItemDisparo.bulkCreate([
      { celular: '+5511999999991', nome: 'João', imagem: 'joao.jpg', id_grupo: grupo.id },
      { celular: '+5511999999992', nome: 'Maria', imagem: 'maria.jpg', id_grupo: grupo.id },
      { celular: '+5511999999993', nome: 'Pedro', imagem: 'pedro.jpg', id_grupo: grupo.id },
      { celular: '+5511999999994', nome: 'Ana', imagem: 'ana.jpg', id_grupo: grupo.id },
    ]);
*/
 //   expect(disparo).not.toBeNull();
    //expect(itens.length).toBe(4);
//  });
/*
  it('Deve excluir um grupo e seus itens associados em cascata', async () => {
    // Criação de um grupo
    const grupo = await Disparo.create({
      descricao: 'Grupo para Exclusão',
      codigo: 'GRP002',
      imagem: 'grupo-exclusao.jpg',
      origem_lista: '{"origem":"Labels"}'
    });

    // Criação de 2 itens associados ao grupo
    await ItemDisparo.bulkCreate([
      { celular: '+5511988888881', nome: 'Carlos', imagem: 'carlos.jpg', id_grupo: grupo.id },
      { celular: '+5511988888882', nome: 'Fernanda', imagem: 'fernanda.jpg', id_grupo: grupo.id },
    ]);

    // Excluir o grupo e verificar se os itens foram excluídos
    await sequelize.transaction(async (transaction) => {
      await grupo.destroy({ cascade: true, transaction });
    });

    const itensRestantes = await ItemDisparo.findAll({ where: { id_grupo: grupo.id } });
    expect(itensRestantes.length).toBe(0);
  
  });
  */
  afterAll(async () => {
    await sequelize.close(); // Fecha a conexão com o banco de dados
  });
});
