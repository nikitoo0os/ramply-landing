import { motion } from 'motion/react';
import { Server, Cpu, Lock, Zap, Cloud, Shield } from 'lucide-react';

const advantages = [
  {
    icon: Server,
    title: 'Высоконагруженная архитектура',
    description: 'Масштабируемая микросервисная инфраструктура на Kubernetes с горизонтальным масштабированием',
  },
  {
    icon: Cpu,
    title: 'ML-модели прогнозирования',
    description: 'Собственные алгоритмы предсказания спроса на основе временных рядов и факторного анализа',
  },
  {
    icon: Zap,
    title: 'Real-time обработка',
    description: 'Событийная архитектура (Kafka) для обработки данных в режиме реального времени',
  },
  {
    icon: Cloud,
    title: 'Распределённое хранилище',
    description: 'Горячие данные в PostgreSQL, аналитические — в ClickHouse для быстрых запросов',
  },
  {
    icon: Shield,
    title: 'Безопасность данных',
    description: 'Шифрование на всех уровнях, изоляция клиентов, SOC 2 Type II compliance',
  },
  {
    icon: Lock,
    title: 'API-first подход',
    description: 'Открытое API для интеграций, вебхуки, GraphQL для гибких запросов',
  },
];

export function TechAdvantagesSection() {
  return (
    <section id="technology" className="relative py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">
            Технологическое преимущество
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Платформа построена на Enterprise-уровне технологий с акцентом на надёжность и производительность
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-violet-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-slate-900 mb-2">{advantage.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-white border border-slate-200 rounded-2xl shadow-lg"
        >
          <h3 className="text-slate-900 text-xl mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['React', 'Node.js', 'Python', 'PostgreSQL', 'ClickHouse', 'Kafka', 'Kubernetes', 'Redis', 'TensorFlow', 'GraphQL'].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm hover:border-violet-300 hover:text-slate-900 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}