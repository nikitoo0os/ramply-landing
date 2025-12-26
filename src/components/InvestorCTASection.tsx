import { motion } from 'motion/react';
import { ArrowRight, Mail, FileText, Calendar } from 'lucide-react';

export function InvestorCTASection() {
  return (
    <section id="investors" className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-violet-100 via-purple-50 to-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 border border-violet-200 rounded-full mb-8">
            <span className="text-violet-700 text-sm">Инвестиционная возможность</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl text-slate-900 mb-6">
            Присоединяйтесь к росту рынка маркетплейсов
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Мы ищем стратегического инвестора для масштабирования на рынки СНГ и развития AI-функционала. 
            Раунд Seed: $2M на 18 месяцев до точки безубыточности.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FileText, label: 'Pitch Deck', action: 'Скачать презентацию' },
              { icon: Calendar, label: 'Demo', action: 'Запланировать встречу' },
              { icon: Mail, label: 'Contact', action: 'investors@ramply.io' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-violet-300 hover:shadow-lg transition-all cursor-pointer group"
              >
                <item.icon className="w-8 h-8 text-violet-600 mx-auto mb-4" />
                <div className="text-slate-600 text-sm mb-2">{item.label}</div>
                <div className="text-slate-900 text-sm group-hover:text-violet-600 transition-colors">{item.action}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl transition-all flex items-center gap-2 shadow-2xl shadow-violet-600/30 text-lg">
              Запросить инвестиционные материалы
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <div className="mt-16 pt-16 border-t border-violet-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: 'Seed', label: 'Стадия' },
                { value: '$2M', label: 'Объём раунда' },
                { value: '15-20%', label: 'Доля' },
                { value: '18 мес', label: 'До break-even' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}