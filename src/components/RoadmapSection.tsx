import { motion } from 'motion/react';
import { Code, TestTube, Rocket, TrendingUp } from 'lucide-react';

const roadmapSteps = [
  {
    phase: 'Q1 2026',
    title: 'MVP и тестирование',
    status: 'В процессе',
    statusColor: 'bg-orange-100 text-orange-700 border-orange-200',
    icon: Code,
    items: [
      'Товарный и складской учёт',
      'Базовая интеграция с WB и Ozon',
      'Закрытое бета-тестирование',
      'Сбор обратной связи',
    ],
  },
  {
    phase: 'Q2 2026',
    title: 'Расширение функционала',
    status: 'Планируется',
    statusColor: 'bg-blue-100 text-blue-700 border-blue-200',
    icon: TestTube,
    items: [
      'Полная интеграция с маркетплейсами',
      'Модуль управления рекламой',
      'AI-рекомендации по товарам',
      'Unit-экономика',
    ],
  },
  {
    phase: 'Q4 2026',
    title: 'Публичный запуск',
    status: 'Планируется',
    statusColor: 'bg-violet-100 text-violet-700 border-violet-200',
    icon: Rocket,
    items: [
      'Официальный релиз платформы',
      'Запуск маркетинговой кампании',
      'Открытие продаж по тарифам',
      'Набор первых 100 клиентов',
    ],
  },
  {
    phase: 'Q1 2027',
    title: 'Масштабирование',
    status: 'Планируется',
    statusColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    icon: TrendingUp,
    items: [
      'Выход на рынки Казахстана и Беларуси',
      'Расширение команды разработки',
      'Модуль аналитики и отчётности',
      'Достижение 500+ активных клиентов',
    ],
  },
];

export function RoadmapSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-orange-600" />
            <span className="text-orange-700 text-sm">Дорожная карта развития</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Путь от MVP до лидера рынка
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы точно знаем, как прийти к цели. Инвестиции ускорят развитие и помогут быстрее выйти на рынок
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`px-3 py-1 border rounded-lg text-xs ${step.statusColor}`}>
                    {step.status}
                  </div>
                </div>

                <div className="text-orange-600 text-sm mb-2">{step.phase}</div>
                <h3 className="text-xl text-slate-900 mb-4">{step.title}</h3>

                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connection arrow */}
              {index < roadmapSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-orange-900 to-amber-900 text-white rounded-2xl text-center shadow-2xl"
        >
          <h3 className="text-2xl mb-3">С вашими инвестициями мы ускорим запуск в 2 раза</h3>
          <p className="text-orange-200 mb-6 max-w-2xl mx-auto">
            Дополнительные ресурсы позволят нам нанять сильную команду, ускорить разработку 
            и начать привлечение клиентов уже в Q3 2026
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl mb-1">до 9 мес</div>
              <div className="text-orange-300 text-sm">Ускорение разработки</div>
            </div>
            <div>
              <div className="text-3xl mb-1">5 чел</div>
              <div className="text-orange-300 text-sm">Расширение команды</div>
            </div>
            <div>
              <div className="text-3xl mb-1">₽1.2M</div>
              <div className="text-orange-300 text-sm">Маркетинговый бюджет</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}