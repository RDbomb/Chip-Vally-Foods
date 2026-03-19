# 🍟 Chip Valley Food Website

A modern **product showcase + redirect-based food website** built for **Chip Valley**, where users can explore products and purchase them from external platforms like Amazon, Flipkart, etc.

---

## 🚀 Project Overview

This website is designed to:

- Display all food products from different brands
- Show product details (images, description, category)
- Provide multiple “Buy From” options
- Redirect users to external e-commerce platforms

> ⚠️ Note: This is **not a full e-commerce platform**. No payments or cart system is implemented.

---

## 🧱 Tech Stack

### Frontend
- React.js (Vite)
- HTML5, CSS3, JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

### Image Storage
- Firebase Storage

---

## 📁 Project Structure
Chip-Vally-Foods/
│
├── client/ # Frontend (React)
├── server/ # Backend (Node + Express)
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── server.js
│
├── .env # Environment variables (not pushed)
├── .gitignore
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/chip-valley-foods.git
cd chip-valley-foods

2️⃣ Setup Backend
cd server
npm install

Create a .env file:

MONGODB_URI=your_mongodb_connection_string
PORT=5000

Run backend:

npm run dev
3️⃣ Setup Frontend
cd client
npm install
npm run dev
4️⃣ Open in Browser

Frontend:

http://localhost:3000

Backend:

http://localhost:5000
🗄️ Database Design

MongoDB stores:

Product Name

Brand

Category

Description

Image URL (from Firebase)

External Purchase Links

🖼️ Image Handling

Images are stored in Firebase Storage

Only image URLs are saved in MongoDB

This ensures better performance and scalability

🔐 Environment Variables

Make sure to create a .env file in the server directory:

MONGODB_URI=your_mongodb_uri
PORT=5000

⚠️ Do not commit .env file to GitHub

👨‍💻 Team Members

Siddharth – Backend & Integration

Rishi – Frontend Development

(Add other members)

💼 Business Model

Website managed by developers

Client requests updates (products, changes)

Developers handle updates (paid maintenance model)

📌 Features

Product listing

Responsive UI

External redirect system

Scalable backend architecture

Cloud-based database & storage

🚧 Future Enhancements

Admin Panel (internal use)

Search & filter functionality

SEO optimization

Analytics integration

📄 License

This project is developed for Chip Valley. All rights reserved.

🤝 Contribution

This is a private client project. Contributions are limited to the development team.