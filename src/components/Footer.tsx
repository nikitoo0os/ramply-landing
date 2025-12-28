import logo from 'figma:asset/6b5d52ba0b92f9fa3560dbacf039469db188d4d5.png';

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="RAMPLY" className="h-8" />
            </div>
            <p className="text-slate-600 text-sm">
              Интеллектуальная ERP для продавцов маркетплейсов
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Интеграции</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Блог</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 mb-4">Инвесторам</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Pitch Deck</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Финансы</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Команда</a></li>
              <li><a href="tel:+79615698960" className="hover:text-slate-900 transition-colors">+7 (961) 569-89-60</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 RAMPLY. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}