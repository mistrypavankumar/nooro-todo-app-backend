# 📝 Todo List Backend API

This is the **backend** for the Todo List App built using **Express.js**, **Prisma**, **MySQL**, and **TypeScript**.

It provides RESTful endpoints to manage tasks including creating, reading, updating, and deleting tasks. Prisma is used as the ORM to interact with the MySQL database.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **MySQL**
- **Dotenv**
- **CORS**

---

## 📁 Folder Structure

```
todo-app-backend/
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma
├── src/
│   ├── config/            # Prisma client setup
│   ├── controllers/       # Route handler logic
│   ├── middleware/        # Async error handling middleware
│   ├── routes/            # API routes
│   ├── app.ts             # Express app config
│   └── index.ts           # Server entry point
├── .env                   # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mistrypavankumar/nooro-todo-app-backend.git
cd nooro-todo-app-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your MySQL connection string:

```
DATABASE_URL="mysql://<USER>:<PASSWORD>@localhost:3306/noora_todo_db"
PORT=5000
```

### 4. Set Up Prisma and Database

Run the following commands to apply migrations and generate Prisma client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

(Optional) To visually inspect your data:

```bash
npx prisma studio
```

---

## 🧪 Run the Server

Start the development server:

```bash
npm run dev
```

The server should now be running at `http://localhost:5000`.

---

## 📮 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/tasks`     | Get all tasks       |
| GET    | `/tasks/:id` | Get task by ID      |
| POST   | `/tasks`     | Create a new task   |
| PUT    | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

---

## 🔒 Request Body (for POST and PUT)

```json
{
  "title": "Buy groceries",
  "color": "blue",
  "completed": false
}
```

---

## 📄 License

This project is licensed for educational purposes under the MIT License.

---

## 🤝 Author

**Pavan Kumar Mistry**  
[GitHub](https://github.com/mistrypavankumar) • [LinkedIn](https://linkedin.com/in/pavan-kumar-mistry-5067b21b1)
