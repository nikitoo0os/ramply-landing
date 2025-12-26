import { motion } from 'motion/react';
import { Building2, Users, TrendingUp } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: 'Малый и средний бизнес',
    description: 'Продавцы с оборотом от ₽500K до ₽50M в месяц',
    needs: [
      'Автоматизация рутины',
      'Снижение убытков от ошибок',
      'Масштабирование без найма аналитиков',
    ],
    size: '~80K продавцов в РФ',
  },
  {
    icon: Building2,
    title: 'Корпоративные клиенты',
    description: 'Бренды и ритейлеры с портфелем от 100+ SKU',
    needs: [
      'Управление распределённой командой',
      'Глубокая аналитика по категориям',
      'Интеграция с ERP и учётными системами',
    ],
    size: '~2K компаний',
  },
  {
    icon: TrendingUp,
    title: 'Агентства и консультанты',
    description: 'Маркетинговые и e-commerce агентства',
    needs: [
      'Мультиаккаунт для клиентов',
      'White-label отчёты',
      'API для интеграции в свои системы',
    ],
    size: '~500 агентств',
  },
];

export function TargetAudienceSection() {
  return (
    <section className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Для кого продукт
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Три сегмента с высокой готовностью платить за автоматизацию и рост
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30">
                <audience.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl text-slate-900 mb-2">{audience.title}</h3>
              <p className="text-slate-600 mb-6">{audience.description}</p>
              
              <div className="space-y-3 mb-6">
                {audience.needs.map((need, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm">{need}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-slate-200">
                <div className="text-violet-600 text-sm">Размер рынка</div>
                <div className="text-slate-900 text-lg mt-1">{audience.size}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl text-center shadow-lg"
        >
          <div className="text-4xl text-slate-900 mb-2">82,500+</div>
          <div className="text-slate-600">Потенциальных клиентов на старте (только РФ)</div>
        </motion.div>
      </div>
    </section>
  );
}