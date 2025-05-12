# Техническое руководство: Создание чат-ассистента с использованием Streamlit, Groq и модели Llama 3

## Введение

В этом руководстве мы создадим простого чат-ассистента, используя следующие технологии:
- **Streamlit** - для веб-интерфейса
- **Groq API** - для доступа к языковым моделям
- **Llama 3** - языковая модель от Meta

## 1. Обзор технологий

### 1.1 Llama 3
Llama 3 - это семейство языковых моделей с открытым исходным кодом, разработанное Meta (Facebook). Ключевые особенности:
- Доступны модели разного размера (8B, 70B параметров)
- Оптимизированы для диалоговых интерфейсов
- Поддерживают длинный контекст (до 8k токенов)
- Могут работать локально или через API

### 1.2 Streamlit
Streamlit - это фреймворк для быстрого создания веб-приложений на Python. Особенности:
- Простота использования (не требует знаний фронтенда)
- Встроенные компоненты для ML-приложений
- Поддержка интерактивных элементов
- Горячая перезагрузка при изменении кода

### 1.3 Groq
Groq - это платформа для запуска LLM с высокой производительностью. Особенности:
- Собственные аппаратные ускорители для AI
- Быстрые ответы (до 500 токенов/сек)
- Простое API для работы с моделями
- Поддержка Llama 3 и других популярных моделей

## 2. Предварительные требования

Перед началом убедитесь, что у вас есть:
1. Аккаунт на [Groq Cloud](https://console.groq.com/) (для получения API ключа)
2. Python 3.7 или новее
3. pip (менеджер пакетов Python)

## 3. Пошаговая инструкция

### Шаг 1: Установка зависимостей

Создайте новый Python-проект и установите необходимые пакеты:

```bash
pip install streamlit groq python-dotenv
```
### Шаг 2: Настройка конфигурции 

Создайте файл config.json для хранения API ключа:
```
{
  "GROQ_API_KEY": "ваш_api_ключ_здесь"
}
```
### Шаг 3: Создание основного приложения
Используйте следующие источники:
<https://blog.streamlit.io/how-to-build-a-llama-2-chatbot/>

<https://youtu.be/jR1ZQQ5W07M>

<https://habr.com/ru/articles/825678/>

<https://lobehub.com/ru/blog/use-lobechat-ui-for-llama-3-on-groq>

Пример начала кода
```
import os
import json

import streamlit as st
from groq import Groq


# streamlit page configuration
st.set_page_config(
    page_title="Your personal assistant",
    page_icon="😊",
    layout="centered"
)

working_dir = os.path.dirname(os.path.abspath(__file__))
config_data = json.load(open(f"{working_dir}/config.json"))

GROQ_API_KEY = config_data["GROQ_API_KEY"]

# save the api key to environment variable
os.environ["GROQ_API_KEY"] = GROQ_API_KEY

client = Groq()
```
