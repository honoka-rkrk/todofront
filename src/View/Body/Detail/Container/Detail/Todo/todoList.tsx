import React, { useState } from 'react';

import { DtData } from '../../data';
import CompTodoList from '../../../Component/Detail/Todo/todoList';

type TodoListProps = {
  tasks: DtData | null;
  setTasks: React.Dispatch<React.SetStateAction<DtData | null>>;
};
const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { tasks, setTasks } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CompTodoList
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};

export default TodoList;
