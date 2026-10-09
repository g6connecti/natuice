import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductLineShowcase } from './components/ProductLineShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { CustomSundaeBuilder } from './components/CustomSundaeBuilder';
import { StoreLocation } from './components/StoreLocation';
import { AboutSection } from './components/AboutSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Product, CartItem } from './data/iceCreamData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('natuice_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('natuice_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          details: product.volumeOrWeight,
          image: product.image,
        },
      ];
    });
    showToast(`"${product.name}" adicionado ao carrinho!`);
  };

  const handleAddCustomItem = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    showToast('Sua taça personalizada foi adicionada ao carrinho!');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToBuilder = () => {
    const el = document.getElementById('monte-sua-taca');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHero = (cat: string) => {
    setSelectedCategory(cat);
    const el = document.getElementById('cardapio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-[#ffdd00] selection:text-[#122452]">
      {/* 3-Zone Navigation */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBuilder={scrollToBuilder}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenBuilder={scrollToBuilder} />

        {/* 3 Pillars Spotlight Showcase */}
        <ProductLineShowcase onSelectCategory={handleSelectCategoryFromHero} />

        {/* Filterable Menu & Product Grid */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Interactive Custom Sundae & Acai Builder */}
        <CustomSundaeBuilder onAddCustomItemToCart={handleAddCustomItem} />

        {/* Store Location & Interactive Google Maps */}
        <StoreLocation />

        {/* Brand History, Values & Client Proof */}
        <AboutSection />
      </main>

      {/* Modern Clean Footer */}
      <Footer />

      {/* Cart & WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Subtle Toast Feedback with Brand Colors */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#122452] text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-[#ffdd00]/40 animate-in fade-in slide-in-from-bottom-2 duration-200 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ffdd00] animate-pulse" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
