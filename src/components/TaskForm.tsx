// src/components/TaskForm.tsx
import { useState } from 'react';
interface TaskFormProps {
    initialData?: { title: string; color: string };
    onSubmit: (data: { title: string; color: string }) => void;
    onCancel: () => void;
  }
  
  export default function TaskForm({ initialData, onSubmit, onCancel }: TaskFormProps) {
    const [title, setTitle] = useState(initialData?.title ?? '');
    const [color, setColor] = useState(initialData?.color ?? 'gray');
  
    const colors = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#007aff', '#5856d6', '#af51de', '#ff2d55', '#a2845e'];
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title, color });
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-6 w-[500px]">
        <div>
          <label className="block text-sm font-medium text-gray-400">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Ex. Brush your teeth"
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border-gray-400 border-2 text-black mt-1 block w-full rounded-md p-2"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-400">Color</label>
          <div className="mt-2 flex space-x-4">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full ${
                  color === c ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
  
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-[#1E6F9F] w-full justify-center flex flex-row text-white px-4 py-2 rounded hover:bg-[#7fb3d5]"
          >
            <div className="font-bold">Add Task</div>
            <div>
              <img className="m-1 pl-1" src="/images/plus.svg" alt="" />
            </div>
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-800 text-white font-extrabold px-4 py-2 rounded hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }