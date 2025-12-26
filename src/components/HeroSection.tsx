import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-200/40 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 border border-violet-200 rounded-full mb-8"
        >
          <Zap className="w-4 h-4 text-violet-600" />
          <span className="text-violet-700 text-sm">Интеллектуальная ERP для маркетплейсов RAMPLY</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl text-slate-900 mb-6 max-w-4xl mx-auto leading-tight"
        >
          Полный контроль над торговлей на{' '}
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Wildberries и Ozon
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          От подбора прибыльных товаров до автоматизации рекламы. 
          Единая платформа для роста выручки и снижения убытков.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-violet-600/30">
            Запросить презентацию
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl transition-colors border border-slate-200 shadow-sm">
            Демо платформы
          </button>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-2">2</div>
            <div className="text-slate-600 text-sm">Маркетплейса</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-2">∞</div>
            <div className="text-slate-600 text-sm">Масштабирование</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-slate-900 mb-2 flex items-center justify-center gap-1">
              <TrendingUp className="w-8 h-8 text-emerald-500" />
              35%
            </div>
            <div className="text-slate-600 text-sm">Рост прибыли</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}