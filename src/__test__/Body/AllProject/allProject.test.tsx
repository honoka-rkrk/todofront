import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RenderResult, renderHook, act } from '@testing-library/react-hooks';
import { createMemoryHistory } from 'history';

import AllProject from '../../../View/Body/AllProject/Component/main';
import AllProjectContainer from '../../../View/Body/AllProject/Container/AllProject/allProject';
//仕様
describe('AllProject', () => {
  it.todo('プラスボタンが表示される');
  it.todo('ダイアログオープンの初期値はfalseになっている');
  it.todo('プロジェクトが一つもなければ何も表示されない');
  it.todo('プラスボタンを押すとダイアログが開く');
});

describe('AllProject', () => {
  const { getByTestId } = render(
    <Router>
      <AllProject />
    </Router>
  );
  const addElement = getByTestId('addButton');
  //テスト内容
  it('プラスボタンが表示される', () => {
    //検証
    expect(addElement).toBeTruthy;
  });
});
