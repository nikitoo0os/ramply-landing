import { motion } from 'motion/react';
import { Check, X, Zap, Crown, Sparkles, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Базовый',
    price: 'Бесплатно',
    period: '',
    description: 'Для старта и знакомства с платформой',
    icon: Sparkles,
    color: 'from-slate-500 to-slate-600',
    popular: false,
    features: [
      { name: 'Товарный учёт', available: true },
      { name: 'До 100 вариантов товара', available: true },
      { name: 'Интеграция с МП (выгрузка)', available: true },
      { name: '1 пользователь', available: true },
      { name: 'Работа с одной организацией', available: true },
      { name: 'Отчёт по номенклатурам (с в/з)', available: true },
      { name: 'Управление сотрудниками', available: false },
      { name: 'Аналитика', available: false },
      { name: 'Unit-экономика', available: false },
    ],
  },
  {
    name: 'Старт',
    price: '990',
    period: '₽/месяц',
    description: 'Для малого бизнеса и начинающих продавцов',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      { name: 'Товарный учёт', available: true },
      { name: 'До 500 вариантов товара', available: true },
      { name: 'Интеграция с МП (выгрузка)', available: true },
      { name: 'До 5 сотрудников', available: true },
      { name: 'Работа с веткой компании', available: true },
      { name: 'Делегирование прав', available: true },
      { name: 'Unit-экономика', available: true },
      { name: 'Подбор товаров (до трёх запросов в день)', available: true },
      { name: 'Аналитика артикула (до трёх запросов в день)', available: true },
      { name: 'Анализ рекламных показателей', available: true },
      { name: 'Отчёт по номенклатурам', available: true },
    ],
  },
  {
    name: 'Средний',
    price: '2 990',
    period: '₽/месяц',
    description: 'Для растущего бизнеса с большим ассортиментом',
    icon: Crown,
    color: 'from-violet-500 to-purple-600',
    popular: true,
    features: [
      { name: 'Товарный учёт', available: true },
      { name: 'До 10 000 вариантов товара', available: true },
      { name: 'Полная интеграция с МП', available: true },
      { name: 'До 15 сотрудников', available: true },
      { name: 'Работа с веткой компании', available: true },
      { name: 'Делегирование прав', available: true },
      { name: 'Unit-экономика', available: true },
      { name: 'Подбор товаров (до 5 запросов в день)', available: true },
      { name: 'Аналитика артикула (до 5 запросов в день)', available: true },
      { name: 'Оптимизация рекламных расходов', available: true },
      { name: 'Отчёт по номенклатурам', available: true },
    ],
  },
  {
    name: 'Профессиональный',
    price: '4 490',
    period: '₽/месяц',
    description: 'Для крупных продавцов и команд',
    icon: Rocket,
    color: 'from-orange-500 to-amber-600',
    popular: false,
    features: [
      { name: 'Товарный учёт', available: true },
      { name: 'До 100 000 вариантов товара', available: true },
      { name: 'Полная интеграция с МП', available: true },
      { name: 'До 100 сотрудников', available: true },
      { name: 'Работа с веткой компании', available: true },
      { name: 'Делегирование прав', available: true },
      { name: 'Тайм-менеджмент', available: true },
      { name: 'Unit-экономика', available: true },
      { name: 'Подбор товаров (до 30 запросов в день)', available: true },
      { name: 'Аналитика артикула (до 30 запросов в день)', available: true },
      { name: 'Оптимизация рекламных расходов', available: true },
      { name: 'Отчёт по номенклатурам', available: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Планируемые тарифы
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Гибкая монетизационная модель для быстрого масштабирования после запуска
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 bg-white rounded-2xl transition-all ${
                plan.popular
                  ? 'border-2 border-violet-500 shadow-2xl shadow-violet-500/20 scale-105'
                  : 'border border-slate-200 hover:border-slate-300 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm rounded-full shadow-lg">
                  Популярный
                </div>
              )}

              <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm mb-6 h-10">{plan.description}</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-600 text-sm">{plan.period}</span>}
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-xl transition-all mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                {plan.price === 'Бесплатно' ? 'Ранний доступ' : 'Зарезервировать'}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.available ? (
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.available ? 'text-slate-700' : 'text-slate-400'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl text-center"
        >
          <h3 className="text-2xl text-slate-900 mb-3">Финальная монетизация в разработке</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Мы тестируем различные модели ценообразования с фокус-группами. 
            Для крупных клиентов планируем индивидуальные Enterprise-решения с приоритетной поддержкой.
          </p>
          <a 
            href="tel:+79615698960"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-all"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </section>
  );
}