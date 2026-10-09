import React from 'react';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/iceCreamData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1736] text-blue-200/90 pt-16 pb-12 border-t border-[#1b3573]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b3573]">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-display text-2xl font-bold text-white tracking-tight">
                Natuice
              </span>
              <span className="text-xs uppercase tracking-widest text-[#ffdd00] font-bold font-outfit">
                Sorvetes
              </span>
              <span className="text-[10px] uppercase tracking-wider text-blue-300 font-medium">
                · Direto da Fábrica
              </span>
            </div>

            <p className="text-sm text-blue-200/80 leading-relaxed max-w-sm font-light">
              Desde setembro de 2004 transformando o dia das famílias em momentos inesquecíveis com mais de 250 sabores de sorvetes, picolés gourmet Magg e puro açaí da Amazônia.
            </p>

            <div className="pt-2 text-xs text-blue-300/70 space-y-1">
              <p>Razão Social: {STORE_INFO.legalName}</p>
              <p>Unidade Mooca · Atacado & Varejo</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#ffdd00] uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-blue-200/80">
              <li>
                <a href="#cardapio" className="hover:text-[#ffdd00] transition-colors">
                  Cardápio de Sorvetes & Picolés
                </a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-[#ffdd00] transition-colors">
                  Linha Magg Gourmet
                </a>
              </li>
              <li>
                <a href="#monte-sua-taca" className="hover:text-[#ffdd00] transition-colors">
                  Monte Sua Taça & Açaí
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-[#ffdd00] transition-colors">
                  História da Marca (Desde 2004)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#ffdd00] transition-colors">
                  Loja Mooca · São Paulo
                </a>
              </li>
            </ul>
          </div>

          {/* Store Address & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#ffdd00] uppercase tracking-wider">
              Loja & Atendimento
            </h4>
            <div className="space-y-2 text-xs text-blue-200/80 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#ffdd00] shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address.street}, {STORE_INFO.address.number} - {STORE_INFO.address.neighborhood}<br />
                  {STORE_INFO.address.city} - {STORE_INFO.address.state} · CEP {STORE_INFO.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" />
                <a 
                  href={`https://wa.me/${STORE_INFO.phones.whatsappRaw}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:underline tabular-nums font-bold text-[#ffdd00]"
                >
                  WhatsApp Pedidos: {STORE_INFO.phones.whatsapp}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-blue-300/70">
                {STORE_INFO.hours.weekdays}<br />
                {STORE_INFO.hours.weekends}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/70">
          <p>© {new Date().getFullYear()} Sorvetes Natuice · Mooca, São Paulo/SP. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={STORE_INFO.social.facebook}
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ffdd00] transition-colors flex items-center gap-1"
            >
              <span>Facebook</span>
            </a>
            <a 
              href={STORE_INFO.social.instagram}
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ffdd00] transition-colors flex items-center gap-1"
            >
              <span>Instagram</span>
            </a>
            <a 
              href={STORE_INFO.shareUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ffdd00] transition-colors"
            >
              Ficha no Google
            </a>
            <a 
              href={STORE_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ffdd00] transition-colors"
            >
              Ver Rotas
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#ffdd00] transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
