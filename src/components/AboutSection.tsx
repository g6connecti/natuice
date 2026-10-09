import React from 'react';
import { Star, Award, HeartHandshake, Sparkles, Quote } from 'lucide-react';
import { STORE_INFO } from '../data/iceCreamData';

export const AboutSection: React.FC = () => {
  const testimonials = [
    {
      author: 'Camila Mendonça',
      role: 'Cliente Mooca · SP',
      review: 'O picolé Magg Pistache e o sorvete de Abacaxi ao Vinho são imperdíveis! Peço pelo WhatsApp e chega impecável aqui na Mooca.',
      rating: 5,
    },
    {
      author: 'Rodrigo B. Toledo',
      role: 'Comerciante Parceiro',
      review: 'Revendo os picolés e potes Natuice no meu comércio há anos. O giro é impressionante e o atendimento para a região de São Paulo é nota 10.',
      rating: 5,
    },
    {
      author: 'Juliana Sampaio',
      role: 'Frequentadora Assídua',
      review: 'O açaí batido na hora com morango e leite Ninho não tem comparação. Cremosidade sem igual e preço muito justo.',
      rating: 5,
    },
  ];

  return (
    <section id="historia" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold text-[#1a367d] uppercase tracking-wider">
              Nossa Trajetória
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Uma história de paixão pelo sorvete nascida em 2004.
            </h2>
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Em setembro de 2004, a <strong className="font-bold text-[#122452]">Sorvetes Natuice</strong> abriu suas primeiras portas com um propósito simples e nobre: produzir sorvete direto da fábrica com ingredientes puros, frutas selecionadas e o melhor açaí cremoso.
              </p>
              <p>
                Com dedicação diária às receitas tradicionais e investimentos constantes em tecnologia de congelamento rápido, a marca cresceu organicamente. Hoje, são mais de 250 variedades de sabores, 20 linhas de produtos e presença em milhares de lares e estabelecimentos parceiros em São Paulo, Minas Gerais e Rio de Janeiro.
              </p>
              <p>
                A nossa unidade na Mooca traz para a capital paulista toda essa tradição — com balcão completo, picolés por atacado e varejo, e atendimento carinhoso para toda a família.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border-2 border-[#122452] shadow-2xs">
                <div className="font-serif-display text-2xl font-bold text-[#122452] tabular-nums">
                  2004
                </div>
                <div className="text-xs text-stone-500 mt-1">Ano de Fundação</div>
              </div>
              <div className="p-4 bg-white rounded-xl border-2 border-[#122452] shadow-2xs">
                <div className="font-serif-display text-2xl font-bold text-[#122452] tabular-nums">
                  +3.000
                </div>
                <div className="text-xs text-stone-500 mt-1">Pontos de Venda Atendidos</div>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-white rounded-2xl border-2 border-[#122452] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#122452] flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  Polpas de Frutas Frescas
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-12">
                Trabalhamos diretamente com produtores para extrair o melhor de frutas como morango, maracujá, manga e açaí, sem corantes agressivos.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-[#122452] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#122452] flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  Leite Integral & Ingredientes Nobres
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-12">
                Nossos cremes utilizam leite selecionado, chocolate belga, pasta de pistache tostado e leite condensado de primeira linha.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border-2 border-[#122452] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#122452] flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="font-serif-display text-lg font-bold text-stone-900">
                  Mais de 250 Sabores para Todos
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-12">
                Opções sem adição de açúcares para dietas controladas, opções veganas 100% de frutas e criações decadentes para dias de festa.
              </p>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Client Testimonials */}
        <div className="pt-10 border-t border-blue-100">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-bold text-[#1a367d] uppercase tracking-wider mb-1">
              Avaliações Verificadas
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-stone-900">
              O carinho de quem saboreia todo dia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-[#122452] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#d97706] mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffdd00] text-[#d97706]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed mb-4">
                    "{item.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-100">
                  <p className="text-xs font-bold text-stone-900">{item.author}</p>
                  <p className="text-[11px] text-stone-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
