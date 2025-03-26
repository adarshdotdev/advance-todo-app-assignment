import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteTask } from "@/redux/slices/tasksSlice";
import { Button } from "@/components/ui/button";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks added.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
            >
              <span
                className={`font-medium ${
                  task.priority === "High"
                    ? "text-red-500"
                    : task.priority === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {task.title} ({task.priority})
              </span>
              <Button
                variant="destructive"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
