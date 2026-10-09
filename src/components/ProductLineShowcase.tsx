import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ZoomIn, X, MessageCircle, ChevronLeft, ChevronRight, Award, Check, Eye } from 'lucide-react';
import { STORE_INFO } from '../data/iceCreamData';

import bannerMentaImg from '../assets/images/banner_menta_1791496488061.jpg';
import bannerAmarenaImg from '../assets/images/banner_amarena_1791496496632.jpg';
import bannerPistacheImg from '../assets/images/banner_pistache_1791496506563.jpg';

interface ProductLineShowcaseProps {
  onSelectCategory: (category: string) => void;
}

interface BannerItem {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  themeBg: string;
  description: string;
  image: string;
  flavorNotes: string[];
  pairing: string;
  whatsappMessage: string;
}

const FLAVOR_BANNERS: BannerItem[] = [
  {
    id: 'menta',
    name: 'Menta com Chocolate',
    tagline: 'Refrescância Intensa & Chocolate Belga',
    badge: 'Novidade Exclusiva',
    badgeColor: 'bg-emerald-600 text-white',
    accentColor: '#059669',
    themeBg: 'from-emerald-950/80 via-emerald-900/60 to-transparent',
    description:
      'Gelato artesanal cremoso de menta verde com folhas selecionadas e raspas generosas de chocolate meio amargo crocante. A harmonia perfeita entre frescor revigorante e cacau nobre.',
    image: bannerMentaImg,
    flavorNotes: ['Menta Verde Fresca', 'Chocolate Meio Amargo', 'Flocos Crocantes', 'Refrescância Marcante'],
    pairing: 'Ideal para saborear em taça ou pote familiar',
    whatsappMessage: 'Olá! Gostaria de saber mais e pedir o Gelato de Menta com Chocolate da Natuice!',
  },
  {
    id: 'amarena',
    name: 'Amarena Wild Cherry',
    tagline: 'Tradição Italiana & Cerejas Silvestres',
    badge: 'Gelato Artigianale',
    badgeColor: 'bg-rose-700 text-white',
    accentColor: '#be123c',
    themeBg: 'from-rose-950/80 via-rose-900/60 to-transparent',
    description:
      'Autêntica receita italiana com base aveludada fior di latte e variegato artesanal de cerejas silvestres amarena importadas. Sabor agridoce sofisticado e textura incomparável.',
    image: bannerAmarenaImg,
    flavorNotes: ['Cerejas Silvestres Amarena', 'Fior di Latte Aveludado', 'Calda Variegata', 'Tradição Europeia'],
    pairing: 'Perfeito para sobremesas refinadas e harmonização com café',
    whatsappMessage: 'Olá! Gostaria de pedir o Gelato Amarena Italiana com Cerejas Silvestres da Natuice!',
  },
  {
    id: 'pistache',
    name: 'Pistache Nobre Artisanal',
    tagline: '100% Puro Pistache Tostado',
    badge: 'Sucesso Absoluto',
    badgeColor: 'bg-amber-600 text-white',
    accentColor: '#d97706',
    themeBg: 'from-amber-950/80 via-stone-900/60 to-transparent',
    description:
      'Elaborado com pasta pura de pistache tostado italiano, calda especial da casa e finalizado com grãos crocantes de pistache partidos na hora. O favorito dos amantes de gelato artesanal.',
    image: bannerPistacheImg,
    flavorNotes: ['Pistache Tostado Italiano', 'Textura Ultramacia', 'Grãos Crocantes', 'Cremosidade Única'],
    pairing: 'O mais pedido da loja da Mooca',
    whatsappMessage: 'Olá! Gostaria de encomendar o Gelato Artesanal Puro Pistache da Natuice!',
  },
];

