import React, { useState } from 'react';
import { Sparkles, Check, Plus, RefreshCw, ShoppingBag } from 'lucide-react';
import { BUILDER_OPTIONS, CartItem } from '../data/iceCreamData';

interface CustomSundaeBuilderProps {
  onAddCustomItemToCart: (item: CartItem) => void;
}

export const CustomSundaeBuilder: React.FC<CustomSundaeBuilderProps> = ({ onAddCustomItemToCart }) => {
  const [selectedBase, setSelectedBase] = useState(BUILDER_OPTIONS.bases[0]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([
    BUILDER_OPTIONS.flavors[0], // Pistache
    BUILDER_OPTIONS.flavors[1], // Leitinho Gourmet
  ]);
  const [selectedSyrup, setSelectedSyrup] = useState(BUILDER_OPTIONS.syrups[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([
    BUILDER_OPTIONS.toppings[0].id, // Morangos Frescos
    BUILDER_OPTIONS.toppings[1].id, // Granola
  ]);
  const [justAdded, setJustAdded] = useState(false);

  // Maximum flavors allowed based on base
  const maxFlavors = selectedBase.id === 'pote-viagem' ? 3 : 2;

  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      if (selectedFlavors.length > 1) {
        setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
      }
    } else {
      if (selectedFlavors.length < maxFlavors) {
        setSelectedFlavors([...selectedFlavors, flavor]);
      } else {
        // Replace oldest
        setSelectedFlavors([...selectedFlavors.slice(1), flavor]);
      }
    }
  };

  const toggleTopping = (toppingId: string) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  // Calculate total price
  const toppingsPrice = selectedToppings.reduce((acc, tId) => {
    const found = BUILDER_OPTIONS.toppings.find((t) => t.id === tId);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = selectedBase.price + selectedSyrup.price + toppingsPrice;

  const handleAddToCart = () => {
    const toppingNames = selectedToppings
      .map((tId) => BUILDER_OPTIONS.toppings.find((t) => t.id === tId)?.name)
      .filter(Boolean)
      .join(', ');

    const details = `Base: ${selectedBase.name} | Sabores: ${selectedFlavors.join(' + ')} | Calda: ${
      selectedSyrup.name
    }${toppingNames ? ` | Toppings: ${toppingNames}` : ''}`;

    const customCartItem: CartItem = {
      id: `custom-${Date.now()}`,
      name: `Criação Personalizada: ${selectedBase.name}`,
      price: totalPrice,
      quantity: 1,
      details,
      image: '/src/assets/images/hero_gelato_natuice_1791485590546.jpg',
    };

    onAddCustomItemToCart(customCartItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  // Quick preset shortcuts
  const applyPreset = (preset: 'pistache' | 'acai' | 'infantil') => {
    if (preset === 'pistache') {
      setSelectedBase(BUILDER_OPTIONS.bases[0]); // Taça
      setSelectedFlavors(['Pistache Magg Nobre', 'Chocolate Trufado Belga']);
      setSelectedSyrup(BUILDER_OPTIONS.syrups[0]); // Nutella
      setSelectedToppings(['pistache-triturado', 'raspas-chocolate']);
    } else if (preset === 'acai') {
      setSelectedBase(BUILDER_OPTIONS.bases[1]); // Copão Açaí
      setSelectedFlavors(['Açaí Cremoso Tradicional', 'Leitinho Gourmet com Ninho']);
      setSelectedSyrup(BUILDER_OPTIONS.syrups[2]); // Leite condensado
      setSelectedToppings(['morango-fresco', 'banana', 'granola', 'leite-ninho']);
    } else {
      setSelectedBase(BUILDER_OPTIONS.bases[2]); // Casquinha
      setSelectedFlavors(['Morango com Pedaços', 'Leitinho Gourmet com Ninho']);
      setSelectedSyrup(BUILDER_OPTIONS.syrups[1]); // Calda de frutas
      setSelectedToppings(['morango-fresco', 'leite-ninho']);
    }
  };

  return (
    <section id="monte-sua-taca" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#1a367d] uppercase tracking-wider mb-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Experiência Exclusiva Natuice</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
            Monte Sua Taça ou Açaí dos Sonhos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Combine sua base favorita com nossos mais de 250 sabores, caldas nobres e frutas frescas fatiadas na hora.
          </p>

          {/* Quick presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            <span className="text-xs text-stone-500 mr-1">Sugestões da Casa:</span>
            <button
              type="button"
              onClick={() => applyPreset('pistache')}
              className="text-xs px-3 py-1 bg-white hover:bg-blue-50 border-2 border-[#122452] rounded-md text-[#122452] font-bold transition-colors cursor-pointer"
            >
              Taça Suprema Pistache
            </button>
            <button
              type="button"
              onClick={() => applyPreset('acai')}
              className="text-xs px-3 py-1 bg-white hover:bg-blue-50 border-2 border-[#122452] rounded-md text-[#122452] font-bold transition-colors cursor-pointer"
            >
              Bowl Energético de Açaí
            </button>
            <button
              type="button"
              onClick={() => applyPreset('infantil')}
              className="text-xs px-3 py-1 bg-white hover:bg-blue-50 border-2 border-[#122452] rounded-md text-[#122452] font-bold transition-colors cursor-pointer"
            >
              Waffle Ninho & Morango
            </button>
          </div>
        </div>

        {/* Builder Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Configuration Steps */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#122452] shadow-xs space-y-8">
            
            {/* Step 1: Base Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  1. Escolha a Base
                </h3>
                <span className="text-xs text-stone-500">Selecione uma opção</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUILDER_OPTIONS.bases.map((base) => {
                  const isSelected = selectedBase.id === base.id;
                  return (
                    <button
                      key={base.id}
                      type="button"
                      onClick={() => setSelectedBase(base)}
                      className={`p-3.5 text-left rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#122452] bg-blue-50/70 ring-1 ring-[#122452]'
                          : 'border-[#122452] hover:bg-stone-50 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-sm text-stone-900">{base.name}</span>
                        <span className="font-serif-display font-bold text-xs text-[#122452] tabular-nums">
                          R$ {base.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-500 mt-1">{base.description}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Flavors Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  2. Escolha os Sabores
                </h3>
                <span className="text-xs text-[#122452] font-bold">
                  {selectedFlavors.length} de {maxFlavors} selecionados
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BUILDER_OPTIONS.flavors.map((flavor) => {
                  const isSelected = selectedFlavors.includes(flavor);
                  return (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => toggleFlavor(flavor)}
                      className={`p-2.5 text-left rounded-lg text-xs transition-all cursor-pointer flex items-center justify-between border-2 ${
                        isSelected
                          ? 'border-[#122452] bg-[#122452] text-[#ffdd00] font-bold shadow-xs'
                          : 'border-[#122452] bg-white text-stone-700 hover:bg-blue-50/50'
                      }`}
                    >
                      <span className="truncate">{flavor}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-[#ffdd00]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Caldas & Coberturas */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  3. Calda Especial
                </h3>
                <span className="text-xs text-stone-500">Selecione uma calda</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {BUILDER_OPTIONS.syrups.map((syrup) => {
                  const isSelected = selectedSyrup.id === syrup.id;
                  return (
                    <button
                      key={syrup.id}
                      type="button"
                      onClick={() => setSelectedSyrup(syrup)}
                      className={`p-2.5 text-left rounded-lg text-xs transition-all cursor-pointer flex flex-col justify-between border-2 ${
                        isSelected
                          ? 'border-[#122452] bg-blue-50/80 text-[#122452] font-bold'
                          : 'border-[#122452] bg-white text-stone-700 hover:bg-blue-50/40'
                      }`}
                    >
                      <span className="truncate">{syrup.name}</span>
                      <span className="text-[10px] text-stone-500 mt-1 tabular-nums">
                        {syrup.price > 0 ? `+ R$ ${syrup.price.toFixed(2).replace('.', ',')}` : 'Grátis'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Toppings Frescos */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  4. Toppings & Frutas Frescas
                </h3>
                <span className="text-xs text-stone-500">Adicione à vontade</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {BUILDER_OPTIONS.toppings.map((topping) => {
                  const isSelected = selectedToppings.includes(topping.id);
                  return (
                    <button
                      key={topping.id}
                      type="button"
                      onClick={() => toggleTopping(topping.id)}
                      className={`p-2.5 text-left rounded-lg text-xs transition-all cursor-pointer flex flex-col justify-between border-2 ${
                        isSelected
                          ? 'border-[#122452] bg-[#122452] text-[#ffdd00] font-bold shadow-xs'
                          : 'border-[#122452] bg-white text-stone-700 hover:bg-blue-50/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="truncate">{topping.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-[#ffdd00]" />}
                      </div>
                      <span className={`text-[10px] mt-1 tabular-nums ${isSelected ? 'text-blue-200' : 'text-stone-400'}`}>
                        + R$ {topping.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Live Summary & Action Card */}
          <div className="lg:col-span-4 sticky top-24 bg-white rounded-2xl p-6 border-2 border-[#122452] shadow-md">
            <h4 className="font-serif-display text-xl font-bold text-stone-900 pb-3 border-b border-blue-50">
              Resumo da Criação
            </h4>

            <div className="py-4 space-y-3 text-xs text-stone-600">
              <div className="flex justify-between items-baseline">
                <span className="text-stone-500">Base Escolhida:</span>
                <span className="font-semibold text-stone-900">{selectedBase.name}</span>
              </div>

              <div>
                <span className="text-stone-500 block mb-1">Sabores Selecionados:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedFlavors.map((f) => (
                    <span key={f} className="inline-block bg-blue-50 text-[#122452] font-semibold px-2 py-0.5 rounded text-[11px] border border-blue-100">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-baseline">
                <span className="text-stone-500">Calda:</span>
                <span className="font-semibold text-stone-900">{selectedSyrup.name}</span>
              </div>

              <div>
                <span className="text-stone-500 block mb-1">Toppings:</span>
                {selectedToppings.length === 0 ? (
                  <span className="text-stone-400 italic">Nenhum topping selecionado</span>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {selectedToppings.map((tId) => {
                      const t = BUILDER_OPTIONS.toppings.find((item) => item.id === tId);
                      return (
                        <span key={tId} className="inline-block bg-amber-50 text-[#8c5b00] border border-amber-200/60 px-2 py-0.5 rounded text-[11px] font-medium">
                          {t?.name}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Total Price Card */}
            <div className="pt-4 mt-2 border-t border-blue-100 flex items-baseline justify-between">
              <div>
                <span className="text-[11px] text-stone-400 block uppercase tracking-wider">Valor Total</span>
                <span className="font-serif-display text-2xl font-bold text-[#122452] tabular-nums">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <span className="text-[11px] text-[#8c5b00] font-medium">Preparo na hora</span>
            </div>

            {/* Add button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full mt-5 py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                justAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#122452] hover:bg-[#1a367d] text-[#ffdd00] active:scale-98 border border-[#ffdd00]/30'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Criação Adicionada ao Carrinho!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#ffdd00]" />
                  <span>Adicionar Criação ao Pedido</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-stone-400 text-center mt-3">
              Você pode enviar o pedido direto pelo WhatsApp ou retirar na loja.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
