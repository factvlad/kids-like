import { useDispatch, useSelector } from 'react-redux';
import { taskOperation, taskActiveOperation } from 'redux/task/task-operations';

const PlanningPage = () => {
  const dispatch = useDispatch();

  const storage = useSelector(store => store.auth.user);
  console.log(storage);
  const page = () => {
    const data = {
      title: 'draft',
      reward: '2',
    };
    dispatch(taskOperation(data));
  };
  const activePage = () => {
    const taskId = storage.week.tasks[0]._id;
    const days = storage.week.tasks[0].days;
    const data = {
      tasks: [
        {
          taskId,
          days,
        },
      ],
    };
    dispatch(taskActiveOperation(data));
  };
  return (
    <div>
      <p>Planning page</p>
      <button type="button" onClick={page}>
        Запрос
      </button>

      <button type="button" onClick={activePage}>
        taskActive
      </button>
    </div>
  );
};

export default PlanningPage;
