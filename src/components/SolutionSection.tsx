import { motion } from 'motion/react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const benefits = [
  'Товарный и складской учёт в одной системе',
  'Единый центр управления Wildberries и Ozon',
  'AI-рекомендации на основе анализа спроса',
  'Автоматизация рекламы и ценообразования',
  'Прогнозирование прибыльности товаров',
  'Интеграция в реальном времени',
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 text-sm">Единая платформа</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
              Всё для роста выручки в одном окне
            </h2>
            
            <p className="text-xl text-slate-600 mb-8">
              RAMPLY объединяет аналитику, автоматизацию и прогнозирование. 
              Продавец видит полную картину бизнеса и получает готовые рекомендации для действий.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl border border-slate-200 p-8 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-slate-600 text-sm">Сегодня</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="text-slate-600 text-xs mb-2">Выручка</div>
                    <div className="text-slate-900 text-2xl">₽1.2M</div>
                    <div className="text-emerald-600 text-xs mt-1">+23.4%</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <div className="text-slate-600 text-xs mb-2">ROI рекламы</div>
                    <div className="text-slate-900 text-2xl">340%</div>
                    <div className="text-emerald-600 text-xs mt-1">+12.1%</div>
                  </div>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="text-slate-900 text-sm mb-1">AI рекомендует</div>
                      <div className="text-slate-600 text-xs">
                        Снизить ставку на «Женские кроссовки» до ₽45. Прогноз: +₽18K прибыли
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {[65, 82, 45].map((value, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-slate-600 text-xs w-20">Товар {i + 1}</div>
                      <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                          style={{ width: `${value}%` }}
                        ></div>
                      </div>
                      <div className="text-slate-600 text-xs w-12 text-right">{value}%</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl blur-xl -z-10 opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}