import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";
import { nanoid } from "nanoid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask({ id: nanoid(), title: task, priority }));
    setTask("");
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter Task"
        className="border p-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as any)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
