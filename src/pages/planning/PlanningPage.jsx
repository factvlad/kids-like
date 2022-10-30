import { useDispatch, useSelector } from 'react-redux';
import {
  taskOperation,
  taskActiveOperation,
  taskSingleActiveOperation,
  taskSwitchOperation,
} from 'redux/task/task-operations';

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
    // const taskId = storage.week.tasks[0]._id;
    // const days = storage.week.tasks[0].days;
    // console.log(taskId);
    // console.log(days);
    const tasks = storage.week.tasks;

    const newArr = tasks.map(item => {
      const newItem = {
        taskId: item._id,
        days: item.days.map(item => {
          const newDays = {
            date: item.date,
            isActive: item.isActive,
            isCompleted: item.isCompleted,
          };
          return newDays;
        }),
      };
      return newItem;
    });

    const data = {
      tasks: newArr,
    };
    // console.log(newArray);

    dispatch(taskActiveOperation(data));
  };
  const singleActiveRequest = () => {
    const taskId = storage.week.tasks[3]._id;
    const days = storage.week.tasks[3].days.map(item => item.isActive);
    // const days = {
    //   days: [true, true, false, true, false, false, false],
    // };
    const data = {
      taskId,
      days: { days },
    };
    console.log(data);
    dispatch(taskSingleActiveOperation(data));
  };
  const switchFunction = () => {
    const taskId = storage.week.tasks[3]._id;
    const date = storage.week.tasks[3].days[3].date;
    console.log(taskId);
    console.log(date);

    const data = {
      taskId,
      date: { date },
    };
    console.log(data);
    dispatch(taskSwitchOperation(data));
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
      <br />
      <button type="button" onClick={singleActiveRequest}>
        SingleActive
      </button>
      <br />
      <button type="button" onClick={switchFunction}>
        Switch
      </button>
    </div>
  );
};

export default PlanningPage;
