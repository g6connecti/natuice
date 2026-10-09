import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Info, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product, PRODUCTS, CartItem } from '../data/iceCreamData';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onAddToCart,
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Produtos' },
    { id: 'magg', label: 'Gourmet Magg' },
    { id: 'picoles', label: 'Picolés Clássicos' },
    { id: 'potes', label: 'Potes Família' },
    { id: 'acai', label: 'Açaí Artesanal' },
    { id: 'zero', label: 'Zero Açúcar & Fit' },
    { id: 'tacas', label: 'Taças & Na Loja' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'todos' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.flavorNotes.some((note) => note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.dietary && item.dietary.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs font-bold text-[#1a367d] uppercase tracking-wider mb-1.5">
              Mais de 250 Sabores · Direto da Fábrica
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Cardápio Completo da Gelateria
            </h2>
            <p className="text-sm text-stone-500 mt-1 max-w-xl">
              Selecione sua linha favorita ou busque por sabores específicos, opções sem açúcar e ingredientes especiais.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por pistache, morango, açaí..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a367d]/20 focus:border-[#1a367d] transition-all placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented Buttons - Authorized interactive tabs) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#122452] text-[#ffdd00] shadow-sm font-bold border border-[#122452]'
                    : 'bg-stone-100 text-stone-700 hover:text-[#1a367d] hover:bg-blue-50/70'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-stone-50 rounded-2xl border border-stone-200">
            <p className="font-serif-display text-xl text-stone-800 mb-2">Nenhum produto encontrado</p>
            <p className="text-sm text-stone-500 max-w-md mx-auto mb-4">
              Não encontramos nenhum sabor com o termo "{searchQuery}". Experimente buscar por outros termos como "pistache", "leitinho" ou navegue pelas categorias.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('todos');
              }}
              className="px-4 py-2 text-xs font-bold text-[#122452] bg-[#ffdd00] rounded-lg hover:bg-[#ecc41f]"
            >
              Ver todos os sabores
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const isAdded = addedAnimationId === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductModal(product)}
                  className="group bg-white rounded-xl border-2 border-[#122452] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                >
                  {/* Lead with imagery (65-70% height) on neutral backdrop */}
                  <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle top indicator if badge exists */}
                    {product.badge && (
                      <div className="absolute top-2.5 left-2.5 bg-[#122452]/90 backdrop-blur-xs text-[#ffdd00] text-[11px] font-bold px-2 py-0.5 rounded-sm border border-[#ffdd00]/20">
                        {product.badge}
                      </div>
                    )}

                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-stone-700 text-[11px] font-medium px-2 py-0.5 rounded-sm tabular-nums">
                      {product.volumeOrWeight}
                    </div>
                  </div>

                  {/* Clean unboxed metadata & title */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Unboxed metadata with typographic separator */}
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5 font-normal">
                        <span>{product.categoryLabel}</span>
                        {product.dietary && product.dietary.length > 0 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{product.dietary[0]}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-serif-display text-base sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-[#1a367d] transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price in tabular nums & Quick Add Button */}
                    <div className="pt-4 mt-3 border-t border-blue-50 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Preço</span>
                        <span className="font-serif-display text-lg font-bold text-stone-900 tabular-nums">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#122452] text-[#ffdd00] hover:bg-[#1a367d] active:scale-95 shadow-xs'
                        }`}
                        title="Adicionar ao carrinho"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Adicionado</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#ffdd00]" />
                            <span>Adicionar</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal with detailed product view */}
        {selectedProductModal && (
          <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border-2 border-[#122452] animate-in fade-in zoom-in-95 duration-200">
              
              <div className="relative aspect-[16/10] bg-stone-100">
                <img
                  src={selectedProductModal.image}
                  alt={selectedProductModal.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProductModal(null)}
                  className="absolute top-3 right-3 p-2 bg-stone-900/70 hover:bg-stone-900 text-white rounded-full transition-colors"
                  aria-label="Fechar detalhes"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                  <span>{selectedProductModal.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProductModal.volumeOrWeight}</span>
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-stone-900 mb-2">
                  {selectedProductModal.name}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {selectedProductModal.description}
                </p>

                {/* Flavor Notes & Highlights */}
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block">
                    Notas de Sabor & Destaques:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-stone-600">
                    {selectedProductModal.flavorNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < selectedProductModal.flavorNotes.length - 1 && (
                          <span aria-hidden="true" className="text-stone-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block">Preço unitário</span>
                    <span className="font-serif-display text-2xl font-bold text-stone-900 tabular-nums">
                      R$ {selectedProductModal.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        onAddToCart(selectedProductModal, 1);
                        setSelectedProductModal(null);
                      }}
                      className="px-5 py-2.5 text-xs font-bold text-[#122452] bg-[#ffdd00] hover:bg-[#ecc41f] rounded-lg flex items-center gap-2 cursor-pointer transition-colors shadow-sm border border-[#f0c922]"
                    >
                      <Plus className="w-4 h-4 text-[#122452]" />
                      <span>Adicionar ao Pedido</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
