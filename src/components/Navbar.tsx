import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, MapPin, Clock, Menu, X } from 'lucide-react';
import { STORE_INFO, CartItem } from '../data/iceCreamData';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, onOpenCart, onOpenBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Check opening status based on Brazil standard time (America/Sao_Paulo)
  const isStoreOpen = (): { open: boolean; label: string } => {
    try {
      const now = new Date();
      // Formatter for SP time
      const spHour = parseInt(
        new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', hour12: false, timeZone: 'America/Sao_Paulo' }).format(now),
        10
      );
      const spMinute = parseInt(
        new Intl.DateTimeFormat('pt-BR', { minute: 'numeric', timeZone: 'America/Sao_Paulo' }).format(now),
        10
      );
      const spDay = new Intl.DateTimeFormat('pt-BR', { weekday: 'short', timeZone: 'America/Sao_Paulo' }).format(now).toLowerCase();
      
      const isWeekend = spDay.startsWith('sáb') || spDay.startsWith('dom');
      const closingHour = isWeekend ? 21.5 : 20.0;
      const currentDecimal = spHour + spMinute / 60;

      if (currentDecimal >= 10.0 && currentDecimal < closingHour) {
        return {
          open: true,
          label: `Aberto agora · Fecha às ${isWeekend ? '21:30' : '20:00'}`,
        };
      }
      return {
        open: false,
        label: 'Fechado no momento · Abre às 10:00',
      };
    } catch {
      return { open: true, label: 'Aberto · 10:00 às 20:00' };
    }
  };

  const status = isStoreOpen();

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent('Olá! Gostaria de saber os sabores disponíveis hoje na Sorvetes Natuice Mooca.');
    window.open(`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-[#122452] text-blue-100 text-xs px-4 py-1.5 flex items-center justify-between font-normal tracking-wide border-b border-[#1b3573]">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${status.open ? 'bg-[#ffdd00] animate-pulse' : 'bg-rose-400'}`} />
            <span className="font-medium text-white">{status.label}</span>
            <span className="hidden sm:inline text-blue-300/60">·</span>
            <span className="hidden sm:inline text-[#ffdd00] font-medium">{STORE_INFO.address.neighborhood}, {STORE_INFO.address.city} - {STORE_INFO.address.state}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-blue-200">
            <span className="hidden md:inline text-blue-200/90">Direto da Fábrica · {STORE_INFO.address.street}, {STORE_INFO.address.number}</span>
            <a 
              href={`https://wa.me/${STORE_INFO.phones.whatsappRaw}`} 
              target="_blank" 
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 font-semibold text-[#ffdd00]"
            >
              <MessageCircle className="w-3 h-3 text-[#25d366]" />
              WhatsApp {STORE_INFO.phones.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-zone Header Contract */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element in display face with storefront vibe) */}
        <a href="#inicio" className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a367d] rounded-sm">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#122452] group-hover:text-[#1a367d] transition-colors">
              Natuice
            </span>
            <span className="text-xs uppercase tracking-wider text-[#d97706] font-bold font-outfit">
              Sorvetes
            </span>
          </div>
          <span className="hidden md:inline-block text-[10px] uppercase tracking-widest text-[#1a367d] font-bold bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
            Mooca · Fábrica & Gelateria
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <a href="#cardapio" className="hover:text-[#1a367d] transition-colors py-1">
            Cardápio & Linhas
          </a>
          <a href="#destaques" className="hover:text-[#1a367d] transition-colors py-1">
            Linha Magg & Açaí
          </a>
          <button 
            type="button"
            onClick={onOpenBuilder} 
            className="hover:text-[#1a367d] transition-colors py-1 cursor-pointer font-bold text-[#1a367d]"
          >
            Monte Sua Taça
          </button>
          <a href="#historia" className="hover:text-[#1a367d] transition-colors py-1">
            Nossa História
          </a>
          <a href="#localizacao" className="hover:text-[#1a367d] transition-colors py-1">
            Unidade Mooca - SP
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Abrir carrinho de compras"
            className="relative p-2.5 text-stone-700 hover:text-[#122452] hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#122452]" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ffdd00] text-[#122452] font-mono text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm border border-blue-900/20">
                {totalCartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#122452] bg-[#ffdd00] hover:bg-[#ecc41f] active:bg-[#d9b218] rounded-lg transition-colors whitespace-nowrap shadow-sm cursor-pointer border border-[#f0c922]"
          >
            <MessageCircle className="w-4 h-4 text-[#122452]" />
            <span>Pedir no WhatsApp</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:bg-stone-100 rounded-lg"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <a 
              href="#cardapio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-800"
            >
              Cardápio & Linhas de Sorvete
            </a>
            <a 
              href="#destaques" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-800"
            >
              Linha Magg & Açaí Artesanal
            </a>
            <button 
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuilder();
              }}
              className="text-left py-1 text-[#1a367d] font-bold"
            >
              Monte Sua Taça Personalizada
            </button>
            <a 
              href="#historia" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1a367d]"
            >
              Sobre a Fábrica (Desde 2004)
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#1a367d]"
            >
              Unidade Mooca (SP)
            </a>
          </nav>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-[#122452] bg-[#ffdd00] hover:bg-[#ecc41f] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#122452]" />
              Pedir pelo WhatsApp ({STORE_INFO.phones.whatsapp})
            </button>
            <a
              href={STORE_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200"
            >
              <MapPin className="w-4 h-4 text-stone-500" />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
