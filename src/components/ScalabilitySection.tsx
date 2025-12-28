import { motion } from 'motion/react';
import { Globe2, Layers, Workflow, Rocket } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const growthData = [
  { month: 'Q1 2026', revenue: 0.2 },
  { month: 'Q2 2026', revenue: 0.8 },
  { month: 'Q3 2026', revenue: 1.8 },
  { month: 'Q4 2026', revenue: 3.2 },
  { month: 'Q1 2027', revenue: 5.5 },
  { month: 'Q2 2027', revenue: 8.5 },
  { month: 'Q3 2027', revenue: 12 },
  { month: 'Q4 2027', revenue: 16 },
  { month: 'Q1 2028', revenue: 21 },
  { month: 'Q2 2028', revenue: 27 },
];

const scalingVectors = [
  {
    icon: Globe2,
    title: 'Географическая экспансия',
    description: 'Выход на рынки Казахстана и Беларуси с локальными маркетплейсами',
  },
  {
    icon: Layers,
    title: 'Расширение интеграций',
    description: 'AliExpress, Яндекс.Маркет, собственные e-commerce платформы',
  },
  {
    icon: Workflow,
    title: 'Вертикальная интеграция',
    description: 'Модули логистики, CRM для продавцов, финансирование товарных запасов',
  },
  {
    icon: Rocket,
    title: 'Платформнная модель',
    description: 'Интеграция с внешними сервисами: складами, доставкой, аналитикой и рекламой',
  },
];

export function ScalabilitySection() {
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
            Потенциал масштабирования
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Консервативный прогноз органического роста с фокусом на качество продукта
          </p>
        </motion.div>
        
        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 bg-white border border-slate-200 rounded-2xl shadow-lg"
        >
          <h3 className="text-slate-900 text-xl mb-6">Прогнозируемый рост выручки (млн ₽)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  color: '#0f172a'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fill="url(#revenueGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
        
        {/* Scaling Vectors */}
        <div className="grid md:grid-cols-2 gap-6">
          {scalingVectors.map((vector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-orange-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <vector.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 text-lg mb-2">{vector.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{vector.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'TAM', value: '$2.4B', sublabel: 'РФ + СНГ' },
            { label: 'CAC', value: '₽15K', sublabel: 'прогноз' },
            { label: 'LTV', value: '₽180K', sublabel: 'прогноз за 3 года' },
            { label: 'Churn', value: '5.8%', sublabel: 'цель годовой' },
          ].map((metric, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl text-center shadow-md">
              <div className="text-slate-600 text-sm mb-2">{metric.label}</div>
              <div className="text-3xl text-slate-900 mb-1">{metric.value}</div>
              <div className="text-slate-500 text-xs">{metric.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}