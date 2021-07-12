import React from 'react';

import CompRegisterDialogContent from '../../../Component/Detail/Todo/registerDialogContent';

type RegisterDialogContentProps = {
  setTaskContent: React.Dispatch<React.SetStateAction<string>>;
  taskDeadline: Date;
  setTaskDeadline: React.Dispatch<React.SetStateAction<Date>>;
  taskPriority: number;
  setTaskPriority: React.Dispatch<React.SetStateAction<number>>;
};

const RegisterDialogContent: React.FC<RegisterDialogContentProps> = (
  props: RegisterDialogContentProps
) => {
  const {
    setTaskContent,
    taskDeadline,
    setTaskDeadline,
    taskPriority,
    setTaskPriority
  } = props;

  //タスクの内容が変更されたとき
  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTaskContent(e.target.value);
  };

  //タスクの期限が変更されたとき
  const handleDeadlineChange = (date: Date) => {
    setTaskDeadline(date);
  };

  //スライダーが動かされたとき
  const handleSliderChange = (e: React.ChangeEvent<{}>, newValue: any) => {
    setTaskPriority(newValue);
  };

  //スライダーの横の数値入力欄が変更されたとき
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskPriority(Number(e.target.value));
  };

  //数値入力欄で１～５以外の数値が指定されたとき
  const handleBlur = () => {
    if (taskPriority < 1) {
      setTaskPriority(1);
    } else if (taskPriority > 5) {
      setTaskPriority(5);
    }
  };

  return (
    <>
      <CompRegisterDialogContent
        handleContentChange={handleContentChange}
        taskDeadline={taskDeadline}
        handleDeadlineChange={handleDeadlineChange}
        taskPriority={taskPriority}
        handleSliderChange={handleSliderChange}
        handleInputChange={handleInputChange}
        handleBlur={handleBlur}
      />
    </>
  );
};

export default RegisterDialogContent;
