// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Task } from "@/types/task";
import TaskCard from "@/components/TaskCard";
import TaskSummary from "@/components/TaskSummary";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3001/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const toggleTask = async (id: number, completed: boolean) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      });
      await fetchTasks();
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    if (!confirm("Are you sure you want to delete this task?")) return;

    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });
      await fetchTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <main className="bg-[#262626] flex-grow w-full mx-auto px-4">
      <div className="w-[60%] mx-auto mb-10">
        <div className="relative z-20 mt-[-20px] flex flex-col justify-between items-center mb-8">
          <button
            onClick={() => router.push("/tasks/create")}
            className="bg-[#1E6F9F] w-full justify-center flex flex-row text-white px-4 py-2 rounded hover:bg-[#7fb3d5]"
          >
            <div className="font-bold">Create Task</div>
            <div>
              <img className="m-1 pl-1" src="/images/plus.svg" alt="" />
            </div>
          </button>
        </div>

        <TaskSummary tasks={tasks} />

        {tasks.length === 0 ? (
          <div className="">
            <img
              className="w-full object-cover -mt-15"
              src="/images/empty.svg"
              alt=""
            />
          </div>
        ) : (
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onClick={() => router.push(`/tasks/${task.id}/edit`)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
