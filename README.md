<p align="center">
  <img src="public/ApplyLogo.jpg" alt="ApplyTrack Logo" width="180">
</p>

<p align="center">
  A modern job application tracking platform that helps job seekers organize,
  track, and manage their job applications in one place.
</p>

---

## 🌐 Live Demo

🔗 [Open the live demo](https://apply-track-ashen.vercel.app/)

---

## 🚀 Features

- 🔐 User Authentication with Clerk
- 📋 Create, Edit and Delete Job Applications
- 📊 Dashboard with Application Statistics
- 🔍 Search Applications
- 🏷️ Application Status Tracking
- 👤 Profile Management
- 📝 Application Details & Notes
- 🔗 Job URL Tracking
- 📱 Fully Responsive Design
- 🌙 Dark and Light Mode
- ⚡ Server Actions for secure data operations
- 🔒 User-specific application data
- 🎨 Clean and modern UI

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Authentication

- Clerk

### Database

- PostgreSQL
- Prisma ORM

### UI & Icons

- Lucide React

### Deployment

- Vercel

### Development

- Git
- GitHub

---

## 🏗️ Architecture

```text
User
 │
 ▼
Next.js Application
 │
 ├── Clerk
 │    └── Authentication
 │
 ├── Server Actions
 │    └── Business Operations
 │
 ├── Prisma
 │    └── Database Access
 │
 └── PostgreSQL
      └── Application Data
```

---


## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/AyaHelal/Apply-Track.git
```

### 2. Go to the project

```bash
cd ApplyTrack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create one local environment file named `.env`:

```env
DATABASE_URL="your-postgresql-connection-string"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"

NEXT_PUBLIC_CLERK_SIGN_IN_URL="/login"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/register"
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/dashboard"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/dashboard"
```

> Keep all local environment variables in `.env`. Never commit this file or expose your secret keys.

### 5. Generate Prisma Client

```bash
npx prisma generate
```

### 6. Run database migrations

```bash
npx prisma migrate dev
```

### 7. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Database

ApplyTrack uses **PostgreSQL** with **Prisma ORM**.

The main database models are:

```text
User
 │
 └── Application[]
```

Each application belongs to an authenticated user, ensuring that users can only access their own application data.

---

## 🔐 Authentication

Authentication is handled by **Clerk**.

The application uses Clerk for:

- Sign Up
- Sign In
- Sign Out
- User Identity
- Profile Image
- User Information

The authenticated Clerk user ID is used to associate application data with the correct user in PostgreSQL.

---

## 📦 Build

Create a production build:

```bash
npm run build
```

---

## 🚀 Deployment

ApplyTrack is deployed using **Vercel**.

The production environment uses:

- Vercel for hosting
- Clerk for authentication
- PostgreSQL for persistent data
- Prisma for database access

---

## 👩‍💻 Author

**Aya Helal**

- LinkedIn: [Aya Helal](https://www.linkedin.com/in/aya-helal-9a10682b0/)