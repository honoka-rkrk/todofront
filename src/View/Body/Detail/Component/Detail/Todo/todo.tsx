import React from 'react';

import { DtData } from '../../../Container/data';
import TodoList from '../../../Container/Detail/Todo/todoList';

type TodoProps = {
  tasks: DtData | null;
  setTasks: React.Dispatch<React.SetStateAction<DtData | null>>;
};

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { tasks, setTasks } = props;

  return <TodoList tasks={tasks} setTasks={setTasks} />;
};

export default Todo;
