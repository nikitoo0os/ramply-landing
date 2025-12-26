# Используем Node.js LTS
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копируем package.json и lock-файл
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Открываем порт приложения
EXPOSE 3000

# Запуск dev-сервера
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