export const ProductLineShowcase: React.FC<ProductLineShowcaseProps> = ({ onSelectCategory }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [selectedZoomImage, setSelectedZoomImage] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play banner cycle
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % FLAVOR_BANNERS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeBanner = FLAVOR_BANNERS[activeBannerIndex];

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveBannerIndex((prev) => (prev === 0 ? FLAVOR_BANNERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveBannerIndex((prev) => (prev + 1) % FLAVOR_BANNERS.length);
  };

  const handleWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <section id="destaques" className="py-16 sm:py-24 bg-[#f8f3ea] border-b border-[#e8dac7]/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1a367d] uppercase tracking-wider mb-2 bg-[#1a367d]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#ffdd00]" />
            Nossas Assinaturas Exclusivas
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Três universos de cremosidade pensados para surpreender.
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Conheça as estrelas da nossa produção artesanal: os lançamentos mais pedidos da vitrine Natuice, unindo ingredientes nobres selecionados, receitas autênticas e sabor inesquecível.
          </p>
        </div>

        {/* ======================================================== */}
        {/* NOVO: BANNERS EXCLUSIVOS DOS SABORES (Menta, Amarena, Pistache) */}
        {/* ======================================================== */}
        <div className="mb-20">
          
          {/* Banner Tabs / Selector */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 p-1.5 bg-[#ede3d1]/80 rounded-xl">
              {FLAVOR_BANNERS.map((banner, index) => (
                <button
                  key={banner.id}
                  type="button"
                  onClick={() => {
                    setActiveBannerIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeBannerIndex === index
                      ? 'bg-white text-stone-900 shadow-sm'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: banner.accentColor }}
                  />
                  <span>{banner.name}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-600 hidden sm:inline">
                {activeBannerIndex + 1} de {FLAVOR_BANNERS.length}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Banner anterior"
                className="w-9 h-9 rounded-lg bg-white border border-[#e4d6c4] hover:bg-[#fbf7f0] flex items-center justify-center text-stone-700 transition cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo banner"
                className="w-9 h-9 rounded-lg bg-white border border-[#e4d6c4] hover:bg-[#fbf7f0] flex items-center justify-center text-stone-700 transition cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Destaque Principal: Banner Hero Interativo */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 text-white transition-all duration-500 mb-10 group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[500px]">
              
              {/* Imagem do Banner em Alta Resolução */}
              <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-stone-950">
                <img
                  src={activeBanner.image}
                  alt={`Banner promocional oficial ${activeBanner.name} Natuice`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
                
                {/* Botão de Ampliação / Zoom */}
                <button
                  type="button"
                  onClick={() => setSelectedZoomImage({
                    src: activeBanner.image,
                    title: activeBanner.name,
                    desc: activeBanner.description,
                  })}
                  className="absolute bottom-4 right-4 sm:top-4 sm:bottom-auto bg-stone-900/80 hover:bg-stone-900 backdrop-blur-md text-white text-xs font-medium px-3 py-2 rounded-xl flex items-center gap-1.5 border border-white/20 shadow-md transition cursor-pointer"
                  title="Ampliar banner em tela cheia"
                >
                  <ZoomIn className="w-4 h-4 text-[#ffdd00]" />
                  <span>Ampliar Imagem</span>
                </button>

                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full shadow-md ${activeBanner.badgeColor}`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {activeBanner.badge}
                  </span>
                </div>
              </div>

              {/* Informações e Detalhes do Sabor */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffdd00] mb-2">
                    <span>Gelato Especial Natuice</span>
                    <span>•</span>
                    <span>Mooca - SP</span>
                  </div>

                  <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                    {activeBanner.name}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-stone-300 mb-4">
                    {activeBanner.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
                    {activeBanner.description}
                  </p>

                  {/* Notas de Sabor / Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                      Notas Sensoriais & Ingredientes:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeBanner.flavorNotes.map((note, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs bg-white/10 hover:bg-white/15 text-stone-200 px-2.5 py-1 rounded-md border border-white/10 transition"
                        >
                          <Check className="w-3 h-3 text-[#ffdd00]" />
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Harmonização */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 flex items-center gap-2 mb-6">
                    <Award className="w-4 h-4 text-[#ffdd00] shrink-0" />
                    <span>{activeBanner.pairing}</span>
                  </div>
                </div>

                {/* Ações */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleWhatsApp(activeBanner.whatsappMessage)}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Pedir no WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectCategory('potes')}
                    className="flex-1 bg-[#ffdd00] hover:bg-[#e6c700] text-[#122452] font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
                  >
                    <span>Ver no Cardápio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* GALERIA DE BANNERS: 3 CARDS LADO A LADO                    */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLAVOR_BANNERS.map((banner, index) => {
              const isSelected = activeBannerIndex === index;
              return (
                <div
                  key={banner.id}
                  className={`group bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col shadow-sm hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-[#1a367d] border-transparent' : 'border-[#e3d5c2]'
                  }`}
                >
                  {/* Imagem do Banner */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-900 cursor-pointer"
                       onClick={() => {
                         setActiveBannerIndex(index);
                         setSelectedZoomImage({
                           src: banner.image,
                           title: banner.name,
                           desc: banner.description,
                         });
                       }}
                  >
                    <img
                      src={banner.image}
                      alt={`Banner ${banner.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] px-2.5 py-1 rounded-md font-bold shadow-xs ${banner.badgeColor}`}>
                        {banner.badge}
                      </span>
                    </div>

                    {/* Botão de Ver Imagem no hover */}
                    <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5 text-[#ffdd00]" />
                      <span>Ver Banner</span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                        <span className="font-semibold text-stone-700">{banner.tagline}</span>
                      </div>
                      
                      <h4 className="font-serif-display text-lg font-bold text-stone-900 mb-1.5 group-hover:text-[#1a367d] transition-colors">
                        {banner.name}
                      </h4>
                      
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                        {banner.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {banner.flavorNotes.slice(0, 3).map((note, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveBannerIndex(index)}
                        className="text-xs font-bold text-[#1a367d] hover:text-[#122452] flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isSelected ? 'Em Destaque' : 'Selecionar Sabor'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#d97706]" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleWhatsApp(banner.whatsappMessage)}
                        className="text-xs text-[#25D366] hover:text-[#1fa851] font-bold flex items-center gap-1 cursor-pointer"
                        title="Pedir este sabor pelo WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pedir</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Separador Sutil com título das linhas completas */}
        <div className="relative py-8 my-4 text-center">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-[#e2d4c0]"></div>
          </div>
          <div className="relative inline-flex items-center gap-2 bg-[#f8f3ea] px-4 text-xs font-bold uppercase tracking-wider text-stone-600">
            <span>Conheça Também Todas as Nossas Linhas Tradicionais</span>
          </div>
        </div>

        {/* 3 Pillars Grid Tradicionais (Magg, Açaí, Potes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Linha Magg Gourmet */}
          <div className="group bg-[#122452] rounded-2xl overflow-hidden border border-[#223d7a] shadow-md hover:shadow-xl hover:border-[#ffdd00]/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
              <img
                src="/src/assets/images/product_magg_pistache_1791485602046.jpg"
                alt="Picolé Magg Pistache com cobertura crocante de chocolate"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#0a1533]/90 backdrop-blur-xs text-[#ffdd00] text-xs px-2.5 py-1 rounded-md font-bold border border-[#ffdd00]/30 shadow-xs">
                Linha Magg Gourmet
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ffdd00]/80 mb-2 font-medium">
                  <span>Pistache Nobre</span>
                  <span aria-hidden="true">·</span>
                  <span>Chocolate Belga</span>
                  <span aria-hidden="true">·</span>
                  <span>Casquinha Crocante</span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2 group-hover:text-[#ffdd00] transition-colors">
                  Picolés Magg
                </h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  Camada espessa de chocolate importado com recheios de pistache, ninho trufado, red velvet e frutas vermelhas. Uma verdadeira experiência de confeitaria em palito.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#ffdd00] uppercase tracking-wider">A partir de R$ 11,50</span>
                <button
                  type="button"
                  onClick={() => onSelectCategory('magg')}
                  className="text-xs font-bold text-white hover:text-[#ffdd00] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Ver Linha Magg</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ffdd00]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Açaí Artesanal & Bowls */}
          <div className="group bg-[#122452] rounded-2xl overflow-hidden border border-[#223d7a] shadow-md hover:shadow-xl hover:border-[#ffdd00]/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
              <img
                src="/src/assets/images/product_acai_bowl_1791485611928.jpg"
                alt="Bowl de Açaí artesanal Natuice com frutas frescas e granola"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#0a1533]/90 backdrop-blur-xs text-[#ffdd00] text-xs px-2.5 py-1 rounded-md font-bold border border-[#ffdd00]/30 shadow-xs">
                Açaí Natuice Cremoso
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ffdd00]/80 mb-2 font-medium">
                  <span>Alto Teor de Polpa</span>
                  <span aria-hidden="true">·</span>
                  <span>Sem Xaropes Artificiais</span>
                  <span aria-hidden="true">·</span>
                  <span>Antioxidante</span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2 group-hover:text-[#ffdd00] transition-colors">
                  Açaí Natuice Cremoso
                </h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  Batido com tecnologia que garante textura aveludada sem cristais de gelo. Servido em bowls caprichados com morango fresco, banana e leite Ninho, ou potes de até 10L.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#ffdd00] uppercase tracking-wider">A partir de R$ 17,50</span>
                <button
                  type="button"
                  onClick={() => onSelectCategory('acai')}
                  className="text-xs font-bold text-white hover:text-[#ffdd00] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Ver Opções de Açaí</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ffdd00]" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Potes Família & Sobremesas */}
          <div className="group bg-[#122452] rounded-2xl overflow-hidden border border-[#223d7a] shadow-md hover:shadow-xl hover:border-[#ffdd00]/40 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
              <img
                src="/src/assets/images/product_pote_sorvetes_1791485620862.jpg"
                alt="Taça com bolas de sorvete cremoso de baunilha, chocolate e morango"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#0a1533]/90 backdrop-blur-xs text-[#ffdd00] text-xs px-2.5 py-1 rounded-md font-bold border border-[#ffdd00]/30 shadow-xs">
                Potes & Taças 1.5L a 5L
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#ffdd00]/80 mb-2 font-medium">
                  <span>Tradição Familiar</span>
                  <span aria-hidden="true">·</span>
                  <span>Receitas Clássicas</span>
                  <span aria-hidden="true">·</span>
                  <span>Rende Muito</span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white mb-2 group-hover:text-[#ffdd00] transition-colors">
                  Potes Tradicionais & Especiais
                </h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">
                  O autêntico sabor caipira do milho verde, o inconfundível abacaxi ao vinho e as combinações com flocos, leitinho trufado e chocolate belga. Perfeito para sobremesas em casa.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#ffdd00] uppercase tracking-wider">A partir de R$ 29,90</span>
                <button
                  type="button"
                  onClick={() => onSelectCategory('potes')}
                  className="text-xs font-bold text-white hover:text-[#ffdd00] flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Ver Potes Familiares</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#ffdd00]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal para Visualização em Alta Resolução */}
      {selectedZoomImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedZoomImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <img
                src={selectedZoomImage.src}
                alt={selectedZoomImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setSelectedZoomImage(null)}
                aria-label="Fechar visualização"
                className="absolute top-4 right-4 bg-stone-900/80 hover:bg-stone-800 text-white p-2 rounded-full border border-white/20 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif-display text-xl font-bold text-white">
                  {selectedZoomImage.title}
                </h4>
                <p className="text-xs text-stone-400 mt-1 max-w-2xl">
                  {selectedZoomImage.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleWhatsApp(`Olá! Gostaria de pedir o ${selectedZoomImage.title} da Natuice!`)}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-2 transition cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
