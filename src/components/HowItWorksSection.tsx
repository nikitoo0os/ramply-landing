import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Сбор данных',
    description: 'Высоконагруженный парсинг цен, остатков, отзывов, рекламных позиций с маркетплейсов',
    metric: '100M+ SKU',
  },
  {
    step: '02',
    title: 'Анализ',
    description: 'Обработка данных через ML-модели: расчёт спроса, эластичности, сезонности, конкурентной среды',
    metric: '20+ метрик',
  },
  {
    step: '03',
    title: 'Рекомендации',
    description: 'AI выдаёт готовые решения: какой товар запустить, как скорректировать цену и рекламу',
    metric: '87% точность',
  },
  {
    step: '04',
    title: 'Рост прибыли',
    description: 'Продавец внедряет рекомендации и видит рост выручки, маржи и ROI рекламных кампаний',
    metric: '+35% ср. рост',
  },
];

export function HowItWorksSection() {
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
            Как работает платформа
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            От сырых данных до конкретных решений — непрерывный цикл роста
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 p-6 bg-white border border-slate-200 rounded-2xl shadow-lg">
                  <div className="text-6xl font-bold bg-gradient-to-br from-violet-400 to-purple-600 bg-clip-text text-transparent mb-4 opacity-30">
                    {item.step}
                  </div>
                  
                  <h3 className="text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 rounded-lg">
                    <span className="text-violet-600 text-sm">{item.metric}</span>
                  </div>
                </div>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-violet-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}