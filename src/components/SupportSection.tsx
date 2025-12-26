import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import fondLogo from 'figma:asset/c6f138688a55dad7b1025feffca588cdf456b78f.png';

export function SupportSection() {
  return (
    <section className="relative py-20 px-6 bg-white border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm">Государственная поддержка</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl shadow-lg"
        >
          <div className="flex-shrink-0">
            <img 
              src={fondLogo} 
              alt="Фонд содействия инновациям" 
              className="h-20 md:h-24"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-700 leading-relaxed">
              Проект создан при поддержке Федерального государственного бюджетного учреждения{' '}
              <span className="font-medium text-slate-900">«Фонд содействия развитию малых форм предприятий в научно-технической сфере»</span>{' '}
              в рамках программы{' '}
              <span className="font-medium text-slate-900">«Студенческий стартап»</span>{' '}
              федерального проекта{' '}
              <span className="font-medium text-slate-900">«Платформа университетского технологического предпринимательства»</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-4 bg-white border border-slate-200 rounded-xl">
            <div className="text-2xl text-slate-900 mb-1">2024</div>
            <div className="text-slate-600 text-sm">Год получения гранта</div>
          </div>
          <div className="text-center p-4 bg-white border border-slate-200 rounded-xl">
            <div className="text-2xl text-slate-900 mb-1">Победитель</div>
            <div className="text-slate-600 text-sm">Студенческий стартап</div>
          </div>
          <div className="text-center p-4 bg-white border border-slate-200 rounded-xl">
            <div className="text-2xl text-slate-900 mb-1">E-commerce</div>
            <div className="text-slate-600 text-sm">Направление проекта</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
