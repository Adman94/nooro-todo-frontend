# Nooro Todo Frontend

## Overview
A scalable frontend service for a todo application built with Next.js 14, TypeScript, Tailwind CSS & React Hooks

## Features
- Create, read, update, and delete tasks
- Task completion tracking
- Persistent data storage

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Setup

1. Clone the repository
```bash
git clone <repository-url>
cd todo-frontend
```

2. Install dependencies
```bash
npm install
```

3. Configure Environment
Create a `.env.local` file in the project root:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Run Development Server
```bash
npm run dev
```

5. Open in Browser
Navigate to `http://localhost:3000`

## Project Structure
```
src/
├── app/
│   ├── page.tsx         # Home/Tasks List Page
│   └── tasks/
│       ├── create/
│       │   └── page.tsx # Create Task Page
│       └── [id]/
│           └── edit/
│               └── page.tsx # Edit Task Page
├── components/
│   ├── TaskCard.tsx
│   ├── TaskForm.tsx
│   └── TaskSummary.tsx
└── types/
    └── task.ts
```

## Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm start`: Run production build

## Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks