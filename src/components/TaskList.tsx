import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTask } from "../redux/slices/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border p-2 flex justify-between">
          <span>
            {task.title} ({task.priority})
          </span>
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
