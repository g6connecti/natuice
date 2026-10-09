import React, { useState } from 'react';
import { ArrowRight, Sparkles, MapPin, Award, Store, Image as ImageIcon, ZoomIn, X, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/iceCreamData';
import bannerMundoImg from '../assets/images/banner_natuice_mundo.jpg';
import fachadaOficialImg from '../assets/images/fachada_natuice_oficial_v3.jpg';

interface HeroProps {
  onOpenBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBuilder }) => {
  const [bgChoice, setBgChoice] = useState<'banner_mundo' | 'store_real' | 'custom'>('banner_mundo');
  const [customBgUrl, setCustomBgUrl] = useState<string>('');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomBgUrl(result);
          setBgChoice('custom');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefaultPhoto = () => {
    setCustomBgUrl('');
    setBgChoice('banner_mundo');
  };

  const getBgImage = () => {
    if (bgChoice === 'custom' && customBgUrl) return customBgUrl;
    if (bgChoice === 'store_real') return fachadaOficialImg;
    return bannerMundoImg;
  };

  const currentPhotoUrl = getBgImage();

  return (
    <section id="inicio" className="relative pt-10 pb-20 sm:pt-14 sm:pb-24 overflow-hidden border-b border-blue-900/40 bg-[#0a183d] text-white">
      {/* Background Image requested by user: Banner Oficial Anexo "Um Mundo de Sabor Para Você" */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={currentPhotoUrl}
          alt={bgChoice === 'store_real' ? "Foto oficial da loja Sorvetes Natuice Mooca" : "Banner oficial Sorvetes Natuice - Um Mundo de Sabor Para Você"}
          className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.92] contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Luminous scrim calibrated so the banner colors, products and headline remain beautifully balanced and legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a183d]/92 via-[#0a183d]/70 to-[#0a183d]/35 lg:to-[#0a183d]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a183d] via-transparent to-[#0a183d]/60" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial & Brand Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial kicker inspired by storefront colors */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#ffdd00] uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-[#ffdd00]" />
                Sorvetes Direto da Fábrica
              </span>
              <span aria-hidden="true" className="text-blue-300/60">·</span>
              <span>Tradição Desde 2004</span>
              <span aria-hidden="true" className="text-blue-300/60">·</span>
              <span className="text-blue-200 font-medium">Unidade Mooca - SP</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance drop-shadow-md">
              O autêntico sabor que refresca gerações inteiras.
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-blue-100/95 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              Mais de 250 variedades de sabores artesanais desenvolvidos com frutas frescas, cremes nobres e receitas exclusivas. Das clássicas casquinhas ao lendário Picolé Magg e Açaí batido na hora na unidade Mooca.
            </p>

            {/* Action Buttons harmonized with storefront royal blue & sunshine yellow */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0a183d] bg-[#ffdd00] hover:bg-[#ecc41f] active:bg-[#d9b218] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap border border-[#f0c922]"
              >
                <span>Explorar Sabores & Linhas</span>
                <ArrowRight className="w-4 h-4 text-[#0a183d]" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido de sorvetes na unidade Mooca.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#25d366] hover:bg-[#20ba5a] active:bg-[#1caa51] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Pedir no WhatsApp ({STORE_INFO.phones.whatsapp})</span>
              </a>

              <button
                type="button"
                onClick={onOpenBuilder}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/30 backdrop-blur-md rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#ffdd00]" />
                <span>Monte Sua Taça</span>
              </button>
            </div>

            {/* Editorial Adjacency Proof Numbers */}
            <div className="pt-6 border-t border-blue-400/25 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#ffdd00] tabular-nums">
                  +250
                </p>
                <p className="text-xs text-blue-200/90 font-medium mt-0.5">
                  Sabores desenvolvidos
                </p>
              </div>

              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#ffdd00] tabular-nums">
                  20
                </p>
                <p className="text-xs text-blue-200/90 font-medium mt-0.5">
                  Linhas artesanais
                </p>
              </div>

              <div>
                <p className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#ffdd00] tabular-nums">
                  20+
                </p>
                <p className="text-xs text-blue-200/90 font-medium mt-0.5">
                  Anos de história
                </p>
              </div>
            </div>

            {/* Interactive Banner/Photo selector toolbar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-blue-200/90 bg-[#0a183d]/80 p-3 rounded-xl border border-blue-400/20 backdrop-blur-md">
              <span className="flex items-center gap-1.5 font-bold text-[#ffdd00]">
                <ImageIcon className="w-4 h-4 text-[#ffdd00]" />
                Imagem de Fundo:
              </span>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => { setBgChoice('banner_mundo'); }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                    bgChoice === 'banner_mundo'
                      ? 'bg-[#ffdd00] text-[#0a183d]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Banner Anexo (Mundo de Sabor)
                </button>

                <button
                  type="button"
                  onClick={() => { setBgChoice('store_real'); }}
                  className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                    bgChoice === 'store_real'
                      ? 'bg-[#ffdd00] text-[#0a183d]'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Foto Fachada Loja (Mooca)
                </button>

                <label className="px-2.5 py-1 rounded text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors flex items-center gap-1">
                  <span>Subir Outra Imagem</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomUpload}
                    className="hidden"
                  />
                </label>

                {customBgUrl && (
                  <button
                    type="button"
                    onClick={resetToDefaultPhoto}
                    className="text-xs text-red-300 hover:text-red-200 underline cursor-pointer ml-1"
                  >
                    Restaurar original
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Banner Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20 bg-stone-900 aspect-[16/10] group">
              <img
                src={currentPhotoUrl}
                alt={bgChoice === 'store_real' ? "Foto oficial da Fachada Sorvetes Natuice Mooca" : "Banner oficial Sorvetes Natuice - Um Mundo de Sabor Para Você"}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient scrim at bottom for legible badges */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a183d]/95 via-[#0a183d]/20 to-transparent" />

              {/* Zoom button on top-right */}
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(true)}
                className="absolute top-3 right-3 bg-[#0a183d]/80 hover:bg-[#0a183d] text-white p-2 rounded-lg backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md flex items-center gap-1.5 text-xs font-semibold"
                title="Ampliar banner oficial"
              >
                <ZoomIn className="w-3.5 h-3.5 text-[#ffdd00]" />
                <span className="hidden sm:inline">Ver Imagem Completa</span>
              </button>

              {/* Informative caption inside hero frame */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center justify-between text-xs font-light text-blue-200 mb-1.5">
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffdd00]" />
                    {bgChoice === 'store_real' ? `${STORE_INFO.address.neighborhood} · ${STORE_INFO.address.city} - ${STORE_INFO.address.state}` : 'Um Mundo de Sabor Para Você'}
                  </span>
                  <span className="tabular-nums text-[#0a183d] font-bold bg-[#ffdd00] px-2 py-0.5 rounded text-[11px] shadow-xs">
                    {bgChoice === 'store_real' ? 'Loja Mooca' : 'Banner Oficial'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-stone-100">
                  {bgChoice === 'store_real'
                    ? `${STORE_INFO.address.street}, ${STORE_INFO.address.number} · WhatsApp ${STORE_INFO.phones.whatsapp}`
                    : 'Picolés Gourmet, Magg, Copos Recheados, Potes de 2 Litros e Açaí do Pará'}
                </p>
              </div>
            </div>

            {/* Subtle floating trust hallmark */}
            <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:left-6 bg-white text-stone-900 p-3.5 rounded-xl shadow-xl border border-blue-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#122452] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#1a367d]" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-[#122452]">Qualidade Sorvetes Natuice</p>
                <p className="text-[11px] text-stone-600">Direto da fábrica para o consumidor desde 2004</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full Photo Modal / Lightbox */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0a183d] rounded-2xl overflow-hidden border border-blue-400/30 shadow-2xl">
            <div className="p-4 bg-[#122452] flex items-center justify-between border-b border-[#1b3573]">
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-[#ffdd00]" />
                <h3 className="text-sm font-bold text-white">
                  {bgChoice === 'store_real' ? 'Fachada Oficial · Sorvetes Natuice Mooca' : 'Banner Oficial · Sorvetes Natuice - Um Mundo de Sabor Para Você'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black/60 flex items-center justify-center">
              <img
                src={currentPhotoUrl}
                alt={bgChoice === 'store_real' ? "Foto oficial da Loja Sorvetes Natuice Mooca" : "Banner oficial Sorvetes Natuice - Um Mundo de Sabor Para Você"}
                className="max-h-[75vh] w-auto rounded-lg object-contain"
              />
            </div>
            <div className="p-4 bg-[#0a183d] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-blue-200">
              <div>
                <strong className="text-white block">
                  {bgChoice === 'store_real' ? STORE_INFO.address.full : 'Natuice Sorvetes · Um Mundo de Sabor Para Você'}
                </strong>
                <span>Pedidos WhatsApp: {STORE_INFO.phones.whatsapp}</span>
              </div>
              <a
                href={`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${encodeURIComponent('Olá! Vi o banner oficial dos sorvetes Natuice e gostaria de fazer um pedido.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#ffdd00] hover:bg-[#ecc41f] text-[#0a183d] font-bold rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#0a183d]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
