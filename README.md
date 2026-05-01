# 🤖 T3 Chat App (AI Multi-Model Chat)

A full-stack AI chat application built using the T3 stack, allowing users to interact with multiple AI models in real-time with a smooth and modern UI.

---

## ✨ Features

* 💬 Real-time AI chat with streaming responses
* 🤖 Support for multiple AI models (30+ models)
* 🔐 Secure authentication system
* 🧠 Chat history persistence
* 🗑️ Create, manage & delete chats
* ⚡ Fast and responsive UI
* 📦 Scalable full-stack architecture

---

## 🧠 How It Works

* Users sign in securely
* Start a new chat session
* Select an AI model
* Messages are streamed in real-time
* Chats are stored and can be revisited anytime

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router - T3 Stack)
* **Frontend:** React.js + Tailwind CSS
* **Backend:** tRPC (end-to-end typesafe APIs)
* **Database:** PostgreSQL + Prisma ORM
* **Authentication:** Better Auth
* **AI Integration:** AI SDK (multi-model support)
* **Deployment:** Vercel

---

## 📁 Project Structure

```bash
/app        → Routes & pages  
/components → UI components  
/modules    → Feature-based logic  
/lib        → Database & utilities  
```

---

## ⚙️ Installation & Setup

```bash
# Clone repo
git clone https://github.com/akshaydeepakpawar/t3-chat

# Go inside folder
cd t3-chat

# Install dependencies
bun install

# Setup env
cp .env.example .env

# Run project
bun run dev
```

---

## 🔑 Environment Variables

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
AI_API_KEY=
```

---

## 🚀 Future Improvements

* 📱 Mobile UI optimization
* 🎙️ Voice-based chat
* 🧩 Plugin/tool integration
* 📊 Usage analytics
* 📎 File upload support

---

## 🙌 Acknowledgements

Inspired by modern AI chat platforms and the T3 ecosystem.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
