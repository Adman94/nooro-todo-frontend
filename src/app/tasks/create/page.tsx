  // src/app/tasks/create/page.tsx
  'use client';
  
  import { useState } from 'react';
  import { useRouter } from 'next/navigation';
  import TaskForm from '@/components/TaskForm';
  
  export default function CreateTask() {
    const router = useRouter();
  
    const handleSubmit = async (data: { title: string; color: string }) => {
      try {
        await fetch('http://localhost:3001/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        router.push('/');
      } catch (error) {
        console.error('Failed to create task:', error);
      }
    };
  
    return (
      <div className="container flex flex-col items-center justify-center mx-auto px-4 py-8 w-full">
        <TaskForm onSubmit={handleSubmit} onCancel={() => router.push('/')} />
      </div>
    );
  }