import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem, STORE_INFO } from '../data/iceCreamData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryType, setDeliveryType] = useState<'retirada' | 'entrega'>('retirada');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'dinheiro'>('pix');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = deliveryType === 'entrega' ? 8.0 : 0.0;
  const total = subtotal + deliveryFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const itemsSummary = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.quantity}x ${item.name}* (R$ ${(item.price * item.quantity)
            .toFixed(2)
            .replace('.', ',')})\n   ${item.details ? `_Detalhes: ${item.details}_\n` : ''}`
      )
      .join('\n');

    const message = `🍨 *NOVO PEDIDO - SORVETES NATUICE MOOCA / SP* 🍨
----------------------------------------
*Cliente:* ${customerName || 'Não informado'}
*Telefone:* ${customerPhone || 'Não informado'}
*Modalidade:* ${deliveryType === 'retirada' ? 'Retirada na Loja (R. Pires de Campos, 155 - Mooca)' : `Entrega - Endereço: ${customerAddress}`}
*Forma de Pagamento:* ${
      paymentMethod === 'pix' ? 'Chave Pix' : paymentMethod === 'cartao' ? 'Cartão na Entrega/Retirada' : 'Dinheiro'
    }
${notes ? `*Observações:* ${notes}\n` : ''}
----------------------------------------
*ITENS DO PEDIDO:*
${itemsSummary}
----------------------------------------
*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}
${deliveryType === 'entrega' ? `*Taxa de Entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n` : ''}*TOTAL FINAL:* R$ ${total.toFixed(2).replace('.', ',')}

_Enviado pelo site oficial Sorvetes Natuice - Loja Mooca._
Gostaria de confirmar a disponibilidade e o prazo de preparo!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_INFO.phones.whatsappRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-blue-100 flex items-center justify-between bg-blue-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#122452]" />
              <h2 className="font-serif-display text-lg font-bold text-[#122452]">
                Seu Pedido Gelado
              </h2>
              <span className="text-xs text-[#1a367d] font-mono tabular-nums font-bold">
                ({cart.reduce((sum, i) => sum + i.quantity, 0)} itens)
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50 cursor-pointer"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-base font-bold text-stone-800">
                  Seu carrinho está vazio
                </h3>
                <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                  Adicione picolés Magg, açaí, potes de sorvete ou monte uma taça personalizada para saborear.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-5 px-4 py-2 text-xs font-bold text-[#122452] bg-[#ffdd00] rounded-lg hover:bg-[#ecc41f] cursor-pointer shadow-xs"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900 leading-tight">
                          {item.name}
                        </h4>
                        {item.details && (
                          <p className="text-[11px] text-stone-500 mt-1 leading-snug">
                            {item.details}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                        title="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-stone-300 rounded-md bg-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-stone-900 font-mono tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-serif-display text-sm font-bold text-[#122452] tabular-nums">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-[11px] text-stone-400 hover:text-stone-600 underline pt-1 block text-right cursor-pointer"
                >
                  Limpar todos os itens
                </button>
              </div>
            )}

            {/* Delivery & Checkout Form when cart has items */}
            {cart.length > 0 && (
              <form id="checkout-form" onSubmit={handleSendWhatsAppOrder} className="pt-4 border-t border-stone-200 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-stone-900 block mb-1.5">
                    Como deseja receber?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('retirada')}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-left cursor-pointer transition-colors ${
                        deliveryType === 'retirada'
                          ? 'border-[#1a367d] bg-blue-50 text-[#122452] font-bold'
                          : 'border-stone-200 bg-white text-stone-600'
                      }`}
                    >
                      <div className="font-semibold">Retirada na Loja</div>
                      <div className="text-[10px] text-stone-500">R. Pires de Campos, 155 · Mooca</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryType('entrega')}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-left cursor-pointer transition-colors ${
                        deliveryType === 'entrega'
                          ? 'border-[#1a367d] bg-blue-50 text-[#122452] font-bold'
                          : 'border-stone-200 bg-white text-stone-600'
                      }`}
                    >
                      <div className="font-semibold">Entrega / Delivery</div>
                      <div className="text-[10px] text-stone-500">Taxa R$ 8,00</div>
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1a367d]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Telefone / WhatsApp (ex: 11 98231-5188)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1a367d]"
                  />

                  {deliveryType === 'entrega' && (
                    <textarea
                      required
                      placeholder="Endereço Completo (Rua, Número, Bairro/Mooca, Complemento)"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1a367d]"
                    />
                  )}

                  <div>
                    <label className="text-[11px] font-medium text-stone-600 block mb-1">
                      Forma de Pagamento:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-xs">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('pix')}
                        className={`py-1.5 px-2 rounded-md border text-center cursor-pointer text-[11px] ${
                          paymentMethod === 'pix' ? 'border-[#122452] bg-[#122452] text-[#ffdd00] font-bold' : 'border-stone-200 bg-white text-stone-600'
                        }`}
                      >
                        Pix
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('cartao')}
                        className={`py-1.5 px-2 rounded-md border text-center cursor-pointer text-[11px] ${
                          paymentMethod === 'cartao' ? 'border-[#122452] bg-[#122452] text-[#ffdd00] font-bold' : 'border-stone-200 bg-white text-stone-600'
                        }`}
                      >
                        Cartão
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('dinheiro')}
                        className={`py-1.5 px-2 rounded-md border text-center cursor-pointer text-[11px] ${
                          paymentMethod === 'dinheiro' ? 'border-[#122452] bg-[#122452] text-[#ffdd00] font-bold' : 'border-stone-200 bg-white text-stone-600'
                        }`}
                      >
                        Dinheiro
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Observações (ex: mandar colherzinhas, caprichar no morango...)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1a367d]"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Footer & Submit */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-blue-100 bg-stone-50 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono tabular-nums font-medium text-stone-900">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                {deliveryType === 'entrega' && (
                  <div className="flex justify-between">
                    <span>Taxa de Entrega (São Paulo/Região):</span>
                    <span className="font-mono tabular-nums font-medium text-stone-900">
                      R$ {deliveryFee.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-baseline pt-2 border-t border-stone-200 text-sm font-bold text-stone-900">
                  <span>Total Final:</span>
                  <span className="font-serif-display text-xl text-[#122452] font-bold tabular-nums">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3.5 px-4 bg-[#25d366] hover:bg-[#20ba5a] active:bg-[#1caa51] text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
                <span>Finalizar Pedido no WhatsApp</span>
              </button>

              <p className="text-[10px] text-stone-400 text-center">
                Seu pedido será enviado formatado diretamente para a equipe da Sorvetes Natuice.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
