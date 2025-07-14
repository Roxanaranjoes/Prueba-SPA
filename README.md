# Event Manager SPA

Una Single Page Application (SPA) desarrollada con **Vite** y **JavaScript puro**, que permite la gestión de eventos por parte de administradores y el registro a eventos por parte de visitantes. Usa `json-server` para simular la base de datos y `localStorage` para la persistencia de sesión.

---

## 📌 Información del coder

- **Nombre:** Roxana Naranjo Estrada
- **Clan:** Linus
- **Correo:** rnaranjo@Unal.edu.co
- **Documento de identidad:** 1001362259

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/event-manager-roxana123.git
cd event-manager-roxana123
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Esto abrirá la app en `http://localhost:5173`.

---

## 💾 Simulación de base de datos con JSON Server

### 1. Instalar json-server globalmente si no lo tienes

```bash
npm install -g json-server
```

### 2. Ejecutar JSON Server

```bash
json-server --watch db.json --port 3000
```

La API estará disponible en `http://localhost:3000`.

---

## 🧪 Usuario administrador por defecto

```json
{
  "email": "admin@example.com",
  "password": "admin123",
  "role": "admin"
}
```

---

## 🧱 Estructura del proyecto

```
src/
├── auth/             # Vistas de login y registro
├── views/            # Vistas de dashboard, crear/editar eventos
├── components/       # Componentes reutilizables
├── services/         # Servicios de sesión, eventos, autenticación
├── styles/           # Estilos CSS
├── main.js           # Punto de entrada
├── router.js         # Sistema de rutas SPA
```

---

## ✅ Funcionalidades principales

- Registro e inicio de sesión con roles
- Rutas protegidas según el rol del usuario
- Persistencia de sesión con `localStorage`
- CRUD completo de eventos para administradores
- Visualización e inscripción a eventos para visitantes
- Manejo de errores y rutas no válidas
- SPA completamente responsiva

---

## 📬 Postman

Incluye una colección Postman para probar los endpoints de usuarios y eventos (`postman_collection.json`).

---

## 📎 Consideraciones

- El nombre del proyecto en `package.json` debe seguir el formato: `nombreapellido123`
- Usa `localStorage` para sesión y `json-server` para persistencia de datos

---

**¡Gracias por revisar este proyecto!**
