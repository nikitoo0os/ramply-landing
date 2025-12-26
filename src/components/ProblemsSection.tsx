import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Clock, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: DollarSign,
    title: 'Убыточные запуски',
    description: 'Продавцы выбирают товары интуитивно, без анализа спроса и маржинальности',
  },
  {
    icon: TrendingDown,
    title: 'Неэффективная реклама',
    description: 'До 60% бюджета сливается из-за отсутствия контроля и оптимизации кампаний',
  },
  {
    icon: Clock,
    title: 'Ручная рутина',
    description: 'Обновление цен, отслеживание остатков, работа с отзывами — всё вручную',
  },
  {
    icon: AlertCircle,
    title: 'Фрагментированные данные',
    description: 'Данные разбросаны по кабинетам маркетплейсов, таблицам и сервисам',
  },
];

export function ProblemsSection() {
  return (
    <section className="relative py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Продавцы теряют до{' '}
            <span className="text-red-600">40% потенциальной прибыли</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Рынок маркетплейсов стремительно растёт, но инструменты продавцов остаются архаичными
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-red-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}