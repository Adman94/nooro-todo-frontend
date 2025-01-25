import { Task } from "@/types/task";

// src/components/TaskSummary.tsx
interface TaskSummaryProps {
  tasks: Task[];
}

export default function TaskSummary({ tasks }: TaskSummaryProps) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <>
      <div className="flex flex-row justify-between text-gray-600">
        <div className="flex flex-row">
            <div className="text-[#1E6F9F] font-extrabold pr-2">Tasks</div>
            <div className="w-7 l-6 pl-[9px] text-white font-extrabold rounded-full bg-gray-700">
            {tasks.length}
            </div>
        </div>
        <div>
            <div className="flex flex-row">
            <div className="text-[#5e60ce] font-extrabold pr-2">Completed</div>
           <div className="w-7 l-6 pl-[9px] text-white font-extrabold rounded-full bg-gray-700">
           {completedTasks}
           </div>
        </div>
            </div>
        
      </div>
      <hr className="mt-4 p-5 border-gray-800" />
    </>
  );
}
