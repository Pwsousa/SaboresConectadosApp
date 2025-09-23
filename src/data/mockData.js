export const menuCategories = [
  { key: 'Refeicoes', label: 'Refeições', color: '#ff6b35' },
  { key: 'Petiscos', label: 'Petiscos', color: '#ffcc00' },
  { key: 'Bebidas', label: 'Bebidas', color: '#ff6b35' },
  { key: 'Porcoes', label: 'Porções', color: '#ffcc00' },
  { key: 'Sucos', label: 'Sucos', color: '#ff6b35' },
  { key: 'Sobremesas', label: 'Sobremesas', color: '#ffcc00' }
];

export const mesas = [
  {
    numero: '01',
    total: 245.00,
    cliente: 'Afonso',
    pedidos: [
      {
        categoria: 'Refeições',
        nome: 'Buchada Completa',
        descricao: 'Pirão, Arroz, Vinagrete',
        preco: 200.00,
        quantidade: 4,
      },
      {
        categoria: 'Bebidas',
        nome: 'Montila',
        descricao: '1 Litro',
        preco: 45.00,
        quantidade: 1,
      },
    ],
  },
  {
    numero: '02',
    total: 80.00,
    cliente: 'João',
    pedidos: [],
  },
  {
    numero: '03',
    total: 80.00,
    cliente: 'Vitor',
    pedidos: [],
  },
];

export const refeicoes = [
  {
    id: 1,
    nome: 'Buchada Completa',
    descricao: 'Pirão, Arroz, Vinagrete',
    preco: 50.00,
    serve: null,
  },
  {
    id: 2,
    nome: 'Carne de Sol na nata',
    descricao: 'Feijão, Arroz, Macaxeira Batata doce',
    preco: 59.90,
    serve: 'Serve duas pessoas',
  },
  {
    id: 3,
    nome: 'Carne de Sol na nata',
    descricao: 'Feijão, Arroz, Macaxeira Batata doce',
    preco: 115.00,
    serve: 'Serve quatro pessoas',
  },
];

export const petiscos = [
  {
    id: 1,
    nome: 'Bolinhos de Macaxeira',
    descricao: 'Acompanha molho especial da casa',
    preco: 18.90,
  },
  {
    id: 2,
    nome: 'Isca de Peixe',
    descricao: 'Porção com 300g',
    preco: 32.00,
  },
  {
    id: 3,
    nome: 'Calabresa Acebolada',
    descricao: 'Acompanha farofa',
    preco: 25.00,
  },
];

export const bebidas = [
  {
    id: 1,
    nome: 'Montila 1L',
    descricao: 'Refrigerante regional',
    preco: 8.00,
  },
  {
    id: 2,
    nome: 'Coca-Cola 2L',
    descricao: 'Refrigerante',
    preco: 12.00,
  },
  {
    id: 3,
    nome: 'Água Mineral',
    descricao: 'Com ou sem gás',
    preco: 4.00,
  },
  {
    id: 4,
    nome: 'Cerveja Heineken',
    descricao: 'Long neck 330ml',
    preco: 9.00,
  },
];

export const porcoes = [
  {
    id: 1,
    nome: 'Porção de Carne de Sol',
    descricao: 'Acompanha macaxeira e queijo coalho',
    preco: 65.00,
    serve: 'Serve 2 pessoas',
  },
  {
    id: 2,
    nome: 'Porção Mista',
    descricao: 'Carne de sol, frango, queijo coalho',
    preco: 85.00,
    serve: 'Serve 3 pessoas',
  },
  {
    id: 3,
    nome: 'Porção de Camarão',
    descricao: 'Camarão ao alho e óleo',
    preco: 75.00,
    serve: 'Serve 2 pessoas',
  },
];

export const sucos = [
  {
    id: 1,
    nome: 'Suco de Caju',
    descricao: 'Natural, 500ml',
    preco: 10.00,
  },
  {
    id: 2,
    nome: 'Suco de Goiaba',
    descricao: 'Natural, 500ml',
    preco: 10.00,
  },
  {
    id: 3,
    nome: 'Suco de Maracujá',
    descricao: 'Natural, 500ml',
    preco: 10.00,
  },
  {
    id: 4,
    nome: 'Vitamina de Abacate',
    descricao: 'Com leite, 500ml',
    preco: 12.00,
  },
];

export const sobremesas = [
  {
    id: 1,
    nome: 'Pudim de Leite',
    descricao: 'Caseiro, com calda de caramelo',
    preco: 12.00,
  },
  {
    id: 2,
    nome: 'Mousse de Maracujá',
    descricao: 'Sobremesa refrescante',
    preco: 10.00,
  },
  {
    id: 3,
    nome: 'Bolo de Morango',
    descricao: 'Doce regional pernambucano',
    preco: 15.00,
  },
];