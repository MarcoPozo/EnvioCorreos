# 🌙 Moon Studio - Formulario de Contacto con Envío de Correo

Proyecto backend en Node.js + Express que incluye un formulario de contacto funcional, utilizando **Nodemailer** para enviar correos electrónicos. Maquetado con **EJS** y **Tailwind CSS v4**.

---

## 📦 Tecnologías utilizadas

- Node.js
- Express.js
- EJS
- Tailwind CSS v4
- Nodemailer
- dotenv

---

## ⚙ Configuración del entorno

### 1. Clona el repositorio
```bash
git clone https://github.com/MarcoPozo/EnvioCorreos.git
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Crea tu archivo `.env`
Copia el archivo de ejemplo y colócale tus credenciales reales:
```bash
cp .env.example .env
```

### 4. Configura tus variables de entorno en el archivo `.env`:
```env
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_aplicacion
```

> ⚠ **IMPORTANTE:** Usa una **contraseña de aplicación de Gmail**, no tu contraseña personal.  
Para crearla, habilita la **verificación en dos pasos** en tu cuenta de Google y genera una contraseña en [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)



