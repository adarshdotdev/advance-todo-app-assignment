import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const TaskPage = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenicated
  );

  if (!isAuthenticated) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">
          You need to log in to see your tasks.
        </h2>
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto mt-10 p-5 lg:w-2/4 m-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};
export default TaskPage;
