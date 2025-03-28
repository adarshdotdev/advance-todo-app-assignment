import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const laodTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

interface Task {
  id: string;
  title: string;
  priority: "High | Medium | Low";
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: laodTasks(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
