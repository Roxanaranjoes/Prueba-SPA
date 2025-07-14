# Single Page Application - Prueba SPA

A simple and responsive Single Page Application (SPA) built with **Vite** and **vanilla JavaScript**. This project demonstrates routing without frameworks and dynamic content rendering on a single HTML page.

---

## 📌 Project Information

- **Author:** Roxana Naranjo Estrada  
- **Email:** rnaranjo@unal.edu.co  
- **Clan:** Linus  

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Roxanaranjoes/Prueba-SPA.git
cd Prueba-SPA
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to view the app.

---

##  How to Run Locally

1. **Clone the repository or download the ZIP**
2. **Install JSON Server globally (if you haven't):**
   ```bash
   npm install -g json-server
   ```
3. **Navigate to the project folder and run JSON Server:**
   ```bash
   json-server --watch db.json --port 3000
   ```
4. **Open `index.html` in your browser**

## 🧱 Project Structure

```
src/
├── components/       # Reusable UI components
├── views/            # Page views (Home, About, etc.)
├── router/           # SPA route logic
├── styles/           # CSS styles
├── main.js           # Entry point
└── index.html        # Base HTML template
```

---

## 🔧 Features

- SPA routing using the URL hash (`#`)
- Dynamic component rendering
- Modular JavaScript architecture
- Clean and maintainable structure
- Responsive design with basic styling

---

## 📎 Notes

- Built without frameworks such as React or Vue
- Perfect for learning core SPA principles and Vite setup
- Easily extendable with APIs or persistent data

---

## 🧪 Future Improvements

- Add form handling and validation  
- Connect to a backend or fake API (e.g., JSON Server)  
- Improve styles and accessibility

---

**Thanks for checking out this project!**

Feel free to fork or contribute 🛠️
