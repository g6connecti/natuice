export interface Product {
  id: string;
  name: string;
  category: 'magg' | 'picoles' | 'potes' | 'acai' | 'zero' | 'tacas';
  categoryLabel: string;
  price: number;
  description: string;
  image: string;
  volumeOrWeight: string;
  badge?: string;
  flavorNotes: string[];
  dietary?: string[];
  popular?: boolean;
}

export interface StoreInfo {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phones: {
    landline: string;
    whatsapp: string;
    whatsappRaw: string;
  };
  googleMapsUrl: string;
  shareUrl: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  stats: {
    flavorsCount: number;
    linesCount: number;
    foundedYear: number;
    resellersCount: number;
  };
  social: {
    facebook: string;
    instagram: string;
  };
}

export const STORE_INFO: StoreInfo = {
  name: 'Sorvetes Natuice',
  legalName: 'Natuice Indústria e Comércio de Sorvetes Ltda',
  tagline: 'O autêntico sabor artesanal que refresca sua vida desde 2004.',
  address: {
    street: 'R. Pires de Campos',
    number: '155',
    neighborhood: 'Mooca',
    city: 'São Paulo',
    state: 'SP',
    zip: '03182-020',
    full: 'R. Pires de Campos, 155 - Mooca, São Paulo - SP, CEP 03182-020',
  },
  phones: {
    landline: '(11) 98231-5188',
    whatsapp: '(11) 98231-5188',
    whatsappRaw: '5511982315188',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sorvetes+Natuice+R.+Pires+de+Campos+155+Mooca+Sao+Paulo+SP',
  shareUrl: 'https://share.google/FtMXrL36vI16smtwW',
  hours: {
    weekdays: 'Segunda a Sexta: 10:00 às 20:00',
    weekends: 'Sábados, Domingos e Feriados: 10:00 às 21:30',
  },
  stats: {
    flavorsCount: 250,
    linesCount: 20,
    foundedYear: 2004,
    resellersCount: 3000,
  },
  social: {
    facebook: 'https://www.facebook.com/brico.altodamooca/',
    instagram: 'https://www.instagram.com/explore/locations/105605427885054/natuice-pires-de-campos/',
  },
};

export const PRODUCTS: Product[] = [
  // Linha Magg Gourmet
  {
    id: 'magg-pistache',
    name: 'Picolé Magg Pistache Crocante',
    category: 'magg',
    categoryLabel: 'Linha Gourmet Magg',
    price: 13.5,
    description: 'Gelato artesanal cremoso de pistache tostado coberto com casquinha crocante de chocolate meio amargo e pistaches triturados.',
    image: '/src/assets/images/product_magg_pistache_1791485602046.jpg',
    volumeOrWeight: '85g',
    badge: 'Mais Vendido',
    flavorNotes: ['Pistache Tostado', 'Chocolate Meio Amargo', 'Crocância'],
    dietary: ['Sem Glúten', 'Pistache Nobre'],
    popular: true,
  },
  {
    id: 'magg-ninho-trufado',
    name: 'Picolé Magg Ninho Trufado',
    category: 'magg',
    categoryLabel: 'Linha Gourmet Magg',
    price: 12.0,
    description: 'Sorvete cremoso feito com leite Ninho integral, recheio generoso de trufa de chocolate belga e cobertura crocante.',
    image: '/src/assets/images/product_magg_pistache_1791485602046.jpg',
    volumeOrWeight: '85g',
    badge: 'Destaque',
    flavorNotes: ['Leite Ninho', 'Trufa de Chocolate', 'Casquinha Crocante'],
    dietary: ['Cacau Selecionado'],
    popular: true,
  },
  {
    id: 'magg-frutas-vermelhas',
    name: 'Picolé Magg Frutas Vermelhas & Chocolate Branco',
    category: 'magg',
    categoryLabel: 'Linha Gourmet Magg',
    price: 12.5,
    description: 'Sorbet refrescante de framboesa, mirtilo e morango envolto em uma nobre camada de chocolate branco aveludado.',
    image: '/src/assets/images/product_magg_pistache_1791485602046.jpg',
    volumeOrWeight: '85g',
    flavorNotes: ['Framboesa & Mirtilo', 'Chocolate Branco Nobre'],
    dietary: ['Polpa Natural de Frutas'],
  },
  {
    id: 'magg-torta-limao',
    name: 'Picolé Magg Torta de Limão Siciliano',
    category: 'magg',
    categoryLabel: 'Linha Gourmet Magg',
    price: 11.5,
    description: 'Creme aveludado de limão siciliano com pedacinhos de biscoito amanteigado e cobertura de chocolate branco.',
    image: '/src/assets/images/product_magg_pistache_1791485602046.jpg',
    volumeOrWeight: '85g',
    flavorNotes: ['Limão Siciliano', 'Biscoito Amanteigado'],
  },
  {
    id: 'magg-red-velvet',
    name: 'Picolé Magg Red Velvet',
    category: 'magg',
    categoryLabel: 'Linha Gourmet Magg',
    price: 13.0,
    description: 'Inspirado no clássico bolo americano: sorvete de cream cheese com calda de frutas vermelhas e cobertura especial.',
    image: '/src/assets/images/product_magg_pistache_1791485602046.jpg',
    volumeOrWeight: '85g',
    flavorNotes: ['Cream Cheese', 'Calda Vermelha', 'Baunilha'],
  },

  // Picolés Tradicionais & Frutais
  {
    id: 'picole-azulao',
    name: 'Picolé Azulão Natuice',
    category: 'picoles',
    categoryLabel: 'Picolés Frutas & Diversão',
    price: 4.5,
    description: 'O clássico infantil e nostálgico sabor tutti-frutti com morango que pinta a língua e encanta todas as idades.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '60g',
    badge: 'Ícone da Marca',
    flavorNotes: ['Tutti-Frutti', 'Morango Refrescante'],
    dietary: ['Sem Glúten'],
    popular: true,
  },
  {
    id: 'picole-morango-leite',
    name: 'Picolé Morango ao Leite Supremo',
    category: 'picoles',
    categoryLabel: 'Picolés ao Leite',
    price: 5.0,
    description: 'Morangos frescos batidos com leite integral e toque de leite condensado. Textura ultra macia e sabor autêntico.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '65g',
    flavorNotes: ['Morango Fresco', 'Creme de Leite'],
    dietary: ['Sem Glúten'],
  },
  {
    id: 'picole-leitinho',
    name: 'Picolé Leitinho Cremoso',
    category: 'picoles',
    categoryLabel: 'Picolés ao Leite',
    price: 5.0,
    description: 'Receita artesanal exclusiva da Natuice com leite em pó premium e toque aveludado de baunilha.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '65g',
    badge: 'Favorito',
    flavorNotes: ['Leite Ninho Puro', 'Cremosidade Intensa'],
    popular: true,
  },
  {
    id: 'picole-maracuja-fruta',
    name: 'Picolé Maracujá 100% da Fruta',
    category: 'picoles',
    categoryLabel: 'Picolés à Base de Água',
    price: 4.5,
    description: 'Feito com a polpa pura do maracujá fresco, acidez equilibrada e extrema refrescância para dias quentes.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '60g',
    flavorNotes: ['Maracujá Selecionado', 'Refrescância Tropical'],
    dietary: ['Vegano', '0% Lactose', 'Sem Glúten'],
  },
  {
    id: 'picole-limao-suico',
    name: 'Picolé Limão Suíço',
    category: 'picoles',
    categoryLabel: 'Picolés ao Leite',
    price: 5.0,
    description: 'A clássica limonada suíça com limão taiti, leite condensado e cremosidade incomparável.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '65g',
    flavorNotes: ['Limão Taiti', 'Leite Condensado'],
  },
  {
    id: 'picole-romeu-julieta',
    name: 'Picolé Romeu & Julieta Recheado',
    category: 'picoles',
    categoryLabel: 'Picolés Especiais',
    price: 6.5,
    description: 'Sorvete cremoso de queijo minas frescal com recheio fluído de goiabada cascão artesanal.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '75g',
    flavorNotes: ['Queijo Minas', 'Goiabada Cascão'],
  },

  // Potes Familiares & Linha Gelato Especial
  {
    id: 'gelato-menta-especial',
    name: 'Gelato Menta com Chocolate & Raspas de Cacau',
    category: 'potes',
    categoryLabel: 'Edição Especial Gelato',
    price: 36.9,
    description: 'Refrescância herbal das folhas de menta selecionadas com generosas lascas crocantes de chocolate meio amargo nobre.',
    image: '/src/assets/images/banner_menta.jpg',
    volumeOrWeight: 'Pote 1.5L / Taça',
    badge: 'Edição Especial',
    flavorNotes: ['Menta Fresca', 'Chocolate Meio Amargo', 'Refrescância Marcante'],
    dietary: ['Sem Glúten', 'Cacau Selecionado'],
    popular: true,
  },
  {
    id: 'gelato-amarena-italiana',
    name: 'Gelato Amarena Italiana com Cerejas Silvestres',
    category: 'potes',
    categoryLabel: 'Edição Especial Gelato',
    price: 38.9,
    description: 'Receita clássica italiana com base aveludada fior di latte e variegato artesanal de cerejas silvestres amarena.',
    image: '/src/assets/images/banner_amarena.jpg',
    volumeOrWeight: 'Pote 1.5L / Taça',
    badge: 'Gelato Artigianale',
    flavorNotes: ['Cerejas Silvestres', 'Fior di Latte', 'Calda Variegata'],
    dietary: ['Tradição Italiana', 'Cerejas Amarena'],
    popular: true,
  },
  {
    id: 'gelato-pistache-nobre',
    name: 'Gelato Puro Pistache Tostado & Crocante',
    category: 'potes',
    categoryLabel: 'Edição Especial Gelato',
    price: 39.9,
    description: 'Feito com pasta pura de pistache tostado siciliano, textura ultramacia e finalizado com pistaches partidos na hora.',
    image: '/src/assets/images/banner_pistache.jpg',
    volumeOrWeight: 'Pote 1.5L / Taça',
    badge: '100% Puro Pistache',
    flavorNotes: ['Pistache Tostado', 'Cremoso', 'Grãos Inteiros'],
    dietary: ['Sem Glúten', 'Pistache Nobre'],
    popular: true,
  },
  {
    id: 'pote-chocolitano-2l',
    name: 'Pote 2 Litros Chocolitano & Flocos',
    category: 'potes',
    categoryLabel: 'Potes Família 2L',
    price: 36.9,
    description: 'Três sabores harmônicos no mesmo pote: chocolate trufado belga, creme tradicional e flocos com lascas de cacau nobre.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '2 Litros',
    badge: 'Tamanho Família',
    flavorNotes: ['Chocolate Belga', 'Creme Suave', 'Flocos Crocantes'],
    popular: true,
  },
  {
    id: 'pote-abacaxi-vinho-15l',
    name: 'Pote 1.5L Abacaxi ao Vinho Artesanal',
    category: 'potes',
    categoryLabel: 'Linha Tradicional 1.5L',
    price: 29.9,
    description: 'Receita consagrada em Piracicaba: pedaços suculentos de abacaxi cozidos em calda aromática de vinho tinto suave.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '1.5 Litros',
    badge: 'Especial Natuice',
    flavorNotes: ['Abacaxi em Calda', 'Vinho Tinto Aromático'],
  },
  {
    id: 'pote-leitinho-trufado-15l',
    name: 'Pote 1.5L Leitinho Trufado Supremo',
    category: 'potes',
    categoryLabel: 'Linha Tradicional 1.5L',
    price: 32.5,
    description: 'Base de leite integral batido com espirais generosas de ganache trufada meio amarga.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '1.5 Litros',
    flavorNotes: ['Leitinho Cremoso', 'Ganache de Chocolate'],
  },
  {
    id: 'pote-milho-verde-2l',
    name: 'Pote 2L Milho Verde da Fazenda',
    category: 'potes',
    categoryLabel: 'Potes Família 2L',
    price: 34.0,
    description: 'Sabor caipira tradicional com milho verde fresco selecionado, aroma suave e cremosidade típica do interior paulista.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '2 Litros',
    flavorNotes: ['Milho Verde da Roça', 'Toque de Canela Opcional'],
  },
  {
    id: 'copao-sundae-morango-450',
    name: 'Copão Sundae Morango com Flocos 450ml',
    category: 'potes',
    categoryLabel: 'Copões & Sobremesas',
    price: 15.0,
    description: 'Pronto para levar: sorvete de flocos intercalado com calda caseira de morango em pedaços e cobertura crocante.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '450ml',
    flavorNotes: ['Flocos', 'Calda de Morango'],
  },

  // Açaí Artesanal
  {
    id: 'acai-bowl-supreme-500',
    name: 'Bowl de Açaí Especial Natuice 500ml',
    category: 'acai',
    categoryLabel: 'Açaí Artesanal & Bowls',
    price: 24.9,
    description: 'Açaí puro batido de textura aveludada, servido com morangos frescos fatiados, banana ouro, granola crocante e fio de leite condensado.',
    image: '/src/assets/images/product_acai_bowl_1791485611928.jpg',
    volumeOrWeight: '500ml',
    badge: 'Energia Pura',
    flavorNotes: ['Açaí do Pará', 'Frutas Frescas', 'Granola Dourada'],
    dietary: ['Antioxidante Natural', 'Sem Xarope Artificial'],
    popular: true,
  },
  {
    id: 'pote-acai-puro-2l',
    name: 'Pote 2 Litros Açaí Tradicional com Guaraná',
    category: 'acai',
    categoryLabel: 'Açaí para Família',
    price: 42.0,
    description: 'O açaí mais aveludado para ter sempre no seu freezer. Fácil de servir, enriquecido com extrato natural de guaraná da Amazônia.',
    image: '/src/assets/images/product_acai_bowl_1791485611928.jpg',
    volumeOrWeight: '2 Litros',
    flavorNotes: ['Açaí Grosso', 'Guaraná Natural'],
    dietary: ['Alto Teor de Polpa'],
  },
  {
    id: 'acai-leitinho-300',
    name: 'Copo Açaí com Leitinho Gourmet 300ml',
    category: 'acai',
    categoryLabel: 'Açaí Individual',
    price: 17.5,
    description: 'Camadas de açaí intercaladas com creme de leite Ninho artesanal, morangos frescos e paçoca crocante.',
    image: '/src/assets/images/product_acai_bowl_1791485611928.jpg',
    volumeOrWeight: '300ml',
    flavorNotes: ['Açaí', 'Leitinho', 'Paçoca Crocante'],
  },

  // Zero Açúcar / Fit
  {
    id: 'zero-napolitano-pote',
    name: 'Pote 1.5L Napolitano Zero Adição de Açúcar',
    category: 'zero',
    categoryLabel: 'Linha Fit & Zero',
    price: 35.9,
    description: 'Todo o sabor do morango, chocolate e baunilha sem nenhuma adição de açúcares. Adoçado naturalmente com sucralose.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: '1.5 Litros',
    badge: '0% Açúcar',
    flavorNotes: ['Chocolate', 'Morango', 'Baunilha'],
    dietary: ['Zero Açúcar', 'Baixo Índice Glicêmico'],
  },
  {
    id: 'zero-picole-coco',
    name: 'Picolé Coco Branco Zero Açúcar',
    category: 'zero',
    categoryLabel: 'Linha Fit & Zero',
    price: 6.0,
    description: 'Coco ralado natural fresco em base leve ao leite, sem açúcar adicionado. Perfeito para dietas controladas e diabéticos.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '60g',
    flavorNotes: ['Coco Fresco Ralado'],
    dietary: ['Zero Açúcar', 'Sem Glúten'],
  },
  {
    id: 'zero-picole-leitinho',
    name: 'Picolé Leitinho Zero Açúcar',
    category: 'zero',
    categoryLabel: 'Linha Fit & Zero',
    price: 6.0,
    description: 'Sabor intenso e reconfortante do leite sem adição de açúcares. Cremosidade preservada com alta tecnologia.',
    image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    volumeOrWeight: '60g',
    flavorNotes: ['Leite Suave', 'Zero Açúcar'],
    dietary: ['Zero Açúcar', 'Apenas 54 Kcal'],
  },

  // Taças & Sobremesas na Loja
  {
    id: 'taca-supreme-natuice',
    name: 'Taça Natuice Supreme de Pistache & Cacau',
    category: 'tacas',
    categoryLabel: 'Experiência na Loja',
    price: 28.0,
    description: 'Servida em taça de cristal: bolas de gelato pistache e cacau 70%, borda banhada em chocolate belga com castanhas, chantilly fresco e wafer crocante.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: 'Taça 380ml',
    badge: 'Exclusividade da Gelateria',
    flavorNotes: ['Pistache Gelato', 'Cacau 70%', 'Chantilly Fresco'],
    popular: true,
  },
  {
    id: 'petit-gateau-artesanal',
    name: 'Petit Gâteau Quente com Sorvete Natuice',
    category: 'tacas',
    categoryLabel: 'Experiência na Loja',
    price: 24.0,
    description: 'Bolinho quente de chocolate belga com recheio cremoso e escorrendo, acompanhado de bola de sorvete de creme ou leitinho e calda de chocolate.',
    image: '/src/assets/images/product_pote_sorvetes_1791485620862.jpg',
    volumeOrWeight: 'Porção Individual',
    flavorNotes: ['Chocolate Quente', 'Sorvete de Creme Refrescante'],
  },
];

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  details?: string;
  image?: string;
}

