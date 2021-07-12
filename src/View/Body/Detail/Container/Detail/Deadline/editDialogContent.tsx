import React from 'react';

import CompEditDialogContent from '../../../Component/Detail/Deadline/editDialogContent';

type EditDialogContentProps = {
  pjName: string;
  setPjName: React.Dispatch<React.SetStateAction<string>>;
  pjDeadline: Date;
  setPjDeadline: React.Dispatch<React.SetStateAction<Date>>;
};

const EditDialogContent: React.FC<EditDialogContentProps> = (
  props: EditDialogContentProps
) => {
  const { pjName, setPjName, pjDeadline, setPjDeadline } = props;

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
      <CompEditDialogContent
        pjName={pjName}
        pjDeadline={pjDeadline}
        handleNameChange={handleNameChange}
        handleDeadlineChange={handleDeadlineChange}
      />
    </>
  );
};

export default EditDialogContent;
