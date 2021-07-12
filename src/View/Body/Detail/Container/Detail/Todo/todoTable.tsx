import React, { useState, useEffect } from 'react';
import { deleteApi, getApi, putApi } from '../../../../../../Api/api';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../../../../../Store/rootReducer';
import CompTodoTable from '../../../Component/Detail/Todo/todoTable';
import { DtData, DtItemData } from '../../../Container/data';
import { setDetailInfo } from '../../../../../../Store/selectDetail';

const sortTasks = (arr: DtData, sortBy: number, order: number) => {
  const sortColumn = sortBy === 1 ? 'deadline' : 'priority';
  arr.dtDatas.sort((a: DtItemData, b: DtItemData) =>
    order === 1 ? a[sortColumn] - b[sortColumn] : b[sortColumn] - a[sortColumn]
  );
  return arr.dtDatas;
};

type TodoTableProps = {
  tasks: DtData | null;
  setTasks: React.Dispatch<React.SetStateAction<DtData | null>>;
};
const TodoTable: React.FC<TodoTableProps> = (props: TodoTableProps) => {
  const { tasks, setTasks } = props;
  const [order, setOrder] = useState<number>(1);
  const [orderBy, setOrderBy] = useState<number>(0);
  const detailInfo = useSelector((state: RootState) => state.detail.detailInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (detailInfo) {
      setOrder(detailInfo.order);
      setOrderBy(detailInfo.orderBy);
    }
  }, [detailInfo, tasks]);

  const updOrderType = async (newOrder: number, sortBy: number) => {
    if (detailInfo) {
      const orderApi = await putApi(`/manageapp/project/${detailInfo.id}/`, {
        deadline: detailInfo.deadline,
        name: detailInfo.name,
        isComplete: detailInfo.isComplete,
        memo: detailInfo.memo,
        order: newOrder,
        orderBy: sortBy
      });
      if (orderApi.success) {
        const updData = orderApi.data;
        dispatch(
          setDetailInfo({
            id: updData.id,
            deadline: updData.deadline,
            name: updData.name,
            isComplete: updData.isComplete,
            memo: updData.memo,
            order: updData.order,
            orderBy: updData.orderBy
          })
        );
      } else {
        console.log('error');
      }
    }
  };

  //ソート処理
  const handleSort = (sortBy: number) => (e: React.MouseEvent) => {
    const newOrder: number = orderBy === sortBy ? (order === 1 ? 2 : 1) : 1;
    updOrderType(newOrder, sortBy);
    if (tasks !== null) {
      const hold: DtData = { dtDatas: sortTasks(tasks, sortBy, newOrder) };
      setTasks(hold);
    }
  };

  //チェックボックスの値を反転させる
  const reverseComplete = async (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    if (tasks) {
      const reTasks = tasks.dtDatas[i];
      const isComplete = reTasks.isComplete ? false : true;
      const api = await putApi(`/manageapp/todo/${reTasks.id}/`, {
        todoNo: reTasks.todoNo,
        content: reTasks.content,
        deadline: reTasks.deadline,
        priority: reTasks.priority,
        isComplete: isComplete
      });
      if (api.success && detailInfo) {
        const getTodoApi = await getApi(`/manageapp/todo/?todoNo=${detailInfo.id}`);
        if (getTodoApi.success) {
          setTasks({ dtDatas: getTodoApi.data });
        }
      }
    }
  };

  //日付表示の変換
  const createFormat = (date: number) => {
    const dateString = String(date);
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6);
    const formatDate = year + '/' + month + '/' + day;

    return formatDate;
  };

  //タスクの消去処理
  const handleDelete = async (index: number) => {
    if (tasks) {
      const deleteIdx = tasks.dtDatas[index].id;
      const api = await deleteApi(`/manageapp/todo/${deleteIdx}`);
      if (api.success && detailInfo) {
        console.log('success');
        const api = await getApi(`/manageapp/todo/?todoNo=${detailInfo.id}`);
        if (api.success) {
          setTasks({ dtDatas: api.data });
        }
      }
    }
  };
  return (
    <>
      <CompTodoTable
        tasks={tasks}
        orderBy={orderBy}
        order={order}
        handleSort={handleSort}
        createFormat={createFormat}
        handleDelete={handleDelete}
        reverseComplete={reverseComplete}
      />
    </>
  );
};

export default TodoTable;
