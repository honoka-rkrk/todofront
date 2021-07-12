import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { TableSortLabel } from '@material-ui/core';

import { DtData } from '../../../Container/data';

type TodoTableProps = {
  tasks: DtData | null;
  orderBy: number;
  order: number;
  handleSort: (sortBy: number) => (e: React.MouseEvent) => void;
  createFormat: (date: number) => string;
  handleDelete: (index: number) => Promise<void>;
  reverseComplete: (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => Promise<void>;
};

const TodoTable: React.FC<TodoTableProps> = (props: TodoTableProps) => {
  const {
    tasks = null,
    orderBy = 0,
    order = 1,
    handleSort = () => undefined,
    createFormat = () => '',
    handleDelete = () => undefined,
    reverseComplete = () => undefined
  } = props;

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'></TableCell>
              <TableCell align='center'>タスク</TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 1}
                  direction={order === 1 ? 'desc' : 'asc'}
                  onClick={handleSort(1)}
                >
                  期日
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>
                <TableSortLabel
                  active={orderBy === 2}
                  direction={order === 1 ? 'desc' : 'asc'}
                  onClick={handleSort(2)}
                >
                  優先度
                </TableSortLabel>
              </TableCell>
              <TableCell align='center'>消去</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks && tasks.dtDatas
              ? tasks.dtDatas.map((task, index) => (
                  <TableRow key={`todo_${index}`}>
                    <TableCell padding='checkbox'>
                      <Checkbox
                        color='primary'
                        checked={task.isComplete}
                        onChange={(e) => reverseComplete(e, index)}
                      />
                    </TableCell>
                    <TableCell>{task.content}</TableCell>
                    <TableCell align='center'>
                      {createFormat(task.deadline)}
                    </TableCell>
                    <TableCell align='center'>{task.priority}</TableCell>
                    <TableCell align='center'>
                      <IconButton onClick={() => handleDelete(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodoTable;
