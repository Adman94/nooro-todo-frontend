// src/app/tasks/[id]/edit/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import TaskForm from '@/components/TaskForm';
import { Task } from '@/types/task';

export default function EditTask() {
  const router = useRouter();
  const params = useParams();
  const taskId = params.id as string;

  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:3001/tasks/${taskId}`);
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error('Failed to fetch task:', error);
        router.push('/');
      }
    };

    fetchTask();
  }, [taskId, router]);

  const handleSubmit = async (data: { title: string; color: string }) => {
    try {
      await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      router.push('/');
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="bg-[#262626] flex flex-grow flex-col items-center justify-between px-4 py-8">
      <TaskForm 
        initialData={{ 
          title: task.title, 
          color: task.color 
        }}
        onSubmit={handleSubmit}
        onCancel={() => router.push('/')}
      />
    </div>
  );
}