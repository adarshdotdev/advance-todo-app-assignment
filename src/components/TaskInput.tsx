import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";
import { nanoid } from "nanoid";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Button } from "./ui/button";

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
    <div className="flex gap-2">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task..."
        className="w-full"
      />

      <Select onValueChange={setPriority} defaultValue="Medium">
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="High">High</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default TaskInput;
