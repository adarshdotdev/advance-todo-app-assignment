import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  priority: "High | Medium | Low";
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
