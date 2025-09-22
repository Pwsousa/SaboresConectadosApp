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

export const menuCategories = [
  { key: 'Refeições', label: 'Refeições' },
  { key: 'Sucos', label: 'Sucos' },
  { key: 'Petiscos', label: 'Petiscos' },
  { key: 'Porções', label: 'Porções' },
  { key: 'Bebidas', label: 'Bebidas' },
  { key: 'Sobremesas', label: 'Sobremesas' },
  { key: 'Meias', label: 'Meias' },
];