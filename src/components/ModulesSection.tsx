import { motion } from 'motion/react';
import { Database, BarChart3, Megaphone, Lightbulb, ArrowRight } from 'lucide-react';

const modules = [
  {
    icon: Database,
    title: 'Товарный и складской учёт',
    description: 'Полный контроль остатков, партий, перемещений товара. Автоматизация инвентаризации и управление складом',
    features: ['Учёт остатков по складам', 'Партионный учёт', 'Автоматическая инвентаризация', 'Контроль перемещений'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Интеграция с маркетплейсами',
    description: 'Двусторонняя синхронизация товаров, заказов, остатков и финансов с WB и Ozon',
    features: ['API v3 Wildberries', 'Seller API Ozon', 'Синхронизация в реальном времени', 'Автообновление данных'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Аналитика и отчётность',
    description: 'Сквозная аналитика продаж, юнит-экономики, ABC-XYZ анализ, когортные отчёты',
    features: ['Дашборды в реальном времени', 'Сравнение периодов', 'Экспорт отчётов', 'Прогнозы спроса'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Megaphone,
    title: 'Управление рекламой',
    description: 'Автоматизация рекламных кампаний, оптимизация ставок, ROI-анализ по каждой SKU',
    features: ['Автостратегии ставок', 'A/B тестирование', 'Контроль бюджетов', 'Отчёты по эффективности'],
    color: 'from-orange-500 to-amber-500',
  },
];

export function ModulesSection() {
  return (
    <section id="modules" className="relative py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Четыре модуля — полный цикл торговли
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Каждый модуль решает кртическую задачу продавца и работает в связке с остальными
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <module.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl text-slate-900 mb-3">{module.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{module.description}</p>
              
              <div className="space-y-2 mb-6">
                {module.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-orange-600 group-hover:gap-3 transition-all">
                <span className="text-sm">Подробнее</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity -z-10`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}