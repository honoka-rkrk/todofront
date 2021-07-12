import React, { useEffect, useState } from 'react';

import { DtData } from '../../data';
import CompTodo from '../../../Component/Detail/Todo/todo';

type TodoProps = {
  datas: DtData | null;
};

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
  const { datas } = props;
  const [tasks, setTasks] = useState<DtData | null>(null);

  //todoデータ初期値設定（初回のみ)
  useEffect(() => {
    let unmounted = false;
    if (datas !== null && !unmounted && tasks === null) {
      setTasks(datas);
    }
    return () => {
      unmounted = true;
    };
  }, [datas, tasks]);

  return (
    <>
      <CompTodo tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default Todo;
