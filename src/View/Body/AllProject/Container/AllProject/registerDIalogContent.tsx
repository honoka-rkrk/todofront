import React from 'react';

import CompRegisterDialogContent from '../../Component/AllProject/registerDialogContent';

type RegisterDialogContentProps = {
  setPjName: React.Dispatch<React.SetStateAction<string>>;
  pjDeadline: Date;
  setPjDeadline: React.Dispatch<React.SetStateAction<Date>>;
};

const RegisterDialogContent: React.FC<RegisterDialogContentProps> = (
  props: RegisterDialogContentProps
) => {
  const { setPjName, pjDeadline, setPjDeadline } = props;

  //プロジェクト名が変更されたとき
  const handleNameChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPjName(e.target.value);
  };

  //プロジェクトの期限が変更されたとき
  const handleDeadlineChange = (date: Date) => {
    setPjDeadline(date);
  };

  return (
    <>
      <CompRegisterDialogContent
        handleNameChange={handleNameChange}
        pjDeadline={pjDeadline}
        handleDeadlineChange={handleDeadlineChange}
      />
    </>
  );
};

export default RegisterDialogContent;
