import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Clock, Phone, MessageCircle, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/iceCreamData';

const STORE_COORDINATES = {
  lat: -23.55388,
  lng: -46.59864,
};

export const StoreLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(true);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(STORE_INFO.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${STORE_INFO.name}, ${STORE_INFO.address.full}`
  )}`;

  return (
    <section id="localizacao" className="py-16 bg-stone-50/70 border-t border-stone-200 scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#122452] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Localização da Gelateria & Fábrica</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-extrabold text-[#122452] tracking-tight">
            Venha nos Visitar na Mooca
          </h2>

          {/* Destaque Marcante do Texto de Retirada & Experiência */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/95 via-yellow-50/80 to-blue-50/90 border-2 border-[#122452] shadow-sm text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#122452] text-[#ffdd00] text-[11px] font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ffdd00]" />
              <span>Experiência Direto da Fábrica</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#122452] leading-snug max-w-2xl mx-auto">
              “Retire seu pedido feito pelo site ou desfrute dos nossos mais de 250 sabores diretamente na nossa loja de fábrica tradicional.”
            </p>
          </div>

          {/* Linha Exclusiva para os Atalhos das Redes Sociais (Facebook e Instagram) */}
          <div className="mt-5 pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <span>Canais Oficiais da Loja:</span>
            </span>

            {/* Atalho Facebook */}
            <a
              href={STORE_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border-2 border-[#122452] hover:bg-[#1877F2]/5 hover:border-[#1877F2] text-[#122452] hover:text-[#1877F2] transition-all shadow-xs hover:shadow-md cursor-pointer"
              title="Abrir página do Facebook: @brico.altodamooca"
            >
              <span className="w-6 h-6 rounded-md bg-[#1877F2] text-white flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-stone-400 group-hover:text-[#1877F2]/70 leading-none">Facebook</span>
                <span className="text-xs font-bold leading-tight">@brico.altodamooca</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#1877F2] ml-0.5" />
            </a>

            {/* Atalho Instagram */}
            <a
              href={STORE_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border-2 border-[#122452] hover:bg-pink-50 hover:border-[#E4405F] text-[#122452] hover:text-[#E4405F] transition-all shadow-xs hover:shadow-md cursor-pointer"
              title="Abrir localização no Instagram: Natuice Pires de Campos"
            >
              <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-stone-400 group-hover:text-[#E4405F]/70 leading-none">Instagram</span>
                <span className="text-xs font-bold leading-tight">Natuice Pires de Campos</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#E4405F] ml-0.5" />
            </a>
          </div>
        </div>

        {/* Main Grid: Info Cards (Left) + Interactive Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Primary Details Card with border-2 border-[#122452] */}
            <div className="bg-white rounded-2xl border-2 border-[#122452] p-6 shadow-xs space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706] block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="font-serif-display text-xl font-bold text-[#122452]">
                  {STORE_INFO.name} · Mooca
                </h3>
                <p className="text-sm text-stone-700 mt-2 leading-relaxed font-medium">
                  {STORE_INFO.address.street}, {STORE_INFO.address.number}
                </p>
                <p className="text-xs text-stone-500">
                  {STORE_INFO.address.neighborhood} · {STORE_INFO.address.city} - {STORE_INFO.address.state}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  CEP: {STORE_INFO.address.zip}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-1 border-t border-stone-100">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Copiar endereço completo"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>

                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#122452] hover:bg-[#1a367d] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#ffdd00]" />
                  <span>Traçar Rota</span>
                  <ExternalLink className="w-3 h-3 text-blue-200 ml-0.5" />
                </a>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#122452]">
                  <Clock className="w-4 h-4 text-[#d97706]" />
                  <span>Horário de Funcionamento</span>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/80 text-xs text-stone-700 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Segunda a Sexta:</span>
                    <span className="font-semibold text-stone-900">10:00 às 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-500">Sábados, Domingos e Feriados:</span>
                    <span className="font-semibold text-[#122452]">10:00 às 21:30</span>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#122452]">
                  <Phone className="w-4 h-4 text-[#d97706]" />
                  <span>Contato & Encomendas</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${encodeURIComponent(
                      'Olá! Gostaria de informações sobre retirada de pedidos na loja da Mooca.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    WhatsApp {STORE_INFO.phones.whatsapp}
                  </a>
                </div>
              </div>

            </div>

            {/* Parking & Pickup Banner with border-2 border-[#122452] */}
            <div className="bg-white rounded-xl border-2 border-[#122452] p-4 shadow-2xs text-xs text-stone-600 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#122452] font-bold flex items-center justify-center shrink-0 border border-blue-200">
                P
              </span>
              <div>
                <p className="font-bold text-[#122452]">Fácil Acesso & Retirada Express</p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Vagas rápidas na porta para retirada de potes, caixas de picolés e taças montadas.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Box Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border-2 border-[#122452] overflow-hidden shadow-md h-full flex flex-col min-h-[460px] relative">
              
              {/* Map Title Bar */}
              <div className="bg-[#122452] px-4 py-3 flex items-center justify-between text-white border-b border-[#1b3573]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ffdd00]" />
                  <span className="font-medium text-xs sm:text-sm">
                    Mapa Interativo · Sorvetes Natuice Mooca
                  </span>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#ffdd00] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Container */}
              <div className="relative flex-1 w-full h-[400px] sm:h-[450px] lg:h-full min-h-[380px]">
                {apiKey ? (
                  <APIProvider apiKey={apiKey} libraries={['marker']}>
                    <Map
                      mapId="DEMO_MAP_ID"
                      defaultCenter={STORE_COORDINATES}
                      defaultZoom={16}
                      gestureHandling="cooperative"
                      disableDefaultUI={false}
                      className="w-full h-full"
                      internalUsageAttributionIds={['gmp_git_agentskills_v1']}
                    >
                      <AdvancedMarker
                        position={STORE_COORDINATES}
                        title="Sorvetes Natuice - Mooca"
                        onClick={() => setIsInfoOpen(true)}
                      >
                        <Pin
                          background="#122452"
                          glyphColor="#ffdd00"
                          borderColor="#ffdd00"
                          scale={1.2}
                        />
                      </AdvancedMarker>

                      {isInfoOpen && (
                        <InfoWindow
                          position={STORE_COORDINATES}
                          onCloseClick={() => setIsInfoOpen(false)}
                        >
                          <div className="p-1 max-w-[220px] text-stone-900">
                            <p className="font-bold text-xs text-[#122452]">Sorvetes Natuice</p>
                            <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                              R. Pires de Campos, 155 - Mooca
                            </p>
                            <p className="text-[10px] text-stone-500 mt-1">
                              Aberto até às 20:00 (Fins de semana até às 21:30)
                            </p>
                            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
                              <a
                                href={googleMapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-[#122452] font-bold hover:underline flex items-center gap-1"
                              >
                                <span>Como chegar</span>
                                <Navigation className="w-2.5 h-2.5 text-[#d97706]" />
                              </a>
                            </div>
                          </div>
                        </InfoWindow>
                      )}
                    </Map>
                  </APIProvider>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-100 text-stone-500 text-center">
                    <MapPin className="w-10 h-10 text-[#122452] mb-2 animate-bounce" />
                    <p className="text-sm font-semibold text-stone-800">
                      Rua Pires de Campos, 155 - Mooca, São Paulo - SP
                    </p>
                    <p className="text-xs text-stone-500 mt-1 max-w-sm">
                      Carregando mapa interativo da Sorvetes Natuice...
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Quick Bar */}
              <div className="bg-stone-50 border-t border-stone-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Próximo à Av. Paes de Barros e Rua da Mooca
                </span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#122452] hover:text-[#1a367d] flex items-center gap-1"
                >
                  Abrir navegação GPS <ExternalLink className="w-3 h-3 text-[#d97706]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