export const BUILDER_OPTIONS = {
  bases: [
    { id: 'taca-cristal', name: 'Taça Dupla Especial (2 bolas)', price: 18.0, description: 'Servida no copo taça com casquinha de biscoito' },
    { id: 'copao-acai', name: 'Copão de Açaí Cremoso 500ml', price: 21.0, description: 'Base pura de açaí batido na hora' },
    { id: 'waffle-cone', name: 'Casquinha Waffle Dourada Dupla', price: 16.0, description: 'Cone artesanal crocante com 2 bolas generosas' },
    { id: 'pote-viagem', name: 'Pote Térmico para Levar 500ml', price: 24.0, description: 'Até 3 sabores bem acondicionados' },
  ],
  flavors: [
    'Pistache Magg Nobre',
    'Leitinho Gourmet com Ninho',
    'Chocolate Trufado Belga',
    'Morango com Pedaços',
    'Açaí Cremoso Tradicional',
    'Milho Verde da Fazenda',
    'Flocos Tradicional',
    'Abacaxi ao Vinho',
    'Frutas Vermelhas Silvestres',
    'Doce de Leite com Nozes',
    'Café Trufado',
    'Coco Queimado',
  ],
  syrups: [
    { id: 'nutella', name: 'Nutella Morna', price: 4.0 },
    { id: 'frutas-vermelhas', name: 'Calda de Frutas Vermelhas Artesanal', price: 3.5 },
    { id: 'leite-condensado', name: 'Leite Condensado Moça', price: 2.5 },
    { id: 'caramelo-salgado', name: 'Caramelo com Flor de Sal', price: 3.5 },
    { id: 'cacau-trufado', name: 'Ganache de Cacau Meio Amargo', price: 3.5 },
    { id: 'sem-calda', name: 'Sem calda adicional', price: 0.0 },
  ],
  toppings: [
    { id: 'morango-fresco', name: 'Morangos Frescos Picados', price: 3.5 },
    { id: 'granola', name: 'Granola Artesanal Crocante', price: 2.5 },
    { id: 'leite-ninho', name: 'Leite em Pó Ninho', price: 2.5 },
    { id: 'banana', name: 'Banana Ouro Fatiada', price: 2.0 },
    { id: 'pistache-triturado', name: 'Pistache Tostado Moído', price: 4.5 },
    { id: 'raspas-chocolate', name: 'Raspas de Chocolate Nobre', price: 3.0 },
    { id: 'pacoca', name: 'Paçoca Rolha Esfarelada', price: 2.0 },
    { id: 'castanha-caju', name: 'Castanha de Caju Tostada', price: 3.5 },
  ],
};
