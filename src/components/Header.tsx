import { motion } from 'motion/react';
import logo from 'figma:asset/6b5d52ba0b92f9fa3560dbacf039469db188d4d5.png';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RAMPLY" className="h-8" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solution" className="text-slate-600 hover:text-slate-900 transition-colors">Решение</a>
          <a href="#modules" className="text-slate-600 hover:text-slate-900 transition-colors">Модули</a>
          <a href="#technology" className="text-slate-600 hover:text-slate-900 transition-colors">Технологии</a>
          <a href="#investors" className="text-slate-600 hover:text-slate-900 transition-colors">Инвесторам</a>
        </nav>
        
        <button className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
          Связаться
        </button>
      </div>
    </motion.header>
  );
}